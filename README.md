Apache SkyWalking Client JS Test
==========

This project provides test [skywalking-client-js](https://github.com/apache/skywalking-client-js) necessary environment, you could just simple use it to see the data SkyWalking collected and how SkyWalking visualizes on the UI

# Quick start

The test project generates traffic automatically through `selenium`.

**Requests: [docker](https://docs.docker.com/install/), [docker-compose](https://docs.docker.com/compose/install/).**

1. Run the SkyWalking and test project

```shell script
npm run rebuild

docker-compose -f test/all-in-one.yaml up -d
```

2. Visit SkyWalking UI

[http://127.0.0.1:8080](http://127.0.0.1:8080)


3. Remove container

```shell script
docker-compose -f test/all-in-one.yaml down
```