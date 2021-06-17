#!/usr/bin/env sh

OAP_SERVER=${OAP_SERVER:="oap-server:12800"}
PROJECT_A=${PROJECT_A:="127.0.0.1:8080"}

cat > /etc/nginx/nginx.conf << EOF
worker_processes  auto;
events {
  worker_connections 1024;
}
http {
  server_tokens off;

  client_header_timeout 10;
  client_body_timeout 10;

  # limit_conn_zone $binary_remote_addr zone=addr:5m;
  # limit_conn addr 100;

  index index.html;

  server {
    listen 80;

    location /browser {
        proxy_pass http://${OAP_SERVER};
    }
    location /v3 {
        proxy_pass http://${OAP_SERVER};
    }
    location /projectA/test {
       proxy_pass  http://${PROJECT_A};
    }
  }
}
EOF

cat /etc/nginx/nginx.conf

nginx -g "daemon off;"
