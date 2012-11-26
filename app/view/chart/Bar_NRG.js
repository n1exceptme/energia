Ext.define('ExtNRG.view.chart.Bar_NRG', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.bar_nrg',

    flex: 1,
    shadow: true,
    animate: true,
    store: 'Energie_NRG',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['pun_medio'],
        minimum: 0,
        hidden: true
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['id'],
        label: {
            renderer: function(v) {
                return Ext.String.ellipsis(v, 15, false);
            },
            font: '7px Arial',
            rotate: {
                degrees: 270
            }
        }
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        style: {
            fill: '#456d9f'
        },
        highlightCfg: {
            fill: '#a2b5ca'
        },
        label: {
            contrast: true,
            display: 'insideEnd',
            field: 'pun_medio',
            color: '#000',
            orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: 'id',
        yField: ['pun_medio']
    }]        
});    
