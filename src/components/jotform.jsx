import React from "react";
import imageOverlay from "../img/earth.jpg";

class Jotform extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-12">
                      <div className="title-box-2">
                        <h5 className="title-left">Contact</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          If you have a job in mind where you think I could be a good fit, then please fill out this short form.
                          I will review the job description and then come back to you.
                        </p>
                      </div>
                      <div>
                        <a
                          className="button button-a button-big button-rouded"
                          href={`javascript:void(
                            window.open(
          'https://form.jotform.com/230794379013358',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    `}>
                          Send me a job description
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jotform;
