const manageTranslations = require('react-intl-translations-manager').default;

const messagesDirectory = './src/common/i18n/extracted-messages';
const translationsDirectory = './src/common/i18n/locales';
const whitelistsDirectory = './src/common/i18n/locales/whitelists/';

// Show reports
manageTranslations({
  messagesDirectory,
  translationsDirectory,
  whitelistsDirectory,
  languages: ['es', 'en'],
  singleMessagesFile: true,
});
