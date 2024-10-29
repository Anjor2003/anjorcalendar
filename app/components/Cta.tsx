import { AuthModal } from "./AuthModal";

export function CTA() {
  return (
    <section className="relative my-20 isolate overflow-hidden px-6 py-20 text-center sm:rounded-3xl sm:border sm:shadow-sm">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Comienza a usar AnjorCalendar ahora!
      </h2>
      <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-sm mx-auto">
        AnjorCalendar facilita que sus clientes concierten una reunion con
        usted!
      </p>
      <div className="mt-6">
        <AuthModal />
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true">
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#827591b1-ce8c-4110-a0e2-62fc76adac6d)"
          fillOpacity={"0.7"}></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-a0e2-62fc76adac6d">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1d4ed8" />
          </radialGradient> 
        </defs>
      </svg>
    </section>
  );
}
