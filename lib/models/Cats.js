const pool = require('../utils/pool');

module.exports = class Cats {
  id;
  name;
    

  constructor(row) {
    this.id = row.id;
    this.name = row.name;

  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats');
    return rows.map((row) => new Cats(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Cats(rows[0]);
  }


};
