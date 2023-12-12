fetch('https://jsonserver--washingtonjuni7.repl.co/hardware')
  .then(req => req.json())
  .then(data => exibeHardware(data));

function exibeHardware(hardwareList) {
  let str = '';
  for (let i = 0; i < hardwareList.length; i++) {
    let hardware = hardwareList[i];
    str += `
            
                <h3>${hardware.titulo}</h3>
                <p>${hardware.Descrição}</p>
            
        `;
  }
  str += '</ul>';
  document.getElementById('exibehardware').innerHTML = str;
}

fetch('https://jsonserver--washingtonjuni7.repl.co/YT')
  .then(req => req.json())
  .then(data => exibeyt(data));

function exibeyt(data) {
  let str = '<div class="row">';
  for (let i = 0; i < data.length; i++) {
    let video = data[i];
    str += `
      <div class="col-md-3 mb-3">
        <div class="card">
          <img src="${video.thumbnailUrl}" alt="Thumbnail"> 
          <div class="card-body">
            <h4 class="card-title">${video.Descrição}</h4>
            <a href="${video.Url}" target="_blank" class="btn btn-primary">Assistir Agora</a>
          </div>
        </div>
      </div>
    `;
  }
  str += '</div>';
  document.getElementById('exibeyt').innerHTML = str;
}

