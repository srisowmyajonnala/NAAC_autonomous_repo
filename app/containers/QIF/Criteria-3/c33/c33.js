import React from 'react';
import './c33-style.css';

// Promotion of Research and Facilities
function Criteria33() {
  return (
    <div className="c33-inputFields-mainContainer">
      {/* Key Indicator: 3.3.1 */}
      <div className="c33x-eachInputField-container">
        <form>
          <div className="c33x-label-textarea-container">
            <h1 className="c33x-heading-style">
              <span className="c33x-span-style">3.3.1: </span>
              Institution has created an eco system for innovations, creation
              and transfer of knowledge supported by dedicated centers for
              research, enterpreneurship,community orientation,Incubation etc.
            </h1>
            <label htmlFor="331-t1" className="c33x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c33x-textarea-style"
              id="331-t1"
            ></textarea>
          </div>
          <table className="c33x-table-style">
            <tr>
              <th className="c33x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c33x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c33x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>upload any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>paste link for additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 3.3.2 */}
      <div className="c33x-eachInputField-container">
        <form>
          <div className="c33x-container">
            <h1 className="c33x-heading-style">
              <span className="c33x-span-style">3.3.2: </span>
              Number of workshops/seminars conducted on Research
              Methodologiy,Intellectual property Rights(IPR), enterpreneurship
              and skills development during the kast five years.
            </h1>
          </div>
          <div className="c33xx-container">
            <h1 className="c33xx-Heading-style">
              <span className="c33xx-span-style">3.3.2.1: </span>
              Total number of workshops/seminars conducted on Research
              Methodology,intellectual property rights(IPR) abd enterpreneurship
              and skills development year wise during last five years.
            </h1>

            <table className="c33x-table-style">
              <tr>
                <th className="c33x-horizontalTable-heading-style">Year</th>
                <td id="3321-t1"></td>
                <td id="3321-t2"></td>
                <td id="3321-t3"></td>
                <td id="3321-t4"></td>
                <td id="3321-t5"></td>
              </tr>
              <tr>
                <th className="c33x-horizontalTable-heading-style">Number</th>
                <td id="3321-t1"></td>
                <td id="3321-t2"></td>
                <td id="3321-t3"></td>
                <td id="3321-t4"></td>
                <td id="3321-t5"></td>
              </tr>
            </table>

            <table className="c33x-table-style">
              <tr>
                <th className="c33x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c33x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c33x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>Report of the event</td>
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
              <tr>
                <td>
                  List of workshops/seminars during last 5 years(Data Template)
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
      <div className="c33x-button-container">
        <button className="c33x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria33;
