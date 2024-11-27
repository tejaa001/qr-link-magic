import React, { useState, useCallback } from "react";
import QRCode from "qrcode";
import InputField from "./InputField";
import QRDisplay from "./QRDisplay";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const saveUrlMutation = useMutation({
    mutationFn: async (url: string) => {
      const { error } = await supabase.from("urls").insert([{ url }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["urls"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save URL to history.",
        variant: "destructive",
      });
    },
  });

  const generateQRCode = useCallback(
    async (value: string) => {
      if (!value) {
        setQrCode("");
        return;
      }

      try {
        setIsLoading(true);
        const qrDataUrl = await QRCode.toDataURL(value, {
          width: 512,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        });
        setQrCode(qrDataUrl);
        saveUrlMutation.mutate(value);
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to generate QR code. Please check your URL.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [toast, saveUrlMutation]
  );

  const handleUrlChange = (value: string) => {
    setUrl(value);
    generateQRCode(value);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-xl mx-auto p-4">
      <InputField
        value={url}
        onChange={handleUrlChange}
        placeholder="Enter your URL here"
      />
      <QRDisplay qrCode={qrCode} isLoading={isLoading} />
    </div>
  );
};

export default QRGenerator;