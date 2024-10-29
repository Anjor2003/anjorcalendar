import Image from "next/image";
import Nylas_logo from "@/public/nylas_logo.png";
import Nextjs_logo from "@/public/nextjs_logo.png";
import VercelLogo from "@/public/vercel_logo.png";

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7">
        Con la confianza de las mejores expresas del mundo!
      </h2>
      <div className="mt-10 grid max-w-lg mx-auto grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
          src={Nylas_logo}
          alt="Nylas Logo"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Nextjs_logo}
          alt="Nextjs Logo"
          className="col-span-2 max-h-10  w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={VercelLogo}
          alt="Vercel Logo"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Nylas_logo}
          alt="Nylas Logo"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Nextjs_logo}
          alt="Nextjs Logo"
          className="col-span-2 max-h-10  w-full object-contain lg:col-span-1 dark:invert"
        />
      </div>
    </div>
  );
}
