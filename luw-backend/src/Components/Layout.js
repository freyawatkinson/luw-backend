import React from 'react'
import './Layout.css';
import headerLogo from './headerLogo.png';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
    return (
        <>
            <nav className="nav">
                <div className="headerBox">
                

                    {/* <Link to="/"> */}
                        <img className="headerLogo" alt="logo" src={headerLogo} />
                    {/* </Link> */}

                    <div className="hehe">
                        {/* <Link to="/"> */}
                            <p className="homeLink">Home</p>
                        {/* </Link> */}

                        {/* <Link to="/CourseDetails"> */}
                            <p className="courseDetLink">Course detail</p>
                        {/* </Link> */}
{/* 
                        <Link to="/bookingPage"> */}
                            <p className="bookingLink">Booking Consultation</p>
                        {/* </Link> */}

                        {/* <Link to="/aboutUs"> */}
                            <p className="aboutUsLink">About us</p>
                        {/* </Link> */}

                        {/* <Link to="/Login"> */}
                            <p className="accLogo">logo</p>
                        {/* </Link> */}
                    </div>
                </div>
            </nav>


            <main>
                {children}
            </main>

            <footer>
                <div className="footerBox">
                    <p className="name">LevelUp Works</p>
                    <p className="copyRight">2021 - All right reserved</p>
                    <p className="icons">icons will go here</p>

                </div>
            </footer>
        </>
    )
}

export default Layout;