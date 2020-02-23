import React from 'react'
import AgbPdf from '../../assets/img/AGB 2020.pdf'


export default (props) => {

  return (
    <div className ="container"><br/>
    <a href={AgbPdf} download>Klicken sie hier und laden Sie sich unsere AGB's herunter.</a><br/><br/>
    <span>Wenn Sie Fragen bezüglich unseren AGB's haben können Sie uns gerne kontaktieren.</span><br/><br/>
    </div>
    )
}