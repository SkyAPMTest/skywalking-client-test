/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ClientMonitor from '../node_modules/skywalking-client-js/src/index';
// import ClientMonitor from 'skywalking-client-js';
import Vue from 'vue';

ClientMonitor.register({
  service: 'test-ui',
  pagePath: 'index.html',
  serviceVersion: 'v1.0.0',
  useCoreWebVitals: false,
  useFmp: false,
});
// // promise error
function foo() {
  Promise.reject({
    message: 'promise test',
    stack: 'promise error'
  });
}
foo();

fetch(new Request('http://example.com/movies', {
  headers: new Headers({
    'Test': 'fine0830',
  }),
}))
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

// // ajax error
// function loadXMLDoc() {
//   let xmlhttp;
//   if (window.XMLHttpRequest) {
//     //  IE7+, Firefox, Chrome, Opera, Safari
//     xmlhttp = new XMLHttpRequest();
//   } else {
//     // IE6, IE5
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xmlhttp.onreadystatechange = () => {
//     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//       document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//     }
//   };
//   xmlhttp.open("GET", "/try/ajax/ajax_info.txt", true);
//   xmlhttp.send();
// }
// loadXMLDoc();

// vue error
new Vue({
  methods: {
    async click1() {
      throw {message: 'async function error', stack: 'click1 error'};
    },
    async test() {
      throw {
        message: 'vue test',
        stack: 'vue error'
      }
    }
  },
  created() {
    this.test();
    this.click1();
  },
  config: {
    errorHandler(error) {
      console.log(error);
    }
  }
})

// mock
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.5 ?
      resolve() :
      reject({
        message: 'timeout test',
        stack: 2000
      }), 500)
  })
}
timeout();
// resource errors
// const img = new Image(10, 10);
// img.src = 'test.jpg';
// 
// fetch('/peppa', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
// })
// .then(response => response.body)
// .then(body => {
//   const reader = body.getReader();
//   console.log(reader);
// });

const xhr = new XMLHttpRequest();
xhr.open('post', '/test', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status < 400) {
    console.log('Report Successfully');
  }
};
xhr.send();

const myRequest =  new Request('/graphql', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Test': 'fine0830',
  }),
  body: JSON.stringify({
    query: "query queryServices($duration: Duration!,$keyword: String!) {\n    services: getAllServices(duration: $duration, group: $keyword) {\n      key: id\n      label: name\n      group\n    }\n  }",
    variables: {"duration":{"start":"2024-3-26 1503","end":"2024-3-26 1603","step":"MINUTE"},"keyword":""},
  })
});
fetch(myRequest).then((data) => {
  // console.log(data);
})

// js error
// const ss = null;
// ss.v;
