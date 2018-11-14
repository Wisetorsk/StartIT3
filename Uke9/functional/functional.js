function arr(n) { return [...Array(n).keys()] }

let siren = [...Array(10).keys()].map(i => (i > 3) ? ((i % 2 === 0) ? 'wee' : 'woo') : 'Bææ'
);