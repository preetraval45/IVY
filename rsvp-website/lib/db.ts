import { Pool } from 'pg';

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ivy_sweet16',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test database connection
pool.on('connect', () => {
  console.log('✅ Database connected successfully');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected database error:', err);
  process.exit(-1);
});

// RSVP database operations
export const db = {
  // Create a new RSVP
  async createRSVP(data: {
    guest_name: string;
    number_of_guests: number;
    email?: string;
    phone?: string;
    message?: string;
  }) {
    const query = `
      INSERT INTO rsvps (guest_name, number_of_guests, email, phone, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, guest_name, number_of_guests, created_at
    `;
    const values = [
      data.guest_name,
      data.number_of_guests,
      data.email || null,
      data.phone || null,
      data.message || null,
    ];

    try {
      const result = await pool.query(query, values);
      return { success: true, data: result.rows[0] };
    } catch (error: any) {
      if (error.code === '23505') {
        // Unique constraint violation
        return { success: false, error: 'This name has already been registered' };
      }
      console.error('Database error:', error);
      return { success: false, error: 'Failed to save RSVP' };
    }
  },

  // Get all RSVPs
  async getAllRSVPs() {
    const query = `
      SELECT id, guest_name, number_of_guests, email, phone,
             message, created_at, updated_at
      FROM rsvps
      ORDER BY created_at DESC
    `;

    try {
      const result = await pool.query(query);
      return { success: true, data: result.rows };
    } catch (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Failed to fetch RSVPs' };
    }
  },

  // Get RSVP summary statistics
  async getRSVPSummary() {
    const query = `SELECT * FROM rsvp_summary`;

    try {
      const result = await pool.query(query);
      return { success: true, data: result.rows[0] };
    } catch (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Failed to fetch summary' };
    }
  },

  // Check if RSVP exists by name
  async checkRSVPExists(guestName: string) {
    const query = `SELECT id FROM rsvps WHERE guest_name = $1`;

    try {
      const result = await pool.query(query, [guestName]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Database error:', error);
      return false;
    }
  },

  // Verify admin credentials
  async verifyAdmin(username: string, password: string) {
    const query = `SELECT id, username, password_hash FROM admin_users WHERE username = $1`;

    try {
      const result = await pool.query(query, [username]);
      if (result.rows.length === 0) {
        return { success: false, error: 'Invalid credentials' };
      }

      const user = result.rows[0];
      // In production, use bcrypt to compare passwords
      // const match = await bcrypt.compare(password, user.password_hash);
      const match = password === 'ivy2026'; // Simple check for demo

      if (match) {
        // Update last login
        await pool.query('UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = $1', [user.id]);
        return { success: true, data: { id: user.id, username: user.username } };
      }

      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Authentication failed' };
    }
  },
};

export default pool;
