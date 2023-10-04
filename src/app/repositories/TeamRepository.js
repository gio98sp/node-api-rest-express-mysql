import { query } from '../database/connection.js';

class TeamRepository {
  create(team) {
    const sql = 'INSERT INTO teams SET ?;';
    return query(sql, team);
  }

  findAll() {
    const sql = 'SELECT * FROM teams;';
    return query(sql);
  }

  findById(id) {
    const sql = 'SELECT * FROM teams WHERE id = ?;';
    return query(sql, id);
  }

  update(id, team) {
    const sql = 'UPDATE teams SET ? WHERE id = ?;';
    return query(sql, [team, id]);
  }

  delete(id) {
    const sql = 'DELETE FROM teams WHERE id = ?';
    return query(sql, id);
  }
}

export default new TeamRepository();
