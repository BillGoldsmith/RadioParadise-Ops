#!/usr/bin/env bash
rm -rf ./dist/* || { printf "error deleting dist" && exit 1; }
ng build -c=production || { printf "error building ops " && exit 1; }
printf "{\"timestamp\": \""$(date +%s)"\"}" > ./dist/force_update.json

rm -rf zips  || { printf "error deleting zips folder" && exit 1; }
mkdir zips  || { printf "\n error creating zips folder \n" && exit 1; }
( cd dist; zip -rq ../zips/dist ./  )

curl --location --request PUT 'https://canonical.radioparadise.com/nc/replace-release/ops.radioparadise.com' \
--header 'nc-token: 7725b6e4-613f-11ee-bc25-4b941216b4e1' \
--form 'releasezip=@"zips/dist.zip"' || { printf "\n error uploading zip \n" && exit 1; }


printf "\n success uploading ops \n";
