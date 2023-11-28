async function requestCampanhas() {
    try {
      const response = await fetch('/api/campanhas/');
      const result = await response.json();
      return {
        successful: response.status === 200,
        unauthenticated: response.status === 401,
        campanhas: result,
      };
    } catch (err) {
      console.log(err);
      return { err: err };
    }
  }
  
  async function requestAddCampanha(
    nome_evento,
    data_inicio,
    data_termino,
    campanha_observacao,
    admin_id,
    org_id,
    campanha_img
  ) {
    try {
      const response = await fetch('/api/campanhas/', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          nome_evento: nome_evento,
          data_inicio: data_inicio,
          data_termino: data_termino,
          campanha_observacao: campanha_observacao,
          admin_id: admin_id,
          org_id: org_id,
          campanha_img: campanha_img,
        }),
      });
      return { successful: response.status === 200 };
    } catch (err) {
      console.log(err);
      return { err: err };
    }
  }
  
 