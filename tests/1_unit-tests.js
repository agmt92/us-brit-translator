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
        test('Translate We watched the footie match for a while. to American English', () => {
            text = 'We watched the footie match for a while.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
        });
        // Translate Paracetamol takes up to an hour to work. to American English
        test('Translate Paracetamol takes up to an hour to work. to American English', () => {
            text = 'Paracetamol takes up to an hour to work.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        });
        // Translate First, caramelise the onions. to American English
        test('Translate First, caramelise the onions. to American English', () => {
            text = 'First, caramelise the onions.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'First, <span class="highlight">caramelize</span> the onions.');
        });
        // Translate I spent the bank holiday at the funfair. to American English
        test('Translate I spent the bank holiday at the funfair. to American English', () => {
            text = 'I spent the bank holiday at the funfair.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
        });
        // Translate I had a bicky then went to the chippy. to American English
        test('Translate I had a bicky then went to the chippy. to American English', () => {
            text = 'I had a bicky then went to the chippy.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
        });
        // Translate I've just got bits and bobs in my bum bag. to American English
        test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
            text = 'I\'ve just got bits and bobs in my bum bag.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
        });
        // Translate The car boot sale at Boxted Airfield was called off. to American English
        test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
            text = 'The car boot sale at Boxted Airfield was called off.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
        });
        // Translate Have you met Mrs Kalyani? to American English
        test('Translate Have you met Mrs Kalyani? to American English', () => {
            text = 'Have you met Mrs Kalyani?';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
        });
        // Translate Prof Joyner of King's College, London. to American English
        test('Translate Prof Joyner of King\'s College, London. to American English', () => {
            text = 'Prof Joyner of King\'s College, London.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
        });
        // Translate Tea time is usually around 4 or 4.30. to American English
        test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
            text = 'Tea time is usually around 4 or 4.30.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        });

    });

    suite('Highlight Translation', () => {
        // Highlight translation in Mangoes are my favorite fruit.
        test('Highlight translation in Mangoes are my favorite fruit.', () => {
            text = 'Mangoes are my favorite fruit.';
            let translation = translator.translate(text, 'american-to-british');
            assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        });
        // Highlight translation in I ate yogurt for breakfast.
        test('Highlight translation in I ate yogurt for breakfast.', () => {
            text = 'I ate yogurt for breakfast.';
            let translation = translator.translate(text, 'american-to-british');
            assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        });
        // Highlight translation in We watched the footie match for a while.
        test('Highlight translation in We watched the footie match for a while.', () => {
            text = 'We watched the footie match for a while.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
        });
        // Highlight translation in Paracetamol takes up to an hour to work.
        test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
            text = 'Paracetamol takes up to an hour to work.';
            let translation = translator.translate(text, 'british-to-american');
            assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        });

    });

});
