import React from 'react';

interface SudokuCellProps {
  value: number;
  onChange: (value: number) => void;
  isInitial: boolean;
  hasError: boolean;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange, isInitial, hasError }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : parseInt(e.target.value.slice(-1));
    if (isNaN(newValue) || newValue < 0 || newValue > 9) return;
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      className={`w-12 h-12 text-center text-xl border ${
        hasError ? 'border-red-500' : 'border-gray-300'
      } ${isInitial ? 'font-bold bg-gray-100' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      maxLength={1}
    />
  );
};

export default SudokuCell;