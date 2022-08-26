import React, { useState } from 'react';
import './c31-style.css';

// Promotion of Research and Facilities
function Criteria31() {
  const [value311t1, setValue311t1] = useState('');
  const [value3121t1, setValue3121t1] = useState('');
  const [value3121t2, setValue3121t2] = useState('');
  const [value3121t3, setValue3121t3] = useState('');
  const [value3121t4, setValue3121t4] = useState('');
  const [value3121t5, setValue3121t5] = useState('');
  const [value3121t6, setValue3121t6] = useState('');
  const [value3121t7, setValue3121t7] = useState('');
  const [value3121t8, setValue3121t8] = useState('');
  const [value3121t9, setValue3121t9] = useState('');
  const [value3121t10, setValue3121t10] = useState('');
  const [value3131t1, setValue3131t1] = useState('');
  const [value3131t2, setValue3131t2] = useState('');
  const [value3131t3, setValue3131t3] = useState('');
  const [value3131t4, setValue3131t4] = useState('');
  const [value3131t5, setValue3131t5] = useState('');
  const [value3131t6, setValue3131t6] = useState('');
  const [value3131t7, setValue3131t7] = useState('');
  const [value3131t8, setValue3131t8] = useState('');
  const [value3131t9, setValue3131t9] = useState('');
  const [value3131t10, setValue3131t10] = useState('');
  const inputDataList = {
    input311t1: value311t1,
    input3121t1: value3121t1,
    input3121t2: value3121t2,
    input3121t3: value3121t3,
    input3121t4: value3121t4,
    input3121t5: value3121t5,
    input3121t6: value3121t6,
    input3121t7: value3121t7,
    input3121t8: value3121t8,
    input3121t9: value3121t9,
    input3121t10: value3121t10,
    input3131t1: value3131t1,
    input3131t2: value3131t2,
    input3131t3: value3131t3,
    input3131t4: value3131t4,
    input3131t5: value3131t5,
    input3131t6: value3131t6,
    input3131t7: value3131t7,
    input3131t8: value3131t8,
    input3131t9: value3131t9,
    input3131t10: value3131t10,
  };

  const fetchMethod = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(inputDataList),
  };
  console.log(fetchMethod);
  function onClickingSave() {
    fetch('http://localhost:8080/api/v1/fieldinfo', fetchMethod).then(
      (response) => {
        console.log(response);
      }
    );
  }

  return (
    <div className="c31-inputFields-mainContainer">
      {/* Key Indicator: 3.1.1 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-label-textarea-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <label htmlFor="311-t1" className="c31x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              onChange={(e) => setValue311t1(e.target.value)}
              value={value311t1}
              rows={6}
              className="c31x-textarea-style"
              id="311-t1"
            ></textarea>
          </div>
          <div className="c31x-docsRequired-container">
            <h1 className="c31x-docsRequired-heading-style">
              Documents Required:
            </h1>
            <ul>
              <li className="c31x-docsRequired-listElements-style">
                Minutes of the Governing Council/ Board of Management/ Academic
                Council related to research promotion policy and its adoption
              </li>
            </ul>
          </div>
          <table className="c31x-table-style">
            <tr>
              <th className="c31x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c31x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c31x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
                Minutes of the Governing Council/ Syndicate/ Board of Management
                related to research promotion policy adoption
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
                URL of Policy document on promotion of research uploaded on
                website
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 3.1.2 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c31xx-container">
            <h1 className="c31xx-Heading-style">
              <span className="c31xx-span-style">3.1.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-horizontalTable-heading-style">Year</th>
                <td>
                  <input
                    onChange={(e) => setValue3121t1(e.target.value)}
                    id="3121-t1"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t2(e.target.value)}
                    id="3121-t2"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t3(e.target.value)}
                    id="3121-t3"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t4(e.target.value)}
                    id="3121-t4"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t5(e.target.value)}
                    id="3121-t5"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th className="c31x-horizontalTable-heading-style">
                  INR in lakhs
                </th>
                <td>
                  <input
                    onChange={(e) => setValue3121t6(e.target.value)}
                    id="3121-t6"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t7(e.target.value)}
                    id="3121-t7"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t8(e.target.value)}
                    id="3121-t8"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t9(e.target.value)}
                    id="3121-t9"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3121t10(e.target.value)}
                    id="3121-t10"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
              </tr>
            </table>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c31x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c31x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>Any additional information</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>Minutes of the relevant bodies of the Institution</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  Budget and expenditure statements signed by the Finance
                  Officer indicating seed money provided and utilized
                </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  List of teachers receiving grant and details of grant received
                  (Data Template)
                </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 3.1.3 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.3: </span>
              Percentage of teachers awarded national/ international fellowship
              for advanced studies/ research during the last five years
            </h1>
          </div>
          <div className="c31xx-container">
            <h1 className="c31xx-Heading-style">
              <span className="c31xx-span-style">3.1.3.1: </span>
              The number of teachers awarded national/ international fellowship
              for advanced studies/ research year wise during last five years
            </h1>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-horizontalTable-heading-style">Year</th>
                <td>
                  <input
                    onChange={(e) => setValue3131t1(e.target.value)}
                    id="3131-t1"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t2(e.target.value)}
                    id="3131-t2"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t3(e.target.value)}
                    id="3131-t3"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t4(e.target.value)}
                    id="3131-t4"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t5(e.target.value)}
                    id="3131-t5"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th className="c31x-horizontalTable-heading-style">
                  Number of teachers
                </th>
                <td>
                  <input
                    onChange={(e) => setValue3131t6(e.target.value)}
                    id="3131-t6"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t7(e.target.value)}
                    id="3131-t7"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t8(e.target.value)}
                    id="3131-t8"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t9(e.target.value)}
                    id="3131-t9"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => setValue3131t10(e.target.value)}
                    id="3131-t10"
                    className="c31x-input-style"
                    type="text"
                  />
                </td>
              </tr>
            </table>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c31x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c31x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>Any additional information</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>e-copies of the award letters of the teachers</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  List of teachers and their international fellowship details
                  (Data Template)
                </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div className="c31x-button-container">
        <button onClick={onClickingSave} className="c31x-button-style">
          Save
        </button>
      </div>
    </div>
  );
}

export default Criteria31;
