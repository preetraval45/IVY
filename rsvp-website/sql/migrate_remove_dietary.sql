-- Migration: Remove dietary_restrictions column
-- Run this on existing databases that have the dietary_restrictions column

-- Drop the column if it exists
ALTER TABLE rsvps
DROP COLUMN IF EXISTS dietary_restrictions;

-- Update the view to remove dietary_restrictions reference
DROP VIEW IF EXISTS rsvp_summary;

CREATE OR REPLACE VIEW rsvp_summary AS
SELECT
    COUNT(*) as total_rsvps,
    SUM(number_of_guests) as total_guests,
    COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as guests_with_email,
    COUNT(CASE WHEN phone IS NOT NULL THEN 1 END) as guests_with_phone
FROM rsvps;
