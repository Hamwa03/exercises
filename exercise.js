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