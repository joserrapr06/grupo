
const { Leads } = require('../../db');
require('dotenv').config();

module.exports = {
  AllLead: async (req, res) => {

    try {
      const lead = await Leads.findAll()
      console.log("Todos los leads");
      res.status(200).send(lead)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
