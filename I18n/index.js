import defaultI18n from "./src/lang";

const Index = {
  defaultLang: 'zh_cn',
  externalI18n: {},
  setDefaultLang: (lang) => {
    Index.defaultLang = lang;
  },
  setExternal: (externalI18n) => {
    Index.externalI18n = externalI18n;
  },
  tr: (trans, lang = null) => {
    if (lang === null) {
      lang = Index.defaultLang;
    }
    let l = (Index.externalI18n[lang] && Index.externalI18n[lang][trans]) ? Index.externalI18n[lang][trans] : null;
    if (!l) l = (defaultI18n[lang] && defaultI18n[lang][trans]) ? defaultI18n[lang][trans] : null;
    if (!l) l = (Index.externalI18n[Index.defaultLang] && Index.externalI18n[Index.defaultLang][trans]) ? Index.externalI18n[Index.defaultLang][trans] : null;
    if (!l) l = (defaultI18n[Index.defaultLang] && defaultI18n[Index.defaultLang][trans]) ? defaultI18n[Index.defaultLang][trans] : null;
    if (!l) return trans;
    return l;
  },
};

export default Index;
