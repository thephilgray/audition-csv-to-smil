const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const parseCsv = require('./utils/parseCSV');
const mapData = require('./utils/mapData');

module.exports = async () => {
  console.log(process.argv);
  const args = minimist(process.argv.slice(2));
  console.log(args);
  const fileName = args._[0];
  const parsed = await parseCsv(fileName);
  const mapped = await mapData(parsed);
  console.log(mapped);

  let cmd = args._[0] || 'help';

  if (args.output || args.o) {
    cmd = 'output';
  }

  switch (cmd) {
    case 'output':
      await require('./cmds/output')(args, mapped);
      break;
    // case 'help':
    //   require('./cmds/help')(args);
    //   break;
    default:
      console.error(`"${cmd}" is not a valid command.`);
      break;
  }
};
