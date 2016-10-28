# idsp-web-seed2-charts
图标插件

安装方法

### 1. 下载程序包
```bash
npm i idsp-web-seed2-charts --save
```

### 2. 配置文件依赖

找到 `index.html` 文件的systemjs配置,加入 
`echarts`,`zrender` 和`idsp-web-seed2-charts`  配置
```js
SystemJS.config({
    transpiler: 'ts',
    typescriptOptions: {
        // ...
    },
    packages: {
        //...
        'echarts': {defaultExtension: 'js'},
        'zrender': {defaultExtension: 'js', main: 'lib/zrender.js'},
       
        // 组件设置 
        'idsp-web-seed2-charts': {main: 'src/charts.ts'},
    
        "src": {
            //...
        }
    },
    meta: {
        // ...
    },
    
    map: {
        // ...
        'zrender': 'node_modules/zrender/',
        'echarts': 'node_modules/echarts/',
        'idsp-web-seed2-charts': 'node_modules/idsp-web-seed2-charts/'
    }
});
```

### 3. 在项目`src/common/directives/directives.ts`中依赖组件

```ts
//...
import charts from "idsp-web-seed2-charts";

export const mod = module('directives', [...others, charts]);
```


### 4. 接下来就可以使用 `<charts option=""></charts>` 指令来创建图表了
```html
<charts option="testOption"></charts>
```

### 配置请查看官网说明
参考实例 http://echarts.baidu.com/examples.html

配置手册 http://echarts.baidu.com/option.html#title
