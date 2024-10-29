"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { SubmitButton } from "./SubmitButtons";
import { useFormState } from "react-dom";
import { SettingsAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingsSchema } from "../lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { UploadDropzone } from "../lib/uploadthings";
import { toast } from "sonner";
import Image from "next/image";

interface iAppProps {
  fullName: string;
  email: string;
  profileImage: string;
}

export function SettingForm({ fullName, email, profileImage }: iAppProps) {
  const [lastResult, action] = useFormState(SettingsAction, undefined);
  const [currentProfileImage, setCurrentProfileImage] =
    React.useState(profileImage);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: settingsSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteProfileImage = () => {
    setCurrentProfileImage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Settings</CardTitle>
        <CardDescription>
          Administra la configuración de tu cuenta!
        </CardDescription>
      </CardHeader>
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <CardContent className="max-w-2xl grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-2">
            <label className="text-foreground text-base">Nombre Completo</label>
            <input
              name={fields.fullName.name}
              key={fields.fullName.key}
              defaultValue={fullName}
              placeholder="Antonio Martinez"
            />
            <p className="text-sm text-red-500">{fields.fullName.errors}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-foreground text-base">Email</label>
            <input
              disabled
              defaultValue={email}
              placeholder="prueba@prueba.com"
              className="cursor-not-allowed bg-gray-300 rounded-r-lg dark:text-gray-800"
            />
          </div>
          <div className="grid gap-y-5">
            <label className="text-foreground text-base">Profile Image</label>
            <input
              type="hidden"
              name={fields.profileImage.name}
              key={fields.profileImage.key}
              value={currentProfileImage}
            />
            {currentProfileImage ? (
              <div className="relative size-24">
                <Image
                  src={currentProfileImage}
                  alt="Imagen actual de perfil"
                  className="size-24 rounded-lg"
                  fill
                />
                <Button
                  onClick={handleDeleteProfileImage}
                  variant={"destructive"}
                  size={"icon"}
                  type="button"
                  className="absolute -top-3 -right-7">
                  <X className="size-4" />
                </Button>
              </div>
            ) : (
              <UploadDropzone
                onClientUploadComplete={(res) => {
                  setCurrentProfileImage(res[0].url);
                  toast.success("Imagen subida con exito");
                }}
                onUploadError={(error) => {
                  console.log("Algo salio mal", error);
                  toast.error(error.message);
                }}
                endpoint="imageUploader"
              />
            )}
            <p className="text-sm text-red-500">{fields.profileImage.errors}</p>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Guardar Cambios" />
        </CardFooter>
      </form>
    </Card>
  );
}
