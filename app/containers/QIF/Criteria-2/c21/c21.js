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
              Average Enrolment percentage (Average of last five years)
            </h1>
          </div>
          <div className="c21xx-container">
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.1.1: </span>
              Number of students admitted year wise during last five years
            </h1>
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.1.2: </span>
              Number of sanctioned seats year wise during last five years
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
                Demand Ratio (Average of Last five years) based on Data Template upload the document
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
              Average percentage of seats filled against reserved categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy ) during the last five years ( exclusive of supernumerary seats)
            </h1>
          </div>
          <div className="c21xx-container">
            <h1 className="c21xx-Heading-style">
              <span className="c21xx-span-style">2.1.2.1: </span>
              Number of actual students admitted from the reserved categories year wise during last five years
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
                <td>Average percentage of seats filled against seats reserved (Data Template)</td>
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
