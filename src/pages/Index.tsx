import React from "react";
import QRGenerator from "@/components/QRGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
          Simple & Beautiful
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          QR Code Generator
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Transform your links into elegant QR codes instantly. Perfect for sharing
          and connecting.
        </p>
      </div>
      <QRGenerator />
    </div>
  );
};

export default Index;