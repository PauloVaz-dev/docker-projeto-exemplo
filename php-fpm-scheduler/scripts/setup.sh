#!/bin/sh
cd /app
while [ true ]
do
  sleep 60
  su -c "php artisan schedule:run --verbose --no-interaction &" -s /bin/sh www-data
done