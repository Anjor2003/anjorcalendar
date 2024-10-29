import { CloudRain, FastForward, Shield, Users2 } from "lucide-react";

const features = [
  {
    name: "Prueba Gratis",
    description:
      "Registrate y pruebalo gratis para ver el calendario y programar reuniones. No te preocupes, puedes cancelar tu cuenta en cualquier momento. ",
    icon: CloudRain,
  },
  {
    name: "Increiblemente rapido",
    description:
      "Programa tus reuniones en minutos. Podras ver el calendario y programar reuniones en minutos. No te preocupes, puedes cancelar en cualquier momento",
    icon: FastForward,
  },
  {
    name: "Alta seguridad con Nylas",
    description:
      "Con toda la seguridad de Nylas, puedes programar reuniones en minutos. No te preocupes, puedes cancelar tu cuenta en cualquier momento. ",
    icon: Shield,
  },
  {
    name: "facil de usar",
    description:
      "Usar AnjorCalendar es muy facil e intuitivo. No te preocupes, puedes cancelar tu cuenta en cualquier momento. ",
    icon: Users2,
  },
];

export function Features() {
  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto px-4 lg:text-center">
        <p className="font-semibold leading-7 text-primary">
          Programa mas rapido
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Programa reuniones en minutos!
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-snug">
          Con AnjorCalendar puedes programar reuniones en minutos. Hacemos facil
          para ti que puedas programar reuniones en minutos. Las reuniones se
          programan faci y rapidamente.
        </p>
      </div>
      <div className="mt-16 mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-medium leading-7 text-primary">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon
                    className="size-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-snug text-muted-foreground">
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
