const pool = require('../config/database');

class Campanhas {
  constructor(campanha_id, nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img) {
    this.campanha_id = campanha_id;
    this.nome_evento = nome_evento;
    this.data_inicio = data_inicio;
    this.data_termino = data_termino;
    this.campanha_observacao = campanha_observacao;
    this.admin_id = admin_id;
    this.org_id = org_id;
    this.campanha_img = campanha_img;
  }

  static async getCampanhas() {
    try {
      const dbResult = await pool.query('SELECT * FROM campanha');
      const dbCampanhas = dbResult.rows;
      const campanhas = dbCampanhas.map(
        (dbo) => new Campanhas(dbo.campanha_id, dbo.nome_evento, dbo.data_inicio, dbo.data_termino, dbo.campanha_observacao, dbo.admin_id, dbo.org_id, dbo.campanha_img),
      );
      return { status: 200, result: campanhas };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Something went wrong.' } };
    }
  }

  static async addCampanha(nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img) {
    try {
      const dbResult = await pool.query(
        'INSERT INTO campanha (nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img],
      );
      const dbCampanha = dbResult.rows[0];
      const campanha = new Campanhas(
        dbCampanha.campanha_id, dbCampanha.nome_evento, dbCampanha.data_inicio, dbCampanha.data_termino, dbCampanha.campanha_observacao, dbCampanha.admin_id, dbCampanha.org_id, dbCampanha.campanha_img,
      );
      return { status: 200, result: campanha };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Something went wrong.' } };
    }
  }
}

module.exports = Campanhas;
