var dom = document.getElementById("route_ip_usage");
var myChart4 = echarts.init(dom);
var app = {};
option = null;
// $.get('user_log.json', function (data) {
//     console.log(data);
myChart4.setOption(option = {
    color: ['#2ECC71', '#E74C3C', '#5DADE2'],
    title: {
        text: 'RouteIPUsage',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['IPv4', 'IPv6', 'DualStack']
    },
    series: [{
        name: 'RouteIPUsage',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
            normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                shadowBlur: 3,
                shadowColor: '#999',
                padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            }
        },
        data: [{
                value: 4000,
                name: 'IPv4'
            },
            {
                value: 10,
                name: 'IPv6'
            },
            {
                value: 3127,
                name: 'DualStack'
            }
        ]
    }]
});
// });;
if (option && typeof option === "object") {
    myChart4.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("login_server");
var myChart5 = echarts.init(dom);
var app = {};
option = null;
// $.get('user_log.json', function (data) {
//     console.log(data);
myChart5.setOption(option = {
    color: ['#5DADE2'],
    title: {
        text: 'Login Server',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['158.108.218.201', '158.108.218.202', '158.108.218.203', '158.108.218.204', '158.108.218.205', '158.108.218.206', '158.108.218.207', '158.108.218.208', '158.108.218.209', '158.108.218.210', '158.108.218.211', '158.108.218.212', ]
    },
    series: [{
        name: 'Login Server',
        type: 'bar',
        data: [664, 643, 553, 665, 570, 570, 589, 567, 548, 592, 523, 673]
    }]
});
// });;
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}


/* ------------------------------------------------------------------------------
-----------------------  Chart 6 ------------------------------------------------
-------------------------------------------------------------------------------*/


var dom = document.getElementById("login_activity");
var myChart6 = echarts.init(dom);
var app = {};
option = null;
// $.get('user_log.json', function (data) {
//     console.log(data);
myChart6.setOption(option = {
    color: ['#2ECC71', '#E74C3C', '#5DADE2', '#F4D03F'],
    title: {
        text: 'Login Activity',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['Re-login', 'TIMEOUT', 'login-page', 'logout-page']
    },
    series: [{
        name: 'RouteIPUsage',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
            normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                shadowBlur: 3,
                shadowColor: '#999',
                padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            }
        },
        data: [{
            value: 229,
            name: 'Re-login'
        }, {
            value: 3312,
            name: 'TIMEOUT'
        }, {
            value: 3574,
            name: 'login-page'
        }, {
            value: 22,
            name: 'logout-page'
        }, ],
    }]
});
// });;
if (option && typeof option === "object") {
    myChart6.setOption(option, true);
}