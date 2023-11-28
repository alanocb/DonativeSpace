
async function requestDonativosFisicos() {
    try {
      const response = await fetch('/api/donativoFisico');
      const result = await response.json();
      return { successful: response.status === 200, data: result };
    } catch (err) {
      console.log(err);
      return { err: err };
    }
  }
  
  async function requestAdd(donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item) {
    try {
        const response = await fetch('/api/donativoFisico', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                donativo_quantidade: donativo_quantidade,
                data_recolha:  data_recolha,
                donativo_observacao: donativo_observacao,
                doador_id: doador_id,
                org_id: org_id,
                subcategoria_id: subcategoria_id,
                telefone: telefone,
                email: email,
                endereco: endereco,
                item: item,
            })
        });
        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}
  