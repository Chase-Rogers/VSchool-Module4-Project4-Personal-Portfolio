import React from 'react'
import sourceData from './sourceData.json'
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='center'>
                <h1 id='animate1' >Hello!<span role='img'>👋🏻</span>
                <br/>
                    <span id='animate2' >My name is {sourceData.profile.name}.</span>
                    <br/>
                    <span id='animate3' >I'm a Software Developer from VSchool living in {sourceData.profile.location}.</span>
                </h1>
            </div>
        </header>
    )
}

export default Header