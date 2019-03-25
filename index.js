const dontpad = require('dontpad-api');
 
const dontPadUrlTarget = 'testeTCSindustrial/gabriel';
 
dontpad.readContent(dontPadUrlTarget)
.then(conteudo => {
    console.log("Reading dontpad content... ");
    console.log('Content: ', conteudo);
    console.log('Check the content in http://dontpad.com/' + dontPadUrlTarget);
    if(conteudo != 'Gabriel'){
        dontpad.writeContent(dontPadUrlTarget, 'Gabriel')
        .then(response => {
            console.log('Saved succesfully...');
        })
        .catch(err => {
            console.log('Error saving dontpad ', err);
        })
    }
}).catch(err => {
    console.log('Error reading dontpad ', err)  
});






