function exercise1() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');

    words.forEach((word) => {
        console.log(`${word} ${word.length}`);
    });
}

function exercise2() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');
    const reverse = textboxValue.split(' ');

    console.log(words.sort((a,b) => b.length - a.length));
    words.forEach((word) => {
        console.log(`${word}`);
    });

    console.log(reverse.reverse());
    reverse.forEach((word) => {
        console.log(`${word}`);
    });
}

function exercise3() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');

    let obj = [];

    words.forEach((word) => {
        if (obj[word] === undefined ) {
            obj[word] = 1;
        } else {
            obj[word] ++;
        }
    });

    for(const frequency in obj) {
        console.log(`${frequency}: ${obj[frequency]}`);
    }

    const array = Array.from(Object.keys (obj));
    array.sort((a,b) => obj[a] - obj[b]);

    arrayReverse = array.reverse();
    arrayReverse.forEach(frequency => console.log(`${frequency}`));
}

function exercise4() {
    var textboxValue = document.getElementById('txt').value;
    var blankSpace = textboxValue.replace(/\s/g,'')
    const letters = blankSpace.split('');

    let obj = [];

    letters.forEach((letter) => {
        if (obj[letter] === undefined) {
            obj[letter] = 1;
        } else{
            obj[letter] ++;
        }
    }
    );

    for (const frequency in obj) {
        console.log(`${frequency} ${obj [frequency]}`);
    }
}

function exercise5() {

    var leetSpeek = document.getElementById('txt');
    var leetAlphabet = new Map ([['a','4'],['b','8'],['e','3'],['g','6'],['i','1'],['l','1*'],['o','0'],['r','2'],['s','5'],['t','7'],['z','2*']]);

    text = leetSpeek.value.toLowerCase();
    for (var i = 0; i < text.length; i++){
        if ( leetAlphabet.get(text[i])) {
            text = text.replace(text[i], leetAlphabet.get(text[i]));
        }
    }
    console.log(text)
}