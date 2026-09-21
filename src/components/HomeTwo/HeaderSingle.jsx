import React, { useEffect, useState } from 'react';
import LogoWhite from '../../assets/images/logo-wide-white.png';
import StickyLogo from '../../assets/images/logo-2.png';
import StickyLogoDark from '../../assets/images/logo-wide-white.png';
import StickyHeader from '../../lib/StickyMenu.js';
import MenuSingle from '../MenuSingle.jsx';
import MobileMenu from '../MobileMenu.jsx';
import MobileLogo from '../../assets/images/logo-2.png';
import { Link } from 'react-router-dom';

function HeaderSingle({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
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
    const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev);
    const closeSearchPopup = () => setSearchPopupOpen(false);

    return (

        <header id='home' className={`main-header header-style-six ${className || ''}`}>    
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="top-left"> 
                            <ul className="social-icon-one">
                                <li><Link to="/"><i className="icon fab fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-youtube" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-linkedin-in" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-instagram" /></Link></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="list-style-one">
                                <li><i className="fas fa-map-marker-alt" />Richardson, California 62639</li>
                                <li><i className="fas fa-envelope" /><Link to="/" className="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <img src={isDarkMode ? LogoWhite : LogoWhite} alt="Techon" />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <MenuSingle/>
                            </nav>
                        </div>
                        <div className="outer-box">
                            <div className="ui-btn-outer">
                                <Link to="/" className="ui-btn cart-btn">
                                    <i className="lnr-icon-shopping-cart" />
                                    <span className="items-count">0</span>
                                </Link>
                                <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                                    <span className="icon lnr lnr-icon-search" />
                                </button>
                            </div>        
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                        </div>
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
            <div className={`search-popup ${isSearchPopupOpen ? 'show' : ''}`}>
                <span className="search-back-drop" onClick={closeSearchPopup}/>
                <button className="close-search" onClick={closeSearchPopup}>
                    <span className="fa fa-times" />
                </button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/">
                                <img src={isDarkMode ? StickyLogoDark : StickyLogo} alt="Techon" />
                            </Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <MenuSingle />
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

export default HeaderSingle;
