document.addEventListener('DOMContentLoaded', () => {
    const donativoForm = document.getElementById('donativoForm');
    donativoForm.addEventListener('submit', validateForm);
  });
  
  function validateForm(event) {
    event.preventDefault();
    const donativo_quantidade = document.getElementById('donativo_quantidade').value;
    const data_recolha = document.getElementById('data_recolha').value;
    const donativo_observacao = document.getElementById('donativo_observacao').value;
    const doador_id = document.getElementById('doador_id').value;
    const org_id = document.getElementById('org_id').value;
    const subcategoria_id = document.getElementById('subcategoria_id').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
  
    // Realizar validações dos campos aqui
    if (donativo_quantidade.trim() === '') {
      alert('Por favor, preencha a quantidade do donativo.');
      return;
    }
  
    if (data_recolha.trim() === '') {
      alert('Por favor, preencha a data da recolha.');
      return;
    }
  
    if (donativo_observacao.trim() === '') {
      alert('Por favor, preencha a observação do donativo.');
      return;
    }
  
    if (doador_id.trim() === '') {
      alert('Por favor, preencha o ID do doador.');
      return;
    }
  
    if (org_id.trim() === '') {
      alert('Por favor, selecione uma organização.');
      return;
    }
  
    if (subcategoria_id.trim() === '') {
      alert('Por favor, selecione uma subcategoria.');
      return;
    }
  
    if (telefone.trim() === '') {
      alert('Por favor, preencha o telefone do doador.');
      return;
    }
  
    if (email.trim() === '') {
      alert('Por favor, preencha o email do doador.');
      return;
    }
  
    if (endereco.trim() === '') {
      alert('Por favor, preencha o endereço do doador.');
      return;
    }
  
    const donativo = {
      donativo_quantidade,
      data_recolha,
      donativo_observacao,
      doador_id,
      org_id,
      subcategoria_id,
      telefone,
      email,
      endereco
    };
  
    // Enviar o donativo para a API
    addDonativoFisico(donativo)
      .then((response) => {
        console.log(response);
        // Limpar o formulário e exibir uma mensagem de sucesso
        donativoForm.reset();
        alert('Donativo feito com sucesso!');
      })
      .catch((error) => {
        console.error(error);
        // Exibir uma mensagem de erro
        alert('Ocorreu um erro. Por favor, tente novamente.');
      });
  }
  
  function addDonativoFisico(donativo) {
    return fetch('/api/donativofisico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donativo)
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        return { msg: 'Ocorreu um erro. Por favor, tente novamente.' };
      });
  }
  