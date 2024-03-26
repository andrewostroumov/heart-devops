#!/usr/bin/env bash

set -eo pipefail

IMAGE="ekho/utorrent:build"
docker build -f Dockerfile -t ${IMAGE} .
