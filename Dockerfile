FROM nginx:alpine

ARG COMMIT_SHA=local

COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN printf '{"status":"ok","commit":"%s"}\n' "$COMMIT_SHA" > /usr/share/nginx/html/health

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/health || exit 1
