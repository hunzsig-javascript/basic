import Cookie from '../Storage/Cookie';

let tempLang = Cookie.get('i18nDefaultLang');
if (tempLang === '') {
  tempLang = 'zh_cn'
}

const Core = {
  default: tempLang,
  langJson: {},
  setDefault: (lang) => {
    Core.default = lang;
  },
  setLangJson: (langJson) => {
    Core.langJson = langJson;
  },
  tr: (trans, lang = null) => {
    if (lang === null) {
      lang = Core.default;
    }
    let l = (Core.langJson[lang] && Core.langJson[lang][trans]) ? Core.langJson[lang][trans] : null;
    if (!l) l = (Core.langJson[Core.default] && Core.langJson[Core.default][trans]) ? Core.langJson[Core.default][trans] : null;
    if (!l) return '[I18N]' + trans;
    return l;
  },
};

export default Core;
