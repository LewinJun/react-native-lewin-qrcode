
'use strict'

const { NativeModules } = require('react-native');
/**
 * 识别照片中的二维码
 * @param {string} fileUrl 本地图片地址
 */
export const  readerQR= (fileUrl)=>{
  var QRScanReader = NativeModules.QRScanReader;
  return QRScanReader.readerQR(fileUrl);    
}