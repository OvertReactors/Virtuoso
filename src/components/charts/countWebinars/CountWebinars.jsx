import React from 'react';

const CountWebinars = (props) => {
    return ( 
        <div className={props.chart}>
            <h2 className={props.chartHeader}>Total Webinars</h2>
            <div className={props.totalWeb}>
                <p className={props.webinars}>278</p>
            </div>
        </div>
     );
}

export default CountWebinars;