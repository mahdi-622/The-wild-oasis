import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  format(parseISO(dateStr), "MMM d, yyyy"); // Shortened format

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800 rounded-lg overflow-hidden">
      {/* Cabin Image */}
      <div className="relative w-full sm:w-32 h-32">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover sm:border-r border-primary-800"
        />
      </div>

      {/* Reservation Details */}
      <div className="flex-grow px-5 py-4 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-lg sm:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>

          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 px-3 py-1 text-xs font-bold rounded-sm text-center sm:text-left">
              Past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 px-3 py-1 text-xs font-bold rounded-sm text-center sm:text-left">
              Upcoming
            </span>
          )}
        </div>

        {/* Date */}
        <p className="text-sm sm:text-lg text-primary-300">
          {formatDistanceFromNow(startDate)} — {formatDistanceFromNow(endDate)}
        </p>

        {/* Price, Guests, and Booking Date */}
        <div className="flex flex-wrap gap-3 sm:gap-5 mt-3 items-center text-sm sm:text-base">
          <p className="font-semibold text-accent-400 text-lg sm:text-xl">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-primary-400 text-xs sm:text-sm">
            Booked on {format(new Date(created_at), "MMM d, yyyy")}
          </p>
        </div>
      </div>

      {/* Actions - Edit & Delete */}
      {!isPast(startDate) && (
        <div className="flex sm:flex-col sm:border-l border-primary-800 w-full sm:w-[100px]">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex sm:flex-col items-center justify-center sm:justify-start gap-2 sm:gap-0 px-3 py-2 text-xs sm:text-sm font-bold text-primary-300 border-b sm:border-none hover:bg-accent-600 transition-colors hover:text-primary-900 w-full"
          >
            <PencilSquareIcon className="h-4 sm:h-5 w-4 sm:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span>Edit</span>
          </Link>
          <DeleteReservation bookingId={id} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
}

export default ReservationCard;
