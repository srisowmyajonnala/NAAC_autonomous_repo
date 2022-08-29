import React from 'react';
import './c42-style.css';

// Promotion of Research and Facilities
function Criteria42() {
  return (
    <div className="c42-inputFields-mainContainer">
      {/* Key Indicator: 4.2.1 */}
      <div className="c42x-eachInputField-container">
        <form>
          <div className="c42x-label-textarea-container">
            <h1 className="c42x-heading-style">
              <span className="c42x-span-style">4.2.1: </span>
              Library is automated using Integrated Library Management System (ILMS)
            </h1>
          </div>

          <table className="c42x-table-style">
            <tr>
              <th className="c42x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c42x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c42x-verticalTable-heading3-style">
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

      {/* Key Indicator: 4.2.2 */}
      <div className="c42x-eachInputField-container">
        <form>
          <div className="c42x-container">
            <h1 className="c42x-heading-style">
              <span className="c42x-span-style">4.2.2: </span>
              Institution has access to  the following: </h1>
            <label htmlFor="412-t1" className="c42x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c41x-textarea-style"
              id="412-t1"
            ></textarea>
          </div>
          <table className="c42x-table-style">
            <tr>
              <th className="c42x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c42x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c42x-verticalTable-heading3-style">
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
              <td>Details of subscriptions like e-journals, e-books , e-ShodhSindhu, Shodhganga Membership etc</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 4.2.3 */}
      <div className="c42x-eachInputField-container">
        <form>
          <div className="c42x-label-textarea-container">
            <h1 className="c42x-heading-style">
              <span className="c42x-span-style">4.2.3: </span>
              Average annual expenditure for purchase of books/ e-books and subscription to journals/e-journals during the last five years (INR in Lakhs)
            </h1>
          </div>
          <div className="c42xx-container">
            <h1 className="c42xx-Heading-style">
              <span className="c42xx-span-style">4.2.3.1: </span>
              Annual expenditure for purchase of  books / e-books and subscription to journals/e-journals year wise during last five years (INR in lakhs)
            </h1>
            <table className="c42x-table-style">
              <tr>
                <th className="c42x-horizontalTable-heading-style">Year</th>
                <td id="4231-t1"></td>
                <td id="4231-t2"></td>
                <td id="4231-t3"></td>
                <td id="4231-t4"></td>
                <td id="4231-t5"></td>
              </tr>
              <tr>
                <th className="c42x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="4231-t6"></td>
                <td id="4231-t7"></td>
                <td id="4231-t8"></td>
                <td id="4231-t9"></td>
                <td id="4231-t10"></td>
              </tr>
            </table>
            <table className="c42x-table-style">
              <tr>
                <th className="c42x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c42x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c42x-verticalTable-heading3-style">
                Documents upload
                </th>
              </tr>
              <tr>
                <td>Any additional information </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>Audited statements of accounts </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>Details of annual expenditure for purchase of and subscription to journals/e-journals during the last five years (Data Template as of 4.2.2) </td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 4.2.4 */}
      <div className="c42x-eachInputField-container">
        <form>
          <div className="c42x-container">
            <h1 className="c42x-heading-style">
              <span className="c42x-span-style">4.2.4: </span>
              Percentage per day usage of library by teachers and students ( foot falls and login data for online access)
            </h1>
          </div>
          <div>
            <h1 className="c42xx-Heading-style">
              <span className="c42xx-span-style">4.2.4.1: </span>
              Number of teachers and students using library per day over last one year
            </h1>
          </div>
          <table className="c42x-table-style">
            <tr>
              <th className="c42x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c42x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c42x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td> Any additional information </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>Details of library usage by teachers and students</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div className="c42x-button-container">
        <button className="c42x-button-style">Save</button>
      </div>
    </div>

  );
}

export default Criteria42;
