import React, { useState } from "react";
import { Form } from '../components/form';

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
        {/*
          <ul className="md:flex-1 space-y-3" id="career-list">
            <li className="js-career-item">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="
                      min-w-0
                      flex-1
                      sm:flex sm:items-center sm:justify-between
                    ">
                    <div>
                      <div className="
                          text-sm
                          leading-5
                          font-medium
                          text-pink-600
                          truncate
                        ">
                        Memer
                        <span className="ml-1 font-normal text-gray-500">in UI / UX Design
                        </span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            leading-5
                            text-gray-500
                          ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg><span>Level: Experienced </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                      ml-5
                      flex-shrink-0
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                    ">
                    <button type="button" className="
                        js-delete-btn
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      " title="Delete">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li className="js-career-item">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="
                      min-w-0
                      flex-1
                      sm:flex sm:items-center sm:justify-between
                    ">
                    <div>
                      <div className="
                          text-sm
                          leading-5
                          font-medium
                          text-pink-600
                          truncate
                        ">
                        Slack Chatter
                        <span className="ml-1 font-normal text-gray-500">in Engineering
                        </span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            leading-5
                            text-gray-500
                          ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg><span>Level: Entry </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                      ml-5
                      flex-shrink-0
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                    ">
                    <button type="button" className="
                        js-delete-btn
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      " title="Delete">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li className="js-career-item">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="
                      min-w-0
                      flex-1
                      sm:flex sm:items-center sm:justify-between
                    ">
                    <div>
                      <div className="
                          text-sm
                          leading-5
                          font-medium
                          text-pink-600
                          truncate
                        ">
                        Janitor
                        <span className="ml-1 font-normal text-gray-500">in Health/Wellfare
                        </span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            leading-5
                            text-gray-500
                          ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg><span>Level: Experienced </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                      ml-5
                      flex-shrink-0
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                    ">
                    <button type="button" className="
                        js-delete-btn
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      " title="Delete">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li className="js-career-item">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="
                      min-w-0
                      flex-1
                      sm:flex sm:items-center sm:justify-between
                    ">
                    <div>
                      <div className="
                          text-sm
                          leading-5
                          font-medium
                          text-pink-600
                          truncate
                        ">
                        GitHub Issue Commentor
                        <span className="ml-1 font-normal text-gray-500">in Engineering
                        </span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="
                            flex
                            items-center
                            text-sm
                            leading-5
                            text-gray-500
                            gap-2
                          ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg><span>Level: Internship</span>
                          <span className="
                              inline-flex
                              items-center
                              px-2.5
                              py-0.5
                              rounded-full
                              text-xs
                              font-medium
                              bg-green-100
                              text-green-800
                            ">
                            Student-friendly
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                      ml-5
                      flex-shrink-0
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                    ">
                    <button type="button" className="
                        js-delete-btn
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      " title="Delete">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          */}
        </div>
      </div>

  );
};