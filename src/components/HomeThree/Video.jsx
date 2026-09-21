import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import VideoBG from '../../assets/images/resource/video-bg1.jpg';

function Video({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>

        <section className={`video-section style-two ${className || ''}`}>
            <div className="icon-lines-2" />
            <div className="auto-container">
                <div className="content-box">
                    <figure className="image"><img src={VideoBG} alt="Image" /></figure>
                    <a onClick={() => setOpen(true)} className="play-btn play-now wow zoomIn"><i className="icon fa fa-play" aria-hidden="true" /><span className="ripple" /></a>
                    <span className="title text-white">Most Trusted Agency</span>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />

        </>
    );
}

export default Video;
