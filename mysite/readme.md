注意：如果是独立css文件的话（该基础框架就是这样），使得scss、css文件不支持热插拔。

# 1.编译
- 安装
```bash
npm init
```
- 编译
```bash
webpack
```
或者按照热插拔启功
```bash
npm run hot
```
输入：`localhost:3000`即可预览

# 2.文件夹说明
+ build           编译后的文件
+ src             源码文件
  - asserts       资源目录，如图片
  - components    组件目录
    - global      全局的scss/jsx
    - public      公用的组件
    - about       模块about
    - blog        模块blog
    - ...

# 3.源码

src文件夹下，`global`是全局的scss/jsx，`public`是公用的组件，其余为分别的模块；

特别注意：`src/components/global/_varible.scss` 可以定义全局的css样式
      `src/components/global/global.js` 可以定义全局的配置，如模块的名字，注意修改模块的名字后，src/components的分模块名字也对应修改，包括模块下的jsx，scss最好也一起修改
