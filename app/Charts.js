Ext.define('SCE.Charts', {
    execute: function () {
        var store = Ext.create('Ext.data.Store', {
            fields: ['data1', 'data2', 'data3', 'name'],
            data: [{
                name: 'Wilk',
                data1: 10,
                data2: 20,
                data3: 30
            } , {
                name: 'Paul',
                data1: 20,
                data2: 30,
                data3: 40
            } , {
                name: 'Greg',
                data1: 30,
                data2: 40,
                data3: 50
            }]
        });

        Ext.create('Ext.chart.Chart', {
            legend: {
                position: 'left'
            },

            store: store,

            width: 500,
            height: 500,
            renderTo: Ext.getBody(),

            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1', 'data2', 'data3'],
                title: 'Numer of hits'
            } , {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the year'
            }],

            series: [{
                type: 'Area',
                axis: 'left',
                xField: 'name',
                yField: ['data1', 'data2', 'data3']
            }]
        });
    }
});