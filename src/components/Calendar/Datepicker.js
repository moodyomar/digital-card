import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ selectedDate, handleDateClick }) => {
  const [selectedHour, setSelectedHour] = useState('');

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleInputFocus = (e) => {
    e.target.blur(); // Blur the input field to prevent the keyboard from popping up
  };

  const bookAppointment = async () => {
    // Make API call to create an event based on the selected date and hour
  };

  const availableHours = [
    { "start_time": "9:00" },
    { "start_time": "9:45" },
    { "start_time": "10:00" },
    { "start_time": "10:45" },
    { "start_time": "11:00" },
    { "start_time": "11:45" },
  ];

  return (
    <div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateClick}
          dateFormat="dd/MM/yyyy"
          placeholderText="اختار التاريخ هنا"
          className='date-picker'
          onFocus={handleInputFocus}
        />
        {selectedDate && (
          <div>
            <select value={selectedHour} onChange={handleHourChange} className='hour-picker'>
              <option value="">اختار الساعة المتاحة</option>
              {availableHours.map((hour) => (
                <option key={hour.start_time} value={hour.start_time}>
                  {hour.start_time}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {selectedDate && selectedHour && (
        <div style={{textAlign:'center'}}>
          <p>التاريخ المختار: {selectedDate.toLocaleDateString()}</p>
          <p>الساعة المختارة: {selectedHour}</p>
          <button className='book-button' onClick={bookAppointment}>احجز على الموعد</button>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
