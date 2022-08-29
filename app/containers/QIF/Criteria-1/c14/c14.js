import React from 'react';
import './c14-style.css';

// Promotion of Research and Facilities
function Criteria14() {
  return (
    <div className="c14-inputFields-mainContainer">
      {/* Key Indicator: 1.4.1 */}
      <div className="c14x-eachInputField-container">
        <form>
          <div className="c14x-label-textarea-container">
            <h1 className="c14x-heading-style">
              <span className="c14x-span-style">1.4.1: </span>
              Structured feedback for design and review of syllabus ( semester wise / year wise) is obtained from 1) Students, 2) Teachers, 3) Employers, 4) Alumni
            </h1>
          </div>
          <table className="c14x-table-style">
            <tr>
              <th className="c14x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c14x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c14x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>URL for stakeholder feedback report</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Action taken report of the Institution on feedback report as  minuted by the Governing Council, Syndicate, Board of Management(Upload)
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Any additional information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 1.4.2 */}
      <div className="c14x-eachInputField-container">
        <form>
          <div className="c14x-container">
            <h1 className="c14x-heading-style">
              <span className="c14x-span-style">1.4.2: </span>
              The feedback system of the Institution comprises of the following :
            </h1>
            <div className="c14xx-container">
              <table className="c14x-table-style">
                <tr>
                  <th className="c14x-verticalTable-heading1-style">
                  File Description
                  </th>
                  <th className="c14x-verticalTable-heading2-style">
                  File Template
                  </th>
                  <th className="c14x-verticalTable-heading3-style">
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
                  <td>URL for stakeholder feedback report</td>
                  <td></td>
                  <td>
                    <input type="file" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </form>
      </div>
      <div className="c11x-button-container">
        <button className="c11x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria14;
