import React from 'react'
import Skills from "./Skills";
import ImageWithHoverDescription from "./ImageWithHoverDescription"
import MiniDashboard from './MiniDashboard';
import "./Project.css";

function Project({ title, description, skills, coverImage, images, href, kpis }) {
    const lightboxName = `gallery-${title}`;
    return (
        <div className="Project-work-box" key={title}>
            <a href={images[0] || "#"} data-lightbox={lightboxName}>
                <ImageWithHoverDescription src={coverImage}>
                    <MiniDashboard kpis={kpis}
                        color="#f5cf55"
                    />
                </ImageWithHoverDescription>

                <div className="Project-work-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="Project-w-title">{title}</h2>
                            {description && <p className="Project-w-description">{description}</p>}
                            <div className="Project-w-more">
                                <span className="Project-w-ctegory">
                                    <Skills skills={skills} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a >
            <div className="Project-work-content Project-footer">
                {href
                    ? <a href={href} target="_blank"><i className="fa fa-chevron-right"></i> Go to app</a>
                    : <span>App still in development. Not public yet.</span>
                }

            </div>
            {
                images.map((image, index) => {
                    if (index == 0) {
                        return;
                    } else {
                        return (
                            <a
                                href={image}
                                data-lightbox={lightboxName}
                                style={{ display: "none" }}
                                key={`image-${title}-${index}`}
                            >
                                jsx - a11y / anchor - has - content warning
                            </a>
                        )
                    }
                })
            }
        </div >
    )
}

export default Project