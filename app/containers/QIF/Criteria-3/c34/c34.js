import React from 'react';
import './c34-style.css';

// Promotion of Research and Facilities
function Criteria34() {
  return (
    <div className="c34-inputFields-mainContainer">
      {/* Key Indicator: 3.4.1 */}
      <div className="c34x-eachInputField-container">
        <form>
          <div className="c34x-label-textarea-container">
            <h1 className="c34x-heading-style">
              <span className="c34x-span-style">3.4.1: </span>
              The institution ensures implementation of its stated code of
              Ethics for reseach through the following:
            </h1>
            <p className="c34x-para-style">
              1. Inclusion of reaserch ethics in the research methodology
              <br />
              2. Presence of ethics committee
              <br />
              3. Plagiarism check through software
              <br />
              4. Research advisory committee
            </p>
            <div className="c34x-radio-container">
              <div className="c34x-radio-subContainer">
                <div className="c34x-eachRadio-container">
                  <input name="341options" id="341-t1" type="radio" />
                  <label className="c34x-radioLabel-style" for="341-t1">
                    All of the above
                  </label>
                </div>
                <div className="c34x-eachRadio-container">
                  <input name="341options" id="341-t2" type="radio" />
                  <label className="c34x-radioLabel-style" for="341-t2">
                    Any three of the above
                  </label>
                </div>
                <div className="c34x-eachRadio-container">
                  <input name="341options" id="341-t3" type="radio" />
                  <label className="c34x-radioLabel-style" for="341-t3">
                    Any two of the above
                  </label>
                </div>
              </div>
              <div className="c34x-radio-subContainer">
                <div className="c34x-eachRadio-container">
                  <input name="341options" id="341-t4" type="radio" />
                  <label className="c34x-radioLabel-style" for="341-t4">
                    Any one of the above
                  </label>
                </div>
                <div className="c34x-eachRadio-container">
                  <input name="341options" id="341-t5" type="radio" />
                  <label className="c34x-radioLabel-style" for="341-t5">
                    None of the above
                  </label>
                </div>
              </div>
            </div>
          </div>
          <table className="c34x-table-style">
            <tr>
              <th className="c34x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c34x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c34x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>
                Code of ethics for research document,Research document,Research
                Advisory Committee and ethics committee constitution and list of
                members on these committees,softwares used for plagiarism
                check,link to website
              </td>
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
        </form>
      </div>

      {/* Key Indicator: 3.4.2 */}
      <div className="c34x-eachInputField-container">
        <form>
          <div className="c34x-container">
            <h1 className="c34x-heading-style">
              <span className="c34x-span-style">3.4.2.1: </span>
              The institution provides seed money to its teachers for research.
            </h1>
          </div>
          <div className="c34xx-container">
            <h1 className="c34xx-Heading-style">
              <span className="c34xx-span-style">3.1.2.1: </span>
              The amount of seed money provided by institution to its teachers
              for research year wise during last five years (INR in lakhs)
            </h1>

            <table className="c34x-table-style">
              <tr>
                <th className="c34x-horizontalTable-heading-style">Year</th>
                <td id="3421-t1"></td>
                <td id="3421-t2"></td>
                <td id="3121-t3"></td>
                <td id="3121-t4"></td>
                <td id="3121-t5"></td>
              </tr>
              <tr>
                <th className="c31x-horizontalTable-heading-style">
                  INR in lakhs
                </th>
                <td id="3121-t6"></td>
                <td id="3121-t7"></td>
                <td id="3121-t8"></td>
                <td id="3121-t9"></td>
                <td id="3121-t10"></td>
              </tr>
            </table>

            <table className="c34x-table-style">
              <tr>
                <th className="c34x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c34x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c34x-verticalTable-heading3-style">
                  Documents upload
                </th>
              </tr>
              <tr>
                <td>URL to the research page on HEI web site</td>
                <td></td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  List of phD scholars and their details like name of the
                  guide,title of thesis,year of award etc
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

      {/* Key Indicator: 3.4.3 */}
      <div className="c34x-eachInputField-container">
        <form>
          <div className="c34x-container">
            <h1 className="c34x-heading-style">
              <span className="c34x-span-style">3.4.3: </span>
              Number of resrearch papers per teachers in the journals notified
              on UGC website during the last five years
            </h1>
          </div>
          <div className="c34xx-container">
            <h1 className="c34xx-Heading-style">
              <span className="c34xx-span-style">3.4.3.1: </span>
              The number of research papers in the journals notifies on UGC
              website during the last five years
            </h1>
            <table className="c34x-table-style">
              <tr>
                <th className="c34x-horizontalTable-heading-style">Year</th>
                <td id="3431-t1"></td>
                <td id="3431-t2"></td>
                <td id="3431-t3"></td>
                <td id="3431-t4"></td>
                <td id="3431-t5"></td>
              </tr>
              <tr>
                <th className="c34x-horizontalTable-heading-style">Number</th>
                <td id="3431-t6"></td>
                <td id="3431-t7"></td>
                <td id="3431-t8"></td>
                <td id="3431-t9"></td>
                <td id="3431-t10"></td>
              </tr>
            </table>

            <table className="c34x-table-style">
              <tr>
                <th className="c34x-verticalTable-heading1-style">
                  File Description
                </th>
                <th className="c34x-verticalTable-heading2-style">
                  File Template
                </th>
                <th className="c34x-verticalTable-heading3-style">
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
                  List of research papers by title,author,department,name and
                  year of publication
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
      <div className="c34x-button-container">
        <button className="c34x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria34;
