const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Leads', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    curp: {
      type: DataTypes.STRING
    },
    country_of_origin: {
      type: DataTypes.STRING
    },
    rfc: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    },
    civil_status: {
      type: DataTypes.STRING
    },
    lot_of_interest: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    municipality: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    

    
     
 





  },);
};
