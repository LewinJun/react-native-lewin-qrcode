import {
    NativeModules,
  } from 'react-native';
  export const  readerQR= (fileUrl)=>{
    var QRScanReader = NativeModules.QRScanReader;

    return QRScanReader.readerQR(fileUrl);    
  }