fetch('https://jsonserver--washingtonjuni7.repl.co/pichau')
  .then(req => req.json())
  .then(data => exibepcs(data));

function exibepcs(data) {
   let str = '<div class="row">'
  for (let i = 0; i < data.length; i++) {
    let pc = data[i];
    str += `
      <div class="col-md-3 mb-3">
        <div class="card">
          <img src="${pc.imagem}" alt="IMG">
          <div class="card-body">
            <h4 class="card-title">${pc.Nome}</h4>
            <p class="card-text">${pc.Descrição}</p>
            <h5 class="card-texttt"> a partir de</h5>
            <h5 class="card-textt"> R$ ${pc.preco}</h5>
            <a href="${pc.Url}" target="_blank" class="btn btn-primary">Saiba Mais</a>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('pcs').innerHTML = str;
}

fetch('https://jsonserver--washingtonjuni7.repl.co/kabum')
  .then(req => req.json())
  .then(data => exibepcs2(data));

function exibepcs2(data) {
   let str = '<div class="row">'
  for (let i = 0; i < data.length; i++) {
    let pc = data[i];
    str += `
      <div class="col-md-3 mb-3">
        <div class="card">
          <img src="${pc.imagem}" alt="IMG">
          <div class="card-body">
            <h4 class="card-title">${pc.Nome}</h4>
            <p class="card-text">${pc.Descrição}</p>
            <h5 class="card-texttt"> a partir de</h5>
            <h5 class="card-textt"> R$ ${pc.preco}</h5>
            <a href="${pc.Url}" target="_blank" class="btn btn-primary">Saiba Mais</a>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('pcs2').innerHTML = str;
}