import React, { useState } from 'react';
import VideoBG from '../../assets/images/resource/video-bg1.jpg';

function Video({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section style-two ${className || ''}`}>
                <div className="icon-lines-2" />

                <div className="auto-container">
                    <div className="content-box">
                        <figure className="image">
                            <img src={VideoBG} alt="Video thumbnail" />
                        </figure>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="play-btn play-now wow zoomIn"
                            aria-label="Play video"
                        >
                            <i
                                className="icon fa fa-play"
                                aria-hidden="true"
                            />
                            <span className="ripple" />
                        </button>

                        <span className="title text-white">
                            Most Trusted Agency
                        </span>
                    </div>
                </div>
            </section>

            {isOpen && (
                <div
                    className="video-modal"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="video-modal-close"
                            onClick={() => setOpen(false)}
                            aria-label="Close video"
                        >
                            ×
                        </button>

                        <iframe
                            src="https://www.youtube.com/embed/Fvae8nxzVz4?autoplay=1"
                            title="Most Trusted Agency"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Video;