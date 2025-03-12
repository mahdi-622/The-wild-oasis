import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Cabin Details */}
      <Cabin cabin={cabin} />

      {/* Reservation Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent-400 mb-6">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<Spinner />}>
            <Reservation cabin={cabin} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
