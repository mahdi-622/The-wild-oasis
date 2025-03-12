"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    numNights,
    startDate,
    endDate,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="bg-primary-900 text-primary-300 rounded-lg shadow-lg overflow-hidden">
      {/* User Info */}
      <div className="bg-primary-800 px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-10 w-10 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {/* Form */}
      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="p-6 space-y-6"
      >
        <div>
          <label htmlFor="numGuests" className="block text-lg">
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full bg-primary-200 text-primary-800 p-3 rounded-md"
          >
            <option value="">Select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hasBreakfast" className="block text-lg">
            Do you want breakfast?
          </label>
          <select
            name="hasBreakfast"
            id="hasBreakfast"
            className="w-full bg-primary-200 text-primary-800 p-3 rounded-md"
          >
            <option value="false">I do not want breakfast</option>
            <option value="true">I want breakfast</option>
          </select>
        </div>

        <div>
          <label htmlFor="observations" className="block text-lg">
            Any special requests?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full bg-primary-200 text-primary-800 p-3 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <SubmitButton label="Reserving...">Reserve now</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
