
const { Leads } = require('../../db');
require('dotenv').config();

module.exports = {
  AddLead: async (req, res) => {
    const { name, email, phone } = req.body;

    try {
      const lead = await Leads.create({
        name, email, phone
      })
    console.log("Lead creado correctamente");
      res.status(200).send(lead)
   
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
