import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 md:gap-x-24 gap-y-8 md:gap-y-32 text-lg items-center p-4 md:p-8">
      {/* Section 1 */}
      <div className="md:col-span-3">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-4 md:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Image 1 */}
      <div className="md:col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
          className="w-full h-auto"
        />
      </div>

      {/* Image 2 */}
      <div className="relative aspect-square md:col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      {/* Section 2 */}
      <div className="md:col-span-3">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>
        <div className="space-y-4 md:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-4 py-3 md:px-8 md:py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
