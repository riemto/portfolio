import React from 'react'
import Skills from "./Skills";
import ImageWithHoverDescription from "./ImageWithHoverDescription"
import MiniDashboard from './MiniDashboard';
import "./Project.css";

function Project({ title, description, skills, coverImage, images, href, kpis, demoDescription }) {
    const lightboxName = `gallery-${title}`;

    function ProjectFooter({ href, demoDescription }) {
        if (!href) {
            return (
                <span>App still in development. Not public yet.</span>
            )
        }
        if (demoDescription) {
            return (
                <div>
                    <h5>Demo</h5>
                    <div>{demoDescription}</div>
                    <a href={href} target="_blank"><i className="fa fa-chevron-right"></i> Go to demo</a>
                </div>
            )
        } else {
            return (
                <a href={href} target="_blank">< i className="fa fa-chevron-right"></i> Go to app</a >
            )
        }
    }

    return (
        <div className="Project-work-box" key={title}>
            <h3 className="Project-title">{title}</h3>

            <a href={images[0] || "#"} data-lightbox={lightboxName}>
                <ImageWithHoverDescription src={coverImage}>
                    <MiniDashboard kpis={kpis}
                        color="#f5cf55"
                    />
                </ImageWithHoverDescription>

                <div className="Project-work-content">
                    <div className="row">
                        <div className="col-sm-12">
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
                <ProjectFooter demoDescription={demoDescription} href={href} />
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