import React from 'react'
import { useTheme } from '../theme-context'
import './Navbar.css'

export default function Navbar() {

    const { theme, toggleTheme } = useTheme();


    return (
        <>
            <div className='mode-switch'>
                <label>
                    <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                    <span className='slider round' ></span>
                </label>
            </div>
        </>


    )
}
