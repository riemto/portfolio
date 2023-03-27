import React from "react";
import Project from "./Project";
//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import vcc from "../img/vcc.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Project
                title="Virtual Coffee Chat"
                skills={[
                  "VanillaJS",
                  "ExpressJS",
                  "MongoDB",
                  "socket.io",
                  "Bootstrap"
                ]}
                coverImage={vcc}
                images={[stock, stock1]}
                href="https://www.virtual-coffee-chat.com/"
                description={"Icebreaker game that helps remote teams getting to know each other better."}
                kpis={[
                  {
                    name: "registered users",
                    value: 300,
                    prefix: ">"
                  },
                  // {
                  //     name: "from",
                  //     prefix: ">",
                  //     value: 100,
                  //     suffix: "countries"
                  // },
                  // {
                  //     name: "average rating",
                  //     value: 4.7,
                  //     suffix: "★"
                  // },
                  {
                    name: "lines of code",
                    value: 10000,
                    prefix: ">"
                  },
                  {
                    name: "commits",
                    value: 900,
                    prefix: ">"
                  }
                ]}
              />
            </div>

            <div className="col-12">
              <Project
                title="Picture Quest"
                skills={[
                  "JavaScript",
                  "ReactJS",
                  "NextJS",
                  "MaterialUI",
                  "NestJS",
                  "MongoDB",
                ]}
                coverImage={stock5}
                images={[stock2, stock3]}
                description={`Gamified alternative to photo boxes at weddings.
                Get photo missions on your smartphone.
                All guests can see the pictures in a gallery.
                `}
                kpis={[
                  {
                    name: "lines of code",
                    value: 10000,
                    prefix: ">"
                  },
                  {
                    name: "commits",
                    value: 900,
                    prefix: ">"
                  }
                ]}
              />
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
