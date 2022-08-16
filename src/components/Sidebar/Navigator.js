import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import './Sidebar.css'

const Navigator = () => {
    return (
        <div className='navigator'>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''}
                    to='/' >
                    <div className='navlink-div' >
                        <OverviewIcon className='navlink-icon'></OverviewIcon>Overview</div>
                </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : '' } to='/transactions'>
                    <div className='navlink-div'>
                        <EditIcon className='navlink-icon'></EditIcon>Transactions
                    </div>
                </NavLink></li>
                {
                    /*
                    <li><a href="#">
                    <div className='navlink-div'>
                        <SettingsIcon className='navlink-icon'></SettingsIcon>Settings
                    </div>
                </a></li>*/ 
                }
               
            </ul>            
        </div>
    )
}

export default Navigator