import React, { useState } from "react";
import { Form } from '../components/form';
import { CareerListing } from '../components/career-listing';


const formData = {
    "formID": "career-form",
    "title": "Add Job Posting",
    "submitBtnTitle": "Add new career",
    "submitBtnName": "ADD",
    "fields": [
                {
                  "label": "Job Title",
                  "inputName": "job-title",
                  "inputID": "job-title",
                  "inputType": {
                                "type": "text",
                               }
                },
                {
                  "label": "Level",
                  "inputName": "job-level",
                  "inputID": "job-level",
                  "inputType": {
                                "type": "select",
                                "options": [
                                            {
                                              "value": "internship",
                                              "label": "Internship"
                                            },
                                            {
                                              "value": "part-time",
                                              "label": "Part Time"
                                            },
                                            {
                                              "value": "entry",
                                              "label": "Entry"
                                            },
                                            {
                                              "value": "experienced",
                                              "label": "Experienced"
                                            },
                                            {
                                              "value": "manager",
                                              "label": "Manager"
                                            }
                                          ]
                                },
                },
                {
                  "label": "Department",
                  "inputName": "job-department",
                  "inputID": "job-department",
                  "inputType": {
                                "type": "text",
                                "placeholder": "e.g. Engineering"
                               }
                },
                {
                  "label": "Summary",
                  "inputName": "job-summary",
                  "inputID": "job-summary",
                  "inputType": {
                                "type": "textarea",
                                "rows": "4"
                               }
                },
                {
                  "label": "Headcount",
                  "inputName": "headcount",
                  "inputID": "headcount",

                  "inputType": {
                                "type": "increment-button",
                               }
                }
              ]
};

const jobsData = [
  {
    _id: "1",
    title: "Memer",
    level: "experienced",
    department: "UI / UX Design",
    summary:
      "The Design team plays an important role in Shopit. The team covers the entire range of product UI/UX design, including the user-growth, promotion, wallet and payment, checkout, retention, listings and users, search and recommendation etc. The team is also responsible for the branding visual identities and elements of Shopit, including logos, mascots, stickers, and internal physical products.",
    headcount: 20,
  },
  {
    _id: "2",
    title: "Slack Chatter",
    level: "entry",
    department: "Engineering",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
  },
  {
    _id: "3",
    title: "Recruiter",
    level: "experienced",
    department: "Human Resources",
    summary:
      "The Human Resources teams at Shopit is what makes the Engineering teams here possible. By having an attractive appearance, HR attracts talents that wish to interact with them before they realize HR is working in different building in Shopit",
    headcount: 1,
  },
  {
    _id: "4",
    title: "GitHub Issue Commentor",
    level: "internship",
    department: "Engineering",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
  },
];

let id = 5;

export const Careers = () => {
  const [jobs, setJobs] = useState(jobsData);

  // Create an array to store form values. This array will be passed to component children
  let initFieldValues = ["", "Internship", "", "", 1];
  const [fieldValues, setFieldValues] = useState(initFieldValues);
  

  const addJob = (jobInfoArr) => {
    const newJobs = [...jobs, {
      _id: id.toString(),
      title: jobInfoArr[0],
      level: jobInfoArr[1],
      department: jobInfoArr[2],
      summary: jobInfoArr[3],
      headcount: jobInfoArr[4],
    }];
    setJobs(newJobs);
    id++
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldValues.every((field) => { return (field !== "" && field !== 0) })) {
      addJob(fieldValues)
    }
    else {alert("Please enter valid values in the form and do not leave any blanks.")}
  };

  const updateFieldValues = (value, index) => {
    const newValues= [...fieldValues];
    newValues.splice(index, 1, value);
    setFieldValues(newValues);
  }

  const removeJob = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };
    
    return (
      <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
        <div className="mb-8">
          <div>
            <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Form 
            formID={formData.formID}
            title={formData.title}
            submitBtnTitle={formData.submitBtnTitle}
            submitBtnName={formData.submitBtnName}
            handleSubmit={handleSubmit}
            fields={formData.fields}
            updateFieldValues={updateFieldValues}
          />
          <CareerListing
            jobs={jobs}
            removeJob={removeJob}
          />
        </div>
      </div>

  );
};