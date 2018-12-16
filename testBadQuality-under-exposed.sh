#!/usr/bin/env bash

yarn build:minimal && ./go.sh "static/testData/badQuality/underexposed_1.jpg" "static/testData/badQuality/underexposed_2.jpg" "static/testData/badQuality/underexposed_3.jpg"
