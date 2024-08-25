const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    // All translations should have the span element with the class of highlight
    // access the tests in the translator.js file
    let translator = new Translator();
    let text = '';
    suite('to British Enlish', () => {
        let locale = 'american-to-british';
        // Translate Mangoes are my favorite fruit. to British English (includ)
        test('Translate Mangoes are my favorite fruit. to British English', () => {
            text = 'Mangoes are my favorite fruit.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        });
        // Translate I ate yogurt for breakfast. to British English
        test('Translate I ate yogurt for breakfast. to British English', () => {
            text = 'I ate yogurt for breakfast.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        });
        // Translate We had a party at my friend's condo. to British English
        test('Translate We had a party at my friend\'s condo. to British English', () => {
            text = "We had a party at my friend's condo.";
            let translation = translator.translate(text, locale);
            assert.equal(translation, "We had a party at my friend's <span class=\"highlight\">flat</span>.");
        });
        // Translate Can you toss this in the trashcan for me? to British English
        test('Translate Can you toss this in the trashcan for me? to British English', () => {
            text = 'Can you toss this in the trashcan for me?';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
        });
        // Translate The parking lot was full. to British English
        test('Translate The parking lot was full. to British English', () => {
            text = 'The parking lot was full.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'The <span class="highlight">car park</span> was full.');
        });
        // Translate Like a high tech Rube Goldberg machine. to British English
        test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
            text = 'Like a high tech Rube Goldberg machine.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        });
        // Translate To play hooky means to skip class or work. to British English
        test('Translate To play hooky means to skip class or work. to British English', () => {
            text = 'To play hooky means to skip class or work.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
        });
        // Translate No Mr. Bond, I expect you to die. to British English
        test('Translate No Mr. Bond, I expect you to die. to British English', () => {
            text = 'No Mr. Bond, I expect you to die.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
        });
        // Translate Dr. Grosh will see you now. to British English
        test('Translate Dr. Grosh will see you now. to British English', () => {
            text = 'Dr. Grosh will see you now.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, '<span class="highlight">Dr</span> Grosh will see you now.');
        });
        // Translate Lunch is at 12:15 today. to British English
        test('Translate Lunch is at 12:15 today. to British English', () => {
            text = 'Lunch is at 12:15 today.';
            let translation = translator.translate(text, locale);
            assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
        });
    });

    suite('to American English', () => {
        // Translate We watched the footie match for a while. to American English
        // Translate Paracetamol takes up to an hour to work. to American English
        // Translate First, caramelise the onions. to American English
        // Translate I spent the bank holiday at the funfair. to American English
        // Translate I had a bicky then went to the chippy. to American English
        // Translate I've just got bits and bobs in my bum bag. to American English
        // Translate The car boot sale at Boxted Airfield was called off. to American English
        // Translate Have you met Mrs Kalyani? to American English
        // Translate Prof Joyner of King's College, London. to American English
        // Translate Tea time is usually around 4 or 4.30. to American English

    });

    suite('Highlight Translation', () => {
        // Highlight translation in Mangoes are my favorite fruit.
        // Highlight translation in I ate yogurt for breakfast.
        // Highlight translation in We watched the footie match for a while.
        // Highlight translation in Paracetamol takes up to an hour to work.

    });

});
