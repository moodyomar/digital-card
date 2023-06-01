import React, { useState, useEffect } from 'react';
import { USER_URI, TOKEN } from '../../utils/config'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState('');
  const [availableHours, setAvailableHours] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableHours();
    }
  }, [selectedDate]);

  const fetchAvailableHours = async () => {
    const date = selectedDate.toISOString().split('T')[0];
    const rangeStart = `${date}T00:01:00.000000Z`;
    const rangeEnd = `${date}T23:59:59.000000Z`;
  
    const response = await fetch(
      `https://api.calendly.com/user_busy_times?start_time=${encodeURIComponent(
        rangeStart
      )}&end_time=${encodeURIComponent(rangeEnd)}&user=${encodeURIComponent(USER_URI)}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  
    if (response.ok) {
      const data = await response.json();
      const availableHours = data.collection.map((item) => {
        const startTime = new Date(item.start_time).toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
        const endTime = new Date(item.end_time).toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
        return {
          start_time: startTime,
          end_time: endTime,
        };
      });
      setAvailableHours(availableHours);
    } else {
      console.error('Failed to fetch available hours.');
    }
  };
    

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedHour('');
  };

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleInputFocus = (e) => {
    e.target.blur(); // Blur the input field to prevent keyboard from popping up
  };

  return (
    <div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" // Customize the date format as per your preference
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
              <option value="12:45">12:45</option>
              <option value="12:45">13:35</option>
            </select>
          </div>
        )}
      </div>
      {selectedDate && selectedHour && (
        <p>
          Selected Date and Hour: {selectedDate.toLocaleDateString()} {selectedHour}
        </p>
      )}
    </div>
  );
};

export default DateTimePicker;
