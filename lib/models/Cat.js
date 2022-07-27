const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
    

  constructor(row) {
    this.id = row.id;
    this.name = row.name;

  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats');
    return rows.map((row) => new Cat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Cat(rows[0]);
  }


};
