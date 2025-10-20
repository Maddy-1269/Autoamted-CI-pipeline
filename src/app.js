const express = require('express');
const app = express();
app.get('/', (req,res)=> res.json({message:'Hello CI!'}));
if(require.main===module){ app.listen(3000, ()=>console.log('running')) }
module.exports = app;
