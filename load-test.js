//Load Testing exploration - Michael Griffiths
//09-08-1982
//Load testing will determine performance under an average load. 

import http from 'k6/http';
import {sleep,check} from 'k6';

export const options = {
    duration: '1m',
    vus: 5,

};

export default() =>{
    let result = http.get('http://localhost:3000/posts', {tags: {name: '01_Simple_Test'}});
    check(result,{
        'is status 200': (r) => r.status ===200
    });
    sleep(Math.random()*5); //creates a pause and mimics more realistic behaviour


};