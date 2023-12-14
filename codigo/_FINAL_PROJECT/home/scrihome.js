fetch('https://jsonserver--washingtonjuni7.repl.co/home')
  .then(req => req.json())
  .then(data => exibedestaque(data));

function exibedestaque(data) {
  let str = `
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">`;

  for (let i = 0; i < data.length; i++) {
    let destaque = data[i];
    str += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`;
  }

  str += `
      </div>
      <div class="carousel-inner">`;

  for (let i = 0; i < data.length; i++) {
    let destaque = data[i];
    str += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${destaque.img}"" class="d-block w-100" alt="...">
<a href="${destaque.url}" target="_blank"> 
          <div class="carousel-caption" style="font-size: 1.5rem;">
          
          </div>
        </div>`;
  }

  str += `
      </div>
    </div>`;

  document.getElementById('exibedestaque').innerHTML = str;
}

fetch('https://jsonserver--washingtonjuni7.repl.co/homecard')
  .then(req => req.json())
  .then(data => exibecard(data));

  function exibecard(data) {
    let str = '<div class="row justify-content-center">'
   for (let i = 0; i < data.length; i++) {
     let pc = data[i];
     str += `
       <div class="col-md-3 mb-3">
         <a href="${pc.url}" target="_blank" class="card-link">
           <div class="card">
             <img src="${pc.img}" alt="IMG">
             <div class="card-body">
             </div>
           </div>
         </a>
       </div>
     `;
   }
   document.getElementById('exibecard').innerHTML = str;
 }