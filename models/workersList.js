const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeListSchema = new Schema({
    employee: {
        type:String,
        required : true
    },
    presence: {
        type: Number,
        requierd: true
    }
}, {timestamps: true});

const EmployeeList = mongoose.model('EmployeeList', EmployeeListSchema);
module.exports = EmployeeList;