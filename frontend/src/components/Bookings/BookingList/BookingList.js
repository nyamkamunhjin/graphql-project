import React from 'react';
import './BookingList.css';

const bookingList = props => (
  <ul className="bookings-list">
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className="bookings-item">
          <div className="bookings-item-data">
            {booking.event.title} -
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings-item-actions">
            <button className="btn-cancel" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
