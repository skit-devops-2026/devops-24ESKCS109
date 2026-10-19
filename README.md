# Digital Bank

> Replace every angle-bracket placeholder below. The hygiene check in CI will
> fail until you do.

## Author

| Roll No. | Name | GitHub username |
|---|---|---|
| 24ESKCS109 | Devanshu Agarwal | Devanshu4116 |

## About

Digital Bank is a web-based banking application that provides users with a modern interface to manage their banking activities. Users can access features such as account information, transactions, money transfers, cards, and profile settings. The application focuses on providing a simple and user-friendly digital banking experience.

## Tech stack

- Frontend: HTML, CSS, JS
- Backend: Not yet
- Database: Not yet

## Running locally

```bash
make install
make run
```

## Live URL

- **Application:** https://digital-bank-latest.onrender.com/

## Health endpoint

`GET /health` returns the running commit SHA. See `Makefile` and the milestone
sheet for why this is required.




## Monitoring

Prometheus configuration: [`monitoring/prometheus.yml`](monitoring/prometheus.yml)

Grafana dashboard: [`monitoring/dashboard.json`](monitoring/dashboard.json)

Deployment screenshot: [`docs/deployment.png`](docs/deployment.png)
