var dom = document.getElementById("domestic");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
$.getJSON('convert/domestic.json', function (json) {
    console.log(json.nodes.length);
    myChart.hideLoading();
    myChart.setOption(option = {
        title: {
            text: 'Domestic Network Map',
            x: 'center'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: json.nodes.map(function (node) {
                return {
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    name: node.label,
                    symbolSize: node.size,
                    itemStyle: {
                        normal: {
                            color: node.color,
                            borderColor: '#fff',
                            borderWidth: 1,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'

                        }
                    }
                };
            }),
            edges: json.edges.map(function (edge) {
                return {
                    source: edge.sourceID,
                    target: edge.targetID
                };
            }),
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                // color: 'target',
                width: 0.5,
                curveness: 0.3,
                opacity: 0.7
            },
            emphasis: {
                lineStyle: {
                    width: 9
                }
            },
            roam: true,
            focusNodeAdjacency: true,
        }]
    }, true);
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


var dom = document.getElementById("international");
var myChart2 = echarts.init(dom);
var app = {};
option = null;
myChart2.showLoading();
$.getJSON('convert/international.json', function (json) {
    console.log(json.nodes.length);
    myChart2.hideLoading();
    myChart2.setOption(option = {
        title: {
            text: 'International Network Map',
            x: 'center'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: json.nodes.map(function (node) {
                return {
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    name: node.label,
                    symbolSize: node.size,
                    itemStyle: {
                        normal: {
                            color: node.color,
                            borderColor: '#fff',
                            borderWidth: 1,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'

                        }
                    }
                };
            }),
            edges: json.edges.map(function (edge) {
                return {
                    source: edge.sourceID,
                    target: edge.targetID
                };
            }),
            label: {
                normal: {
                    position: 'right',
                    // show:true
                }
            },
            lineStyle: {
                // color: 'target',
                width: 0.5,
                curveness: 0.3,
                opacity: 0.7
            },
            emphasis: {
                lineStyle: {
                    width: 9
                }
            },
            roam: true,
            focusNodeAdjacency: true,
        }]
    }, true);
});;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}