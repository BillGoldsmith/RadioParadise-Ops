#!/usr/bin/env bash
rm -rf ./dist/* || { echo "error deleting dist" && exit 1; }
#ng build -c=testing || { echo "error building testing " && exit 1; }
ng build -c=production || { echo "error building prod " && exit 1; }
#cp robots.txt/testing.robots.txt  dist/robots.txt
#echo "{\"timestamp\": \""$(date +%s)"\"}" > ./dist/force_update.json
rsync -avzh   -e 'ssh -p 27817'  ./dist/fuse/   rp@server-9.radioparadise.com:/misc/secure_hosting/ops/
curl -s -S "https://api.radioparadise.com/api/varnish_website_invalidation?host=demo.radioparadise.com&token=8473x.hh66ll2234"
echo "success";


