import React from 'react';
import './c31-style.css';

function Criteria31() {
  return (
    <div className="criteria3-inputFields-mainContainer">
      <div className="criteria3-eachInputField-container">
        <form>
          <div className="criteria3-eachInputField-label-textarea-container">
            <h1 className="criteria3-eachInputField-description-style">
              <span className="criteria3-span-style">3.1.1: </span>
              The institution Research facilities are frequently updated and
              there is well defined policy for promotion of research which is
              uploaded on the institutional website and implemented.
            </h1>
            <label
              htmlFor="3.1.1"
              className="criteria3-eachInputField-label-style"
            >
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="criteria3-eachInputField-textarea-style"
              id="3.1.1"
            ></textarea>
          </div>
          <table className="criteria3-table-style">
            <tr>
              <th className="criteria3-table-heading1-style">
                File Description
              </th>
              <th className="criteria3-table-heading2-style">File Template</th>
              <th className="criteria3-table-heading3-style">
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
            <tr>
              <td>
                URL of Policy document on promotion of research uploaded on
                website
              </td>
              <td></td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Criteria31;
