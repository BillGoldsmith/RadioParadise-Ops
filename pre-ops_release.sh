#!/usr/bin/env bash
rm -rf ./dist/* || { printf "error deleting dist" && exit 1; }
ng build -c=testing || { printf "error building pre-ops " && exit 1; }
printf "{\"timestamp\": \""$(date +%s)"\"}" > ./dist/force_update.json

rm -rf zips  || { printf "error deleting zips folder" && exit 1; }
mkdir zips  || { printf "\n error creating zips folder \n" && exit 1; }
( cd dist; zip -rq ../zips/dist ./  )

curl --location --request PUT 'https://canonical.radioparadise.com/nc/replace-release/pre-ops.radioparadise.com' \
--header 'nc-token: 9d86ffda-2dd3-4aa9-b03f-8ed488249d76' \
--form 'releasezip=@"zips/dist.zip"' || { printf "\n error uploading zip \n" && exit 1; }


printf "\n success uploading pre-ops \n";
