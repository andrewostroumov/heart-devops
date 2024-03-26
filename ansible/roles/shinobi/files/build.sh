#!/usr/bin/env bash

set -eo pipefail

IMAGE="shinobi:build"

docker build -f Dockerfile -t ${IMAGE} .
