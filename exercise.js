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