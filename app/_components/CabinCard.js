import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border rounded-lg overflow-hidden">
      <div className="relative w-full sm:w-1/2 h-48 sm:h-auto">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-b sm:border-b-0 sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow bg-primary-950">
        <div className="p-5 sm:pt-5 sm:pb-4 sm:px-7">
          <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-base sm:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 text-sm sm:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="border-t border-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="block sm:inline-block w-full sm:w-auto text-center py-4 px-6 hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
