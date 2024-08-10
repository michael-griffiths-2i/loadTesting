import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 2000 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 1000 },
  ],
};

export default function () {
  http.get('http://localhost:3001/api');
  sleep(1);
}