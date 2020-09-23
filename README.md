Apache SkyWalking Client Test

# Usage
* Install  
the skywalking-client-js runtime library is available at npm
```
npm install skywalking-client-js --save
```
* Init SDK
```
import ClientMonitor from 'skywalking-client-js';
```
```
ClientMonitor.register({
  collector: 'http://localhost:8888',
  service: 'test-ui',
  pagePath: 'http://localhost:8080/',
  serviceVersion: 'v1.0.0',
});
```