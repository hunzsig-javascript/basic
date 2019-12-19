import Cookie from '../../Storage/Cookie';
import sourceLangJson from '../LangJson';


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
  addLangJson: (langJson) => {
    for (let i in langJson) {
      if (Core.langJson[i] === undefined) {
        Core.langJson[i] = {};
      }
      for (let k in langJson[i]) {
        Core.langJson[i][k] = langJson[i][k];
      }
    }
  },
};

Core.addLangJson(sourceLangJson);
console.log(Core.langJson);

export default Core;
