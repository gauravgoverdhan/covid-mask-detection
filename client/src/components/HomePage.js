import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    return (
        <div className="home-page">
            <div className="jumbotron centered">
                <div className="container">
                    <h1 className="display-3">Covid Mask Detection</h1>
                    <hr />
                    <div className="container-fluid buttons">
                        <Link to="/maskdetection" className="btn btn-light btn-lg" href="/maskdetection" role="button">Detect Masks</Link>
                        <Link to="/adminlogin" className="btn btn-dark btn-lg" href="/adminlogin" role="button">Logs</Link>
                    </div>                    
                </div>
            </div>    
        </div>
    );
};