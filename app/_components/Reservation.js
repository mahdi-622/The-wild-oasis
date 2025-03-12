import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="border border-primary-800 rounded-lg overflow-hidden shadow-lg bg-primary-900 p-6 sm:p-8">
      {/* Responsive Layout: Stacked on Mobile, Side-by-Side on Desktop */}
      <div className="flex flex-col lg:flex-row items-start gap-x-12">
        {/* Date Selector */}
        <div className="flex-1 self-stretch">
          <DateSelector
            settings={settings}
            bookedDates={bookedDates}
            cabin={cabin}
          />
        </div>

        {/* Reservation or Login Section */}
        <div className="flex-1 self-stretch">
          {session?.user ? (
            <ReservationForm cabin={cabin} user={session.user} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservation;
