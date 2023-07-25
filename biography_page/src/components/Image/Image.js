import React from "react"

const Img = (props) => {
    const { src, alt, imageStyle } = props;
    return (
        <img className={`${imageStyle}`}  src={src} alt={alt}/>
    )
}
export default Img; 