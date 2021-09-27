import React from "react";

/** 
  * This component form is designed to be very general to ensure that it can be reused at different type of pages.
  * Number of inputs, type of inputs, etc will be defined in variable under 'pages' folder.
*/

const Field = (props) => {

  return(
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
      <label 
        htmlFor={props.inputName} 
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {props.label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <Input 
          name={props.inputName}
          id={props.inputID}
          inputType={props.inputType}
          updateFieldValues={props.updateFieldValues}
          index={props.index}
        />
      </div>
    </div>
  );
};

const Input = (props) => {
  switch(props.inputType.type) {
    case "text":
      return(
        <input 
          type="text" 
          name={props.name}
          id={props.id}
          placeholder={props.inputType.placeholder}
          required="" 
          onChange={(e) => {
            props.updateFieldValues(e.target.value, props.index)
          }}
          className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        />
      );
    case "select":
      return(
        <select 
          name={props.name}
          id={props.id}
          required=""
          onChange={(e) => {
            props.updateFieldValues(e.target.value, props.index)
          }}
          className=" block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
        >
          {props.inputType.options.map((option, index) => (
            <option 
              value={option.num}
              key={option.value.toString()}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    case "textarea":
      return(
        <textarea 
          name={props.name}
          id={props.id}
          rows={props.inputType.rows} 
          required="" 
          onChange={(e) => {
            props.updateFieldValues(e.target.value, props.index)
          }}
          className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md">
        </textarea>
      );
    case "increment-button":
      return(
        <NumButton
          id={props.id}
          updateFieldValues={props.updateFieldValues}
          index={props.index}
        />
      );
    default:
  }
};

const NumButton = (props) => {
  const [num, setNum] = React.useState(1);
    return(
      <React.Fragment>
        <div className="relative w-32">
          <button 
            type="button" 
            className=" absolute left-0 inset-y-0 px-1.5 text-gray-400" 
            id={`${props.id}-minus-btn`}
            onClick={() => {
              if(num > 0) {
                setNum(num - 1);
                props.updateFieldValues(num - 1, props.index);
              };
              }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M20 12H4"
              />
            </svg>
          </button>
          <input 
            type="text" 
            name="headcount" 
            id={props.id}
            required="" 
            className=" block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md" 
            value={num}
            onChange={(ev) => {
              const num = Number(ev.target.value);
              if (!isNaN(num)) {
                setNum(num);
              }
              props.updateFieldValues(num, props.index)
            }}
            />
          <button 
            type="button" 
            className=" absolute right-0 inset-y-0 px-1.5 text-gray-400" 
            id={`${props.id}-plus-btn`}
            onClick={() => {
              setNum(num + 1)
              props.updateFieldValues(num + 1, props.index)
              }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        {num <= 0 && (
          <div 
            id={`${props.id}-error`}
            className="text-red-500 text-xs pt-1"
          >
            Must be at least 1
          </div>
        )}
        </React.Fragment>
  );
};

const SubmitButton = (props) => {
  return(
    <button 
      title={props.title}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
      {props.name}
    </button>
  );
};

export const Form = (props) => {
  return (
    <div className="md:w-1/2">
      <form id={props.formID} onSubmit={props.handleSubmit}>
        <div className="
            bg-white
            overflow-hidden
            shadow
            rounded-lg
            divide-y divide-gray-200
          ">
          <div className="px-4 py-5 sm:px-6 text-lg">{props.title}</div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-5">
              {props.fields.map((field, index) => (
                <Field 
                  label={field.label}
                  inputType={field.inputType}
                  inputName={field.inputName}
                  inputID={field.inputID}
                  index={index}
                  updateFieldValues={props.updateFieldValues}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="px-4 py-4 sm:px-6 text-right">
            <SubmitButton 
              title={props.submitBtnTitle}
              name={props.submitBtnName}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
