---
title: 阿里（支付宝）小程序
order: 0
---

# 快速上手阿里小程序

让我们在一分钟内开启一个阿里小程序项目吧！

> Remax 支持所有阿里系小程序，包括支付宝，钉钉，淘宝等。

## 创建项目

```bash
$ npx degit remaxjs/template-alipay my-app
$ cd my-app && npm install
```

## 运行项目

```bash
$ npm run dev
```

打开小程序开发者工具，选中项目根目录，你将看到

<img src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*Ig_sQarBrgIAAAAAAAAAAABkARQnAQ" width="240" />

成功！

## 项目结构

现在我们来看一下 Remax 应用的结构：

```
my-app/
┳ package.json
┣ dist/
┣ node_modules/
┣ src/
┗━┓ app.js
  ┣ app.css
  ┣ app.config.js
  ┣ pages/
  ┗━┓ index/
    ┗━┓
      ┣ index.js
      ┣ index.module.css
      ┣ index.config.js
```

`dist` 为编译后的文件目录。

`src` 为源文件目录

`app.js` 入口文件，具体可参考 [指南 - 框架](/guide/framework)

`app.css` 全局样式文件

`app.config.js` 为小程序全局配置文件，对应 `app.json`，具体可参考 [指南 - 配置](/guide/config)

```js
module.exports = {
  pages: ['pages/index/index'],
  window: {
    defaultTitle: 'My Project',
  },
};
```

`pages` 存放项目页面

`pages/index/index.js` 页面文件，对应小程序 Page 方法

```jsx
import * as React from 'react';
import { View, Text } from 'remax/ali';
import './index.module.css';

export default () => {
  return (
    <View>
      <Text>pages/index/index</Text>
    </View>
  );
};
```

> 默认导出的的 React 组件就是当前的页面，关于生命周期的使用方式参考 [指南 - 生命周期](/guide/framework#生命周期-1)
>
> Remax 针对不同平台有对应的实现，如 `remax/ali`，`remax/wechat`，`remax/toutiao` 等等，开发者可根据需要选择对应的平台。关于跨平台开发解决方案请查看：[跨平台开发](/guide/one)。

`index.module.css` 页面样式文件，关于样式请参考 [指南 - 样式](/guide/style)

`index.config.js` 页面配置文件，会自动转换成小程序页面配置文件 `index.json`，关于配置请参考 [指南 - 配置](/guide/config)
