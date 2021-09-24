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

const jobs = [
  {
    descriptions: [
      "Create memes using the latest memes template",
      "Resurrect outdated memes templates by changing wordings to reflect latest trend",
      "Able to tell joke without appearing trying too hard",
    ],
    requirements: [
      "Knowledge of latest memes template",
      "Creative but not destructive",
      "Balls to make fun of your boss",
    ],
    _id: "60f1bf2ddcd48a001f4f9e74",
    title: "Memer",
    department: "UI / UX Design",
    level: "experienced",
    summary:
      "The Design team plays an important role in Shopit. The team covers the entire range of product UI/UX design, including the user-growth, promotion, wallet and payment, checkout, retention, listings and users, search and recommendation etc. The team is also responsible for the branding visual identities and elements of Shopit, including logos, mascots, stickers, and internal physical products.",
    headcount: 20,
    createdAt: "2021-07-16T17:17:33.183Z",
    updatedAt: "2021-07-16T17:17:33.183Z",
    __v: 0,
  },
  {
    descriptions: [
      "Post random tech articles to keep the team updated on latest tech trends.",
      'Use emoji with conflicting message content, e.g. "I disagree with your opinion and I think that\'s stupid :)"',
      "Add Gif to make the chatroom seems exciting.",
    ],
    requirements: [
      "Knowledge of latest tech trends is mandatory",
      "Knowledge of best practices of Gif and Memes",
    ],
    _id: "60f1bf2ddcd48a001f4f9e6b",
    title: "Slack Chatter",
    department: "Engineering",
    level: "entry",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
    createdAt: "2021-07-16T17:17:33.170Z",
    updatedAt: "2021-07-16T17:17:33.170Z",
    __v: 0,
  },
  {
    descriptions: [
      "Groom yourself perfectly so that we can dazzle the candidates to work for us",
      "Apply the art of subtlety to attracts candiates without causing feeling of being cheated",
      'Post inspirational quotes and stories on LinkedIn. It is fine if there is no real info that you want to share, as long as you ends your post with "Agree?"',
    ],
    requirements: [
      "Good-looking is mandatory. Normal looking can be considered if you have a nice voice and good Photoshop skill (Instagram filter doesn't count, it's too common so everyone can tell at once).",
      "Good in writing email and bad in writing other stuffs. This is to attract candidates before they join and confuse them when they are hired.",
      "Genuine interest to other people and good in making others talking.",
    ],
    _id: "60f1bf2ddcd48a001f4f9e60",
    title: "Recruiter",
    department: "Human Resources",
    level: "experienced",
    summary:
      "The Human Resources teams at Shopit is what makes the Engineering teams here possible. By having an attractive appearance, HR attracts talents that wish to interact with them before they realize HR is working in different building in Shopit",
    headcount: 1,
    createdAt: "2021-07-16T17:17:33.155Z",
    updatedAt: "2021-07-16T17:17:33.155Z",
    __v: 0,
  },
  {
    descriptions: [
      'Add comments on GitHub issue with "+1", "This is not Stack Overflow", and "Closed because irrelevant"',
      "Push a commit everyday by removing/adding a space to make repository seems active.",
      "Copy paste entire content of a random logs file and use it to raise GitHub issue on competitor's repository to create the perception of bugginess of the library.",
    ],
    requirements: [
      "Master degree or outstanding writing skill is required.",
      "Good sense of humour.",
    ],
    _id: "60f1bf2ddcd48a001f4f9e57",
    title: "GitHub Issue Commentor",
    department: "Engineering",
    level: "internship",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
    createdAt: "2021-07-16T17:17:33.144Z",
    updatedAt: "2021-07-16T17:17:33.144Z",
    __v: 0,
  },
];

export const Careers = () => {
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
            fields={formData.fields}
          />
          <CareerListing
            jobs={jobs}
          />
        </div>
      </div>

  );
};