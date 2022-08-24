import React from 'react';
import './c36-style.css';

// Promotion of Research and Facilities
function Criteria36() {
  return (
    <div className="c36-inputFields-mainContainer">
      {/* Key Indicator: 3.6.1 */}
      <div className="c36x-eachInputField-container">
        <form>
          <div className="c36x-label-textarea-container">
            <h1 className="c36x-heading-style">
              <span className="c36x-span-style">3.6.1: </span>
              Extension activities are carried out in the neighbourhood community,
              sensitising students to social issues, for their holistic development,and impact thereof during the last five years
            </h1>
            <label htmlFor="361-t1" className="c36x-label-style">
            Decribe the impact of extension activities in sensiting students to social issues and holistic development
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c36x-textarea-style"
              id="361-t1"
            ></textarea>
          </div>
          <table className="c36x-table-style">
            <tr>
              <th className="c36x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c36x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c36x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Paste link for additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
                Upload any additional information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 3.6.2 */}
      <div className="c36x-eachInputField-container">
        <form>
          <div className="c36x-container">
            <h1 className="c36x-heading-style">
              <span className="c36x-span-style">3.6.2: </span>
           Number of awards and recognition received by the Institution,its teachers and students for extension
           activities from Government/Government recognised bodies during last five years
            </h1>
          </div>
          <div className="c36xx-container">
            <h1 className="c36xx-Heading-style">
              <span className="c36xx-span-style">3.6.2.1: </span>
              Total number of awards and recognition received for extension
           activities from Government/recognised bodies year wise during last five years
            </h1>
            <table className="c36x-table-style">
              <tr>
                <th className="c36x-horizontalTable-heading-style">Year</th>
                <td id="3622-t1"></td>
                <td id="3622-t2"></td>
                <td id="3622-t3"></td>
                <td id="3622-t4"></td>
                <td id="3622-t5"></td>
              </tr>
              <tr>
                <th className="c36x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="3622-t6"></td>
                <td id="3622-t7"></td>
                <td id="3622-t8"></td>
                <td id="3622-t9"></td>
                <td id="3622-t10"></td>
              </tr>
            </table>
            <table className="c36x-table-style">
              <tr>
                <th className="c36x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c36x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c36x-verticalTable-heading3-style">
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
                <td>Number of awards for extension activities in last 5 years(Data Template)</td>
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
        <button className="c31x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria36;
