import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const StarsTask = () => {
    let stars = []
    let [active, setActive] = useState(1)
    for (let i = 0; i < 5; i++) {
        stars.push(<FontAwesomeIcon onClick={()=> setActive(i)} key={i} icon={faStar} style={{color: active=== i ? "yellow": "black"}}/>)
    }
    return (
        <div>
            
            {stars}
            
        </div>
    );
};

export default StarsTask;