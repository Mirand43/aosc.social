import React, { useState } from "react";

function LanguageSelector() {
  const [selectedValue, setSelectedValue] = useState("0");

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  return (
    <div>
      <select name="language" id="languageSelect" value={selectedValue} onChange={handleSelectChange}>
        <option value="0">PT</option>
        <option value="1">EN</option>
        <option value="2">FR</option>
      </select>
    </div>
  );
}

export default LanguageSelector;