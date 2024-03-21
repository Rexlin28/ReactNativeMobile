import React from 'react';
import SVGON from '../../assets/svg/alarmON.svg';
import SVGOFF from '../../assets/svg/alarmOFF.svg';
import SVG from '../../assets/svg/alarm.svg';

function SVGAlarm(obj) {
    if(obj==1){
        return (
            <div>
                <SVGON />
            </div>
        );
    }
    if(obj==0){
        return (
            <div>
                <SVGOFF />
            </div>
        );
    }
    return (
        <div>
            <SVG />
        </div>
    );
}

export default SVGAlarm