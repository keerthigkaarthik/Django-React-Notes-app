#!/usr/bin/env bash

echo "Building the project..."

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Navigate to frontend directory
echo "Installing and building frontend..."
cd notes_frontend

# Install node modules and build
npm install
npm run build

# Move back to root
cd ..

# Create staticfiles directory with proper permissions
echo "Creating staticfiles directory..."
mkdir -p staticfiles
chmod -R 755 staticfiles

# Run Django migrations
echo "Running migrations..."
python manage.py migrate

# Collect static files with verbose output
echo "Collecting static files..."
python manage.py collectstatic --no-input --clear -v 2