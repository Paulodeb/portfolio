import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form >
            <label>Your Name</label>
            <input type='text' placeholder='Your Name'></input>
            <label>Email</label>
            <input type='text' placeholder='Your Name'></input>
            <label>Subject</label>
            <input type='text' placeholder='Your Name'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Type Your Message Here'/>
            <button className='btn'>Send</button>
        </form>
    </div>
  )
}

export default Form