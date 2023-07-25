import React from "react"
const Card = (props) => {
    const { cardStyle, textContainer, textOne, textTwo, eachTextStyle } = props;
    return (
        <div>
            <div className={`${cardStyle}`}>
                <div className={`${textContainer}`} >
                    <div className={`${eachTextStyle}`}> {textOne}
                    {textTwo}</div>
                
                </div>
   
            </div>
        </div>
    )
}
export default Card;