var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
*/
/*router.get('/', function(req,res) {
    //res.render('index',{})
    res.send({
      users: ['Will', "Laura"];
    });
  
  res.render('Index', {
    title: 'My App!',
    age:33
  })
});
*/
//router.get
//router.post
router.get('/users', function(req, res) {
  res.send(200);
  
});
module.exports = router;
