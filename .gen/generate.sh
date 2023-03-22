#!/bin/bash

SOURCE="http://localhost:5000/swagger/v1/swagger.json"

npx @openapitools/openapi-generator-cli generate \
    --skip-validate-spec \
    --additional-properties=withoutRuntimeChecks=false \
    -i $SOURCE \
    -t .gen/template \
    -g typescript-fetch \
    -o src/services/backend/api