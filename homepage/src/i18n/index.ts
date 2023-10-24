import { initReactI18next } from 'react-i18next';
import en from './en/index';
import ko from './ko/index';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
    resources: {
        'en-US': {
            translation: en.language,
        },
        'ko-KR': {
            translation: ko.language,
        },
    },
    lng: 'ko-KR',
    fallbackLng: {
        'en-US': ['en-US'],
        default: ['ko-KR'],
    },
    debug: true,
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;
