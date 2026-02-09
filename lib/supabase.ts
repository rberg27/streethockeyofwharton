import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hlwukqsbsazxdcctvgnl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsd3VrcXNic2F6eGRjY3R2Z25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNjEzNjQsImV4cCI6MjA4NTYzNzM2NH0.Bg_u85hgLIUXe7o0BXzZDoMsxOrz7lsZwh8fltPvhus'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
