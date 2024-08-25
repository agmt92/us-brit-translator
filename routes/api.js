'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body;
      // handle both text and locale missing
      if (text === '' && !locale) {
        return res.json({ error: 'Required field(s) missing'});
      } else if (text === '') {
        return res.json({ error: 'No text to translate'});
      } else
      if (!text || !locale || locale === '') {
        return res.json({ error: 'Required field(s) missing' });
      } else if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field'});
      };
      // access functions in translator.js
      let translation = translator.translate(text, locale);
      // handle no translation
      if (translation === text) {
        return res.json({ text: text, translation: 'Everything looks good to me!' });
      }
      return res.json({ text: text, translation: translation });
    });
};
