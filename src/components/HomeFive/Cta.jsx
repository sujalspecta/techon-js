import React from 'react';
import {Link} from 'react-router-dom';
import CtaBG from '../../assets/images/background/bg6.jpg';


function Cta({ className }) {
    return (
        <>

        <section className={`call-to-action-three ${className || ''}`}>
            <div className="bg bg-image" style={{ backgroundImage: `url(${CtaBG})`}} />
            <div className="icon-lines-25" />
            <div className="auto-container">
                <div className="row">
                    <div className="sec-title light col-lg-8 wow fadeInUp">
                        <h1 className="mb-50">High quality products and services that we stand behind</h1>
                        <Link to="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discove More</span></Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Cta;
