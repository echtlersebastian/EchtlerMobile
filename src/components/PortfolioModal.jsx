import React from 'react'

import '../assets/css/agency.css';

export default () => {
return(
    

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt=""/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul>
                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                    <i className="fas fa-times"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
   
  )
  }