import React from 'react'
import sourceData from './sourceData.json'
import './Main.css';
// import {Link} from 'react-router-dom'

const Main = () => {

    const projects = sourceData.projects.map((project, index)=>{
        return (
            <div key={index} className='flex wrap'>
                <div className='sticky wide'>
                    <h2>{project.title}</h2>
                    <h3><a href={project.live}>check it out</a></h3>
                    <img src={project.git} alt=''/>
                </div>
                <div className='projects'>
                    <p>{project.opener}</p>
                    <img className='projectImg' src={project.img} alt=''/>
                    <p>{project.closer}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <h1 id='point' >Stuff I've done. <br/> &darr;</h1>
            {projects}
        </section>

    )
}

export default Main;