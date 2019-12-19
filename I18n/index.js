import Config from './Config';

const Index = (trans, lang = null) => {
  if (lang === null) {
    lang = Config.default;
  }
  trans = trans.toUpperCase();
  let l = (Config.langJson[lang] && Config.langJson[lang][trans]) ? Config.langJson[lang][trans] : null;
  if (!l) l = (Config.langJson[Config.default] && Config.langJson[Config.default][trans]) ? Config.langJson[Config.default][trans] : null;
  if (!l) return '[I18N]' + trans;
  return l;
};

export default Index;
