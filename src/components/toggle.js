import React from 'react';
import ToggleSwitch from './toggleSwitch';
import './toggle.css';

const toggle = () => {
  return (
    <section className='container'>

        <div className='clickToggle' id=''>
            <ToggleSwitch label='notifications'></ToggleSwitch>
            <div className='title'>title</div>         
        </div>

    </section>
  )
}

export default toggle