import React from 'react'
import "./ImageWithHoverDescription.css";

function ImageWithHoverDescription({ src, children }) {
    return (
        <div class="img__wrap">
            <img class="img__img" src={src} />
            <div class="img__description_layer">
                <div class="img__description">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ImageWithHoverDescription