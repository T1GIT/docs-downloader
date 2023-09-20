FROM nginx:alpine as serve-stage

COPY nginx.conf /etc/nginx/conf.d/
COPY ./dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
