function gerarPaises(){
    let url = `https://restcountries.com/v3.1/independent?status=true`;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    let res = JSON.parse(xhr.responseText);

    let p = document.getElementById('principal');
    res.sort((a, b)=> a.translations.por.common.localeCompare(b.translations.por.common))

    HTMLpaises = "";

    for(i in res){
      HTMLpaises += `
        <div class="col-md-4 col-sm-6">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${res[i].flags.svg}">
            <div class="card-body">
              <h3>${res[i].translations.por.common}</h3>
              <p class="card-text"><b>Capital(is): </b>${res[i].capital}</p>
              <p class="card-text"><b>População: </b>${res[i].population.toLocaleString()} habitantes</p>
              <p class="card-text"><b>Região: </b>${res[i].region}</p>
              <a href="pais.html?nome=${res[i].name.official}" class="btn btn-dark">Ver mais</a>
            </div>
          </div>
        </div>
      `;
    }
  p.innerHTML = `
  <div id="principal" class="container">
    <div class="row">
      ${HTMLpaises}
    </div>
  </div>
  `
}

function dadosPais(){
  let parametro = new URLSearchParams(window.location.search).get('nome')

  let url = `https://restcountries.com/v3.1/name/${parametro}`;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  let res = JSON.parse(xhr.responseText);
  
  let m = document.getElementById('main');
  m.innerHTML = `
  <div id="main" class="container">
   <div class="row">
     <div class="col-md-6 col-sm-12">
       <h1 style="margin-bottom: 5vh;"><b>${res[0].translations.por.common}</b></h1>
       <p><b>Nome local: </b>${Object.values(res[0].name.nativeName)[0].common}</p>
       <p><b>Nome oficial: </b>${res[0].translations.por.official}</p>
       <p><b>Capital(is): </b>${res[0].capital.join(', ')}</p>
       <p><b>População: </b>${res[0].population.toLocaleString()} habitantes</p>
       <p><b>Área: </b>${res[0].area.toLocaleString()} km²</p>
       <p><b>Continente: </b>${res[0].continents}</p>
       <p><b>Idioma: </b>${Object.values(res[0].languages).join(', ')}</p>
       <p><b>Moeda: </b>${Object.values(res[0].currencies).map((moeda) => moeda.name).join(', ')}</p>
     </div>
     <div class="col-md-6 col-sm-12">
         <h4 style="margin-bottom: 5vh;">Bandeira:</h4>
         <img style="width: 500px;" src="${res[0].flags.svg}" class="img-fluid">
     </div>
     <div style="margin-top: 5vh;" class="offset-md-6 col-md-6">
       <h4 style="margin-bottom: 5vh;">Brasão:</h4>
       <img style="width: 300px;" src="${res[0].coatOfArms.svg}">
     </div>
   </div>
  </div>
  `;
}

function filtrarRegiao(){
  let i = document.getElementById('filtrar-regiao');

  let region = i.value;

  if(region === ""){
    var url = `https://restcountries.com/v3.1/independent?status=true`
  } else {
    var url = `https://restcountries.com/v3.1/region/${region}`;
  }

  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  let res = JSON.parse(xhr.responseText);

  let p = document.getElementById('principal');
  res.sort((a, b)=> a.translations.por.common.localeCompare(b.translations.por.common))

  HTMLpaises = "";

  for(i in res){
    HTMLpaises += `
      <div class="col-md-4 col-sm-6">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${res[i].flags.svg}">
          <div class="card-body">
            <h3>${res[i].translations.por.common}</h3>
            <p class="card-text"><b>Capital(is): </b>${res[i].capital}</p>
            <p class="card-text"><b>População: </b>${res[i].population.toLocaleString()} habitantes</p>
            <p class="card-text"><b>Região: </b>${res[i].region}</p>
            <a href="pais.html?nome=${res[i].name.official}" class="btn btn-dark">Ver mais</a>
          </div>
        </div>
      </div>
    `;
  }
  p.innerHTML = `
  <div id="principal" class="container">
    <div class="row">
      ${HTMLpaises}
    </div>
  </div>
  `
}

function procurarPais(){
  let procurar = document.getElementById('procurarInput').value.toLowerCase();

  if(procurar === ''){
    let url = `https://restcountries.com/v3.1/independent?status=true`;

  } else {
    let url = `https://restcountries.com/v3.1/translation/${procurar}`;
  }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    let res = JSON.parse(xhr.responseText);

    let p = document.getElementById('principal');
    res.sort((a, b)=> a.translations.por.common.localeCompare(b.translations.por.common));

    HTMLpaises = "";

    for(i in res){
      HTMLpaises += `
        <div class="col-md-4 col-sm-6">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${res[i].flags.svg}">
            <div class="card-body">
              <h3>${res[i].translations.por.common}</h3>
              <p class="card-text"><b>Capital(is): </b>${res[i].capital}</p>
              <p class="card-text"><b>População: </b>${res[i].population.toLocaleString()} habitantes</p>
              <p class="card-text"><b>Região: </b>${res[i].region}</p>
              <a href="pais.html?nome=${res[i].name.official}" class="btn btn-dark">Ver mais</a>
            </div>
          </div>
        </div>
      `;
    }
    p.innerHTML = `
    <div id="principal" class="container">
      <div class="row">
        ${HTMLpaises}
      </div>
    </div>
    `
}
