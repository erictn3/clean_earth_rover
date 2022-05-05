import React from 'react';
import ToggleSwitch from '../toggleSwitch/toggleSwitch';
import './toggle.css';

const toggle = ({title, label, checked, onChange}) => {
  return (
    <section className='container'>

        <div className='clickToggle' id=''>
            <ToggleSwitch label={label} checked={checked} onChange={onChange}></ToggleSwitch>
            <div className='title'>{title}</div>         
        </div>

    </section>
  )
}

export default toggle