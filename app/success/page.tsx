import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="max-w-[400px] w-full mx-auto">
        <CardContent className="p-6 flex flex-col w-full items-center">
          <div className="size-16 bg-green-500/10 rounded-full flex items-center justify-center">
            <Check className="size-10 text-green-500" />
          </div>
          <h1 className="mt-6 text-2xl font-semibold">
            Este evento esta Programado
          </h1>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Te enviamos un correo electronico con la informacion de este evento
            a tu correo electronico y un link de acceso a la videollamada para
            que puedas acceder.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
