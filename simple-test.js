//Load Testing exploration - Michael Griffiths
//09-08-1982
//installation of K6 : choco install k6
//running of project : k6 run simple-test.js

import http from 'k6/http';



//define the constants to be used in my test
//k6 needs the options exported and the default dunction exported



export const options = {
    vus: 1, //virtual users
    duration: '10s' //time limit
}

export default() =>{
    http.get('http://localhost:3001/posts');
    //http.get('http://localhost:3001/parts'); Failed test to check outputs
};