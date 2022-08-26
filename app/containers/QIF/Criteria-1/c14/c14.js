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
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
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

      {/* Key Indicator: 1.4.2 */}
      <div className="c14x-eachInputField-container">
        <form>
          <div className="c14x-container">
            <h1 className="c14x-heading-style">
              <span className="c14x-span-style">1.4.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
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
      <div className="c11x-button-container">
        <button className="c11x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria14;
