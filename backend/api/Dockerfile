# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.17.0

FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Install the TypeScript compiler and ts-node for running TypeScript files.
RUN npm install -g ts-node

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy prisma schema.
COPY prisma prisma

# Generate Prisma client.
RUN npx prisma generate

# Run the application as a non-root user.
USER node

# Use production node environment by default.
ENV NODE_ENV production

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3001

# Run the application.
CMD npm start
