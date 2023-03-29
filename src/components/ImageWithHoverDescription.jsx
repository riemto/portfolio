import React from 'react'
import "./ImageWithHoverDescription.css";

function ImageWithHoverDescription({ src, children }) {
    return (
        <div className="img__wrap">
            <img className="img__img" src={src} />
            <div className="img__description_layer">
                <div className="img__description">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ImageWithHoverDescription