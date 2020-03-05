# Den Kram hier ausführen (einzeln und so) im Verzeichnis in dem das DockerFile ist.
# Vorher docker installieren (;
# In der default.json den connection string ändern zu: mongodb://192.168.20.172:27017/shopdb
# todo: default JSON auswechseln über das dockerfile (dann passen die ip adressen) 
# todo: dockerfile aufräumen (das npm command ist standard, funktioniert zwar aber man könnte auch neu builden. Außerdem nur die wichtigen files mitnehmen)

# dev:
# baut das docker image für dev neu (der source krempel der app, siehe dockerfile)
docker build -t echtlermobileprod260220 .
# startet den devserver im container
docker run --name echtlermobileprod260220_2 -p 49160:3001 echtlermobileprod260220_2
# prod:
# baut das docker image für die prod environment
docker build -f Dockerfile-Prod -t echtlermobileprod .
# speichert das docker image zum deployen weg
docker save -o echtlermobileprod260220_2 echtlermobileprod260220_2
# startet das docker image auf der lokalen Kiste
docker run --name echtlermobileprod -p 49160:80 echtlermobileprod