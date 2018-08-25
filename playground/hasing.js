const bcrypt = require('bcryptjs');

const password = 'myPassword!1';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
});

const hashedPassword = '$2a$10$z34OrrXqoKogCr/IrBKdQej6BFZmLnFcqsoq6VoGThStYVXa4vXFy';

bcrypt.compare(password, hashedPassword, (err, res) =>{
    console.log(res);
});


// const {SHA256} = require('crypto-js');
//
// const jwt = require('jsonwebtoken');
//
// const data = {
//     id: 10
// };
//
// const token = jwt.sign(data, '123abc');
// console.log(token);
//
// const verify = jwt.verify(token, '123abc');
// console.log(verify);
//
// // const message = 'I am user number 3';
//
// // const hash = SHA256(message).toString();
// //
// // console.log(`Message: ${message}`);
// // console.log(`Hashed Message: ${hash}`);
// //
// // const data = {
// //     id: 4
// // };
// //
// // const token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// // };
// //
// //
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data).toString());
// //
// // const resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
// //
// // if (resultHash === token.hash){
// //     console.log('Data was not changed');
// // } else{
// //     console.log('Data was changed. Don\'t trust');
// // }
//
