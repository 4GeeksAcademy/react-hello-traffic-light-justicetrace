import React, {useState} from 'react';


const Trafficlight = () => {
    const [redLightOn, setRedLightOn] = useState(false);
    const [yellowLightOn, setYellowLightOn] = useState(false);
    const [greenLightOn, setGreenLightOn] = useState(false);
    const [restart, setRestart] = useState(undefined);


    return (
        <div className="traffic-body d-flex flex-column align-items-center bg-dark">

            <div className={`light ${redLightOn === true ? 'glow bg-danger' : 'bg-secondary'}`}
            onClick={(event) => {
                 setRedLightOn(!redLightOn);
            }}>
                stop
            </div>

            <div className={`light ${yellowLightOn === true ? 'glow bg-warning' : 'bg-secondary'}`}
            onClick={(event) => {
                setYellowLightOn(!yellowLightOn);
            }}>  
            slow
            </div>

            <div className={`light ${greenLightOn === true ? 'glow bg-success' : 'bg-secondary'}`}
            onClick={(event) => {
                setGreenLightOn(!greenLightOn);
            }}>
                go
            </div>
            <button className={`btn btn-success m-2`} onClick ={(event) => {
                setRedLightOn(null)
                setGreenLightOn(null)
                setYellowLightOn(null)
            }}>Restart</button>
        </div>
    );
};

export {Trafficlight};