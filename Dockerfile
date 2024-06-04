# build environment
FROM node:alpine as build
WORKDIR .
COPY . .

# production environment
FROM nginx:stable-alpine
RUN ls -a
COPY --from=build ./dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
