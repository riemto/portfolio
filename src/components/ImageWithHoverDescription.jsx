import React from 'react'
import "./ImageWithHoverDescription.css";

function ImageWithHoverDescription({ src, children, href, title }) {
    const Wrapper = href ? 'a' : 'div';
    const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': title } : {};

    return (
        <Wrapper className="img__wrap" {...linkProps}>
            <img className="img__img" src={src} />
            <div className="img__description_layer">
                <div className="img__description">
                    {children}
                </div>
            </div>
        </Wrapper>
    )
}

export default ImageWithHoverDescription
