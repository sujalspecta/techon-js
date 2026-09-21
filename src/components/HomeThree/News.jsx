import React from 'react';
import { Link } from 'react-router-dom';
import News1 from '../../assets/images/resource/news1-1.jpg';
import News2 from '../../assets/images/resource/news1-2.jpg';
import News3 from '../../assets/images/resource/news1-3.jpg';


function News({ className }) {
    return (
        <>

        <section id='news' className={`news-section ${className || ''}`}>
            <div className="icon-lines-20" />
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our News Updates</span>
                    <h2 className="scrub-each-word text-split">Latest blog updates</h2>
                </div>
                <div className="row">
                    <div className="news-block col-xl-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={News1} alt="Image" />
                                        <img src={News1} alt="Image" />
                                    </Link>
                                </figure>
                                <div className="date">30 Mar, 2024</div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="fa fa-tag" />Development</li>
                                    <li><i className="fa fa-comments" />2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Your Business Safe Ensure High Availability</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={News2} alt="Image" />
                                        <img src={News2} alt="Image" />
                                    </Link>
                                </figure>
                                <div className="date">30 Mar, 2024</div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="fa fa-tag" />Strategy</li>
                                    <li><i className="fa fa-comments" />2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Data Backup and Recovery Best Practices Small</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={News3} alt="Image" />
                                        <img src={News3} alt="Image" />
                                    </Link>
                                </figure>
                                <div className="date">30 Mar, 2024</div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="fa fa-tag" />Strategy</li>
                                    <li><i className="fa fa-comments" />2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Make a Marketing Strategy for your Small Business</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default News;
