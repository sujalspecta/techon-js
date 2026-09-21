import React from 'react';
import {Link} from 'react-router-dom';

const Cta = ({className}) => {
    return (

        <section className={`call-to-action-two pull-down ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box wow fadeInLeft">
                    <div className="title-box text-end">
                        <h3 className="title">Get your free web <br/>consultation</h3>
                    </div>
                    <div className="icon-box text-center">
                        <i className="icon fa fa-comments" />
                    </div>
                    <div className="contact-box">
                        <div className="contact"><Link to="/">+11-666-999-000</Link></div>
                        <h6>needhelp@yourdomain.com</h6>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Cta;
