/*
200 virtual users (VUs) will ramp up over the first minute.
These 200 VUs will then continuously access the site for 8 hours.
Each VU will make a GET request to http://localhost:3001/posts and then pause for 1 second before making the next request.
*/


import http from 'k6/http';
import { sleep } from 'k6';

export let options = {

  stages: [
    { duration: '1m', target: 200 }, //mimics 200 users for 1 minute
    { duration: '1h', target: 200 }, //mimics 200 users for 8 hours
    { duration: '1m', target: 10 }, //mimics 10 users for 1 minute
  ],
};

export default function () {
  http.get('http://localhost:3001/posts');
  sleep(1);
}