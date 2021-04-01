const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/servicios.json')
const servicios = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports={
        index:(req,res)=>{
            res.render('index',{servicios})
        }
    }
// router.get('/', function(req, res, next) {
//     //   res.render('index', { title: 'Express' });
//     // })