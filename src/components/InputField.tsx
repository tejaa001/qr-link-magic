import React from "react";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputField = ({ value, onChange, placeholder }: InputFieldProps) => {
  return (
    <div className="relative w-full max-w-md animate-fade-in">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg" />
      <Input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Enter your URL here"}
        className="w-full px-4 py-3 bg-transparent border border-gray-200/30 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-200 relative z-10 placeholder:text-gray-400"
      />
    </div>
  );
};

export default InputField;