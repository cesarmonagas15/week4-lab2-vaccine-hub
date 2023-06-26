DROP DATABASE IF EXISTS vaccine_hub;

-- Create a fresh vaccine_hub database
CREATE DATABASE vaccine_hub;

-- Connect to the vaccine_hub database
\connect vaccine_hub;


\i vaccine-hub-schema.sql;

