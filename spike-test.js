import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 2 },
  ],
  thresholds:{
    //errror rate must be lower than 49%
    'checks': ['rate>0.49'],
    // 95% of requests must have a waiting time below 2ms
    'http_req_waiting': ['p(95)<2'] 

  }
};

export default function () {
  let result = http.get('http://localhost:3000/posts', {tags: {name: '01_Spike_Test_200'}});
    check(result,{
        'is status 200': (r) => r.status ===200
    });
    let fail_result = http.get('http://localhost:3000/comments', {tags: {name: '01_Spike_Test_Fail'}});
    check(fail_result,{
        'is status 200': (r) => r.status ===200
    });
  sleep(1);
}