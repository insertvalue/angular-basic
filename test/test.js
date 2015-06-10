/**
 * Created by hongdian on 2015/6/9.
 */
var User = require('../proxy').User;
User.newAndSave("fpy","1@1.com","2015-06-09","123",true,true,function(err){
    console.log(err);
});