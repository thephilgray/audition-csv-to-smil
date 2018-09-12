const toSeconds = str => {
  const time = str.split(':');
  return +time[0] * 60 + +time[1];
};

const add = (start, duration) =>
  Number(toSeconds(start) + toSeconds(duration)).toFixed(3);

module.exports = csvData => {
  return csvData.reverse().map(item => ({
    Start: String(toSeconds(item.Start)),
    End: add(item.Start, item.Duration),
    Name: item.Name
  }));
};
