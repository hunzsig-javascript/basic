import Cookie from '../Storage/Cookie';


const Core = {
  default: 'zh_cn',
  langJson: {},
  setDefault: (lang) => {
    let tempLang = Cookie.get('i18nDefaultLang');
    if (tempLang === '') {
      tempLang = 'zh_cn'
    }
    Core.default = tempLang;
  },
  setLangJson: (langJson) => {
    Core.langJson = langJson;
  },
  tr: (trans, lang = null) => {
    if (lang === null) {
      lang = Core.default;
    }
    trans = trans.toUpperCase();
    let l = (Core.langJson[lang] && Core.langJson[lang][trans]) ? Core.langJson[lang][trans] : null;
    if (!l) l = (Core.langJson[Core.default] && Core.langJson[Core.default][trans]) ? Core.langJson[Core.default][trans] : null;
    if (!l) return '[I18N]' + trans;
    return l;
  },
};

export default Core;
