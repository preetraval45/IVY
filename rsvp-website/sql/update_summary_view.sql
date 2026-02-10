-- Update RSVP summary view to match admin page expectations
-- Run this to update the view in your Neon database

DROP VIEW IF EXISTS rsvp_summary;

CREATE OR REPLACE VIEW rsvp_summary AS
SELECT
    COUNT(*) as total_rsvps,
    SUM(number_of_guests) as total_guests,
    COUNT(CASE WHEN message IS NOT NULL AND message != '' THEN 1 END) as with_messages
FROM rsvps;
