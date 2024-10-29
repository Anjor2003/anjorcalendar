import Image from "next/image";
import { AuthModal } from "./AuthModal";
import HeroImage from "../../public/HeroImagen.png";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="text-center">
        <span className="text-sm sm:text-lg font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
          Presentamos Anjor<span className="text-primary">Calendar</span> 1.0
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-medium leading-none mt-8">
          La Programacion es{" "}
          <span className="text-primary block sm:-mt-2">super facil!</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-lg sm:text-xl text-muted-foreground">
          Programar una reunion puede ser complicado. Pero nosotros en
          AnjorCalendar se lo ponemos facil para sus clientes programar
          reuniones con usted.
        </p>
        <div className="mt-5 mb-12">
          <AuthModal />
        </div>
      </div>
      <div className="relative items-center w-full py-12 mx-auto mt-12">
        <svg
          className="absolute inset-0 -mt-24 blur-3xl"
          style={{ zIndex: -1 }}
          fill="none"
          viewBox="0 0 400 400"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_10_20)">
            <g filter="url(#filter0_f_10_20)">
              <path
                d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                fill="#03FEE0"></path>
              <path
                d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                fill="#7C87F8"></path>
              <path
                d="M300 400h400v78.75L106.2 134.75L320 400Z"
                fill="#4C65E4"></path>
              <path
                d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                fill="#043AFF"></path>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="720.666"
              id="filter0_f_10_20"
              width="720.666"
              x="-160.333"
              y="-160.333">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                mode="normal"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_10_20"
                stdDeviation="80.1666"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="relative w-full object-cover border rounded-lg shadow-2xl xl:rounded-2xl"
        />
      </div>
    </section>
  );
}