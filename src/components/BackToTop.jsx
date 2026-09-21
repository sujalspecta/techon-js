import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom.js';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.scroll-to-top');
    });
    return (
        <>
            <div className={`scroll-to-top scroll-to-target ${className || ''}`}>
                <Link to="#">
                    <i className="fa fa-angle-up" />
                </Link>
            </div>
        </>
    );
}

export default BackToTop;
