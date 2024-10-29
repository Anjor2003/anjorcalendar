"use client";

import { Switch } from "@/components/ui/switch";
import { UpdateEventTypeStatusAction } from "../actions";
import { useFormState } from "react-dom";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";

export function MenuActionSwitch({
  initialChecked,
  eventTypeId,
}: {
  initialChecked: boolean;
  eventTypeId: string;
}) {
  const [isPendign, startTransition] = useTransition();
  const [state, action] = useFormState(UpdateEventTypeStatusAction, undefined);

  useEffect(() => {
    if (state?.statuds === "success") {
      toast.success(state.message);
    } else if (state?.statuds === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Switch
      disabled={isPendign}
      defaultChecked={initialChecked}
      value={eventTypeId}
      onCheckedChange={(isChecked) => {
        startTransition(() => {
          action({ eventTypeId, isChecked });
        });
      }}
    />
  );
}
