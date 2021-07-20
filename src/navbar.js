import {FaBars} from 'react-icons/fa'
import {useState} from 'react';
import {links , social} from './data'
const NavBar = () => {
	const [show, setShow] =useState(true)
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
				<a href = {links[0].url} > <h4 style=  {{cursor:'pointer'}} > Mehruddin </h4></a>
				<button  className="toggle-button" onClick = {() => setShow(!show)} > <FaBars/></button>
				</div>
				<div className= 
				{`${show ? 'links-container show-container':'links-container' }  `} >
				<ul className='links'>
				{
					links.map((link)=>{
						const {id, text, url} = link
						return <li key ={id} >
						<a href = {url}>{text}</a>
						</li>
					})
				}
				</ul>

				</div>
				<ul className='social-icons'>
				{
					social.map((social)=>{
						const {id, url ,icon}= social;
						return <li key ={id}>
						<a href ={url}>{icon} </a>
						</li>
					})
				}
				</ul>
			</div>
		</nav>
		)
}
export default NavBar;