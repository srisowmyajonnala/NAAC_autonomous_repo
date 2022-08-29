import React from 'react';
import './c25-style.css';

// Promotion of Research and Facilities
function Criteria25() {
  return (
    <div className="c25-inputFields-mainContainer">
      {/* Key Indicator: 2.5.1 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.1: </span>
              Average number of days from the date of last semester-end/ year- end examination till the declaration of results during the last five years
            </h1>
          </div>
          <div className="c25xx-container">
            <h1 className="c25xx-Heading-style">
              <span className="c21xx-span-style">2.5.1.1: </span>
              Number of days from the date of last  semester-end/ year- end examination till the declaration of results year wise during the last  five years
            </h1>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-horizontalTable-heading-style">Year</th>
                <td id="2511-t1"></td>
                <td id="2511-t2"></td>
                <td id="2511-t3"></td>
                <td id="2511-t4"></td>
                <td id="2511-t5"></td>
              </tr>
              <tr>
                <th className="c25x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2511-t6"></td>
                <td id="2511-t7"></td>
                <td id="2511-t8"></td>
                <td id="2511-t9"></td>
                <td id="2511-t10"></td>
              </tr>
            </table>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c25x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c25x-verticalTable-heading3-style">
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
                List of Programmes and date of last semester and date of declaration of result(Data Template)
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

      {/* Key Indicator: 2.5.2 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.2: </span>
              Average percentage of student complaints/grievances about evaluation against total number appeared in the examinations during the last five years
            </h1>
          </div>
          <div className="c25xx-container">
            <h1 className="c25xx-Heading-style">
              <span className="c21xx-span-style">2.5.2.1: </span>
              Number of complaints/grievances  about evaluation year wise during last five years
            </h1>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-horizontalTable-heading-style">Year</th>
                <td id="2521-t1"></td>
                <td id="2521-t2"></td>
                <td id="2521-t3"></td>
                <td id="2521-t4"></td>
                <td id="2521-t5"></td>
              </tr>
              <tr>
                <th className="c25x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2521-t6"></td>
                <td id="2521-t7"></td>
                <td id="2521-t8"></td>
                <td id="2521-t9"></td>
                <td id="2521-t10"></td>
              </tr>
            </table>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c25x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c25x-verticalTable-heading3-style">
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
                Number of complaints and total number of students appeared year wise.
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

      {/* Key Indicator: 2.5.3 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.3: </span>
              IT integration and reforms in the examination procedures and processes including Continuous Internal Assessment (CIA) have brought in considerable improvement in Examination Management System (EMS) of the Institution
            </h1>
            <label htmlFor="253-t1" className="c25x-label-style">
              Write description in maximum of 1000 words
            </label>
            <textarea
              rows={6}
              className="c25x-textarea-style"
              id="253-t1"
            ></textarea>
          </div>
          <table className="c25x-table-style">
            <tr>
              <th className="c25x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c25x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c25x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload Any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Paste link for Additional Information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div className="c25x-button-container">
        <button className="c25x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria25;
