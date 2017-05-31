#!/bin/bash
set -e

if [ "$1" = 'web' ]; then
    exec node /var/service/bin/www "$@"
fi

exec "$@"
