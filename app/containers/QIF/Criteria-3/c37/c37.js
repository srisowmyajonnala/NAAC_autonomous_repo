import React from 'react';
import './c37-style.css';

// Promotion of Research and Facilities
function Criteria37() {
  return (
    <div className="c37-inputFields-mainContainer">

      {/* Key Indicator: 3.7.1 */}
      <div className="c37x-eachInputField-container">
        <form>
          <div className="c37x-container">
            <h1 className="c37x-heading-style">
              <span className="c37x-span-style">3.7.1: </span>
             NNumber of collaborative activities per year for research/faculty exchange/student exchange/internship/on-the-job training/
             project work
            </h1>
          </div>
          <div className="c37xx-container">
            <h1 className="c37xx-Heading-style">
              <span className="c37xx-span-style">3.7.1.1: </span>
              Total number of Collaborative activities per year for research/faculty exchange/student exchange/internship/on-the-job
              training/project work
            </h1>

            <table className="c37x-table-style">
              <tr>
                <th className="c37x-horizontalTable-heading-style">Year</th>
                <td id="3711-t1"></td>
                <td id="3711-t2"></td>
                <td id="3711-t3"></td>
                <td id="3711-t4"></td>
                <td id="3711-t5"></td>
              </tr>
              <tr>
                <th className="c37x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="3711-t6"></td>
                <td id="3711-t7"></td>
                <td id="3711-t8"></td>
                <td id="3711-t9"></td>
                <td id="3711-t10"></td>
              </tr>
            </table>

            <table className="c37x-table-style">
              <tr>
                <th className="c37x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c37x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c37x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>Copies of collaboration</td>
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
         Number of Collaborative activities for research,faculty etc
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

      {/* Key Indicator: 3.7.2 */}
      <div className="c37x-eachInputField-container">
        <form>
          <div className="c37x-container">
            <h1 className="c37x-heading-style">
              <span className="c37x-span-style">3.7.2: </span>
           Number of functional MoUs with institutions of national,international importance,other universities,industries,corporate houses etc.during the last five years
           (only functional MoUs with ongoing activities to be considered)
            </h1>
          </div>
          <div className="c37xx-container">
            <h1 className="c37xx-Heading-style">
              <span className="c37xx-span-style">3.7.2.1: </span>
              Number of functional MoUs with institutions of national,international importance,other universities,
              industries,corporate houses etc. Year wise during last five years
            </h1>

            <table className="c37x-table-style">
              <tr>
                <th className="c37x-horizontalTable-heading-style">Year</th>
                <td id="3721-t1"></td>
                <td id="3721-t2"></td>
                <td id="3721-t3"></td>
                <td id="3721-t4"></td>
                <td id="3721-t5"></td>
              </tr>
              <tr>
                <th className="c37x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="3721-t6"></td>
                <td id="3721-t7"></td>
                <td id="3721-t8"></td>
                <td id="3721-t9"></td>
                <td id="3721-t10"></td>
              </tr>
            </table>

            <table className="c37x-table-style">
              <tr>
                <th className="c37x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c37x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c37x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>e-copies of the MoUs with institution/industry/</td>
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
                  Details of functional MoUs with institutions of national,international importance,other Institutions etc.
                  during the last five years(Data Template)
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
      <div className="c31x-button-container">
        <button className="c31x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria37;
