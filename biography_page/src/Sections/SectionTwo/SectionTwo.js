import React from "react";
import Card from "../../components/Card/Card";
import "./SectionTwo.css";
import Link from "../../components/Link/Link";

const SectionTwo = () => {
  return (
    <div className="cardContainer">
      <Card
        eachTextStyle="textOneStyle"
        textOne="Ronaldo is devoted to fitness. His day starts with intense cardio and strength training"
        cardStyle="card cardOne"
        textTwo={
          <Link
            href="https://jackedgorilla.com/cristiano-ronaldo-workout-routine/"
            text="Read More"
                target="blank"
                linkStyle="linkStyleOne"
            />
           
        }
      />
          <Card cardStyle="card cardTwo"
              eachTextStyle="textTwoStyle"
          textOne=" Fifa best player 2021 ronaldo"
              textTwo={<Link
                  href=" https://www.manchestereveningnews.co.uk/sport/football/football-news/fifa-best-player-2021-ronaldo-22238706"
                  text="Read More"
                  target="blank"
                   linkStyle="linkStyleTwo"
              />}
          />
          <Card eachTextStyle="textOneStyle"
              textOne="Champions League Top Goalscorer"
              cardStyle="card cardThree"
              textTwo={
                  <Link
                      href="https://www.uefa.com/uefachampionsleague/news/0257-0e910cf2494a-5185150de9d4-1000--champions-league-all-time-top-scorers-cristiano-ronaldo-lion/"
                      text="Read More"
                      target="blank"
                      linkStyle="linkStyleOne"
                  />}/>
          <Card cardStyle="card cardFour"
                 eachTextStyle="textOneStyle"
          textOne="Premier League Golden Boot"
              textTwo={<Link
                  href="https://en.wikipedia.org/wiki/Premier_League_Golden_Boot"
                  text="Read More"
                  target="blank"
                   linkStyle="linkStyleTwo"
              />}
          />
    </div>  );
};
export default SectionTwo;
