import React from 'react';
import './c41-style.css';

// Promotion of Research and Facilities
function Criteria41() {
  return (
    <div className="c41-inputFields-mainContainer">
      {/* Key Indicator: 4.1.1 */}
      <div className="c41x-eachInputField-container">
        <form>
          <div className="c41x-label-textarea-container">
            <h1 className="c41x-heading-style">
              <span className="c41x-span-style">4.1.1: </span>
              The Institution has adequate infrastructure and physical facilities for teaching – learning, viz., classrooms, laboratories, computing equipment, etc.
            </h1>
            <label htmlFor="411-t1" className="c41x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c41x-textarea-style"
              id="411-t1"
            ></textarea>
          </div>

          <table className="c41x-table-style">
            <tr>
              <th className="c41x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c41x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c41x-verticalTable-heading3-style">
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
              Paste link  for additional information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 4.1.2 */}
      <div className="c41x-eachInputField-container">
        <form>
          <div className="c41x-label-textarea-container">
            <h1 className="c41x-heading-style">
              <span className="c41x-span-style">4.1.2: </span>
              The institution has adequate facilities for cultural activities, yoga, games (indoor, outdoor) and sports. (gymnasium, yoga centre, auditorium, etc.)
            </h1>
            <label htmlFor="412-t1" className="c41x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c41x-textarea-style"
              id="412-t1"
            ></textarea>
          </div>

          <table className="c41x-table-style">
            <tr>
              <th className="c41x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c41x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c41x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Geotagged pictures</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Paste link  for additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 4.1.3 */}
      <div className="c41x-eachInputField-container">
        <form>
          <div className="c41x-label-textarea-container">
            <h1 className="c41x-heading-style">
              <span className="c41x-span-style">4.1.3: </span>
              Percentage of classrooms and seminar halls with ICT – enabled facilities such as smart class, LMS, etc. (Data for the latest completed academic year)
            </h1>
          </div>
          <div className="c41xx-container">
            <h1 className="c41xx-Heading-style">
              <span className="c41xx-span-style">4.1.3.1: </span>
              Number of classrooms and seminar halls with ICT facilities
            </h1>
            <table className="c41x-table-style">
              <tr>
                <th className="c41x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c41x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c41x-verticalTable-heading3-style">
                Documents upload
                </th>
              </tr>
              <tr>
                <td>Upload any additional information </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 4.1.4 */}
      <div className="c41x-eachInputField-container">
        <form>
          <div className="c41x-container">
            <h1 className="c41x-heading-style">
              <span className="c41x-span-style">4.1.4: </span>
              Average percentage of expenditure for infrastructure augmentation excluding salary during the last five years (INR in Lakhs)
            </h1>
          </div>
          <div>
            <h1 className="c41xx-Heading-style">
              <span className="c41xx-span-style">4.1.4.1: </span>
              Expenditure for infrastructure augmentation, excluding salary year wise during last five years (INR in lakhs)
            </h1>
          </div>
          <table className="c41x-table-style">
            <tr>
              <th className="c41x-horizontalTable-heading-style">Year</th>
              <td id="4141-t1"></td>
              <td id="4141-t2"></td>
              <td id="4141-t3"></td>
              <td id="4141-t4"></td>
              <td id="4141-t5"></td>
            </tr>
            <tr>
              <th className="c41x-horizontalTable-heading-style">
                  Number
              </th>
              <td id="4141-t6"></td>
              <td id="4141-t7"></td>
              <td id="4141-t8"></td>
              <td id="4141-t9"></td>
              <td id="4141-t10"></td>
            </tr>
          </table>

          <table className="c41x-table-style">
            <tr>
              <th className="c41x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c41x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c41x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload any additional information </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Upload audited utilization statements</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Upload Details of Expenditure, excluding salary during the last five years.</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div className="c41x-button-container">
        <button className="c41x-button-style">Save</button>
      </div>
    </div>

  );
}

export default Criteria41;
