import React from 'react';
import './c23-style.css';

// Promotion of Research and Facilities
function Criteria23() {
  return (
    <div className="c23-inputFields-mainContainer">
      {/* Key Indicator: 2.3.1 */}
      <div className="c23x-eachInputField-container">
        <form>
          <div className="c23x-label-textarea-container">
            <h1 className="c23x-heading-style">
              <span className="c23x-span-style">2.3.1: </span>
              Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences
            </h1>
            <label htmlFor="231-t1" className="c23x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c23x-textarea-style"
              id="231-t1"
            ></textarea>
          </div>
          <table className="c23x-table-style">
            <tr>
              <th className="c23x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c23x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c23x-verticalTable-heading3-style">
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
              Link for Additional Information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.3.2 */}
      <div className="c23x-eachInputField-container">
        <form>
          <div className="c23x-label-textarea-container">
            <h1 className="c23x-heading-style">
              <span className="c23x-span-style">2.3.2: </span>
              Teachers use ICT enabled tools including online resources for effective teaching and learning process
            </h1>
            <label htmlFor="232-t1" className="c23x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c23x-textarea-style"
              id="232-t1"
            ></textarea>
          </div>
          <table className="c23x-table-style">
            <tr>
              <th className="c23x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c23x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c23x-verticalTable-heading3-style">
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
              <td>Provide link for webpage describing ICT enabled tools including online resources for effective teaching and learning process</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.3.3 */}
      <div className="c23x-eachInputField-container">
        <form>
          <div className="c23x-container">
            <h1 className="c23x-heading-style">
              <span className="c23x-span-style">2.3.3: </span>
              Ratio of students to mentor for academic and other related issues (Data for the latest completed academic  year )
            </h1>
            <h1 className="c23x-heading-style">
              <span className="c23x-span-style">2.3.3.1: </span>
              Number of mentors
            </h1>
          </div>
          <table className="c23x-table-style">
            <tr>
              <th className="c23x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c23x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c23x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload year wise, number of students enrolled and full time teachers on roll. </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Circulars pertaining to assigning mentors to mentees </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>mentor/mentee ratio </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.3.4 */}
      <div className="c23x-eachInputField-container">
        <form>
          <div className="c23x-label-textarea-container">
            <h1 className="c23x-heading-style">
              <span className="c23x-span-style">2.3.4: </span>
              Preparation and adherence of Academic Calendar and Teaching plans by the institution
            </h1>
            <label htmlFor="234-t1" className="c23x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c23x-textarea-style"
              id="234-t1"
            ></textarea>
          </div>
          <table className="c23x-table-style">
            <tr>
              <th className="c23x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c23x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c23x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload Academic Calendar and Teaching plans for five years</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="c23x-button-container">
        <button className="c23x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria23;
