import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface QRDisplayProps {
  qrCode: string;
  isLoading: boolean;
}

const QRDisplay = ({ qrCode, isLoading }: QRDisplayProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qrCode;
    link.click();
    toast({
      title: "QR Code downloaded",
      description: "Your QR code has been downloaded successfully.",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrCode);
      toast({
        title: "QR Code copied",
        description: "Your QR code has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy QR code to clipboard.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-64 h-64 bg-gray-100/30 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Generating...</span>
      </div>
    );
  }

  return qrCode ? (
    <div className="space-y-4 animate-fade-in">
      <div className="relative p-4 bg-white rounded-lg shadow-lg transition-transform hover:scale-[1.02] duration-300">
        <img
          src={qrCode}
          alt="QR Code"
          className="w-64 h-64 object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex gap-2 justify-center">
        <Button
          onClick={handleDownload}
          variant="outline"
          className="flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
        <Button
          onClick={handleCopy}
          variant="outline"
          className="flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
    </div>
  ) : null;
};

export default QRDisplay;