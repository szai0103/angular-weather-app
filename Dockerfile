### STAGE 1: Based on Node.js, to build and compile Angular
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app

# Copy npm config
COPY .npmrc /root/.npmrc

# Install app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

### STAGE 2: Based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.1-alpine
COPY nginx-custom.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/angular-weather-app /usr/share/nginx/html
