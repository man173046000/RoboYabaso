var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

 function switchfind(id, name) {
    mongodb.functionSwitch.findOne({ groupid: id, functionname: name }, function (err, data) {
        if (err) {
            console.log(err);
            return null;
        }

       else if (!data) {
            console.log("No record found")
            return null;
        }
        else
        console.log('date = ' + data);
        //console.log('data.functionswitch = ' + data.functionswitch);
        return 0;
    })
};

module.exports = {
    switchfind: switchfind
};