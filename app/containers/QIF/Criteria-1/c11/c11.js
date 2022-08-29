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
              Curricula developed and implemented have relevance to the local, national,  regional and global developmental needs which is reflected in Programme outcomes (POs), Programme Specific outcomes (PSOs) and  Course Outcomes (COs) of the Programmes offered by the Institution
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
              <td>Upload  Additional information </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Link for Additional information
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
              Percentage of Programmes where syllabus revision was carried out during the last five years
            </h1>
          </div>
          <div className="c11xx-container">
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.2.1: </span>
              How many Programmes were revised out of total number of Programmes offered during the same period within last five years?
            </h1>
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.2.2: </span>
              Number of all Programmes offered by the institution during the last five years
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
                <td>Minutes of relevant Academic Council/BOS meeting </td>
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
                Details of program syllabus revision in last 5 years(Data Template)
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
              Average percentage of courses having focus on employability/
entrepreneurship/ skill development offered by the institution during the last five years

            </h1>
          </div>
          <div className="c11xx-container">
            <h1 className="c11xx-Heading-style">
              <span className="c11xx-span-style">1.1.3.1: </span>
              Number of courses having focus on employability/ entrepreneurship/ skill development year wise during last five years
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
                <td>Programme / Curriculum/ Syllabus of the courses</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                Minutes of the Boards of Studies/ Academic Council meetings with approvals for these courses
                </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>MoU's with relevant organizations for these courses, if any</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>Average percentage of courses having focus on employability/ entrepreneurship(Data  Template)</td>
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
