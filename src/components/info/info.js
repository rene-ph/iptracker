import React from 'react';

import './info.css';

const Info = () => {
    return (<div class="infoWrapper">
                <div class="infoColumn">
                    <p>IP ADDRESS</p>
                    <span>192.1515.515.55</span>
                </div>
                <div class="infoColumn">
                    <p>LOCATION</p>
                    <span>Broklyn</span>
                </div>
                <div class="infoColumn">
                    <p>TIMEZONE</p>
                    <span>UTC</span>
                </div>
                <div class="infoColumn">
                    <p>ISP</p>
                    <span>Telmex</span>
                </div>

            </div>
            )
}

export default Info;