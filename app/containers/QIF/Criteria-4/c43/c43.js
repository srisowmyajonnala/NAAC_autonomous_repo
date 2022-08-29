import React from 'react';
import './c43-style.css';

// Promotion of Research and Facilities
function Criteria43() {
  return (
    <div className="c43-inputFields-mainContainer">
      {/* Key Indicator: 4.3.1 */}
      <div className="c43x-eachInputField-container">
        <form>
          <div className="c43x-label-textarea-container">
            <h1 className="c43x-heading-style">
              <span className="c43x-span-style">4.3.1: </span>
              Institution has an IT policy covering wi-fi, cyber security, etc., and allocated budget  for  updating its IT facilities
            </h1>
          </div>
          <table className="c43x-table-style">
            <tr>
              <th className="c43x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c43x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c43x-verticalTable-heading3-style">
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

      {/* Key Indicator: 4.3.2 */}
      <div className="c43x-eachInputField-container">
        <form>
          <div className="c43x-container">
            <h1 className="c43x-heading-style">
              <span className="c43x-span-style">4.3.2: </span>
              Student - Computer ratio(Data for the latest completed academic year) </h1>
          </div>
          <table className="c43x-table-style">
            <tr>
              <th className="c43x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c43x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c43x-verticalTable-heading3-style">
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
          </table>
        </form>
      </div>

      {/* Key Indicator: 4.3.3 */}
      <div className="c43x-eachInputField-container">
        <form>
          <div className="c43x-label-textarea-container">
            <h1 className="c43x-heading-style">
              <span className="c43x-span-style">4.3.3: </span>
              Bandwidth of internet connection in the Institution
            </h1>
          </div>
          <table className="c43x-table-style">
            <tr>
              <th className="c43x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c43x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c43x-verticalTable-heading3-style">
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
              <td>Details of available bandwidth of internet connection in the Institution </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="c43x-button-container">
        <button className="c43x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria43;
