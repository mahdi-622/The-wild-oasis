"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter((booking) => booking.id !== bookingId)
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6 w-full">
      {optimisticBookings.map((booking) => (
        <li key={booking.id} className="w-full">
          <ReservationCard booking={booking} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ReservationList;
