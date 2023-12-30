import React from "react";

function Footer()
{
    return(
    <React.Fragment>
        <footer id="footerbg" className="p-4">
            <section className="d-flex justify-contact-center justify-content-lg-between">
                <div className="me-5 d-none d-lg-block">
                    <span></span>
                </div>
            </section>
            <div className="container p-4"></div>
             <div className="row">
             <div className="col-sm-4">
                <h5>About</h5>
                <p>This is the footer section</p>
             </div>
             <div className="col-sm-2">
                <h5>Navigation</h5>
                <p><a href=" ">Home</a></p>
                <p><a href=" ">Contact us</a></p>
                <p><a href =" ">Help</a></p>
             </div>
            </div>
             
        </footer>
    </React.Fragment>
    );
}
export default Footer;