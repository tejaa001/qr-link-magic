import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface URLRecord {
  id: number;
  url: string;
  created_at: string;
}

const URLHistory = () => {
  const { data: urls, isLoading } = useQuery({
    queryKey: ["urls"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("urls")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as URLRecord[];
    },
  });

  if (isLoading) {
    return (
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading history...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-12 p-4 bg-white/50 backdrop-blur-lg rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">URL History</h2>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urls?.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.url}</TableCell>
                <TableCell>
                  {new Date(record.created_at).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default URLHistory;