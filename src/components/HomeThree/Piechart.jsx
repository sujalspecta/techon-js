import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Piechart({ className }) {

    return (
        <>

        <section className={`pie-chart-section pt-60 pb-120 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="graph-box pe-lg-5 me-lg-3 d-md-flex align-items-center justify-content-md-between wow fadeInRight">
                            <div className="pie-graph d-sm-flex align-items-center text-center text-sm-start mb-4 mb-md-0">
                                <div className="graph-outer" style={{ width: 110, height: 110 }}>
                                <CircularProgressbar
                                    value={90}
                                    text={`${90}%`}
                                    styles={buildStyles({
                                    pathColor: 'var(--theme-color1)',
                                    trailColor: '#f9f9f9',
                                    textColor: '#000',
                                    })}
                                />
                                </div>
                                <h5 className="title mt-0 ms-4">
                                Projects <br />Completed
                                </h5>
                            </div>
                            <div className="pie-graph d-sm-flex align-items-center text-center text-sm-start">
                                <div className="graph-outer" style={{ width: 110, height: 110 }}>
                                <CircularProgressbar
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                    pathColor: 'var(--theme-color1)',
                                    trailColor: '#f9f9f9',
                                    textColor: '#000',
                                    })}
                                />
                                </div>
                                <h5 className="title mt-0 ms-4">
                                Clients <br />Satisfied
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Piechart;
