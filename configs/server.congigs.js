if(process.env.Node_ENV !='production'){
    require('dotenv').config();
}
module.exports={
    PORT: process.env.PORT
}