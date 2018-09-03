var dom = document.getElementById("domestic");
var myChart = echarts.init(dom);
var app = {};
option1 = null;
myChart.showLoading();
$.getJSON('convert/domestic.json', function (json) {
    console.log(json.nodes.length);
    myChart.hideLoading();
    myChart.setOption(option1 = {
        title: {
            text: 'Domestic Network Map',
            x: 'center'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            // layout: 'none',
            progressiveThreshold: 700,
            layout: 'none',
            animation: false,
            force: {
                // initLayout: 'circular'
                // gravity: 0
                repulsion: 2000,
                edgeLength: 700
            },
            data: json.nodes.map(function (node) {
                return {
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    name: node.label,
                    symbolSize: node.size,
                    draggable: true,
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
                    target: edge.targetID,
                    value: 100,
                    lineStyle: {
                        width: edge.width,
                        // color: edge.color
                    },
                    emphasis: {
                        lineStyle: {
                            width: edge.width,
                            color: edge.color
                        },
                    }
                };
            }),
            tooltip: {},
            toolbox: {
                feature: {
                    dataZoom: {}
                },
                left:"center",
                z:1000
            },
            dataZoom: {
                type: 'inside'
            },
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
            roam: true,
            focusNodeAdjacency: true,
        }]
    }, true);
});;
if (option1 && typeof option1 === "object") {
    myChart.setOption(option1, true);
}


var dom = document.getElementById("international");
var myChart2 = echarts.init(dom);
var app = {};
option2 = null;
myChart2.showLoading();
$.getJSON('convert/international.json', function (json) {
    console.log(json.nodes.length);
    myChart2.hideLoading();
    myChart2.setOption(option2 = {
        title: {
            text: 'International Network Map',
            x: 'center'
        },
        animationDurationUpdate: 500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            // layout: 'none',
            progressiveThreshold: 200,
            layout: 'none',
            animation: false,
            force: {
                // initLayout: 'circular'
                // gravity: 0
                repulsion: 400,
                edgeLength: 100
            },
            data: json.nodes.map(function (node) {
                return {
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    name: node.label,
                    symbolSize: node.size,
                    draggable: true,
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
                    target: edge.targetID,
                    value: 100,
                    lineStyle: {
                        width: edge.width,
                        // color: edge.color
                    },
                    emphasis: {
                        lineStyle: {
                            width: edge.width,
                            color: edge.color
                        },
                    }
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
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}



function changeTypeDomestic() {
    graphType = document.getElementById("graphTypeDomestic").value;
    option1.series['0'].layout = graphType;
    myChart.setOption(option1, true);
}

function changeTypeInter() {
    graphType = document.getElementById("graphTypeInter").value;
    option2.series['0'].layout = graphType;
    myChart2.setOption(option2, true);
}