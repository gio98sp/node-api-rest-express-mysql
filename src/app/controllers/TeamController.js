import TeamRepository from '../repositories/TeamRepository.js';

class TeamController {
  async index(_, res) {
    const rows = await TeamRepository.findAll();
    res.send(rows);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await TeamRepository.findById(id);
    res.send(row);
  }

  async store(req, res) {
    const team = req.body;
    const result = await TeamRepository.create(team);
    res.send(result);
  }

  async update(req, res) {
    const id = req.params.id;
    const team = req.body;
    const result = await TeamRepository.update(id, team);
    res.send(result);
  }

  async delete(req, res) {
    const id = req.params.id;
    const result = await TeamRepository.delete(id);
    res.send(result);
  }
}

export default new TeamController();
