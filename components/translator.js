const americanOnly = require('./american-only');
const americanToBritishSpelling = require('./american-to-british-spelling');
const americanToBritishTitles = require('./american-to-british-titles');
const britishOnly = require('./british-only');

class Translator {
    constructor() {
        this.americanOnly = americanOnly;
        this.americanToBritishSpelling = americanToBritishSpelling;
        this.americanToBritishTitles = americanToBritishTitles;
        this.britishOnly = britishOnly;
    }

    translate(words, locale) {
        let wordChange = words;

        if (locale === 'american-to-british') {
            wordChange = switcher(wordChange, this.americanToBritishSpelling, this.invertDictionary(this.americanToBritishSpelling));
            wordChange = switcher(wordChange, this.americanOnly, this.britishOnly);
            wordChange = switcherTitle(wordChange, this.americanToBritishTitles, this.invertDictionary(this.americanToBritishTitles));
            wordChange = switcherClock(wordChange, ':', '.');
        } else if (locale === 'british-to-american') {
            wordChange = switcher(wordChange, this.invertDictionary(this.americanToBritishSpelling), this.americanToBritishSpelling);
            wordChange = switcher(wordChange, this.britishOnly, this.americanOnly);
            wordChange = switcherTitle(wordChange, this.invertDictionary(this.americanToBritishTitles), this.americanToBritishTitles);
            wordChange = switcherClock(wordChange, '.', ':');
        }
        return (wordChange !== words ? wordChange : "Everything looks good to me!");
    }

    invertDictionary(dictionary) {
        return Object.keys(dictionary).reduce((acc, key) => {
            acc[dictionary[key]] = key;
            return acc;
        }, {});
    }
}

const switcher = (translated, word, newWord) => {
    Object.keys(word).forEach((key) => {
        const regex = new RegExp(`(?<=^|[.'"\\s])${key}(?=[.'"\\s]|$)`, 'gi');
        translated = translated.replace(regex, `<span class="highlight">${word[key]}</span>`);
    });
    return translated;
};

const switcherClock = (translated, translateSym, newSym) => {
    const regex = new RegExp(`(\\d{1,2})${translateSym}(\\d{1,2})`, 'g');
    translated = translated.replace(regex, `<span class="highlight">$1${newSym}$2</span>`);
    return translated;
};

const switcherTitle = (translated, word, newWord) => {
    Object.keys(word).forEach((key) => {
        const regex = new RegExp(`(?<=^|[.'"\\s])${key}(?=[.'"\\s]|$)`, 'gi');
        translated = translated.replace(regex, `<span class="highlight">${capitalizeFirstLetter(word[key])}</span>`);
    });
    return translated;
};

const capitalizeFirstLetter = (word) => {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
};

module.exports = Translator;