import Sequelize from 'sequelize';
import _ from 'lodash'

const Connection = new Sequelize (
  'africanCountries',
  'postgres',
  'corajiaku96',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

const Country = Connection.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pictures: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

Connection.sync({force:true}).then(() => {
  _.times(10, () => {
    return Country.create({
      name: 'Nigeria',
      description: 'None',
      region: 'West Africa',
      pictures: 'None'
    })
  });
});

export default Connection;