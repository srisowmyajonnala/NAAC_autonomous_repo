import React, { useState } from 'react';
import './S1.css';

// promotion of research and facilities
function Student1() {
// state variables
  const [values1t1, setValues1t1] = useState('');
  const [values1t2, setValues1t2] = useState('');
  const [values1t3, setValues1t3] = useState('');
  const [values1t10, setValues1t10] = useState('');
  // sending data to db
  // const inputDataList = {
  //    inputs11t1: values11t1,
  //    inputs12t1: values12t1,
  //    inputs13t1: values13t1,
  //    inputs10t1: values10t1,
  // };

  // rendering DOM
  return (
    <div className='s1-main-conatiner'>
      <div className="s1-formHeading-container">
        <h1 className="s1-formHeading-style">
         Laptop Availability Survey
        </h1>
        <p className="s1-formDescription-style">All the Staff/Students should fill this form for survey on Laptop facility available by an individual.</p>
        <p style={{ color: 'red' }}>*Required</p>
      </div>
      <div className="s1-card-container">
        <label htmlFor="s1-t1" className="s1-label-style">Email<span className="s1-span-style">*</span>
        </label>
        <input
          placeholder="Your Email address"
          onChange={(e) => {
            setValues1t1(e.target.value);
          }}
          value={values1t1}
          className="s1-input-style"
          id="s1-t1"/>
      </div>

      <div className="s1-card-container">
        <label htmlFor="s1-t2" className="s1-label-style">Employee ID / Student Roll No<span className="s1-span-style">*</span> </label>
        <input
          placeholder="Your Answer"
          onChange={(e) => {
            setValues1t2(e.target.value);
          }}
          value={values1t2}
          className="s1-input-style"
          id="s1-t2"/>
      </div>

      <div className="s1-card-container">
        <label htmlFor="s1-t3" className="s1-label-style">Name of the Staff / Student
          <span className="s1-span-style">*</span> </label>
        <input
          placeholder="Your Answer"
          onChange={(e) => {
            setValues1t3(e.target.value);
          }}
          value={values1t3}
          className="s1-input-style"
          id="s1-t3"/>
      </div>

      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>Department<span className="s1-span-style">*</span></h1>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t41" type="radio" name="dept" value="CIVIL"/>
            <label htmlFor='s1-t41'>CIVIL</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t42" type="radio" name="dept" value="MECH"/>
            <label htmlFor='s1-t42'>MECH</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t43" type="radio" name="dept" value="ECE"/>
            <label htmlFor='s1-t43'>ECE</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t44" type="radio" name="dept" value="CSE"/>
            <label htmlFor='s1-t44'>CSE</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t45" type="radio" name="dept" value="IT"/>
            <label htmlFor='s1-t45'>IT</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t46" type="radio" name="dept" value="H&S"/>
            <label htmlFor='s1-t46'>H&S</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t47" type="radio" name="dept" value="MBA"/>
            <label htmlFor='s1-t47'>MBA</label>
          </div>
        </form>
      </div>

      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>Whether Laptop is available?<span className="s1-span-style">*</span></h1>
        <p>If yes,choose whether it is own or borrowed other wise Not available</p>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t5" type="radio" name="dept" value="OWN"/>
            <label htmlFor='s1-t5'>OWN</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t52" type="radio" name="dept" value="BORROWED"/>
            <label htmlFor='s1-t52'>BORROWED</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t53" type="radio" name="dept" value="Not Available"/>
            <label htmlFor='s1-t53'>Not Available</label>
          </div>
        </form>
      </div>

      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>Model</h1>
        <p>Choose the below laptop model available with you</p>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t61" type="radio" name="dept" value="APPLE"/>
            <label htmlFor='s1-t61'>APPLE</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t62" type="radio" name="dept" value="DELL"/>
            <label htmlFor='s1-t62'>DELL</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t63" type="radio" name="dept" value="HP"/>
            <label htmlFor='s1-t63'>HP</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t64" type="radio" name="dept" value="LENOVO"/>
            <label htmlFor='s1-t64'>LENOVO</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t65" type="radio" name="dept" value="SAMSUNG"/>
            <label htmlFor='s1-t65'>SAMSUNG</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t66" type="radio" name="dept" value="OTHERS"/>
            <label htmlFor='s1-t66'>OTHERS</label>
          </div>

        </form>
      </div>
      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>RAM SIZE</h1>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t71" type="radio" name="dept" value="Less than 2 GB"/>
            <label htmlFor='s1-t71'>Less than 2 GB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t72" type="radio" name="dept" value="2 GB"/>
            <label htmlFor='s1-t72'>2 GB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t73" type="radio" name="dept" value="2 TB"/>
            <label htmlFor='s1-t73'>2 TB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t74" type="radio" name="dept" value="More than 2 TB"/>
            <label htmlFor='s1-t74'>More than 2 TB</label>
          </div>
        </form>
      </div>

      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>Type of Internet facility available</h1>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t81" type="radio" name="dept" value="Donggle"/>
            <label htmlFor='s1-t81'>Donggle</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t82" type="radio" name="dept" value="Wifi"/>
            <label htmlFor='s1-t82'>Wifi</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t83" type="radio" name="dept" value="Broadband"/>
            <label htmlFor='s1-t83'>Broadband</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t84" type="radio" name="dept" value="Not available"/>
            <label htmlFor='s1-t84'>Not available</label>
          </div>
        </form>
      </div>

      <div className="s1-card-container">

        <h1 className='s1-radioHeading-style'>HDD CAPACITY</h1>
        <form>
          <div className='s1-eachRadio-container'>
            <input id="s1-t91" type="radio" name="dept" value="Less than 500 GB"/>
            <label htmlFor='s1-t91'>Less than 500 GB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t92" type="radio" name="dept" value="1 TB"/>
            <label htmlFor='s1-t92'>1 TB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t93" type="radio" name="dept" value="4 GB"/>
            <label htmlFor='s1-t93'>4 GB</label>
          </div>
          <div className='s1-eachRadio-container'>
            <input id="s1-t94" type="radio" name="dept" value="More than 4 GB"/>
            <label htmlFor='s1-t94'>More than 4 GB</label>
          </div>
        </form>
      </div>

      <div className="s1-card-container">
        <label htmlFor="s1-t10" className="s1-label-style">Remarks </label>
        <input
          placeholder="Your Answer"
          onChange={(e) => {
            setValues1t10(e.target.value);
          }}
          value={values1t10}
          className="s1-input-style"
          id="s1-t10"/>
      </div>
      <div className="s1-button-container">
        <button className="s1-button-style">Submit</button>
      </div>

    </div>
  );
}
export default Student1;
