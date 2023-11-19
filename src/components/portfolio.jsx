import React from "react";
import Project from "./Project";
import projects from "../projects";
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
                  Here is a short project overview I have been working on in since 2020.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map(project => (
              <div className="col-12" key={project.title}>
                <div className="line-mf"></div>
                <Project
                  {...project}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
