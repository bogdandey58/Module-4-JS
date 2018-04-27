const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const key = [];

let addKeyboardLayout = (alphabet) => {

    let k1 = alphabet.slice(0, 12);

    let k2 = alphabet.slice(12, 23);

    let k3 = alphabet.slice(23);

    key.push(k1, k2, k3);

    console.log('key ---', key);

    return key;
}

let getRandCharInRow = (row) => {

    addKeyboardLayout(alphabet);

    console.log(key);

    let rnd = Math.floor(Math.random() * key[row].length);

    console.log("key[row][rnd] ---", key[row][rnd]);

    return key[row][rnd];
}

let getRandCharInAlph = (alphabet) => {

    let rnd = Math.floor(Math.random() * alphabet.length);

    console.log("alphabet[rnd] ---", alphabet[rnd]);

    return alphabet[rnd];

}

addKeyboardLayout(alphabet);

getRandCharInRow(0);

getRandCharInAlph(alphabet);