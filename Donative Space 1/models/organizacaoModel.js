const pool = require('../config/database');

class Organizacao {
  constructor(org_id, org_name, usr_id, geom, org_endereco, org_telefone, org_img) {
    this.org_id = org_id;
    this.org_name = org_name;
    this.usr_id = usr_id;
    this.geom = geom;
    this.org_endereco = org_endereco;
    this.org_telefone = org_telefone;
    this.org_img = org_img;
  }

  static async getOrganizacoes() {
    try {
      const dbResult = await pool.query('SELECT * FROM organizacao');
      const dbOrganizacoes = dbResult.rows;
      console.log(dbOrganizacoes);
      const organizacoes = dbOrganizacoes.map(
        (dbo) => new Organizacao(dbo.org_id, dbo.org_name, dbo.usr_id, dbo.geom, dbo.org_endereco, dbo.org_telefone, dbo.org_img),
      );
      return { status: 200, result: organizacoes };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Something went wrong.' } };
    }
  }

  static async addOrganizacao(org_name, usr_id, geom, org_endereco, org_telefone, org_img) {
    try {
      const dbResult = await pool.query(
        'INSERT INTO organizacao (org_name, usr_id, geom, org_endereco, org_telefone, org_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [org_name, usr_id, geom, org_endereco, org_telefone, org_img],
      );
      const dbOrganizacao = dbResult.rows[0];
      const organizacao = new Organizacao(
        dbOrganizacao.org_id, dbOrganizacao.org_name, dbOrganizacao.usr_id, dbOrganizacao.geom, dbOrganizacao.org_endereco, dbOrganizacao.org_telefone, dbOrganizacao.org_img,
      );
      return { status: 200, result: organizacao };
    } catch (err) {
      console.log(err);
      return { status: 500, result: { msg: 'Something went wrong.' } };
    }
  }
}

module.exports = Organizacao;
