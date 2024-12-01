const data = Deno.readTextFileSync("input.txt")
  .split(/[\r\n]+/)
  .map((line) => line.split(/\s+/))
  .reduce<number[][]>((lists, [locA, locB]) => {
    lists[0].push(Number(locA));
    lists[1].push(Number(locB));
    return lists;
  }, [[], []])
  .map((list) => list.sort());

const measurements = data[0].map((locA, i) => [locA, data[1][i]])
  .reduce(
    (sum, [locA, locB]) => sum + Math.abs(locA - locB),
    0,
  );

const differences = data[0].map((locA) =>
  data[1].filter((locB) => locA === locB).length * locA
)
  .reduce((sum, diff) => sum + diff, 0);

console.log(measurements, differences);
