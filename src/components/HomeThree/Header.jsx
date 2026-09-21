import React, { useEffect, useState } from 'react';
import LogoWhite from '../../assets/images/logo-wide-white.png';
import LogoDark from '../../assets/images/logo-2.png';
import StickyLogoWhite from '../../assets/images/logo-wide-white.png';
import StickyLogoDark from '../../assets/images/logo-2.png';
import StickyHeader from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';
import MobileLogo from '../../assets/images/logo-2.png';
import { Link } from 'react-router-dom';

function Header({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        StickyHeader();

        const checkDarkMode = () => {
            const bodyHasDarkMode = document.body.classList.contains('dark-mode');
            setDarkMode(bodyHasDarkMode);
        };

        // Run the check initially in case 'dark-mode' is already set
        checkDarkMode();

        // Observe body class changes to detect dark mode toggling
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (

        <header className={`main-header header-style-three ${className || ''}`}>
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img src={isDarkMode ? LogoDark : LogoWhite} alt="Techon" />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-outer">    
                        <nav className="nav main-menu">
                            <Navigation/>
                        </nav>
                    </div>
                    <div className="outer-box">
                        <Link to="/" className="info-btn">
                            <i className="icon fa-light fa-phone-arrow-up-right" />
                            + 92 (8800) - 9850
                        </Link>
                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars text-white" /></div>
                    </div>
                </div>
            </div>   
            
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu}/>
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/">
                                <img src={MobileLogo} alt="Techon" />
                            </Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}><i className="icon fa fa-times" /></div>
                    </div>
                    <ul className="navigation clearfix">
                        <MobileMenu/>
                    </ul>
                    <ul className="contact-list-one">
                        <li> 
                            <i className="icon lnr-icon-phone-handset" />
                            <span className="title">Call Now</span>
                            <div className="text"><Link to="/">+92 (8800) - 98670</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-envelope1" />
                            <span className="title">Send Email</span>
                            <div className="text"><Link to="/">help@company.com</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-map-marker" />
                            <span className="title">Address</span>
                            <div className="text">66 Broklyant, New York India 3269</div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/">
                                <img src={isDarkMode ? StickyLogoWhite : StickyLogoDark} alt="Techon" />
                            </Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
