#!/usr/bin/env bash

yarn build:minimal && ./go.sh "static/testData/badQuality/out_of_Focus_1.jpg" "static/testData/badQuality/out_of_Focus_2.jpg" "static/testData/badQuality/out_of_Focus_3.jpg"
