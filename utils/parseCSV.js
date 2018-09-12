const csvdata = require('csvdata');

module.exports = async csvPath => {
  const data = await csvdata.load(csvPath, { delimiter: '\t', columns: true });
  return data;
};
