
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oidiwyfjlwuoyyqbvivo.supabase.co'; // Вставь свой URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZGl3eWZqbHd1b3l5cWJ2aXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODcyNjMsImV4cCI6MjA2NzA2MzI2M30.uiq63lHWMoCczks9fS-uSpdxDH-1qP56hsmsuNAuu_M'; // Вставь свой публичный ключ

export const supabase = createClient(supabaseUrl, supabaseKey);
