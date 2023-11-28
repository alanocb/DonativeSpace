const pool = require('../config/database');

class DonativoFisico {
  constructor(donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item) {
    this.donativo_quantidade = donativo_quantidade;
    this.data_recolha = data_recolha;
    this.donativo_observacao = donativo_observacao;
    this.doador_id = doador_id;
    this.org_id = org_id;
    this.subcategoria_id = subcategoria_id;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
    this.item = item;
  }

  static async getDonativosFisicos() {
    try {
      const query = `
        SELECT *
        FROM donativofisico
        INNER JOIN doador ON donativofisico.doador_id = doador.doador_id
        INNER JOIN organizacao ON donativofisico.org_id = organizacao.org_id
        INNER JOIN subcategoria ON donativofisico.subcategoria_id = subcategoria.subcategoria_id
      `;
      const dbResult = await pool.query(query);
      const dbDonativosFisicos = dbResult.rows;
      const donativosFisicos = dbDonativosFisicos.map(
        (dbDonativoFisico) => new DonativoFisico(
          dbDonativoFisico.donativo_quantidade,
          dbDonativoFisico.data_recolha,
          dbDonativoFisico.donativo_observacao,
          dbDonativoFisico.doador_id,
          dbDonativoFisico.org_id,
          dbDonativoFisico.subcategoria_id,
          dbDonativoFisico.telefone,
          dbDonativoFisico.email,
          dbDonativoFisico.endereco,
          dbDonativoFisico.item,
        )
      );
      return { status: 200, result: donativosFisicos };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Ocorreu um erro. Por favor, tente novamente.' } };
    }
  }

  static async addDonativoFisico(donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item) {
    try {
      const query = `
        INSERT INTO donativofisico
        (donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *
      `;
      const dbResult = await pool.query(query, [donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item]);
      const dbDonativoFisico = dbResult.rows[0];
      const donativoFisico = new DonativoFisico(
        dbDonativoFisico.donativo_quantidade,
        dbDonativoFisico.data_recolha,
        dbDonativoFisico.donativo_observacao,
        dbDonativoFisico.doador_id,
        dbDonativoFisico.org_id,
        dbDonativoFisico.subcategoria_id,
        dbDonativoFisico.telefone,
        dbDonativoFisico.email,
        dbDonativoFisico.endereco,
        dbDonativoFisico.item,
      );
      return { status: 200, result: donativoFisico };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Ocorreu um erro. Por favor, tente novamente.' } };
    }
  }
}

module.exports = DonativoFisico;
