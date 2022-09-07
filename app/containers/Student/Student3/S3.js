import React, { useState } from 'react';
import './S3.css';

// promotion of research and facilities
function Student3() {
// state variables
  const [values31t1, setValues31t1] = useState('');
  const [values33t1, setValues33t1] = useState('');
  const [values34t1, setValues34t1] = useState('');
  const [values35t1, setValues35t1] = useState('');
  const [values36t1, setValues36t1] = useState('');
  // sending data to db
  const inputDataList = {
    inputs31t1: values31t1,
    inputs33t1: values33t1,
    inputs34t1: values34t1,
    inputs35t1: values35t1,
    inputs36t1: values36t1,
  };

  // rendering DOM
  return (
    <div className='s3-main-conatiner'>
      <div className="s3-formHeading-container">
        <h1 className="s3-formHeading-style">CMR TECHNICAL CAMPUS</h1>
        <p className="s3-formDescription-style">UGC AUTONOMOUS.</p>
      </div>
      <div className="s3-card-container">
        <label htmlFor="s31-t1" className="s3-label-style">Email<span className="s3-span-style">*</span>
        </label>
        <input
          placeholder="Your Email address"
          onChange={(e) => {
            setValues31t1(e.target.value);
          }}
          value={values31t1}
          className="s3-input-style"
          id="s31-t1"/>
      </div>

      <div className="s3-card-container">
        <p>Fee Payment Acknowledgement</p>
      </div>

      <div className="s3-card-container">

        <label className="s3-label-style">Year<span className="s3-span-style">*</span>
        </label>
        <div className='s3-eachRadio-container'>
          <input type="radio" name="year" value="I Year"/>
          <label htmlFor="s32-t1">I Year
          </label></div>
        <div className='s3-eachRadio-container'>
          <input type="radio" name="year" value="II Year"/>
          <label htmlFor="s32-t2">II Year
          </label></div>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s33-t1"className="s3-label-style">Roll No.<span className="s3-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues33t1(e.target.value);
          }}
          value={values33t1}
          className="s3-input-style"
          id="s33-t1"/>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s34-t1" className="s3-label-style">Contact Number<span className="s3-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues34t1(e.target.value);
          }}
          value={values34t1}
          className="s3-input-style"
          id="s34-t1"/>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s35-t1" className="s3-label-style">Amount paid<span className="s3-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues35t1(e.target.value);
          }}
          value={values35t1}
          className="s3-input-style"
          id="s35-t1"/>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s36-t1" className="s3-label-style">Transaction id/Receipt No:<span className="s3-span-style">*</span>
        </label>
        <p>For Convenor students-Q fix Reference Number/For Mgt students-UTR Number/Google pay/Phone pe refence number</p>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues36t1(e.target.value);
          }}
          value={values36t1}
          className="s3-input-style"
          id="s36-t1"/>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s37-t1" className="s3-label-style">Upload Payment Receipt (Proof of Payment):<span className="s3-span-style">*</span>
        </label>
        <p>Please upload Qfix Receipt / screen shot of transaction details/Cash deposit slip.</p>
        <input type="file"/>
      </div>

      <div className="s3-card-container">
        <label htmlFor="s38-t1" className="s3-label-style">Declaration<span className="s3-span-style">*</span>
        </label>
        <div> <input type="checkbox" name="Declaration" value="declaration"/>
          <label htmlFor="s38-t2" className="s3-label-style">I hereby declare that the above furnished information is true and correct to the best of my knowledge and belief.
          </label></div>
      </div>

    </div>
  );
}
export default Student3;
