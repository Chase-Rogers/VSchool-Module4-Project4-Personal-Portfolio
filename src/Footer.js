import React from 'react'
import sourceData from './sourceData.json'
import './Footer.css';


const Header = () => {
    return (
        <footer className='flex'>
            <div className='flex column heavy'>
                <div>Get</div>
                <div>in</div>
                <div>touch.</div> 
                &rarr;
            </div>
            <div className='flex column contacts' >
                <a href={sourceData.contact.github} target='_n'>on GitHub</a>
                <a href={sourceData.contact.linkedin} target='_n'>on LinkedIn</a>
                <a href={sourceData.contact.email}>by Email</a>
            </div>
        </footer>
    )
}

export default Header




