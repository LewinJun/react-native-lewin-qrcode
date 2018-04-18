# react-native-lewin-qrcode
react-native 识别照片二维码

## Table of contents
- [Install](#install)
- [Usage](#usage)

## Install
### 1: 暂时没有发布到npm所以需要自己手动添加到dependencies 
`"react-native-lewin-qrcode": "git://github.com/LewinJun/react-native-lewin-qrcode.git#1.0"`
### 2: yarn install 或 npm install
### 3: react-native link react-native-lewin-qrcode

## Usage
```javascript
import {readerQR} from 'react-native-lewin-qrcode'
  //path 图片文件的路径
  readerQR(path).then((data)=>{
     Alert.alert('识别结果',data);
  }).catch((err)=>{
     Alert.alert('识别失败');
  });
```javascript
