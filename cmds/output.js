const csvdata = require('csvdata');
module.exports = async (args, data) => {
  console.log('output.js: ', args);
  try {
    await csvdata.write(
      process.cwd(args.output) + `/${args.output}.csv`,
      data,
      {
        header: 'Start,End,Name'
      }
    );
  } catch (e) {
    console.error(e);
  }
};
