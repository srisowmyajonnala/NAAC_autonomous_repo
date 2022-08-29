import React from 'react';
import './c26-style.css';

// Promotion of Research and Facilities
function Criteria26() {
  return (
    <div className="c26-inputFields-mainContainer">
      {/* Key Indicator: 2.6.1 */}
      <div className="c26x-eachInputField-container">
        <form>
          <div className="c26x-label-textarea-container">
            <h1 className="c26x-heading-style">
              <span className="c26x-span-style">2.6.1: </span>
              Programme outcomes and course outcomes for all Programmes offered by the institution are stated and displayed on website and communicated to teachers and students
            </h1>
            <label htmlFor="261-t1" className="c26x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c26x-textarea-style"
              id="261-t1"
            ></textarea>
          </div>
          <table className="c26x-table-style">
            <tr>
              <th className="c26x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c26x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c26x-verticalTable-heading3-style">
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
              <td>
              Link for Additional Information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Upload COs for all courses (exemplars from Glossary)
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.6.2 */}
      <div className="c26x-eachInputField-container">
        <form>
          <div className="c26x-label-textarea-container">
            <h1 className="c26x-heading-style">
              <span className="c26x-span-style">2.6.2: </span>
              Attainment of program outcomes and course outcomes are evaluated by the institution
            </h1>
            <label htmlFor="262-t1" className="c26x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c26x-textarea-style"
              id="262-t1"
            ></textarea>
          </div>
          <table className="c26x-table-style">
            <tr>
              <th className="c26x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c26x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c26x-verticalTable-heading3-style">
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
              <td>
              Paste Link for Additional Information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      {/* Key Indicator: 2.6.3 */}
      <div className="c26x-eachInputField-container">
        <form>
          <div className="c26x-label-textarea-container">
            <h1 className="c26x-heading-style">
              <span className="c26x-span-style">2.6.3: </span>
              Pass percentage of students (Data for the latest completed academic year)
            </h1>
          </div>
          <div className="c13xx-container">
            <h1 className="c26x-heading-style">
              <span className="c26x-span-style">2.6.3.1: </span>
              Total number of final year students who passed the examination conducted by Institution.
            </h1>
            <h1 className="c26x-heading-style">
              <span className="c26x-span-style">2.6.3.2: </span>
              Total number of final year students who appeared for the examination
            </h1>
            <table className="c26x-table-style">
              <tr>
                <th className="c26x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c26x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c26x-verticalTable-heading3-style">
                Documents upload
                </th>
              </tr>
              <tr>
                <td>Upload List of Programmes and number of students passed and appeared in the final year examination(Data Template)</td>
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
              <tr>
                <td>Paste link for the annual report</td>
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
      <div className="c26x-button-container">
        <button className="c26x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria26;
