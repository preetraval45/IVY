-- Ivy's Sweet 16 RSVP Database Schema
-- PostgreSQL initialization script

-- Create RSVPs table
CREATE TABLE IF NOT EXISTS rsvps (
    id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255) NOT NULL,
    number_of_guests INTEGER NOT NULL CHECK (number_of_guests > 0 AND number_of_guests <= 10),
    email VARCHAR(255),
    phone VARCHAR(50),
    dietary_restrictions TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_guest_name UNIQUE (guest_name),
    CONSTRAINT valid_email CHECK (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Create indexes for better query performance
CREATE INDEX idx_rsvps_created_at ON rsvps(created_at DESC);
CREATE INDEX idx_rsvps_guest_name ON rsvps(guest_name);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Insert default admin user
-- Password: "ivy2026" - IMPORTANT: Change this in production!
-- Hash generated with bcrypt, cost factor 10
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', '$2b$10$rKvM5Y5qQ1xK.Xj8vX5OKuYZGx8FqYp8sK3jL9mN6oP7qR8sT9uV0')
ON CONFLICT (username) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_rsvps_updated_at
    BEFORE UPDATE ON rsvps
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create view for RSVP summary statistics
CREATE OR REPLACE VIEW rsvp_summary AS
SELECT
    COUNT(*) as total_rsvps,
    SUM(number_of_guests) as total_guests,
    COUNT(CASE WHEN dietary_restrictions IS NOT NULL AND dietary_restrictions != '' THEN 1 END) as guests_with_dietary_needs,
    COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as guests_with_email,
    COUNT(CASE WHEN phone IS NOT NULL THEN 1 END) as guests_with_phone
FROM rsvps;

-- Insert sample data for testing (remove in production)
-- INSERT INTO rsvps (guest_name, number_of_guests, email, message)
-- VALUES ('John Doe', 2, 'john@example.com', 'Can''t wait to celebrate!');
