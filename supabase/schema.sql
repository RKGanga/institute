-- Supabase schema for Ram Tech Institute
-- Run this in Supabase SQL editor

-- teachers
create table if not exists public.teachers (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null unique,
  phone text not null,
  expertise text not null,
  experience int,
  bio text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

-- courses
create table if not exists public.courses (
  id bigint primary key generated always as identity,
  name text not null,
  faculty_name text,
  start_date date,
  timings text,
  description text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists idx_courses_start_date on public.courses(start_date);

-- demo classes
create table if not exists public.demo_classes (
  id bigint primary key generated always as identity,
  name text not null,
  faculty_name text,
  start_date date,
  timings text,
  description text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists idx_demo_classes_start_date on public.demo_classes(start_date);

-- student requests / inquiries
create table if not exists public.student_requests (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  phone text not null,
  course text not null,
  preferred_date date,
  message text,
  created_at timestamptz not null default now()
);
create index if not exists idx_requests_created on public.student_requests(created_at);

-- statistics for homepage
create table if not exists public.statistics (
  id smallint primary key default 1,
  years int not null default 0,
  courses int not null default 0,
  students int not null default 0,
  placements int not null default 0,
  updated_at timestamptz not null default now()
);
insert into public.statistics (id) values (1)
on conflict (id) do nothing;

-- contact info and social links
create table if not exists public.contact_info (
  id smallint primary key default 1,
  email text,
  phone text,
  whatsapp text,
  instagram text,
  linkedin text,
  youtube text,
  updated_at timestamptz not null default now()
);
insert into public.contact_info (id) values (1)
on conflict (id) do nothing;
