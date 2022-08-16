import React, { useEffect } from 'react'
import './index.css'

const Hamburger = () => {

    const handleMenu = (e) => {
         if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
            document.querySelector('.hamburger').classList.toggle('is-active')
            document.querySelector('.menu').classList.toggle('is-active')
            console.log('click')
        }

        if (e.target.matches('.navigator ul li a') || e.target.matches('.navigator ul li a .navlink-div')) {
            document.querySelector('.hamburger').classList.remove('is-active')
            document.querySelector('.menu').classList.remove('is-active')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleMenu)

        return () => {
            document.removeEventListener('click', handleMenu)
        }
    }, [])


    return (
        <button className="hamburger hamburger--collapse" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger