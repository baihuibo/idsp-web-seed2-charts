///<reference path="../typings/charts.d.ts"/>
// Created by baihuibo on 2016/10/14.
import {module} from "angular";
import echarts from "echarts/dist/echarts.min.js";
const modName = 'charts';

export const mod = module(modName, []);
export default modName;

mod.directive('charts', function () {
    return {
        template: '<div></div>',
        replace: true,
        scope: {option: '=?', instance: '=?'}, // 新增接口 instance 来手动控制图表
        link($scope, $element){
            let nativeEl = $element[0],
                unwatch,
                myChart: ECharts.ECharts;

            if (nativeEl.offsetHeight) {
                init();
            } else {
                unwatch = $scope.$watch(() => !!nativeEl.offsetHeight, function (view) {
                    if (view) {
                        unwatch();
                        init();
                    }
                });
            }

            $scope.$on('$destroy', function () {
                unwatch && unwatch();
                myChart && myChart.dispose();
                $scope.instance = myChart = nativeEl = null;
            });

            function init() {
                // 基于准备好的dom，初始化echarts实例
                setTimeout(function () {// 延迟来初始化图表，等待dom模型构建完成
                    $scope.instance = myChart = echarts.init(nativeEl);

                    $scope.$watch('option', function (option) {
                        if (option) {
                            myChart.setOption(option);
                        } else {
                            myChart.clear();
                        }
                    });
                }, 13);
            }
        }
    }
});

declare module "echarts/dist/echarts.min.js" {
    export = ECharts;
}