import { CancelMeetingAction } from "@/app/actions";
import { EmptyState } from "@/app/components/EmptyState";
import { SubmitButton } from "@/app/components/SubmitButtons";
import prisma from "@/app/lib/db";
import { requireUser } from "@/app/lib/hooks";
import { nylas } from "@/app/lib/nylas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format, fromUnixTime } from "date-fns";
import { Video } from "lucide-react";

async function getData(userId: string) {
  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      grantEmail: true,
      grantId: true,
    },
  });

  if (!userData) {
    throw new Error("El usuario no existe");
  }
  
  const data = await nylas.events.list({
    identifier: userData.grantId as string,
    queryParams: {
      calendarId: userData.grantEmail as string,
    },
  });

  return data;
}

export default async function MeetinggRoute() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);

  return (
    <>
      {data.data.length < 1 ? (
        <EmptyState
          title="No se han encotrado eventos"
          description={"No tienes ningun evento programado todavia"}
          buttonText={"Crea un evento nuevo"}
          href={"/dashboard/new"}
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Eventos</CardTitle>
            <CardDescription>
              Vea el proximo evento que reservo y el tipo de evento
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.data.map((item) => (
              <form action={CancelMeetingAction} key={item.id}>
                <input type="hidden" name="eventId" value={item.id} />
                <div className="grid grid-cols-2 sm:grid-cols-3 justify-between items-center gap-5">
                  <div className="gap-y-5 sm:gap-y-0">
                    <p className="text-muted-foreground text-sm">
                      {/* @ts-ignore */}
                      {format(fromUnixTime(item.when.startTime), "EEE, d MMM")}
                    </p>
                    <p className="text-accent-foreground text-xs pt-1">
                      {/* @ts-ignore */}
                      {format(fromUnixTime(item.when.startTime), "HH:mm a")} -
                      {/* @ts-ignore */}
                      {format(fromUnixTime(item.when.endTime), "HH:mm a")}
                    </p>
                    <div className="flex items-center mt-1">
                      <Video className="size-4 mr-2 text-primary" />
                      <a
                        className="text-xs text-primary  underline underline-offset-4"
                        // @ts-ignore
                        href={item.conferencing.details.url}
                        target="_blank">
                        Join Meeting
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className="text-sm font-medium">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      You and {item.participants[0].name}
                    </p>
                  </div>
                  <SubmitButton
                    text="Cancelar Evento"
                    variant={"destructive"}
                    className="w-fit flex mt-3 sm:ml-auto"
                  />
                </div>
                <Separator className="my-4" />
              </form>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
}
