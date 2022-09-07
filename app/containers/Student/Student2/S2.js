import React, { useState } from 'react';
import './S2.css';

// promotion of research and facilities
function Student2() {
// state variables
  const [values21t1, setValues21t1] = useState('');
  const [values22t1, setValues22t1] = useState('');
  const [values23t1, setValues23t1] = useState('');
  const [values24t1, setValues24t1] = useState('');
  const [values210t1, setValues210t1] = useState('');
  const [values211t1, setValues211t1] = useState('');
  const [values212t1, setValues212t1] = useState('');
  // sending data to db
  const inputDataList = {
    inputs21t1: values21t1,
    inputs22t1: values22t1,
    inputs23t1: values23t1,
    inputs24t1: values24t1,
    inputs210t1: values210t1,
    inputs211t1: values211t1,
    inputs212t1: values212t1,
  };

  // rendering DOM
  return (
    <div className="s2-main-conatiner">
      <div className="s2-formHeading-container">
        <h1 className="s2-formHeading-style">Student Request Form</h1>
        <p className="s2-formDescription-style">Students should submit this form along with handwritten request letter to be uploaded for any service from ADMIN Office.</p>
      </div>
      <div className="s2-card-container">
        <label htmlFor="s2-1t1" className="s2-label-style">Email<span className="s2-span-style">*</span>
        </label>
        <input
          placeholder="Your Email address"
          onChange={(e) => {
            setValues21t1(e.target.value);
          }}
          value={values21t1}
          className="s2-input-style"
          id="s2-1t1"/>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s22-t1" className="S2-label-style">Student Roll No.<span className="s2-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues22t1(e.target.value);
          }}
          value={values22t1}
          className="s2-input-style"
          id="s22-t1"/>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s23-t1" className="s2-label-style">Name of the Student<span className="s2-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues23t1(e.target.value);
          }}
          value={values23t1}
          className="s2-input-style"
          id="s23-t1"/>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s24-t1" className="s2-label-style">Contact Number<span className="s2-span-style">*</span>
        </label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues24t1(e.target.value);
          }}
          value={values24t1}
          className="s2-input-style"
          id="s24-t1"/>
      </div>

      <div className="s2-card-container">
        <h1 className='s2-radioHeading-style'>Programme<span className="s2-span-style">*</span>
        </h1>
        <form>
          <div className='s2-eachRadio-container'>
            <input id="s2-5t1" type="radio" name="pro" value="btech"/>
            <label htmlFor="s2-5t1" >B.Tech
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="pro" value="Mtech"/>
            <label htmlFor="s2-5t2" >M.Tech
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="pro" value="MBA"/>
            <label htmlFor="s2-5t3" >MBA
            </label>
          </div>
        </form>
      </div>

      <div className="s2-card-container">
        <h1 className="s2-radioHeading-style">Department<span className="s2-span-style">*</span></h1>
        <form>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="CIVIL"/>
            <label htmlFor="s2-6t1" >CIVIL
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="MECH"/>
            <label htmlFor="s2-6t2" >MECH</label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="ECE"/>
            <label htmlFor="s2-6t3">ECE</label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="CSE"/>
            <label htmlFor="s2-6t4">CSE</label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="IT"/>
            <label htmlFor="s2-6t5">IT</label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="H&S"/>
            <label htmlFor="s2-6t6">H&S </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="dept" value="mba"/>
            <label htmlFor="s2-6t6">MBA </label></div>
        </form>
      </div>

      <div className="s2-card-container">
        <h1 className="s2-radioHeading-style">Year<span className="s2-span-style">*</span>
        </h1>
        <form>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="year" value="I"/>
            <label htmlFor="s2-7t1" className="S2-label-style">I
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="year" value="II"/>
            <label htmlFor="s2-7t2" className="S2-label-style">II
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="year" value="III"/>
            <label htmlFor="s2-7t3" className="S2-label-style">III
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="year" value="IV"/>
            <label htmlFor="s2-7t4" className="S2-label-style">IV
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="year" value="passedout"/>
            <label htmlFor="s2-7t3" className="S2-label-style">Passed Out
            </label></div>
        </form>
      </div>

      <div className="s2-card-container">
        <h1 className="s2-radioHeading-style">Section<span className="s2-span-style">*</span>
        </h1>
        <form>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="sec" value="a"/>
            <label htmlFor="s2-8t1" >A
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="sec" value="b"/>
            <label htmlFor="s2-8t2" >B
            </label></div>
          <div className='s2-eachRadio-container'>   <input type="radio" name="sec" value="c"/>
            <label htmlFor="s2-8t3" >C
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="radio" name="sec" value="d"/>
            <label htmlFor="s2-8t4" >D
            </label></div>
        </form>
      </div>

      <div className="s2-card-container">
        <label className="s2-radioHeading-style">Requested Certificate(s)/Document(s)<span className="s2-span-style">*</span></label>
        <form>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="bc" value="Bonafide Certificate"/>
            <label htmlFor="s2-9t1" >Bonafide Certificate
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="cc" value="Custodian Certificate"/>
            <label htmlFor="s2-9t2" >Custodian Certificate
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="dept" value="Transfer Certificate"/>
            <label htmlFor="s2-9t3">Transfer Certificate
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="dept" value="Course Completion"/>
            <label htmlFor="s2-9t4">Course Completion
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="mi" value="Medium of Instruction"/>
            <label htmlFor="s2-9t5" >Medium of Instruction
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="il" value="Internship Letter"/>
            <label htmlFor="s2-9t6" >Internship Letter
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="ppl" value="Project Permission Letter"/>
            <label htmlFor="s2-9t7">Project Permission Letter
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="lr" value="Letter of Recommendation"/>
            <label htmlFor="s2-9t8" >Letter of Recommendation
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="pc" value="Name Correction on Memo's/PC's"/>
            <label htmlFor="s2-9t9" >Name Correction on Memo's/PC's
            </label></div>
          <div className='s2-eachRadio-container'>
            <input type="checkbox" name="Others" value="others"/>
            <label htmlFor="s2-9t10">OTHERS
            </label></div>
        </form>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s2-10t1" className="s2-label-style">Address<span className="s2-span-style">*</span>
        </label>
        <p>#H.No, Street Name, Locality, Mandal, District, State, Pincode</p>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues210t1(e.target.value);
          }}
          value={values210t1}
          className="s2-input-style"
          id="s2-10t1"/>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s2-11t1" className="S2-label-style">Handwritten Request Letter<span className="s2-span-style">*</span>
        </label>
        <p>Upload the scan/photo copy of handwritten request letter duly signed by applicant, max size 1 MB only.</p>
        <table>
          <tr>
            <td>
              <input type="file"/>
            </td>
          </tr>
        </table>
      </div>

      <div className="s2-card-container">
        <label htmlFor="s2-12t1" className="s2-label-style">Remarks</label>
        <input
          placeholder="Your answer"
          onChange={(e) => {
            setValues212t1(e.target.value);
          }}
          value={values212t1}
          className="s2-input-style"
          id="s2-12t1"/>
      </div>

      <div className="s2-button-container">
        <button className="s2-button-style">Submit</button>
      </div>
    </div>
  );
}
export default Student2;
