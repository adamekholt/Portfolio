// document.addEventListener('DOMContentLoaded', () => {
//     AOS.init({
//         duration: 700,
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const wordSpan = document.querySelector('.word');
    const words = ['developer', 'problem solver', 'code ninja', 'bug hunter', 'frontend wizard'];
    let currentWord = 0;
    let wordArray = [];

    const splitLetters = (word) => {
        wordArray = [];
        wordSpan.innerText = '';
        for (let char of word) {
            let letter = document.createElement('span');
            letter.className = 'letter behind';
            letter.innerHTML = char === ' ' ? '&nbsp;' : char;
            wordSpan.appendChild(letter);
            wordArray.push(letter);
        }
    };

    const animateLetterIn = () => {
        wordArray.forEach((letter, i) => {
            setTimeout(() => {
                letter.className = 'letter in';
            }, i * 80);
        });
    };

    const changeWord = () => {
        currentWord = (currentWord + 1) % words.length;
        splitLetters(words[currentWord]);
        animateLetterIn();
    };

    splitLetters(words[currentWord]);
    animateLetterIn();

    setInterval(changeWord, 2500);
});
