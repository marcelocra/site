#!/usr/bin/env bash

set -euo pipefail   

if [[ "$(pwd)" != "$MCRA_PROJECTS_FOLDER/site" ]]; then
  echo "You must run this script from the project root folder"
  exit 1
fi

echo 'deleting dist folder...'
rm -rf ./dist
echo 'done!'

echo 'building site...'
pnpm run build
echo 'done!'

echo 'deploying site...'
(cd dist \
  && deployctl deploy \
     --project=marcelocra \
     https://deno.land/std@0.220.0/http/file_server.ts)

echo 'done!'
