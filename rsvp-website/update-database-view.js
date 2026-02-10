#!/usr/bin/env node

/**
 * Database View Update Script for Ivy's Sweet 16 RSVP
 *
 * This script updates the rsvp_summary view to match admin page expectations.
 * Run with: node update-database-view.js
 */

const { Pool } = require('pg');

// Get DATABASE_URL from environment or command line
const DATABASE_URL = process.env.POSTGRES_URL || process.env.DATABASE_URL || process.argv[2];

if (!DATABASE_URL) {
  console.error('❌ Error: DATABASE_URL not provided');
  console.log('\nUsage:');
  console.log('  node update-database-view.js <your-database-url>');
  console.log('  OR');
  console.log('  POSTGRES_URL=<your-url> node update-database-view.js');
  console.log('\nGet your POSTGRES_URL from Vercel Environment Variables');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function updateDatabaseView() {
  console.log('🚀 Updating database view...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to database successfully!\n');

    // Update view
    console.log('📊 Updating rsvp_summary view...');
    await pool.query('DROP VIEW IF EXISTS rsvp_summary');
    await pool.query(`
      CREATE OR REPLACE VIEW rsvp_summary AS
      SELECT
        COUNT(*) as total_rsvps,
        SUM(number_of_guests) as total_guests,
        COUNT(CASE WHEN message IS NOT NULL AND message != '' THEN 1 END) as with_messages
      FROM rsvps
    `);
    console.log('✅ Summary view updated successfully!\n');

    // Verify
    console.log('🔍 Verifying view...');
    const result = await pool.query("SELECT * FROM rsvp_summary");
    console.log('✅ View verified!');
    console.log('   Total RSVPs:', result.rows[0].total_rsvps);
    console.log('   Total Guests:', result.rows[0].total_guests);
    console.log('   With Messages:', result.rows[0].with_messages);
    console.log('\n🎉 Database view update complete!\n');

  } catch (error) {
    console.error('❌ Error during update:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

updateDatabaseView();
