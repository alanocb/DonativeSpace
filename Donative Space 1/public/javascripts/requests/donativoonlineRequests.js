// Função para obter a lista de donativos online do servidor
async function requestGetDonativosOnline() {
    try {
      const response = await fetch('/api/donativoonline');
      const result = await response.json();
      return { successful: response.status === 200, data: result };
    } catch (err) {
      console.log(err);
      return { err: err };
    }
  }
  
  // Função para adicionar um novo donativo online no servidor
  async function requestAddDonativoOnline(donativoonline) {
    try {
      const response = await fetch('/api/donativoonline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donativoonline)
      });
      const result = await response.json();
      return { successful: response.status === 200, data: result };
    } catch (err) {
      console.log(err);
      return { err: err };
    }
  }
  