#!/bin/bash

# Set your AWS credentials and S3 bucket name
# aws configure

S3_BUCKET="ok200-media"

# Specify the local folder containing the files
LOCAL_FOLDER="public/media"

# Upload each file to the S3 bucket and make them public
for file in "$LOCAL_FOLDER"/*; do
  if [ -f "$file" ]; then
    # Extract the file name from the full path
    filename=$(basename "$file")

    # Upload the file to S3
    aws s3 cp "$file" "s3://$S3_BUCKET/$filename" \
      --acl public-read

    # Check if the upload was successful
    if [ $? -eq 0 ]; then
      echo "Uploaded $filename to S3 and made it public."
    else
      echo "Failed to upload $filename to S3."
    fi
  fi
done
