const express = require('express')
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('view engine', 'ejs');

app.get("/", function(request, response) {
    response.render('pages/index');
});

app.get("/sobre", function(request, response){
    response.render('pages/about');
});
app.get("/contato", function(request, response){
    response.render('pages/contact');
});

app.listen(8080)
console.log('Server is running');


/*function pesquisaBinaria(numeroProcurado) {
    let inicio = 1;
    let fim = 100;
  
    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);
  
      if (meio === numeroProcurado) {
        return meio;
      } else if (meio < numeroProcurado) {
        inicio = meio + 1;
      } else {
        fim = meio - 1; 
      }
    }
  
    return -1; 
  }
  

  const numeroProcurado = 75;
  const resultado = pesquisaBinaria(numeroProcurado);
  
  if (resultado !== -1) {
    console.log("O número " + numeroProcurado + " foi encontrado!");
  } else {
    console.log("O número " + numeroProcurado + " não foi encontrado!");
  }

  pesquisaBinaria(10)*/