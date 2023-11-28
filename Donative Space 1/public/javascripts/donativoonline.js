function initMap() {
  
  const uluru = { lat: 38.70875611888508, lng: -9.151887842812668 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
  });
  
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  // pontos das organizacoes, com rua
  const points = [
    { lat: 38.71172554687779, lng: -9.154124685506888, name: "Cruz vermelha" ,info:"Jardim 9 de Abril, 1 a 5, 1249-083 Lisboa"},
    { lat: 38.76989290898343, lng: -9.190659571164282, name: "A.A.D.C", info:"Rua Cavado, 3 Lumiar, Lisboa"},
    { lat: 38.73958872646722, lng: -9.1609534, name: "acreditar" ,info:"Rua Professor Lima Bastos 73, Lisboa"},
    { lat: 38.72078007252989, lng: -9.172504053971387, name: "Ajuda de mae" ,info:"Rua Arco do Carvalhão 282 Lisboa"},
    { lat: 38.71246091126308, lng: -9.175079997274104, name: "Alzheimer Portugal" ,info:"Av. de Ceuta Norte,Lote 15, 3º Lisboa"},
    { lat: 38.7310684080154, lng: -9.151288347584003, name: "Cáritas" ,info:"Av. Sidónio Pais, 20, 5º dto 1050-15 Lisboa"}
  ];

  const infoWindows = [];

  points.forEach(function(point) {
    const marker = new google.maps.Marker({
      position: { lat: point.lat, lng: point.lng },
      map: map,
      title: point.name
    });

    const infoContent = `<h3>${point.name}</h3>
                         <p>${point.info}</p>`;

    const infoWindow = new google.maps.InfoWindow({
      content: infoContent
    });

    marker.addListener("click", function() {
      infoWindows.forEach(function(infoWin) {
        infoWin.close();
      });
      infoWindow.open(map, marker);
    });

    infoWindows.push(infoWindow);
  });

  const polygonCoordinates = points.map(point => {
    return new google.maps.LatLng(point.lat, point.lng);
  });

  const polygon = new google.maps.Polygon({
    paths: polygonCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  polygon.setMap(map);
}

window.initMap = initMap;


// Função para obter a data atual no formato YYYY-MM-DD
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Função para enviar o donativo online
async function sendDonativoOnline(donativoOnline) {
  try {
    const response = await fetch('/api/donativoonline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donativoOnline)
    });

    const result = await response.json();

    if (response.status === 200) {
      // Donativo online enviado com sucesso
      console.log('Donativo online enviado:', result);
      alert('Donativo online enviado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido, se necessário
      // document.getElementById('valor').value = '';
      // document.getElementById('doador_id').value = '';
      // document.getElementById('org_id').value = '';
      // document.getElementById('telefone').value = '';
      // document.getElementById('email').value = '';
    } else {
      // Erro ao enviar o donativo online
      console.error('Erro ao enviar donativo online:', result);
      alert('Ocorreu um erro ao enviar o donativo online. Por favor, tente novamente.');
    }
  } catch (err) {
    console.error(err);
    alert('Ocorreu um erro ao enviar o donativo online. Por favor, tente novamente.');
  }
}

// Função para validar o formulário e enviar o donativo online
function validateForm() {
  const donativoOnline = {
    donativo_quantidade: document.getElementById('valor').value,
    data_recolha: getCurrentDate(),
    donativo_observacao: '',
    doador_id: document.getElementById('doador_id').value,
    org_id: document.getElementById('org_id').value,
    subcategoria_id: '',
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value,
    endereco: ''
  };

  const errors = [];

  // Verificar se cada campo obrigatório foi preenchido
  if (!donativoOnline.donativo_quantidade) {
    errors.push('Por favor, preencha o campo "Valor".');
  }

  if (!donativoOnline.doador_id) {
    errors.push('Por favor, preencha o campo "Nome".');
  }

  if (!donativoOnline.org_id) {
    errors.push('Por favor, selecione uma organização.');
  }

  if (!donativoOnline.telefone) {
    errors.push('Por favor, preencha o campo "Telefone".');
  }

  if (!donativoOnline.email) {
    errors.push('Por favor, preencha o campo "Email".');
  }

  if (errors.length > 0) {
    // Exibir mensagens de erro
    alert(errors.join('\n'));
  } else {
    // Todos os campos obrigatórios foram preenchidos, enviar a solicitação
    sendDonativoOnline(donativoOnline);
  }
}

// Event listener para o envio do formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

