import React from 'react'
import Skills from "./Skills";
import ImageWithHoverDescription from "./ImageWithHoverDescription"
import "./Project.css";

function Project({ title, skills, coverImage, images, href }) {
    return (
        <div className="Project-work-box">
            <a href={images[0] || "#"} data-lightbox="gallery-vmarine">
                <ImageWithHoverDescription src={coverImage}>
                    <p> > 10000 lines of code</p>
                </ImageWithHoverDescription>

                <div className="Project-work-content">
                    <div className="row">
                        <div className="col-sm-10">
                            <h2 className="Project-w-title"><a href={href}>{title}</a></h2>
                            <div className="Project-w-more">
                                <span className="Project-w-ctegory">
                                    <Skills skills={skills} />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="Project-w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a >
            {
                images.map((image, index) => {
                    if (index == 0) {
                        return;
                    } else {
                        return (
                            <a
                                href={image}
                                data-lightbox="gallery-vmarine"
                                style={{ display: "none" }}
                            >
                                jsx-a11y/anchor-has-content warning
                            </a>
                        )
                    }
                })
            }
        </div >
    )
}

export default Project