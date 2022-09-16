function exercise1() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');

    words.forEach((word) => {
        console.log(`${word} ${word.length}`);
    });
}