import React from "react";

//data need in the form field  AND HERE THE PROPS ARE PASSED
const FormField = ({
  lableName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriceme,
  handleSupriceme,
}) => {
  return (
    <div>
      <div className=" flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className=" font-medium block text-sm text-gray-900 "
        >
          {lableName}
        </label>
        {isSurpriceme && (
          <button
            type="button"
            onClick={handleSupriceme}
            className=" font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-md text-black hover:bg-[#e0e0e5] "
          >
            Surprise me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className=" bg-gray-50 border border-gray-300 rounded-md py-2 px-3 block w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-[#3b82f6] focus:border-[#3b82f6]"
      />
    </div>
  );
};

export default FormField;
