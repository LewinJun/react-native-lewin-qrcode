
'use strict'

const { NativeModules } = require('react-native');
  export const  readerQR= (fileUrl)=>{
    var QRScanReader = NativeModules.QRScanReader;

    return QRScanReader.readerQR(fileUrl);    
  }