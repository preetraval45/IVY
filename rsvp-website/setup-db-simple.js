// Simple Database Setup - Run with: node setup-db-simple.js

const { neon } = require('@neondatabase/serverless');

async function setup() {
  console.log('🚀 Setting up database...\n');

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Create table
    console.log('Creating rsvps table...');
    await sql`
      CREATE TABLE IF NOT EXISTS rsvps (
        id SERIAL PRIMARY KEY,
        guest_name VARCHAR(255) NOT NULL UNIQUE,
        number_of_guests INTEGER NOT NULL CHECK (number_of_guests > 0 AND number_of_guests <= 10),
        email VARCHAR(255),
        phone VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ Table created!\n');

    // Create indexes
    console.log('Creating indexes...');
    await sql`CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_rsvps_guest_name ON rsvps(guest_name)`;
    console.log('✅ Indexes created!\n');

    console.log('🎉 Database setup complete!\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setup();
