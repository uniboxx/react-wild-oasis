import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://lyzqrklnviwdnahfulwi.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5enFya2xudml3ZG5haGZ1bHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjMwNDcsImV4cCI6MjAzODQ5OTA0N30.0jlx2r_P0LBvizigswouqBp2PyTv8xTL61bd0en6qno';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
