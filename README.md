Apache SkyWalking Client JS Test
==========

This project provides test [skywalking-client-js](https://github.com/apache/skywalking-client-js) necessary environment, you could just simple use it to see the data SkyWalking collected and how SkyWalking visualizes on the UI

# Quick start

The test project generates traffic automatically through `selenium`.

**Requests: [docker](https://docs.docker.com/install/), [docker-compose](https://docs.docker.com/compose/install/).**

1. Start SkyWalking

```shell script
docker-compose -f test/skywalking-docker-compose.yaml up -d
```

2. Run the test project

```shell script
npm run rebuild

#  `oap:12800` is the rest port for SkyWalking OAP.
cd test && export OAP_SERVER=oap:12800 && docker-compose -f test-project-docker-compose.yaml up -d
```

3. Visit SkyWalking UI

[http://127.0.0.1:8080](http://127.0.0.1:8080)
