import React from 'react'
import Skills from "./Skills";

function Project({ title, skills, coverImage, images, href }) {
    return (
        <div className="work-box">
            <a href={images[0] || "#"} data-lightbox="gallery-vmarine">
                <div className="work-img">
                    <img src={coverImage} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                    <div className="row">
                        <div className="col-sm-10">
                            <h2 className="w-title"><a href={href}>{title}</a></h2>
                            <div className="w-more">
                                <span className="w-ctegory">
                                    <Skills skills={skills} />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            {images.map((image, index) => {
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
            })}
        </div>
    )
}

export default Project