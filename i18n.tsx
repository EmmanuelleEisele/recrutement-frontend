import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './public/locales/fr/translation.json';
import en from './public/locales/en/translation.json';

// Initialisation de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr', 
    interpolation: { escapeValue: false },
  });

export default i18n;