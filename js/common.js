/**
 * 去除路径的后缀和点
 * @param {Object} path
 */
function removeExt(path) {
  return path.substring(0, path.lastIndexOf('.'));
}

/**
 * 获取一个带有属性的元素，不存在，取父元素
 * @param {Object} el 要查找的元素或子元素
 * @param {Object} attribute 属性
 */
function getElementByAttribute(el, attribute) {
  var temp = el;
  var value = temp.getAttribute(attribute);
  var parameter = value || value === 0 || value === '';
  try {
    while(!parameter) {
      if(temp === temp.parentNode) return undefined;
      temp = temp.parentNode;
      value = temp.getAttribute(attribute);
      parameter = value || value === 0 || value === '';
    }
  } catch(e) {
    console.error('未找到');
    return undefined;
  }
  return temp;
}