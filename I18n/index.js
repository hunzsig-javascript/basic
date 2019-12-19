import DefaultLang from "./src/lang";
import Cookie from '../Storage/Cookie';

let tempLang = Cookie.get('i18nDefaultLang');
if (tempLang === '') {
  tempLang = 'zh_cn'
}

const Core = {
  default: tempLang,
  mineLang: {},
  setDefault: (lang) => {
    Core.default = lang;
  },
  setMineLang: (mineLang) => {
    Core.mineLang = mineLang;
  },
  tr: (trans, lang = null) => {
    if (lang === null) {
      lang = Core.default;
    }
    let l = (Core.mineLang[lang] && Core.mineLang[lang][trans]) ? Core.mineLang[lang][trans] : null;
    if (!l) l = (DefaultLang[lang] && DefaultLang[lang][trans]) ? DefaultLang[lang][trans] : null;
    if (!l) l = (Core.mineLang[Core.default] && Core.mineLang[Core.default][trans]) ? Core.mineLang[Core.default][trans] : null;
    if (!l) l = (DefaultLang[Core.default] && DefaultLang[Core.default][trans]) ? DefaultLang[Core.default][trans] : null;
    if (!l) return trans;
    return l;
  },
};

export default Core;
