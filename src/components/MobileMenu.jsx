// MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure correct import for react-router-dom

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>

        <ul className="navigation">
            <li className="current dropdown"><Link to="/">Home</Link>
                <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                    <li className="dropdown"><Link to="/">Blue Layouts <span className="badge-menu">Blue</span></Link>
                        <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                            <li><Link to="/">Home Layout 1</Link></li>
                            <li><Link to="/index-2">Home Layout 2</Link></li>
                            <li><Link to="/index-3">Home Layout 3</Link></li>
                            <li><Link to="/index-4">Home Layout 4</Link></li>
                            <li><Link to="/index-5">Home Layout 5</Link></li>
                        </ul>
                        <div className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(1)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-yellow">Yellow Layouts <span className="badge-menu badge-color-yellow">Yellow</span></Link>
                        <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                            <li><Link to="/index-yellow">Home Layout 1</Link></li>
                            <li><Link to="/index-2-yellow">Home Layout 2</Link></li>
                            <li><Link to="/index-3-yellow">Home Layout 3</Link></li>
                            <li><Link to="/index-4-yellow">Home Layout 4</Link></li>
                            <li><Link to="/index-5-yellow">Home Layout 5</Link></li>
                        </ul>
                        <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(2)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-dark">Dark Layouts <span className="badge-menu badge-color-dark">Dark</span></Link>
                        <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                            <li><Link to="/index-dark">Dark Layouts 1</Link></li>
                            <li><Link to="/index-2-dark">Dark Layouts 2</Link></li>
                            <li><Link to="/index-3-dark">Dark Layouts 3</Link></li>
                            <li><Link to="/index-4-dark">Dark Layouts 4</Link></li>
                            <li><Link to="/index-5-dark">Dark Layouts 5</Link></li>
                        </ul>
                        <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-single">Single Layouts</Link>
                        <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
                            <li><Link to="/index-single">Single Layouts 1</Link></li>
                            <li><Link to="/index-2-single">Single Layouts 2</Link></li>
                            <li><Link to="/index-3-single">Single Layouts 3</Link></li>
                            <li><Link to="/index-4-single">Single Layouts 4</Link></li>
                            <li><Link to="/index-5-single">Single Layouts 5</Link></li>
                        </ul>
                        <div className={isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(4)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/">Header Styles</Link>
                        <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                            <li><Link to="/">Header Styles</Link></li>
                            <li><Link to="/index-2">Header Styles 2</Link></li>
                            <li><Link to="/index-3">Header Styles 3</Link></li>
                            <li><Link to="/index-4">Header Styles 4</Link></li>
                            <li><Link to="/index-5">Header Styles 5</Link></li>
                        </ul>
                        <div className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(5)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown"><Link to="/">Pages</Link>
                <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                    <li><Link to="/page-about">About</Link></li>
                    <li className="dropdown"><Link to="/">Projects</Link>
                        <ul className={isSubActive.key === 6 ? "d-block" : "d-none"}>
                            <li><Link to="/page-projects">Projects Grid</Link></li>
                            <li><Link to="/page-project-details">Projects Details</Link></li>
                        </ul>
                        <div className={isSubActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(6)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/">Team</Link>
                        <ul className={isSubActive.key === 7 ? "d-block" : "d-none"}>
                            <li><Link to="/page-team">Team List</Link></li>
                            <li><Link to="/page-team-details">Team Details</Link></li>
                        </ul>
                        <div className={isSubActive.key === 7 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(7)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li><Link to="/page-faq">Faq</Link></li>
                    <li><Link to="/page-pricing">Pricing</Link></li>
                    <li><Link to="/page-testimonial">Testimonials</Link></li>
                    <li><Link to="/page-404">404</Link></li>
                </ul>
                <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown"><Link to="/">Services</Link>
                <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                    <li><Link to="/page-services">Services Grid</Link></li>
                    <li><Link to="/page-service-details">Services Details</Link></li>
                </ul>
                <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown"><Link to="/">Shop</Link>
                <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                    <li><Link to="/shop-products">Products</Link></li>
                    <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                    <li><Link to="/shop-product-details">Product Details</Link></li>
                    <li><Link to="/shop-cart">Cart</Link></li>
                    <li><Link to="/shop-checkout">Checkout</Link></li>
                </ul>
                <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown"><Link to="/">Blog</Link>
                <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                    <li><Link to="/news-grid">Blog Grid</Link></li>
                    <li><Link to="/news-details">Blog Details</Link></li>
                </ul>
                <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li><Link to="/page-contact">Contact</Link></li>
        </ul>

        </>
    );
};

export default MobileMenu;
