#!/bin/bash
set -e

if [ "$1" = 'holmescode-web' ]; then
    exec dotnet /var/service/holmescode.com.dll "$@"
fi

exec "$@"
