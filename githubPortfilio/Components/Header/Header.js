import React from 'react'
import './Header.css'
import Link from '../Link/Link'
const Header = ({logo}) => {
    console.log(logo)
  return (
    <>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            {/* <p className='App-description'>Edit <code>src/Page.js</code> and save to reload</p>
            <Link url='https://reactjs.org' title='Learn React' /> */}
            <h1>My Portfolio</h1>
        </header>
    </>
  )
}

export default Header