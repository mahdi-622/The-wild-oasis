import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 text-center sm:text-left">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg text-center sm:text-left">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
