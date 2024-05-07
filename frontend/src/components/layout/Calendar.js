import React, { useState } from 'react';
import '../../styles/Calendar.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const holidays = {
    "2024-01-01": "New Year's Day",
    "2024-01-15": "Martin Luther King Jr. Day",
    "2024-02-19": "Presidents' Day",
    "2024-05-27": "Memorial Day",
    "2024-07-04": "Independence Day",
    "2024-09-02": "Labor Day",
    "2024-10-14": "Columbus Day",
    "2024-11-11": "Veterans Day",
    "2024-11-28": "Thanksgiving Day",
    "2024-12-25": "Christmas Day"
};

const events = {
    "2024-05-07": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-05-13": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-05-14": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-05-16": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-05-20": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-05-21": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-05-28": "City Council fourth Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-06-04": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-06-10": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-06-11": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-06-17": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-06-18": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-06-20": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-06-24": "City Council fourth Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-07-02": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-07-08": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-07-09": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
    "2024-07-15": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-07-16": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
    "2024-07-18": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall"
};

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());

    const renderCalendar = () => {
        const firstDay = new Date(currentYear, currentMonth).getDay();
        const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

        let days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<td key={`empty-${i}`} className="empty"></td>);
        }

        for (let date = 1; date <= daysInMonth; date++) {
            const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
            const eventDetail = events[dateStr];
            const holidayDetail = holidays[dateStr];
            const tooltipText = eventDetail || holidayDetail;
            days.push(
                <td key={date} className={tooltipText ? 'has-event' : ''} title={tooltipText}>
                    {date}
                </td>
            );
        }

        let rows = [];
        let cells = [];

        days.forEach((day, i) => {
            if (i % 7 !== 0 || i === 0) {
                cells.push(day);
            } else {
                rows.push(<tr key={i}>{cells}</tr>);
                cells = [];
                cells.push(day);
            }
            if (i === days.length - 1) {
                rows.push(<tr key={i + 1}>{cells}</tr>);
            }
        });

        return rows;
    };

    return (
        <div className="calendar-container">
            <div className="header">
                <button onClick={() => setCurrentMonth(currentMonth - 1)}>&#10094;</button>
                <span>{monthNames[currentMonth]} {currentYear}</span>
                <button onClick={() => setCurrentMonth(currentMonth + 1)}>&#10095;</button>
            </div>
            <table className="calendar">
                <thead>
                    <tr>{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <th key={day}>{day}</th>)}</tr>
                </thead>
                <tbody>
                    {renderCalendar()}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
