import React from "react"

const Link = (props) => {
    const {Img, href, target, text, linkStyle} = props
    return (
        <div>
            <a className={linkStyle} href={href} target={target}>{ text }</a>
        </div>
    )
}
export default Link;