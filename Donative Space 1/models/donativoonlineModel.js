const pool = require('../config/database');

class DonativoOnline {
  constructor(donativoonline_id, cartao, cod_cartao, valor, doador_id, org_id, subcategoria_id, titular, data_validade, data_exp, telefone, email) {
    this.donativoonline_id = donativoonline_id;
    this.cartao = cartao;
    this.cod_cartao = cod_cartao;
    this.valor = valor;
    this.doador_id = doador_id;
    this.org_id = org_id;
    this.subcategoria_id = subcategoria_id;
    this.titular = titular;
    this.data_validade = data_validade;
    this.data_exp = data_exp;
    this.telefone = telefone;
    this.email = email;
  }

  static async getDonativosFisicos() {
    try {
      const query = `
        SELECT *
        FROM donativoonline
        INNER JOIN doador ON donativoonline.doador_id = doador.doador_id
        INNER JOIN organizacao ON donativoonline.org_id = organizacao.org_id
        INNER JOIN subcategoria ON donativoonline.subcategoria_id = subcategoria.subcategoria_id
      `;
      const dbResult = await pool.query(query);
      const dbDonativosOnline = dbResult.rows;
      const donativosOnline = dbDonativosOnline.map(
        (dbDonativoOnline) => new DonativoOnline(
          dbDonativoOnline.donativoonline_id,
          dbDonativoOnline.cartao,
          dbDonativoOnline.cod_cartao,
          dbDonativoOnline.valor,
          dbDonativoOnline.doador_id,
          dbDonativoOnline.org_id,
          dbDonativoOnline.subcategoria_id,
          dbDonativoOnline.titular,
          dbDonativoOnline.data_validade,
          dbDonativoOnline.data_exp,
          dbDonativoOnline.telefone,
          dbDonativoOnline.email
        )
      );
      return { status: 200, result: donativosOnline };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Ocorreu um erro. Por favor, tente novamente.' } };
    }
  }

  static async addDonativoFisico(cartao, cod_cartao, valor, doador_id, org_id, subcategoria_id, titular, data_validade, data_exp, telefone, email) {
    try {
      const query = `
        INSERT INTO donativoonline
        (cartao, cod_cartao, valor, doador_id, org_id, subcategoria_id, titular, data_validade, data_exp, telefone, email)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
      `;
      const dbResult = await pool.query(query, [cartao, cod_cartao, valor, doador_id, org_id, subcategoria_id, titular, data_validade, data_exp, telefone, email]);
      const dbDonativoOnline = dbResult.rows[0];
      const donativoOnline = new DonativoOnline(
        dbDonativoOnline.donativoonline_id,
        dbDonativoOnline.cartao,
        dbDonativoOnline.cod_cartao,
        dbDonativoOnline.valor,
        dbDonativoOnline.doador_id,
        dbDonativoOnline.org_id,
        dbDonativoOnline.subcategoria_id,
        dbDonativoOnline.titular,
        dbDonativoOnline.data_validade,
        dbDonativoOnline.data_exp,
        dbDonativoOnline.telefone,
        dbDonativoOnline.email
      );
      return { status: 200, result: donativoOnline };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Ocorreu um erro. Por favor, tente novamente.' } };
    }
  }
}

module.exports = DonativoOnline;
