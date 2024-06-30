import { createI18n } from 'vue-i18n';
import messages from "@/i18n/messages.js";
import getBrowserLocale from "@/i18n/get-browser-locale.js";

const instance = createI18n({
    locale: getBrowserLocale({countryCodeOnly: true}),
    fallbackLocale: 'en',
    messages
});

export default instance;

export const i18n = instance.global;