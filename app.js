
const fs = require('fs');

const userName = 'Betsabe'

const userApellido = 'Correa'

fs.writeFile('user-data.txt','Nombre: ' + userName,
(err)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log("file created");
});

fs.appendFile('user-data.txt', '\nApellido: ' + userApellido,
(err)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log("file changed");
});

