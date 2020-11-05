Apache SkyWalking Client Test

# Usage

* Install  
the skywalking-client-js runtime library is available at npm

```shell script
npm install skywalking-client-js --save
```

* Init SDK

```typescript
import ClientMonitor from 'skywalking-client-js';

ClientMonitor.register({
  service: 'test-ui',
  pagePath: 'index.html',
  serviceVersion: 'v1.0.0',
});
```

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