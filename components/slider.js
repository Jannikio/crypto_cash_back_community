"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SliderComponent() {
  const [tradingAmount, setTradingAmount] = useState(0);
  const feePercentage = 2;
  const savingsPercentage = 0.5;

  const [fees, setFees] = useState(0);
  const [savings, setSavings] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = value => {
    setSliderValue(value);
    setTradingAmount(value);
  };

  useEffect(() => {
    const calculatedFees = tradingAmount * feePercentage;
    const calculatedSavings = calculatedFees * savingsPercentage;

    setFees(calculatedFees);
    setSavings(calculatedSavings);
  }, [tradingAmount]);

  const marks = {
    0: '0',
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900',
    1000: '1000',
  };

  return (
    <div className="mt-8 mx-auto px-4 max-w-6xl">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4 text-gray-500">Calculate Your Savings on Trading Fees</h2>
      </div>
  
      <div className="text-left text-lg mb-2 text-gray-500">
        Your Monthly Trading Volume in Thousands
      </div>
      <div className="text-left text-lg mb-2 text-gray-500">
        $ {sliderValue} k
      </div>
  
      <Slider 
        className="mt-4"
        min={0} 
        max={1000} 
        marks={marks} 
        onChange={handleSliderChange} 
      />
  
      <div className="flex justify-between mt-8">
        <div className="w-1/2 pr-2">
          <div className="bg-red-500 p-2 rounded-md">
            <label className="text-lg font-bold text-white block">Your Current Monthly Trading Fees:</label>
            <input
              className="w-full text-left text-white font-bold bg-red-500 rounded-md text-lg"
              type="text"
              value={`$ ${fees}`}
              readOnly
            />
          </div>
        </div>
  
        <div className="w-1/2 pl-2">
          <div className="bg-green-500 p-2 rounded-md">
            <label className="text-lg font-bold text-white block">Your Monthly Savings:</label>
            <input
              className="w-full text-left text-white font-bold bg-green-500 rounded-md text-lg"
              type="text"
              value={`$ ${savings}`}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  
}





