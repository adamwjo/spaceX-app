import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function launchCard({ launchData: { flight_number, mission_name, launch_date_local, launch_success} }) {
    
    return (
        <div className="card border-primary mb-3">
            <div className={classNames({
                'card-header bg-success': launch_success,
                'card-header bg-danger': !launch_success
            })}><h1>{ mission_name }</h1></div>
            <div className="row card-body">
                <div className="col-md-9">
                   <h4 className="card-title">Flight Number: { flight_number }</h4>
                   <p className="card-text"> Launch Date: <Moment format="MMMM Do YYYY, h:mm:ss a">{launch_date_local}</Moment> </p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`}>
                        <button className="btn btn-primary">Mission Details</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
