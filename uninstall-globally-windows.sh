#!/usr/bin/env bash

NODEJS_GLOBAL=/c/Program\ Files/nodejs

echo Removing image-checker from $NODEJS_GLOBAL ...

rm -rf /c/Program\ Files/nodejs/node_modules/image-checker/

rm /c/Program\ Files/nodejs/image-checker*
