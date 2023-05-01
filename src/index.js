class Storage {
  /**
   * 获取存储方法
   *
   * @param key {string} - 键名
   * @return {any} - 键值
   */
  getStorage(key) {
    const appValue = getApp().globalData?.[key]
    if (appValue != null) {
      return appValue
    }

    const storageValue = wx.getStorageSync(key)
    if (storageValue !== '') {
      getApp().globalData[key] = storageValue
      return storageValue
    }

    return appValue != null ? appValue : storageValue != null ? storageValue : null
  }

  /**
   * 设置存储方法
   *
   * @param key {string} - 键名
   * @param value {string} - 键值
   */
  setStorage(key, value) {
    getApp().globalData[key] = value
    wx.setStorageSync(key, value)
  }
}

export default Storage
