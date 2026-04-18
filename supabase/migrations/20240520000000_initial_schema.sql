-- Create a table for public profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at timestamp with time zone,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  website text,
  biometric_enrolled boolean DEFAULT false,

  CONSTRAINT username_length CHECK (char_length(username) >= 3)
);

-- Set up Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create Smart Home table
CREATE TABLE IF NOT EXISTS public.smart_home_devices (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  type text NOT NULL,
  status text DEFAULT 'off',
  settings jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.smart_home_devices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own smart home devices" ON public.smart_home_devices
  FOR ALL USING (auth.uid() = user_id);

-- Create Health table
CREATE TABLE IF NOT EXISTS public.health_metrics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  metric_type text NOT NULL,
  value numeric NOT NULL,
  unit text,
  recorded_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.health_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own health metrics" ON public.health_metrics
  FOR ALL USING (auth.uid() = user_id);

-- Create Finance table
CREATE TABLE IF NOT EXISTS public.finance_transactions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  amount numeric NOT NULL,
  category text NOT NULL,
  description text,
  transaction_date timestamp with time zone DEFAULT now()
);

ALTER TABLE public.finance_transactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own finance transactions" ON public.finance_transactions
  FOR ALL USING (auth.uid() = user_id);

-- Create Planner table
CREATE TABLE IF NOT EXISTS public.planner_tasks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  due_date timestamp with time zone,
  priority text DEFAULT 'medium',
  is_completed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.planner_tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own planner tasks" ON public.planner_tasks
  FOR ALL USING (auth.uid() = user_id);

-- Create Emergency table
CREATE TABLE IF NOT EXISTS public.emergency_contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  relationship text,
  phone text NOT NULL,
  is_primary boolean DEFAULT false
);

ALTER TABLE public.emergency_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own emergency contacts" ON public.emergency_contacts
  FOR ALL USING (auth.uid() = user_id);

-- Create Student table
CREATE TABLE IF NOT EXISTS public.student_assignments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  subject text NOT NULL,
  title text NOT NULL,
  due_date timestamp with time zone,
  grade text,
  status text DEFAULT 'pending'
);

ALTER TABLE public.student_assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own assignments" ON public.student_assignments
  FOR ALL USING (auth.uid() = user_id);

-- Create Outfit/Wardrobe table
CREATE TABLE IF NOT EXISTS public.wardrobe_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  category text NOT NULL,
  color text,
  image_url text,
  last_worn timestamp with time zone,
  tags text[]
);

ALTER TABLE public.wardrobe_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own wardrobe" ON public.wardrobe_items
  FOR ALL USING (auth.uid() = user_id);

-- Create AI Automation logs table
CREATE TABLE IF NOT EXISTS public.ai_automation_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  action text NOT NULL,
  result text,
  executed_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.ai_automation_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access their own automation logs" ON public.ai_automation_logs
  FOR ALL USING (auth.uid() = user_id);

-- Create Indexes for performance
CREATE INDEX IF NOT EXISTS smart_home_devices_user_id_idx ON public.smart_home_devices(user_id);
CREATE INDEX IF NOT EXISTS health_metrics_user_id_idx ON public.health_metrics(user_id);
CREATE INDEX IF NOT EXISTS finance_transactions_user_id_idx ON public.finance_transactions(user_id);
CREATE INDEX IF NOT EXISTS planner_tasks_user_id_idx ON public.planner_tasks(user_id);
CREATE INDEX IF NOT EXISTS emergency_contacts_user_id_idx ON public.emergency_contacts(user_id);
CREATE INDEX IF NOT EXISTS student_assignments_user_id_idx ON public.student_assignments(user_id);
CREATE INDEX IF NOT EXISTS wardrobe_items_user_id_idx ON public.wardrobe_items(user_id);
CREATE INDEX IF NOT EXISTS ai_automation_logs_user_id_idx ON public.ai_automation_logs(user_id);