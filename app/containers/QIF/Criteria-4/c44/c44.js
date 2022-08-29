import React from 'react';
import './c44-style.css';

// Promotion of Research and Facilities
function Criteria44() {
  return (
    <div className="c44-inputFields-mainContainer">
      {/* Key Indicator: 4.4.1 */}
      <div className="c44x-eachInputField-container">
        <form>
          <div className="c44x-container">
            <h1 className="c44x-heading-style">
              <span className="c44x-span-style">4.4.1: </span>
              Average percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years
            </h1>
          </div>
          <div>
            <h1 className="c44xx-Heading-style">
              <span className="c44xx-span-style">4.4.1.1: </span>
              Expenditure incurred on  maintenance of  physical facilities and academic support facilities excluding salary component year wise during last five years (INR in lakhs)
            </h1>
          </div>
          <table className="c44x-table-style">
            <tr>
              <th className="c44x-horizontalTable-heading-style">Year</th>
              <td id="4411-t1"></td>
              <td id="4411-t2"></td>
              <td id="4411-t3"></td>
              <td id="4411-t4"></td>
              <td id="4411-t5"></td>
            </tr>
            <tr>
              <th className="c44x-horizontalTable-heading-style">
                  Number
              </th>
              <td id="4411-t6"></td>
              <td id="4411-t7"></td>
              <td id="4411-t8"></td>
              <td id="4411-t9"></td>
              <td id="4411-t10"></td>
            </tr>
          </table>
          <table className="c44x-table-style">
            <tr>
              <th className="c44x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c44x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c44x-verticalTable-heading3-style">
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
              <td>Audited statements of accounts.</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Details about assigned budget and expenditure on physical facilities and academic facilities (Data Templates).</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      {/* Key Indicator: 4.4.2 */}
      <div className="c44x-eachInputField-container">
        <form>
          <div className="c44x-label-textarea-container">
            <h1 className="c44x-heading-style">
              <span className="c44x-span-style">4.4.1: </span>
              There are established systems and procedures for maintaining and utilizing physical, academic and support facilities – laboratory, library, sports complex, computers, classrooms etc.
            </h1>
            <label htmlFor="442-t1" className="c44x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c44x-textarea-style"
              id="442-t1"
            ></textarea>
          </div>
          <table className="c44x-table-style">
            <tr>
              <th className="c44x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c44x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c44x-verticalTable-heading3-style">
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
              <td>Paste link for additional information </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="c44x-button-container">
        <button className="c44x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria44;
