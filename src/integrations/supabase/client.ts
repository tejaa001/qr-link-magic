// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://nhjttamuwjnzijdaooxz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oanR0YW11d2puemlqZGFvb3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MTQ5MjEsImV4cCI6MjA0ODI5MDkyMX0.Yeoxi1LU8-_A0DnGdH2jIfJLEJ9qereVkjt5kBWmHic";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);