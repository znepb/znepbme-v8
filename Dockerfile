# --- Stage 1: Build ---
FROM oven/bun:1-slim AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run ./tools/generateIconListing.ts
RUN bun run build

# --- Stage 2: Run ---
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV PORT=3000

USER bun

CMD ["bun", "./build/index.js"]