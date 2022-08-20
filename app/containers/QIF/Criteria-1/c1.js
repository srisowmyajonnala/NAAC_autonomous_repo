import React from "react";
import "./c1-style.css";

const C1 = () => {
  return (
    <div class="container">
      <div class="heading-container">
        <p class="heading-1">
          <span class="span-style">1.1</span> &nbsp; Curricular Planning and
          Implementation
        </p>
      </div>

      <div class="margin-container">
        <div class="heading-2">
          {" "}
          <b>
            {" "}
            1.1.1: The Instition ensures effective curricum delivery through a
            well planned and documented process{" "}
          </b>
          <button class="btn help">Help</button>{" "}
        </div>
        <textarea cols="40" rows="10" class="txtbox"></textarea>
        <hr></hr>
        <table class="adjustment-9">
          <tr class="color-1">
            <th> File Description</th>
            <th> Template </th>
            <th> Documents </th>
          </tr>
          <tr>
            <td>Upload any additional information</td>
            <td></td>
            <td>
              <button class="btn help">Upload</button>&nbsp;
              <span>&#63;</span>
            </td>
          </tr>
          <tr>
            <td>Paste link for additional information </td>
            <td></td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>

      <div class="margin-container">
        <div class="heading-2">
          {" "}
          <b>
            {" "}
            1.1.2: The institution adheres to academic calendar including for
            the conduct of CIE
          </b>
          <button class="btn help">Help</button>{" "}
        </div>
        <textarea cols="40" rows="10" class="txtbox"></textarea>
        <div class="text-style">
          <b> *Atleast 100 characters and within 500 words.</b>
        </div>
        <hr></hr>
        <table class="adjustment-9">
          <tr class="color-1">
            <th> File Description</th>
            <th> Template </th>
            <th> Documents </th>
          </tr>
          <tr>
            <td>Upload any additional information</td>
            <td></td>
            <td>
              <button class="btn help">Upload</button>&nbsp;
              <span>&#63;</span>
            </td>
          </tr>
          <tr>
            <td>Paste link for additional information </td>
            <td></td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>
      <div class="margin1-container">
        <div class="flex-1">
          <div>
            {" "}
            <b>
              {" "}
              1.1.3: Teachers of the institution participates in following
              activites related to curriculum development and assessment of the
              affilating University and/are represent on the following acedemic
              bodies the last five years.
              <ul class="no-bullets">
                <li> 1.Adminitration</li> <li>2.Finance and Accounts</li>{" "}
                <li> 3.Student Admission and Support </li>{" "}
                <li> 4.Examination </li>{" "}
              </ul>{" "}
            </b>
          </div>
          <div>
            <table class ="table-3">
             <tr>
              <td><input
              type="radio"
              id="allof the above"
              name="fav_language"
              value="A.All of the above"
            />
              <label for="A.all of the above">A.All of the above</label></td>
            <td> <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label for="html">B.Any 3 of the above</label> </td>
            </tr>
           <tr><td><input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label for="html">C.Any 2 of the above</label>{" "} </td>
          
            {" "}
            <td> <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label for="html">D.Any 1 of the above</label> </td> </tr>
            <tr> <td> <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">E.None of the above</label> </td> </tr>
            </table>
          </div>
        </div>

        <table class="adjustment-9">
          <tr class="color-1">
            <th> File Description</th>
            <th> Template </th>
            <th> Documents </th>
          </tr>
          <tr>
            <td>
              Institutional data in prescribed format{" "}
              <span class="red-star">★</span>
            </td>
            <td>
              <a href="url">Data Template </a>
            </td>
            <td>
              <button class="btn help">Upload</button>&nbsp;
              <span>&#63;</span>
            </td>
          </tr>
          <tr>
            <td>
              Details of participation of teacher in various bodies/activities
              provided as a response to the metric
            </td>
            <td> </td>
            <td>
              <button class="btn help">Upload</button>&nbsp;
              <span>&#63;</span>
            </td>
          </tr>

          <tr>
            <td>Any additional information</td>
            <td> </td>

            <td>
              <button class="btn help">Upload</button>&nbsp;
              <span>&#63;</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default C1;
