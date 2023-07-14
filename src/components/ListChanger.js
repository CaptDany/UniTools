import React, { useState } from 'react';
import "../stylesheets/styles.css";

function EmailListFormatter() {
  const [numbers, setNumbers] = useState('');
  const [formattedEmailList, setFormattedEmailList] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setNumbers(event.target.value);
  };

  const formatEmailList = () => {
    const numberList = numbers.split('\n');
    const formattedList = numberList.map(number => `st${number}@utr.edu.mx`);
    const formattedString = formattedList.join('; ');

    setFormattedEmailList(formattedString);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedEmailList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='maintc'>
      <textarea
        style={{width: "300px", height: "150px", padding: "10px", marginBottom: "10px", marginTop: "5%"}}
        value={numbers}
        onChange={handleInputChange}
        placeholder="Enter numbers separated by new lines"
      />
      <button onClick={formatEmailList}>Format Email List</button>
      <p className='result'>{formattedEmailList}</p>
      {formattedEmailList && (
        <button onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      )}
    </div>
  );
}

export default EmailListFormatter;