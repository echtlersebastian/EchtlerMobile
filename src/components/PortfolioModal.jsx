import React from 'react'

import '../assets/css/agency.css';

export default () => {
return(

    <div className="portfolio-modal modal fade show" id="portfolioModal1" tabindex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                    <div className="lr">
                        <div className="rl"></div>
                    </div>
                </div>
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
            </div>
        </div>
    </div>
  )
  }