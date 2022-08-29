import React from 'react';
import './c24-style.css';

// Promotion of Research and Facilities
function Criteria24() {
  return (
    <div className="c24-inputFields-mainContainer">
      {/* Key Indicator: 2.4.1 */}
      <div className="c24x-eachInputField-container">
        <form>
          <div className="c24x-label-textarea-container">
            <h1 className="c24x-heading-style">
              <span className="c24x-span-style">2.4.1: </span>
              Average percentage of full time teachers against sanctioned posts during the last five years
            </h1>
          </div>
          <table className="c24x-table-style">
            <tr>
              <th className="c24x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c24x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c24x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Year wise full time teachers and sanctioned posts for 5 years(Data Template)</td>
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
            <tr>
              <td>
              List of the faculty members authenticated by the Head of HEI
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.4.2 */}
      <div className="c24x-eachInputField-container">
        <form>
          <div className="c24x-container">
            <h1 className="c24x-heading-style">
              <span className="c24x-span-style">2.4.2: </span>
              Average percentage of full time teachers with Ph.D. / D.M. / M.Ch. / D.N.B Super speciality / D.Sc. / D.Litt. during the last five years
            </h1>
          </div>
          <div className="c24xx-container">
            <h1 className="c24xx-Heading-style">
              <span className="c24xx-span-style">2.4.2.1: </span>
              Number of full time teachers with Ph.D./ D.M. / M.Ch. / D.N.B Super speciality / D.Sc. / D.Litt.  year wise during last five years
            </h1>
            <table className="c21x-table-style">
              <tr>
                <th className="c21x-horizontalTable-heading-style">Year</th>
                <td id="2421-t1"></td>
                <td id="2421-t2"></td>
                <td id="2421-t3"></td>
                <td id="2421-t4"></td>
                <td id="2421-t5"></td>
              </tr>
              <tr>
                <th className="c24x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2421-t6"></td>
                <td id="2421-t7"></td>
                <td id="2421-t8"></td>
                <td id="2421-t9"></td>
                <td id="221-t10"></td>
              </tr>
            </table>
            <table className="c24x-table-style">
              <tr>
                <th className="c24x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c24x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c24x-verticalTable-heading3-style">
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
                <td>List of number of full time teachers with  PhD./ D.M. / M.Ch. / D.N.B Super specialty / D.Sc. / D.Litt. and number of full time teachers for 5 years (Data Template)</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 2.4.3 */}
      <div className="c24x-eachInputField-container">
        <form>
          <div className="c24x-container">
            <h1 className="c24x-heading-style">
              <span className="c24x-span-style">2.4.3: </span>
              Average teaching experience of full time teachers in the same institution (Data for the latest completed academic year in number of years)
            </h1>
          </div>
          <div className="c24xx-container">
            <h1 className="c24xx-Heading-style">
              <span className="c24xx-span-style">2.4.3.1: </span>
              Total experience of full-time teachers
            </h1>
            <table className="c24x-table-style">
              <tr>
                <th className="c24x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c24x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c24x-verticalTable-heading3-style">
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
                <td>List of Teachers including their PAN, designation, dept and experience details(Data Template as of 2.4.1)</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div className="c24x-button-container">
        <button className="c24x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria24;
