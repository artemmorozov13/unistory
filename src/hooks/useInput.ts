import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    resetValue,
  };
};

export default useInput;
