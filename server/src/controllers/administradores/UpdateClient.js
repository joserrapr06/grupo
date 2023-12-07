const { Leads } = require('../../db');


module.exports = {
  UpdateClient: async (req, res) => {
    const { clientId } = req.params;
    const {
        name, 
        email,
         phone,
         nationality,
         curp,
         country_of_origin,
         rfc,
         occupation,
         civil_status,
         lot_of_interest,
         country,
         state,
         municipality,
         address,
    } = req.body;

    try {
      const client = await Leads.findByPk(clientId);
      if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }

      // Actualizar propiedades solo si se proporcionan en la solicitud
      if (name) client.name = name;
      if (email) client.email = email;
      if (phone) client.phone = phone;
      if (nationality) client.nationality = nationality;
      if (curp) client.curp = curp;
      if (country_of_origin) client.country_of_origin = country_of_origin;
      if (rfc) client.rfc = rfc;
      if (occupation) client.occupation = occupation;
      if (civil_status) client.civil_status = civil_status;
      if (lot_of_interest) client.lot_of_interest = lot_of_interest;
      if (country) client.country = country;
      if (state) client.state = state;
      if (municipality) client.municipality = municipality;
      if (address) client.address = address;



      // Guardar los cambios en la base de datos
      await client.save();

      console.log('Cliente actualizada');
      res.status(200).json({ message: 'Publicación actualizada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
