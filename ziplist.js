const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(l1, l2) {
  const endlist = [];
  for (let i = 0; i < l1.length; i++) {
    endlist.push(l1[i], l2[i]);
  }
  return endlist;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

console.log(zipListTheSimpleWay(test1, test2));
