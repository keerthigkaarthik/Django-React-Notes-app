#!/usr/bin/env bash
echo "Building the project..."
# Install Python dependencies
pip install -r requirements.txt

# Build frontend
cd notes_frontend
npm install
npm run build
cd ..

# Clear existing staticfiles
rm -rf staticfiles/*

# Create fresh staticfiles directory
mkdir -p staticfiles
chmod -R 755 staticfiles

# Run migrations
python manage.py migrate

# Collect static files with verbose output
echo "Collecting static files..."
python manage.py collectstatic --no-input -v 2

# Debug: Show directory contents
echo "Final directory structure:"
echo "staticfiles directory:"
ls -la staticfiles/
echo "Frontend dist directory:"
ls -la notes_frontend/dist/