# ---------- Build Stage ----------
FROM node:20 AS build-stage
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
ENV VITE_API_BASE_URL=/api
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html/