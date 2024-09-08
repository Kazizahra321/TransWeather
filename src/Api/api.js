// src/api.js

export const textTranslationEndpoint = process.env.REACT_APP_TRANSLATOR_TEXT_ENDPOINT;
export const textTranslationApiKey = process.env.REACT_APP_TRANSLATOR_TEXT_API_KEY;

export const docTranslationEndpoint = process.env.REACT_APP_TRANSLATOR_DOC_ENDPOINT;
export const docTranslationApiKey = process.env.REACT_APP_TRANSLATOR_DOC_API_KEY;

// Function to fetch text translation
export const fetchTextTranslation = async (text, targetLanguage) => {
  try {
    const response = await fetch(`${textTranslationEndpoint}/translate?api-version=3.0&to=${targetLanguage}`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': textTranslationApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ Text: text }]),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching text translation:', error);
  }
};

// Function to fetch document translation (placeholder, adjust as needed)
export const fetchDocumentTranslation = async (document) => {
  try {
    const response = await fetch(`${docTranslationEndpoint}/path/to/translation/endpoint`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': docTranslationApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ document }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching document translation:', error);
  }
};
