// Created by baihuibo on 2016/10/14.
import charts from "./charts";
import {module, bootstrap} from "angular";

const app = module('app', [charts]);

app.run(function ($rootScope) {
    $rootScope.testOption = {
        title: {text: 'ECharts 入门示例'},
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
});

bootstrap(document, ['app']);