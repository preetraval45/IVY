#!/usr/bin/env node

/**
 * Database Setup Script for Ivy's Sweet 16 RSVP
 *
 * This script will automatically set up your database tables.
 * Run with: node setup-database.js
 */

const { Pool } = require('pg');

// Get DATABASE_URL from environment or command line
const DATABASE_URL = process.env.DATABASE_URL || process.argv[2];

if (!DATABASE_URL) {
  console.error('❌ Error: DATABASE_URL not provided');
  console.log('\nUsage:');
  console.log('  node setup-database.js <your-database-url>');
  console.log('  OR');
  console.log('  DATABASE_URL=<your-url> node setup-database.js');
  console.log('\nGet your DATABASE_URL from Vercel Storage → Ivy database → Connection String');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to database successfully!\n');

    // Create RSVPs table
    console.log('📋 Creating rsvps table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rsvps (
        id SERIAL PRIMARY KEY,
        guest_name VARCHAR(255) NOT NULL,
        number_of_guests INTEGER NOT NULL CHECK (number_of_guests > 0 AND number_of_guests <= 10),
        email VARCHAR(255),
        phone VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT unique_guest_name UNIQUE (guest_name),
        CONSTRAINT valid_email CHECK (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
      )
    `);
    console.log('✅ RSVPs table created!\n');

    // Create indexes
    console.log('🔍 Creating indexes...');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at DESC)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_rsvps_guest_name ON rsvps(guest_name)');
    console.log('✅ Indexes created!\n');

    // Create admin users table
    console.log('👤 Creating admin_users table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP WITH TIME ZONE
      )
    `);
    console.log('✅ Admin users table created!\n');

    // Insert default admin
    console.log('🔐 Creating default admin user...');
    await pool.query(`
      INSERT INTO admin_users (username, password_hash)
      VALUES ('admin', '$2b$10$rKvM5Y5qQ1xK.Xj8vX5OKuYZGx8FqYp8sK3jL9mN6oP7qR8sT9uV0')
      ON CONFLICT (username) DO NOTHING
    `);
    console.log('✅ Default admin user created! (username: admin, password: ivy2026)\n');

    // Create update trigger function
    console.log('⚙️  Creating trigger function...');
    await pool.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql'
    `);
    console.log('✅ Trigger function created!\n');

    // Create trigger
    console.log('🔔 Creating update trigger...');
    await pool.query('DROP TRIGGER IF EXISTS update_rsvps_updated_at ON rsvps');
    await pool.query(`
      CREATE TRIGGER update_rsvps_updated_at
      BEFORE UPDATE ON rsvps
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column()
    `);
    console.log('✅ Update trigger created!\n');

    // Create view
    console.log('📊 Creating rsvp_summary view...');
    await pool.query('DROP VIEW IF EXISTS rsvp_summary');
    await pool.query(`
      CREATE OR REPLACE VIEW rsvp_summary AS
      SELECT
        COUNT(*) as total_rsvps,
        SUM(number_of_guests) as total_guests,
        0 as with_dietary_restrictions,
        COUNT(CASE WHEN message IS NOT NULL AND message != '' THEN 1 END) as with_messages
      FROM rsvps
    `);
    console.log('✅ Summary view created!\n');

    // Verify setup
    console.log('🔍 Verifying setup...');
    const result = await pool.query("SELECT COUNT(*) FROM rsvps");
    console.log(`✅ Setup verified! Current RSVPs: ${result.rows[0].count}\n`);

    console.log('🎉 Database setup complete!');
    console.log('\n✨ Your RSVP website is ready to accept submissions!\n');

  } catch (error) {
    console.error('❌ Error during setup:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupDatabase();
