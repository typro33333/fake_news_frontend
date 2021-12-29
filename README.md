[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/questions)
<a href="https://www.npmjs.org/package/react-native">
<img src="https://badge.fury.io/js/react-native.svg" alt="Current npm package version." />
<img src="https://raw.githubusercontent.com/webpack-contrib/awesome-webpack/master/media/awesome_webpack_branding.png" alt="Webpack logo." />
</a>
## [ReactJS] + [WebPack]

#### [Go to the Porject]
- `cd webpack-simple-setup`

#### [Install all package need]
- `npm install`

#### [Run as develop enviroment]
- `npm run dev`

#### [Run build web]
- `npm run production enviroment`

##### [You can change config webpack at file webpack.config.js]
<a href="https://webpack.js.org/configuration/">
    Watch more to config webpack like input,output,etc.
</a>

##### [Gencode proto file to JS]
` protoc -I. ./proto/train.proto --js_out=import_style=commonjs,binary:./src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src `

` protoc -I. ./proto/serve.proto --js_out=import_style=commonjs,binary:./src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src `
