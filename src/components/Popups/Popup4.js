import React from 'react';
import returnButton from './returnButton.svg';

function BoutonPrevention(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <button className='close-btn' onClick={() => props.setTrigger(false)}>
          <img src={returnButton} alt="retour"/>
      </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default BoutonPrevention;