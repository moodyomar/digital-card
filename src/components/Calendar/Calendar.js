import React, { useState } from 'react';
import "./Calendar.css"
import DatePickerComponent from './Datepicker';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div>
                <h2>عين الان موعد اونلاين</h2>
                <p>أختار التاريخ والساعه المتاحه:</p>
                <DatePickerComponent
                    handleDateClick={handleDateClick}
                    selectedDate={selectedDate} />
            </div>
        </div>
    );
};

export default Calendar;
