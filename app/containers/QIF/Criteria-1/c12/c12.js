import React from 'react';
import './c12-style.css';

// Promotion of Research and Facilities
function Criteria12() {
  return (
    <div className="c12-inputFields-mainContainer">
      {/* Key Indicator: 1.2.1 */}
      <div className="c12x-eachInputField-container">
        <form>
          <div className="c12x-label-textarea-container">
            <h1 className="c12x-heading-style">
              <span className="c12x-span-style">1.2.1: </span>
              Percentage of new courses introduced of the total number of courses across all programs offered during the last five years
            </h1>
          </div>
          <div className="c13xx-container">
            <h1 className="c12x-heading-style">
              <span className="c12x-span-style">1.2.1.1: </span>
              How many new courses are introduced within the last five years
            </h1>
            <h1 className="c12x-heading-style">
              <span className="c12x-span-style">1.2.1.2: </span>
                Number of courses offered by the institution across all   Programmes during the last five years
            </h1>
            <table className="c12x-table-style">
              <tr>
                <th className="c12x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c12x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c12x-verticalTable-heading3-style">
                Documents upload
                </th>
              </tr>
              <tr>
                <td>Minutes of relevant Academic Council/BOS meetings </td>
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
              Institutional data in prescribed format (Data Template as of 1.1.3)
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

      {/* Key Indicator: 1.2.2 */}
      <div className="c12x-eachInputField-container">
        <form>
          <div className="c12x-container">
            <h1 className="c12x-heading-style">
              <span className="c12x-span-style">1.2.2: </span>
              Percentage of Programmes in which Choice Based Credit System (CBCS)/elective course system has been implemented (Data for the latest completed academic year )
            </h1>
          </div>
          <div className="c12xx-container">
            <h1 className="c12xx-Heading-style">
              <span className="c12xx-span-style">1.2.2.1: </span>
              Number of Programmes in which CBCS/Elective course system implemented.
            </h1>
            <table className="c12x-table-style">
              <tr>
                <th className="c12x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c12x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c12x-verticalTable-heading3-style">
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
                <td>Minutes of relevant Academic Council/BOS meetings</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                Institutional data in prescribed format(Data Template)
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
      <div className="c12x-button-container">
        <button className="c12x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria12;
