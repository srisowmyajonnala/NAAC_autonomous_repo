import React from 'react';
import './c33-style.css';

// Promotion of Research and Facilities
function Criteria33() {
  return (
    <div className="c31-inputFields-mainContainer">
      {/* Key Indicator: 3.1.1 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-label-textarea-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <label htmlFor="3.1.1" className="c31x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c31x-textarea-style"
              id="3.1.1"
            ></textarea>
          </div>
          <table className="c31x-table-style">
            <tr>
              <th className="c31x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c31x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c31x-verticalTable-heading3-style">
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
                <input type="text" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 3.1.2 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.2: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c31xx-container">
            <h1 className="c31xx-Heading-style">
              <span className="c31xx-span-style">3.1.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-horizontalTable-heading-style">Year</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th className="c31x-horizontalTable-heading-style">
                  INR in lakhs
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c31x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c31x-verticalTable-heading3-style">
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
                <td>Minutes of the relevant bodies of the Institution</td>
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
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  List of teachers receiving grant and details of grant received
                  (Data Template)
                </td>
                <td></td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 3.1.3 */}
      <div className="c31x-eachInputField-container">
        <form>
          <div className="c31x-container">
            <h1 className="c31x-heading-style">
              <span className="c31x-span-style">3.1.3: </span>
              Percentage of teachers awarded national/ international fellowship
              for advanced studies/ research during the last five years
            </h1>
          </div>
          <div className="c31xx-container">
            <h1 className="c31xx-Heading-style">
              <span className="c31xx-span-style">3.1.3.1: </span>
              The number of teachers awarded national/ international fellowship
              for advanced studies/ research year wise during last five years
            </h1>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-horizontalTable-heading-style">Year</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th className="c31x-horizontalTable-heading-style">
                  Number of teachers
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>

            <table className="c31x-table-style">
              <tr>
                <th className="c31x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c31x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c31x-verticalTable-heading3-style">
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
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Criteria33;
