import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nhjttamuwjnzijdaooxz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oanR0YW11d2puemlqZGFvb3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MTQ5MjEsImV4cCI6MjA0ODI5MDkyMX0.Yeoxi1LU8-_A0DnGdH2jIfJLEJ9qereVkjt5kBWmHic";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);