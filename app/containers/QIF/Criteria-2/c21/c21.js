import React from 'react';
import './c21-style.css';

// Promotion of Research and Facilities
function Criteria21() {
  return (
    <div className="c21-inputFields-mainContainer">
      {/* Key Indicator: 2.1.1 */}
      <div className="c21x-eachInputField-container">
        <form>
          <div className="c21x-label-textarea-container">
            <h1 className="c21x-heading-style">
              <span className="c21x-span-style">2.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
          </div>
          <div className="c21xx-container">
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.1.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.1.2: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <table className="c21x-table-style">
              <tr>
                <th className="c21x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c21x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c21x-verticalTable-heading3-style">
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
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 2.1.2 */}
      <div className="c21x-eachInputField-container">
        <form>
          <div className="c21x-container">
            <h1 className="c21x-heading-style">
              <span className="c21x-span-style">2.1.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c21xx-container">
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <table className="c21x-table-style">
              <tr>
                <th className="c21x-horizontalTable-heading-style">Year</th>
                <td id="2121-t1"></td>
                <td id="2121-t2"></td>
                <td id="2121-t3"></td>
                <td id="2121-t4"></td>
                <td id="2121-t5"></td>
              </tr>
              <tr>
                <th className="c21x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2121-t6"></td>
                <td id="2121-t7"></td>
                <td id="2121-t8"></td>
                <td id="2121-t9"></td>
                <td id="2121-t10"></td>
              </tr>
            </table>
            <table className="c21x-table-style">
              <tr>
                <th className="c21x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c21x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c21x-verticalTable-heading3-style">
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
                <td>Any additional information</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div className="c21x-button-container">
        <button className="c21x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria21;
