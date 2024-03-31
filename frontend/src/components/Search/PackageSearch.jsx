import React from 'react';
import { Input } from '@mui/material';

const PackageSearch = ({ value, onChange, placeholder }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default PackageSearch;
