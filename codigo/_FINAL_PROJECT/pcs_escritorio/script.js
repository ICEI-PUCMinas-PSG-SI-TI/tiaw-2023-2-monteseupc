const dbMock = {
  Pcs: [
    {
      id: 1,

      Nome: 'COMPUTADOR PICHAU HOME HM332',
      Descrição: 'INTEL CORE I5-8500, UHD INTEL 630, 16GB DDR4, SSD 480GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/k/dk-100-aigo-pichau-intel-s-gpu-01_12_1.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-hm332-intel-core-i5-8500-uhd-intel-630-16gb-ddr4-ssd-480gb-42374',
      preco: ' 2.261,94'

    },
    {
      id: 2,
      Nome: 'COMPUTADOR PICHAU HOME HM592',
      Descrição: 'INTEL CORE I5-10400F, GEFORCE GTX 750 4GB, 8GB DDR4, SSD 240GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gabinete-crusader-intel-sgpu-jpg02.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-hm592-intel-core-i5-10400f-geforce-gtx-750-4gb-8gb-ddr4-ssd-240gb-41693',
      preco: ' 2.149,97'
    },

    {
      id: 3,
      Nome: 'COMPUTADOR PICHAU HOME HM585',
      Descrição: 'AMD RYZEN 5 5600G, 8GB DDR4, SSD 480GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo_dk_100-amd-02_8.png',
      Url: 'https://pichau.com.br/computador-pichau-home-hm332-intel-core-i5-8500-uhd-intel-630-16gb-ddr4-ssd-480gb-42374',
      preco: ' 1.979,97'
    },
    {
      id: 4,
      Nome: 'COMPUTADOR PICHAU HOME',
      Descrição: 'AMD RYZEN 3 4100, RADEON R5 220 2GB, 8GB DDR4, HD 1TB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt_b110_-_01_3_27.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-amd-ryzen-3-4100-radeon-r5-220-2gb-8gb-ddr4-hd-1tb-40505',
      preco: ' 1.549,97'
    },

    {
      id: 5,
      Nome: 'COMPUTADOR PICHAU HOME',
      Descrição: 'INTEL CORE I7-10700, UHD INTEL 630, 16GB DDR4, SSD 240GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gabinete-goblin-preto-sgpu-intel-jpg001_1.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-intel-core-i7-10700-uhd-intel-630-16gb-ddr4-ssd-240gb-40435',
      preco: ' 2.599,97'
    },

    {
      id: 6,
      Nome: 'COMPUTADOR PICHAU HOME',
      Descrição: 'INTEL CORE I3-13100, UHD INTEL 730, 8GB DDR4, HD 1TB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/2/g200-sgpu-001_1_14_1.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-intel-core-i3-13100-uhd-intel-730-8gb-ddr4-hd-1tb-37283',
      preco: ' 1.999,97'
    },

    {
      id: 7,
      Nome: 'COMPUTADOR PICHAU HOME HM177',
      Descrição: 'AMD RYZEN 7 5700G, 8GB DDR4, HD 500GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo_dk_100-amd-02_15.png',
      Url: 'https://www.pichau.com.br/computador-pichau-home-hm177-amd-ryzen-7-5700g-8gb-ddr4-hd-500gb-34105',
      preco: ' 2.149,97'
    },

    {
      id: 8,
      Nome: 'COMPUTADOR PICHAU HOME',
      Descrição: 'AMD RYZEN 3 4100, GEFORCE GT 1030 2GB, 8GB DDR4, SSD 120GB',
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt_b110_-_04_3_21.jpg',
      Url: 'https://www.pichau.com.br/computador-pichau-home-amd-ryzen-3-4100-geforce-gt-1030-2gb-8gb-ddr4-ssd-120gb-33604',
      preco: ' 1.749,97'
    },

  ]
}
function exibepcs() {
  let str = '';
  for (let i = 0; i < dbMock.Pcs.length; i++) {
    let pc = dbMock.Pcs[i];
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
          </a>
        </div>
      `;
  }
  document.getElementById('pcs').innerHTML = str;
}

const dbKabum = {
  pcs2: [
    {
      id: 1,
      Nome2: 'Computador All in One LG 22V30R',
      Descrição2: ' Intel Celeron N5100, 8GB, SSD 128GB, Windows Home 11, Tela de 22 Full HD, Branco ',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/454971/computador-all-in-one-lg-22v30r-intel-celeron-n5100-8gb-ssd-128gb-windows-home-11-tela-de-22-full-hd-branco-22v30r-l-by31p2_1682718666_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/454971/computador-all-in-one-lg-22v30r-intel-celeron-n5100-8gb-ssd-128gb-windows-home-11-tela-de-22-full-hd-branco-22v30r-l-by31p2',
      preco2: ' 1.769,99'
    },



    {
      id: 2,
      Nome2: 'Computador All In One LG 21.5p',
      Descrição2: 'Sem Fio, Quad Core, 8GB RAM, SSD 480GB, Windows 11',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/495230/Computador-All-In-One-LG-21-5p-Sem-Fio-Quad-Core-8GB-RAM-SSD-480GB-Windows-11_1695144405_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/495230/computador-all-in-one-lg-21-5p-sem-fio-quad-core-8gb-ram-ssd-480gb-windows-11',
      preco2: '2.974,91'
    },

    {
      id: 3,
      Nome2: 'Computador Completo 3green',
      Descrição2: 'Intel Core I7 16GB RAM SSD 480GB Monitor 19 HDMI Windows 10 3d-099',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/427773/Computador-Completo-3green-Desktop-Intel-Core-I7-16GB-RAM-SSD-480GB-Monitor-19-HDMI-Windows-10-3d-099_1676312924_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/427773/computador-completo-3green-desktop-intel-core-i7-16gb-ram-ssd-480gb-monitor-19-hdmi-windows-10-3d-099',
      preco2: '1.493,99'
    },

    {
      id: 4,
      Nome2: 'Eletronic Artssypc 67845',
      Descrição2: 'CPU Intel Core I5, 8GB, SSD 120GB, Monitor 19.5"',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/383094/Computador-Completo-CPU-Intel-Core-I5-8GB-SSD-120GB-Monitor-19-5-3green-Homeoffice_1661970565_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/383094/computador-completo-cpu-intel-core-i5-8gb-ssd-120gb-monitor-19-5-3green-homeoffice',
      preco2: '1.061,99'
    },

    {
      id: 5,
      Nome2: 'Computador Completo Bestpc',
      Descrição2: 'Cpu Intel Core I7 16Gb, SSD 512Gb, Monitor 17.1 Polegadas, Homeoffice',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/474704/Computador-Completo-Cpu-Intel-Core-I7-16Gb-SSD-512Gb-Monitor-17-1-Polegadas-Homeoffice_1689277090_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/474704/computador-completo-cpu-intel-core-i7-16gb-ssd-512gb-monitor-17-1-polegadas-homeoffice',
      preco2: '1.161,74'
    },

    {
      id: 6,
      Nome2: 'Computador Skill PRO Completo',
      Descrição2: ' Intel 10ª Geração Core I3 10100F, 8GB, SSD 256GB, GeForce 2GB, Linux + Monitor LED 19.5 + Teclado e Mouse - SP-041',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/428975/Computador-Skill-PRO-Completo-Intel-10-Gera-o-Core-I3-10100F-8GB-SSD-256GB-GeForce-2GB-Linux-Monitor-LED-19-5-Teclado-e-Mouse-SP-041_1676559496_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/428975/computador-skill-pro-completo-intel-10-geracao-core-i3-10100f-8gb-ssd-256gb-geforce-2gb-linux-monitor-led-19-5-teclado-e-mouse-sp-041',
      preco2: '1.709,99'
    },

    {
      id: 7,
      Nome2: 'Eletronic Artssypc 67887',
      Descrição2: 'Intel Core I7, 16GB, SSD 480GB, Monitor 21.5" ',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/382981/Computador-Completo-CPU-Intel-Core-I7-16GB-SSD-480GB-Monitor-21-5-3green-Homeoffice_1661958538_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/382981/computador-completo-cpu-intel-core-i7-16gb-ssd-480gb-monitor-21-5-3green-homeoffice',
      preco2: '1.592,99'
    },

    {
      id: 8,
      Nome2: 'Computador Fácil',
      Descrição2: ' Intel Core I5 11400F, 16GB DDR4, SSD 480GB, GeForce NVIDIA 1GB, Windows 10, Preto',
      imagem2: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/354651/Computador-F-cil-Intel-Core-I5-11400F-16GB-DDR4-SSD-480GB-GeForce-NVIDIA-1GB-Windows-10-Preto_1689966497_gg.jpg',
      Url2: 'https://www.kabum.com.br/produto/354651/computador-facil-intel-core-i5-11400f-16gb-ddr4-ssd-480gb-geforce-nvidia-1gb-windows-10-preto',
      preco2: '2.049,00'
    },


  ]
};
function exibepcs2() {
  let str = '';
  for (let i = 0; i < dbKabum.pcs2.length; i++) {
    let pc = dbKabum.pcs2[i];
    str += `
        <div class="col-md-3 mb-3">
          <div class="card">
            <img src="${pc.imagem2}" alt="IMG">
            <div class="card-body">
              <h4 class="card-title">${pc.Nome2}</h4>
              <p class="card-text">${pc.Descrição2}</p>
              <h5 class="card-texttt"> a partir de</h5>
              <h5 class="card-textt"> R$ ${pc.preco2}</h5>
              <a href="${pc.Url2}" target="_blank" class="btn btn-primary">Saiba Mais</a>
            </div>
          </div>
        </div>
      `;
  }


  document.getElementById('pcs2').innerHTML = str;
}

window.onload = () => {
  exibepcs();
  exibepcs2();
};