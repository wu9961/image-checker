#!/usr/bin/env bash

yarn build:minimal && ./go.sh "static/testData/badQuality/overexposed_1.jpg" "static/testData/badQuality/overexposed_2.jpg" "static/testData/badQuality/overexposed_3.jpg"
