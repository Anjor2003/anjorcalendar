"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

export default function CopylinkMenuItem({
  meetingUrl,
}: {
  meetingUrl: string;
}) {
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(meetingUrl);
      toast.success("URL copiada al portapapeles");
    } catch (error) {
      console.log(error);
      toast.error("Error al copiar la URL");
    }
  };

  return (
    <DropdownMenuItem onSelect={handleCopyUrl}>
      <Link2 className="size-4 mr-2" />
      Copy
    </DropdownMenuItem>
  );
}
