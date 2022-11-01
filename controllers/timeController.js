const EmpployeeTimeList = require('../models/workersList');

const presence = 1;
const absence = 0;

const employeList = {
    employee0 : 1,
    employee1 : 1,
    employee2 : 1,
    employee3 : 1,
    employee4 : 1,
    employee5 : 1,
    employee6 : 1,
    employee7 : 1,
    employee8 : 1,
    employee9 : 1,
    employee10: 1,
    employee11 : 1,
    employee12 : 1,
    employee13 : 1,
    employee14 : 1,
    employee15 : 1,
    employee16 : 1,
    employee17 : 1,
    employee18 : 1,
    employee19 : 1
};

const time_7_createList = (req, res) => {

    setInterval(function() {
        for(let i = 0; i < Object.keys(employeList).length; i++) {
            let random = _.random(absence, presence);
            
            const employeeName = Object.keys(employeList)[i];
            let presenceOfemployee = Object.values(employeList)[i] * random;
            const employeeTimeList = new EmpployeeTimeList({
                employee: employeeName,
                presence: presenceOfemployee
    
            })
            employeeTimeList.save()
                .then((result) => {
                    res.send(result)
            })
                .catch((err) => {
                console.log(err)
            });
            
        }}, 60*1000);
}

const time_15_createList = (req, res) => {

    setInterval(function() {
        for(let i = 0; i < Object.keys(employeList).length; i++) {
            let random = _.random(absence, presence);
            
            const employeeName = Object.keys(employeList)[i];
            let presenceOfemployee = Object.values(employeList)[i] * random;
            const employeeTimeList = new EmpployeeTimeList({
                employee: employeeName,
                presence: presenceOfemployee
    
            })
            employeeTimeList.save()
                .then((result) => {
                    res.send(result)
            })
                .catch((err) => {
                console.log(err)
            });
            
        }}, 90*1000);
}

module.exports = {
    time_7_createList,
    time_15_createList
}