import React from "react";
import sourceData from "./sourceData.json";
import "./Main.css";

const Main = () => {
    const projects = sourceData.projects.map((project, index) => {
        return (
            <div key={index} className="flex wrap">
                <div className="sticky wide">
                    <h2>{project.title}</h2>
                    <h3>
                        <a href={project.live} target="_n">
                            check out the live site
                        </a>
                    </h3>
                    <a href={project.gitLink} target="_n">
                        <img src={project.git} alt="" />
                    </a>
                </div>
                <div className="projects">
                    <p>{project.opener}</p>
                    <img className="projectImg" src={project.img} alt="" />
                    <p>{project.closer}</p>
                </div>
            </div>
        );
    });

    return (
        <section>
            <h1 id="point">
                Stuff I've done. <br /> &darr;
            </h1>
            {projects}
        </section>
    );
};

export default Main;
