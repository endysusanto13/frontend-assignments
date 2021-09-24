import * as React from "react";

const WorkingBagIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
      <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
  </svg>
  );
};

const DeleteButton = () => {
  return(
    <button 
      type="button" 
      className="js-delete-btn p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out" 
      title="Delete"
    >
      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>
  );
};

const Job = (props) => {
  return(
    <li className="js-career-item">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-sm leading-5 font-medium text-pink-600 truncate">
                {props.jobTitle}
                <span className="ml-1 font-normal text-gray-500">
                  in {props.department}
                </span>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center gap-2 text-sm leading-5 text-gray-500">
                  <WorkingBagIcon />
                  <span>
                    Level: {props.level}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0 inline-flex items-center justify-center gap-2">
            <DeleteButton />
          </div>
        </div>
      </div>
      </li>
  );
};

export const CareerListing = (props) => {
  return(
    <ul className="md:flex-1 space-y-3" id="career-list">
      {props.jobs.map((job, index) => (
        <Job
          jobTitle={job.title}
          department={job.department}
          level={job.level}
        />
      ))}
    </ul>
  );
};