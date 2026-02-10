# 🗄️ Database Setup Guide

## Quick Setup (Easiest Method)

1. **Get your database URL from Vercel:**
   - Go to Vercel Dashboard → Your Project → Storage tab
   - Click on "Ivy" database
   - Copy the **Connection String** (starts with `postgresql://`)

2. **Run the setup script:**
   ```bash
   cd rsvp-website
   node setup-database.js "YOUR_DATABASE_URL_HERE"
   ```

That's it! ✅ The script will automatically create all tables, indexes, and views.

---

## Manual Setup (Alternative)

If you prefer to run SQL manually:

1. **Open Neon Console:**
   - Go to your Neon dashboard
   - Select the "Ivy" database
   - Click "SQL Editor"

2. **Copy and paste** the contents of `sql/init.sql`

3. **Click "Run"**

---

## Verify Setup

After setup, test your RSVP form:
1. Visit your website
2. Click "RSVP Now"
3. Fill out the form and submit
4. You should see a confirmation page ✨

---

## Troubleshooting

### "Failed to save RSVP" Error
- Make sure DATABASE_URL is set in Vercel Environment Variables
- Verify the database is initialized (run setup script again)
- Check Vercel function logs for specific errors

### Script Errors
```bash
# Make sure pg module is installed
npm install pg

# Then run setup again
node setup-database.js "YOUR_URL"
```

---

## Database Schema

The setup creates these tables:

### `rsvps`
- `id` - Primary key
- `guest_name` - Guest's full name (unique)
- `number_of_guests` - Party size (1-10)
- `email` - Optional contact email
- `phone` - Optional phone number
- `message` - Optional birthday message
- `created_at` - Timestamp
- `updated_at` - Timestamp (auto-updated)

### `admin_users`
- Default admin: username `admin`, password `ivy2026`

### `rsvp_summary` (View)
- Total RSVPs count
- Total guests count
- Email/phone statistics
