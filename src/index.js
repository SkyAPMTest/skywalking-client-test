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
// import ClientMonitor from '../node_modules/skywalking-client-js/src/index';
import ClientMonitor from 'skywalking-client-js';
import Vue from 'vue';

ClientMonitor.register({
  service: 'test-ui',
  pagePath: 'http://localhost:8080/',
  serviceVersion: 'v1.0.0',
  vue: Vue,
  useFmp: true,
});
// promise error
// function foo() {
//   Promise.reject('Hello, Promise!');
// }
// foo();
// fetch('http://example.com/movies')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

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

// js error
// const ss = null;
// ss.v;

// vue error
new Vue({
  data: {
    name: "chen",
    age: 18,
    message: "--------------------------------",
    src3:"https://pic.xiaohuochai.site/blog/chromePerformance2_error.png",
    src4:"",
},
  methods: {
    async click() {
      this.name = 'click'
      await timeout();
    },
    async click1() {
      this.name = 'click1'
      throw {msg: 'async function error',status: 1000};
    },
    test() {
      throw {
        msg: 'vue error',
        status: 3000
      }
    }
  },
  created() {
    this.click1();
    this.test();
  }
})
// // mock
// function timeout() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => Math.random() > 0.5 ?
//       resolve() :
//       reject({
//         msg: '随机的异步错误',
//         status: 2000
//       }), 500)
//   })
// }

// resource errors
// const img = new Image(10, 10);
// img.src = 'test.jpg';
