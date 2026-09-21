import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBG from '../assets/images/background/page-title.jpg'; 

function PageTitle({ className, title, breadcrumb = [] }) {
    return (
        <>

            <section className={`page-title ${className || ''}`} style={{ backgroundImage: `url(${PageTitleBG})` }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">{title}</h1>
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((value, index) => (
                            <li key={index}>
                                <Link to={value.link}>{value.title}</Link>
                            </li>
                            ))}
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageTitle;
