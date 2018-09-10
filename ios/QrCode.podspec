require 'json'
version = JSON.parse(File.read('../package.json'))["version"]

Pod::Spec.new do |s|

  s.name           = "QrCode"
  s.version        = version
  s.summary        = "Capture a React Native view to an image"
  s.homepage       = "https://github.com/LewinJun/react-native-lewin-qrcode"
  s.license        = "MIT"
  s.author         = { "Gaëtan Renaudeau" => "xxx@gmail.com" }
  s.platform       = :ios, "7.0"
  s.source         = { :git => "https://github.com/LewinJun/react-native-lewin-qrcode.git", :tag => "v#{s.version}" }
  s.source_files   = '**/*.{h,m}'
  s.preserve_paths = "**/*.js"
  s.dependency 'React'

end
