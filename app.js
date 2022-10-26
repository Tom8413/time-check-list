const express = require('express');
const _= require('lodash');

const app = express();

app.listen(3000);

const presence = 1;
const absence = 0;

const employeList = {
    employee1 : 1,
    employee2 : 1,
    employee3 : 1,
    employee4 : 1,
    employee5 : 1,
    employee6 : 1,
    employee7 : 1,
    employee8 : 1,
    employee9 : 1,
    employee10 : 1,
    employee11: 1,
    employee12 : 1,
    employee13 : 1,
    employee14 : 1,
    employee15 : 1,
    employee16 : 1,
    employee17 : 1,
    employee18 : 1,
    employee19 : 1,
    employee20 : 1
};

app.get('/', (req, res) => {
    let random = _.random(absence, presence);
    console.log(random);

    for(let i = 0; i < Object.keys(employeList).length; i++) {
        console.log(Object.values(employeList)[i]);
    };
    //res.send(random);
}
);