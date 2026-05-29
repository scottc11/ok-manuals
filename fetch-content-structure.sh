#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: .env file not found at $ENV_FILE" >&2
  exit 1
fi

CONTENTFUL_SPACE_ID=$(grep '^CONTENTFUL_SPACE_ID=' "$ENV_FILE" | cut -d'=' -f2-)
CONTENTFUL_ACCESS_TOKEN=$(grep '^CONTENTFUL_ACCESS_TOKEN=' "$ENV_FILE" | cut -d'=' -f2-)

if [ -z "$CONTENTFUL_SPACE_ID" ] || [ -z "$CONTENTFUL_ACCESS_TOKEN" ]; then
  echo "Error: CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN not found in .env" >&2
  exit 1
fi

OUTPUT_FILE="$SCRIPT_DIR/contentful-content-structure.json"

curl -s \
  "https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/content_types" \
  -H "Authorization: Bearer ${CONTENTFUL_ACCESS_TOKEN}" \
  | python3 -m json.tool > "$OUTPUT_FILE"

echo "Content structure written to $OUTPUT_FILE"
