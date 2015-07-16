#!/bin/bash

rm assets/js/app.js
mkdir -p assets/js
touch assets/js/app.js

FILES=`find app -name "*.js"`

for i in $FILES; do
  cat $i >> assets/js/app.js
done
