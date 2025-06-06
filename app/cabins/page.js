import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Counter from "../_components/Counter";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl mb-5 text-accent-400 font-medium text-center">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg sm:text-xl mb-10 text-center max-w-3xl mx-auto">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-center md:justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
