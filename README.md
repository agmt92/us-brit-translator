# American-British Translator

This project is the final test in the Quality Assurance curriculum from freeCodeCamp. It is a JavaScript-based translation utility designed for text localization between American and British English. The project includes various features, functions, and classes to ensure accurate and context-sensitive translations. Additionally, it includes comprehensive unit and functional tests to verify the correctness of the translations and the API endpoints.

## Running Demo

A running demo of the project is hosted on Heroku. You can access it [here](https://eng-brit-translator-98c5db572423.herokuapp.com/).

## Exam Page

For more details about the exam and the requirements, visit the [freeCodeCamp exam page](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator).

## Features

- **Text Translation**: Converts text from American English to British English and vice versa.
- **Highlighting**: Highlights the translated words in the output.
- **Clock Format Conversion**: Converts time formats between American and British styles.
- **Title Translation**: Translates titles (e.g., Mr., Mrs., Dr.) and capitalizes them appropriately.
- **Error Handling**: Handles various error cases such as missing fields, invalid locale values, and empty text.

## Functions and Classes

### Translator Class

The [`Translator`](command:_github.copilot.openSymbolFromReferences?%5B%22Translator%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") class is the core of the translation functionality. It includes methods to handle word replacements, clock format changes, and title translations.

- **Constructor**: Initializes the dictionaries for American and British English.
- **translate(words, locale)**: Translates the given text based on the specified locale.
- **invertDictionary(dictionary)**: Inverts the key-value pairs in a dictionary.

### Helper Functions

- **switcher(translated, word, newWord)**: Replaces words in the text based on the provided dictionary.
- **switcherClock(translated, translateSym, newSym)**: Converts time formats between American and British styles.
- **switcherTitle(translated, word, newWord)**: Translates titles and capitalizes them.
- **capitalizeFirstLetter(word)**: Capitalizes the first letter of a word.

## Project Structure

```
.
├── components
│   └── translator.js
├── tests
│   ├── 1_unit-tests.js
│   └── 2_functional-tests.js
├── api.js
├── server.js
└── README.md
```

- **components/translator.js**: Contains the [`Translator`](command:_github.copilot.openSymbolFromReferences?%5B%22Translator%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") class and helper functions.
- **tests/1_unit-tests.js**: Contains unit tests for the translation functionality.
- **tests/2_functional-tests.js**: Contains functional tests for the API endpoints.
- **api.js**: Defines the API endpoints and handles the translation requests.
- **server.js**: Sets up the server and integrates the API routes.

## API Endpoints

The main API endpoint for translation is `/api/translate`. Below is an excerpt from `api.js` showing how the endpoint is set up:

```javascript
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
```

## Unit and Functional Tests

The project includes comprehensive unit and functional tests to ensure the correctness of the translation functionality and the API endpoints.

### Unit Tests

The unit tests are located in `tests/1_unit-tests.js`. These tests verify that the [`Translator`](command:_github.copilot.openSymbolFromReferences?%5B%22Translator%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fqa%2Fus-brit-translator%2Froutes%2Fapi.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") class correctly highlights translations for specific phrases between American and British English, ensuring accurate localization.

### Functional Tests

The functional tests are located in `tests/2_functional-tests.js`. These tests verify the behavior of the API endpoints, ensuring that the correct responses are returned for various input scenarios, including error handling for missing fields and invalid locale values.



## Acknowledgements

This project is built on the boilerplates provided by freeCodeCamp. I want to thank them for providing the free educative opportunity and the resources to learn and build.

---

Thank you for using the American-British Translator! If you have any questions or feedback, feel free to reach out.

---

This is the boilerplate for the American British Translator project:
 https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator
