#!/usr/bin/env bash

(cd dist \
  && deployctl deploy \
     --project=marcelocra \
     https://deno.land/std@0.220.0/http/file_server.ts)
