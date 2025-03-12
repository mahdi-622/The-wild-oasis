import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-10 border border-primary-800 py-6 px-6 lg:px-10 mb-24">
      {/* Image container */}
      <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <Image
          src={image}
          width={500} // Fixed width for better control
          height={300} // Fixed height for better control
          className="object-cover rounded-lg mx-auto"
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Cabin Details */}
      <div className="text-center lg:text-left">
        <h3 className="text-accent-100 font-black text-4xl lg:text-7xl mb-5 bg-primary-950 p-4 pb-2 w-full lg:w-[150%] mx-auto">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-6">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center justify-center lg:justify-start">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center justify-center lg:justify-start">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center justify-center lg:justify-start">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
