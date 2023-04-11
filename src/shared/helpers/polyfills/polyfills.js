/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable security/detect-object-injection */
export const getIncludesMethod = () => {
  Array.prototype.includes = function (value) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return true;
      }
    }
    return false;
  };
};

export const getMapMethod = () => {
  Array.prototype.map = function (callback, thisArg) {
    var arr = this;
    var mappedArr = [];

    for (var i = 0; i < arr.length; i++) {
      mappedArr.push(callback.call(thisArg, arr[i], i, arr));
    }

    return mappedArr;
  };
};
