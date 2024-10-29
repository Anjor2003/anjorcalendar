import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VideoGiff from "@/public/almost-over-work.gif";
import { CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnboradingGrantId() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Ya casi hemos terminado!</CardTitle>
          <CardDescription>
            Ahora tenemos que conectar tu calendario con tu cuenta{" "}
          </CardDescription>
          <Image
            src={VideoGiff}
            alt="Almost finished gif"
            className="w-full rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/api/auth">
              <CalendarCheck2 className="mr-2 size-4" />
              Conecta tu calendario con tu cuenta
            </Link>
          </Button> 
        </CardContent>
      </Card>
    </div>
  );
}
