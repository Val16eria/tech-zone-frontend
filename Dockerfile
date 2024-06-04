# build environment
FROM node:alpine as build
WORKDIR .
COPY . .

# production environment
FROM nginx:stable-alpine
RUN ls -a
COPY --from=build ./dist /usr/share/nginx/html
COPY --from=build ../backend/DiplomaProject/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
