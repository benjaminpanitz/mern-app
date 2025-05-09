#!/bin/bash

echo "🔧 Starte MongoDB..."
mongod --dbpath ~/data/db --fork --logpath ~/mongodb.log
sleep 2

echo "🚀 Starte Backend..."
cd server
node index.js &      # oder: node server.js

echo "🎨 Starte Frontend..."
cd ../client
npm start