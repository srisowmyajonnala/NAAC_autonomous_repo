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
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <div className="c13xx-container">
              <h1 className="c12x-heading-style">
                <span className="c12x-span-style">1.2.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
              </h1>
              <h1 className="c12x-heading-style">
                <span className="c12x-span-style">1.2.1.2: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
              </h1>
            </div>
          </div>
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
              <td>Any additional information</td>
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

      {/* Key Indicator: 1.2.2 */}
      <div className="c12x-eachInputField-container">
        <form>
          <div className="c12x-container">
            <h1 className="c12x-heading-style">
              <span className="c12x-span-style">1.2.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c12xx-container">
            <h1 className="c12xx-Heading-style">
              <span className="c12xx-span-style">1.2.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
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
                <td>Any additional information</td>
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
