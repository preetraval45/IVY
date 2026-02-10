@echo off
echo ========================================
echo DATABASE SETUP FOR IVY'S SWEET 16
echo ========================================
echo.

REM Get DATABASE_URL from Vercel environment
cd rsvp-website

echo Step 1: Getting DATABASE_URL from Vercel...
call vercel env pull .env.development.local --yes 2>nul

if not exist .env.development.local (
    echo ERROR: Could not pull environment variables from Vercel
    echo.
    echo Please manually edit .env.local and add your DATABASE_URL
    echo Then run: node setup-db-simple.js
    pause
    exit /b 1
)

echo Step 2: Running database setup...
call node setup-db-simple.js

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ DATABASE SETUP COMPLETE!
    echo ========================================
    echo.
    echo Your RSVP website is now fully functional!
    echo Test it at: https://ivy-raval.vercel.app
    echo.
) else (
    echo.
    echo ❌ Database setup failed
    echo Please check the error above
    echo.
)

pause
