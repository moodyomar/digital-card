import React, { useState } from 'react';
import {EVENT_TYPE_ID, TOKEN, V1_API_Key} from '../../utils/config'
import "./Calendar.css"
import DatePickerComponent from './Datepicker';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const bookAppointment = async () => {
        // Make API call to Calendly's create event endpoint
        const response = await fetch('https://api.calendly.com/scheduled_events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`, // Replace with your Calendly API token
                'X-TOKEN': `${V1_API_Key}` // Replace with your Calendly V1 API Key
            },
            body: JSON.stringify({
                event_type: `${EVENT_TYPE_ID}`, // Replace with your Calendly event type ID
                start_time: selectedDate.toISOString(),
                end_time: selectedDate.toISOString(),
                timezone: 'Asia/Jerusalem', // Replace with your desired timezone
            })
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            console.log('Appointment booked successfully!', data);
        } else {
            console.error('Failed to book appointment.');
        }
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div>
                <h2>عين الان موعد اونلاين</h2>
                <p>أختار التاريخ والساعه المتاحه:</p>
                <DatePickerComponent handleDateClick={handleDateClick} />
            </div>
            {selectedDate && (
                <div>
                    <p>التاريخ المختار: {selectedDate.toLocaleDateString()}</p>
                    <button onClick={bookAppointment}>احجز على الموعد</button>
                </div>
            )}
        </div>
    );
};

export default Calendar;
