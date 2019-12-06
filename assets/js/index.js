'use strict'

/*
function loadUser(resolve, reject) {
    const request = new XMLHttpRequest();

    let user = null;
    request.onload = function () {
        user = JSON.parse(request.responseText);
        resolve(user);
    };

    request.onerror = function () {
        reject(new Error(`${this.status}:${this.statusText}`))
    };

    request.open('GET', "./user.json");
    request.send();

}

const loadUserPromise = new Promise(loadUser);

loadUserPromise
    .then(console.log)
    .catch(console.error);*/


/*
fetch('./user.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const fetchPromise = fetch('./user.json');

const parseJsonPromise = fetchPromise
    .then(response => response.json())
    .catch(console.error);

parseJsonPromise
    .then(console.log)
    .catch(console.error);

