function nativeAlert() {
    window.BXJsInterface.nativeAlert();
}

function lineChart(){

    var data=window.BXJsInterface.getChartData();

    var d1 = [[0, 3], [4, 8], [8, 5], [9, 13]], // First data series
        i, graph;

    // Draw Graph
    graph = Flotr.draw(container, [ d1, JSON.parse(data) ], {
        xaxis: {
            minorTickFreq: 4
        },
        grid: {
            minorVerticalLines: true
        }
    });
}

function barChart(){
    var horizontal = (horizontal ? true : false), d1 = [], d2 = [], point, i;

    for (i = 0; i < 4; i++) {

        if (horizontal) {
            point = [Math.ceil(Math.random()*10), i];
        } else {
            point = [i, Math.ceil(Math.random()*10)];
        }

        d1.push(point);

        if (horizontal) {
            point = [Math.ceil(Math.random()*10), i+0.5];
        } else {
            point = [i+0.5, Math.ceil(Math.random()*10)];
        }

        d2.push(point);
    };

    // Draw the graph
    Flotr.draw( container,[d1, d2],
        {
            bars : {
                show : true,
                horizontal : horizontal,
                shadowSize : 0,
                barWidth : 0.5
            },
            mouse : {
                track : true,
                relative : true
            },
            yaxis : {
                min : 0,
                autoscaleMargin : 1
            }
        }
    );
}

window.onload=function(){
    alert('local html이 잘 떴지요?');
    lineChart();
}

