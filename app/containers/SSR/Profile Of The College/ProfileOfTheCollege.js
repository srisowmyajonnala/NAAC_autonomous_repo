import React from 'react';
import BasicInfo from './BasicInformation/BasicInfo.js';
import AccademicInfo from './AcademicInformation/AcademicInfo.js';
import EvaluativeReport from './EvaluativeReportOfTheDepartments/EvaluativeReport.js';

function ProfileOfTheCollege() {
  return (
    <div>
      <BasicInfo />
      <AccademicInfo />
      <EvaluativeReport />
    </div>
  );
}

export default ProfileOfTheCollege;
