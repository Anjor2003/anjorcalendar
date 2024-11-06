import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { EditEventTypeForm } from "@/app/components/EditEventTypeForm";

async function getData(eventTypeId: string) {
  const data = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      videoCallSoftware: true,
      duration: true,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function EditRoute({
  params
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  return (
    <EditEventTypeForm
      CallSoftware={data.videoCallSoftware}
      description={data.description}
      duration={data.duration}
      id={data.id}
      title={data.title}
      url={data.url}
    />
  );
}
