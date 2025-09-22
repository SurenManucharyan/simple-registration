import React, { memo } from "react";

export const Input = memo(function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 mb-3 border rounded-md text-black"
    />
  );
});

export default Input;
