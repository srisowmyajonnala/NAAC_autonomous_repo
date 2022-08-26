import React from 'react';
import './c25-style.css';

// Promotion of Research and Facilities
function Criteria25() {
  return (
    <div className="c25-inputFields-mainContainer">
      {/* Key Indicator: 2.5.1 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
          </div>
          <div className="c25xx-container">
            <h1 className="c25xx-Heading-style">
              <span className="c21xx-span-style">2.5.1.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-horizontalTable-heading-style">Year</th>
                <td id="2511-t1"></td>
                <td id="2511-t2"></td>
                <td id="2511-t3"></td>
                <td id="2511-t4"></td>
                <td id="2511-t5"></td>
              </tr>
              <tr>
                <th className="c25x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2511-t6"></td>
                <td id="2511-t7"></td>
                <td id="2511-t8"></td>
                <td id="2511-t9"></td>
                <td id="2511-t10"></td>
              </tr>
            </table>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c25x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c25x-verticalTable-heading3-style">
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
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 2.5.2 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.2: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
          </div>
          <div className="c25xx-container">
            <h1 className="c25xx-Heading-style">
              <span className="c21xx-span-style">2.5.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-horizontalTable-heading-style">Year</th>
                <td id="2521-t1"></td>
                <td id="2521-t2"></td>
                <td id="2521-t3"></td>
                <td id="2521-t4"></td>
                <td id="2521-t5"></td>
              </tr>
              <tr>
                <th className="c25x-horizontalTable-heading-style">
                  Number
                </th>
                <td id="2521-t6"></td>
                <td id="2521-t7"></td>
                <td id="2521-t8"></td>
                <td id="2521-t9"></td>
                <td id="2521-t10"></td>
              </tr>
            </table>
            <table className="c25x-table-style">
              <tr>
                <th className="c25x-verticalTable-heading1-style">
                File Description
                </th>
                <th className="c25x-verticalTable-heading2-style">
                File Template
                </th>
                <th className="c25x-verticalTable-heading3-style">
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
            </table>
          </div>
        </form>
      </div>

      {/* Key Indicator: 2.5.3 */}
      <div className="c25x-eachInputField-container">
        <form>
          <div className="c25x-label-textarea-container">
            <h1 className="c25x-heading-style">
              <span className="c25x-span-style">2.5.3: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <label htmlFor="253-t1" className="c25x-label-style">
              Write description in maximum of 1000 words
            </label>
            <textarea
              rows={6}
              className="c25x-textarea-style"
              id="253-t1"
            ></textarea>
          </div>
          <table className="c25x-table-style">
            <tr>
              <th className="c25x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c25x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c25x-verticalTable-heading3-style">
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
          </table>
        </form>
      </div>

      <div className="c25x-button-container">
        <button className="c25x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria25;
