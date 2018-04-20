# react-native-lewin-qrcode
react-native 识别照片二维码

## Table of contents
- [Install](#install)
- [Usage](#usage)

## Install
### 1: yarn add 或者npm install,现在最新版本是1.0.0
`yarn add react-native-lewin-qrcode  `
### 2: yarn install 或 npm install
### 3: react-native link react-native-lewin-qrcode

## Usage
### NOTE: 可以参考Example的App.js中的openPhoto方法

```javascript
import {readerQR} from 'react-native-lewin-qrcode'
//path 图片文件的路径
readerQR(path).then((data)=>{
  Alert.alert('识别结果',data);
}).catch((err)=>{
   Alert.alert('识别失败');
});
```
