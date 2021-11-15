import React from 'react';

function Footer() {
    return (
        <>
        <div className="flex-row text-secondary">
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start">
                <a href="https://vimeo.com/" className="e_post text-secondary ml-md-3 my-auto "><i class="fa fa-vimeo" size="lg"></i></a>
                <a href="https://youtube.com/" className="e_post text-secondary ml-md-3 my-auto"><i className="fa fa-youtube-play"></i></a>
            </div>
            <div className="col-md-8 d-flex justify-content-between text-secondary bg-white">    
                <span class="e_post my-auto">hello@getchecked.com</span>
                <span class="e_post my-auto">Copyright 2020</span>
            </div>
        </div>
        </>
    )
}

export default Footer;
