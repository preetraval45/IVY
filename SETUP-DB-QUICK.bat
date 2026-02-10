@echo off
echo ========================================
echo QUICK DATABASE SETUP
echo ========================================
echo.
echo STEP 1: Get your DATABASE_URL from Vercel:
echo   1. Go to Vercel Dashboard
echo   2. Click Storage tab
echo   3. Click "Ivy" database
echo   4. Copy the "Connection String"
echo.
echo STEP 2: Paste it when prompted
echo.
set /p DATABASE_URL="Enter DATABASE_URL: "

echo.
echo Setting up database...
cd rsvp-website
set DATABASE_URL=%DATABASE_URL%
node setup-db-simple.js

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ SUCCESS! Database is ready!
    echo ========================================
) else (
    echo.
    echo ❌ Setup failed. Check the error above.
)

pause
