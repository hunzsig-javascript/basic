const Const = {

  /**
   * 图片处理
   */
  pic: {
    404: require('./../assets/img/404.jpg'),
    logo: require('./../assets/img/logo.jpg'),
  },

  /**
   * 获取图片资源
   * @param key
   * @returns {*}
   */
  get: (key) => {
    return Const.pic[key];
  },

  /**
   * 设置图片资源
   * @param key
   * @param dataSource
   */
  set: (key, dataSource) => {
    Const.pic[key] = dataSource;
  },

  /**
   * 图片路径自适应
   * @param data
   * @param def
   * @returns {string}
   */
  adapt: (data, def) => {
    def = def || Const.get(404);
    if (typeof data === 'string' && data.length > 0) {
      return data;
    }
    return def;
  },

};

export default Const;
