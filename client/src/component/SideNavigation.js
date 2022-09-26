import React from 'react'
import "./SideNavigation.css"
import { Link, Outlet } from 'react-router-dom'

export const SideNavigation = () => {
    return (
        <>
            <div className="navbox">

                <Link to="/addlist" className='nav-link'>
                    <div className="flex">
                        <h4>Add List</h4>
                        <h5>{`>`}</h5>
                    </div>
                </Link>

                <div className="flexA">
                    <h4>View List</h4>
                    <h5>{`>`}</h5>
                </div>

                <div className="flexA">
                    <h4>Check Grade</h4>
                    <h5>{`>`}</h5>
                </div>

                <div className="flexA">
                    <h4>Filter</h4>
                    <h5>{`>`}</h5>
                </div>
            </div>
        </>
    )
}
