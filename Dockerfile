FROM caddy:alpine

WORKDIR /srv

COPY . .

RUN mv "Ahnoud Tech Landing.dc.html" index.html \
 && mv Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
