#!/bin/bash
echo "getting localdev certificates"

mkdir -p localdev_ssl/temp_localdev_ssl

wget -O localdev_ssl/temp_localdev_ssl/le_localdev.tgz  'https://drone-api.radioparadise.com/api/get_localdev_certs?rauth_id=localdev&rauth_token=4b4c3622-5b58-11f1-88be-3b53c211952c'  || exit 1;

tar -zxf  localdev_ssl/temp_localdev_ssl/le_localdev.tgz  -C localdev_ssl/temp_localdev_ssl

rsync -La localdev_ssl/temp_localdev_ssl/letsencrypt/live/localdev.radioparadise.com   localdev_ssl/

