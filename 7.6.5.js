const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrvalues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        arrvalues.push(...obj[key]);
    } else {
        arrvalues.push(obj[key]);
    }
}

console.log(arrvalues); // [ 'some', 'text', 1, 2, 3, 4, 5, 'there' ]