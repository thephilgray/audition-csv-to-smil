// const fs = require('fs');
// const parse = require('csv-parse');

// module.exports = async csvPath => {
//   let csvData;
//   const parser = await parse(
//     { delimiter: '\t', columns: true },
//     (err, data) => {
//       return data;
//     }
//   );
//   fs.createReadStream(csvPath).pipe(parser);
// };
