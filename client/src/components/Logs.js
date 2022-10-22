import React from "react";

export default function Logs(props) {

    return (
        <div className="logs">
            <div className="jumbotron centered mdh">
                <div className="container">
                    <h1 className="display-5">Logs</h1>
                    <hr />
                    <h3 className="success">27-04-2022 19:30:18 - Mask worn</h3>
                    <h3 className="fail">12-04-2022 12:32:32 - Mask not worn</h3>
                    <h3 className="fail">15-03-2022 09:30:24 - Mask not worn</h3>
                    <h3 className="success">12-03-2022 22:17:56 - Mask worn</h3>
                </div>
            </div>
        </div>
    )
}