
.PHONY: install test build run docker-build docker-up

install:
	npm ci

test:
	npm test

build:
	@echo "No build step required for this static frontend project"

run:
	docker compose up --build

docker-build:
	docker build --build-arg COMMIT_SHA=$$(git rev-parse --short HEAD) -t digital-bank:local .

docker-up:
	docker compose up --build
