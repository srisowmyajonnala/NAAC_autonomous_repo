import React from 'react';
import './c11-style.css';

// Promotion of Research and Facilities
function Criteria11() {
  return (
    <div className="c11-inputFields-mainContainer">
      {/* Key Indicator: 1.1.1 */}
      <div className="c11x-eachInputField-container">
        <form>
          <div className="c11x-label-textarea-container">
            <h1 className="c11x-heading-style">
              <span className="c11x-span-style">1.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <label htmlFor="111-t1" className="c11x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c11x-textarea-style"
              id="111-t1"
            ></textarea>
          </div>
          <table className="c11x-table-style">
            <tr>
              <th className="c11x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c11x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c11x-verticalTable-heading3-style">
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

      {/* Key Indicator: 1.1.2 */}
      <div className="c11x-eachInputField-container">
        <form>
          <div className="c11x-container">
            <h1 className="c11x-heading-style">
              <span className="c11x-span-style">1.1.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c11xx-container">
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.2.2: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <table className="c11x-table-style">
              <tr>
                <th className="c11x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c11x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c11x-verticalTable-heading3-style">
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

      {/* Key Indicator: 1.1.3 */}
      <div className="c11x-eachInputField-container">
        <form>
          <div className="c11x-container">
            <h1 className="c11x-heading-style">
              <span className="c11x-span-style">1.1.3: </span>
              Percentage of teachers awarded national/ international fellowship
              for advanced studies/ research during the last five years
            </h1>
          </div>
          <div className="c11xx-container">
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.3.1: </span>
              The number of teachers awarded national/ international fellowship
              for advanced studies/ research year wise during last five years
            </h1>
            <table className="c11x-table-style">
              <tr>
                <th className="c11x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c11x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c11x-verticalTable-heading3-style">
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
      <div className="c11x-button-container">
        <button className="c11x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria11;
