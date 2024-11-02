"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { OnboardingAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../lib/zodSchemas";
import { SubmitButton } from "../components/SubmitButtons";

export default function OnBoardingRoute() {
  const [lastResult, action] = useFormState(OnboardingAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Bienvenido a Anjor<span className="text-primary">Calendar</span>
          </CardTitle>
          <CardDescription>
            Necesitamos la siguiente información para configurar su perfil.!
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <CardContent className="flex flex-col gap-y-5">
            <div className="grid gap-y-2">
              <Label>Nombre completo</Label>
              <Input
                name={fields.fullname.name}
                defaultValue={fields.fullname.initialValue}
                key={fields.fullname.key}
                placeholder="John Monrey"
              />
              <p className="text-sm text-red-500">{fields.fullname.errors}</p>
            </div>
            <div className="grid gap-y-2">
              <Label>Nombre de usuario</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  AnjorCalendar.com/
                </span>
                <Input
                  placeholder="ejemplo-usuario-1"
                  className="rounded-l-none"
                  name={fields.userName.name}
                  key={fields.userName.key}
                  defaultValue={fields.userName.initialValue}
                />
              </div>
              <p className="text-sm text-red-500">{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Continuar" className="w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
