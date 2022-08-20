import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, EmptyData } from 'dan-components';


function criteriaTrail() {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  return (
    <form className="sub-card-container">
                <div className="mini-card-container-1">
                    <label id="2" className="label-1" for="C311-1">3.1.1:  Grants received from Government and non-government agecies for research products, endownments, Chairs in the institution during the last five years (INR in Lakhs)</label>
                    <input id="C311-1" class="input-1" type="text"/>
                </div>
                <div className="mini-card-container-2">
                    <label className="label-1" for="firstTable">3.1.1.1:  Total Grants from Government and non-government agencies for research projects, endownments, Chairs in the institution during the last five years (INR in Lakhs)</label>
                    <table id="firstTable" className="table-1" cellPadding={4} cellSpacing={0} border={1}>
                        <tbody>
                        <tr>
                            <th className="table-headings">2018-19</th>
                            <th className="table-headings">2017-18</th>
                            <th className="table-headings">2016-17</th>
                            <th className="table-headings">2015-16</th>
                            <th className="table-headings">2014-15</th>
                        </tr>
                        <tr>
                            <td><input className="input-2" type="text"/> </td>
                            <td><input className="input-2" type="text"/> </td>
                            <td><input className="input-2" type="text"/> </td>
                            <td><input className="input-2" type="text"/> </td>
                            <td><input className="input-2" type="text"/> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <table width={1000} className="table-2" border={2}>
                    <tr>
                        <th width={300} className="table-2-heads">File Description</th>
                        <th width={200} className="table-2-heads">Template</th>
                        <th width={500} className="table-2-heads">Documents</th>
                    </tr>
                    <tr>
                        <td className="table-2-rows">List of endownments / projects with details of grants <span class="span-style-2">*</span></td>
                        <td className="table-2-rows">Data Template</td>
                        <td className="table-2-rows">
                            <button className="button-style">Upload</button>
                            <i className="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-2-rows">e-copies of th egrant award letters for sponsered research projects / endownments</td>
                        <td className="table-2-rows"></td>
                        <td className="table-2-rows">
                            <button className="button-style">Upload</button>
                            <i className="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-2-rows">Any additional information</td>
                        <td className="table-2-rows"></td>
                        <td className="table-2-rows">
                            <button className="button-style">Upload</button>
                            <i className="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                </table>
            </form>
  );
}

export default criteriaTrail;
