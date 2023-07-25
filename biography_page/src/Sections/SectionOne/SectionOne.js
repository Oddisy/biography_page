import React from "react";
import "./SectionOne.css";
// import christian from "../../components/assets/cristiano-ronaldo-ballon.webp";
// import Img from "../../components/Image/Image";
import Link from "../../components/Link/Link";
const SectionOne = () => {
  return (
    <div >
      <div className="sectionOne">
        <div className="sectionOne-header">
          <h1>CHRISTIANO RONALDO</h1>
          {/* <figure>
          <Img imageStyle="imageStyle" src={christian} />
            <figcaption>Christiano Ronaldo</figcaption>
            </figure> */}
          <p>
            Cristiano Ronaldo dos Santos Aveiro was born on 5 February 1985 in
            Madeira, Portugal. He plays as a forward for the Saudi{" "}
            <Link
              linkStyle="linkStyle"
              href="https://www.sportskeeda.com/go/saudi-pro-league"
              text="Pro League"
              target="blank"
            />
            club Al-Nassr and the Portugal national team. Commonly known as
            Cristiano Ronaldo or CR7, he is regarded as one of the best players
            of this generation.
          </p>
        </div>
      </div>
      <div className="sectionOne-main">
        <div className="sectionOne-main-child">
          <p>
            He has won the FIFA Ballon d’Or five times, two Ballon D'or's behind
            by his arch-rival Lionel Messi. Known for his pace and physicality,
            Ronaldo plays on the left wing but can play as a striker as well.
            The Portuguese international has scored 827 goals in 1153
            appearances for club and country till date making him arguably one
            of the greatest footballers of all time.
          </p>
          <p>
            At the age of seven, Ronaldo showed a great passion for soccer and
            played for a local team, Andorinha, where his father worked as a kit
            man. At the age of just eight years old, Ronaldo's talent was
            noticed by a former player and scout for Sporting Lisbon, a
            professional soccer team in Portugal. He was offered a trial with
            the club and soon after, was accepted into their youth academy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
