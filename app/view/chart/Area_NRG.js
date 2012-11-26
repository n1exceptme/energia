Ext.define('ExtNRG.view.chart.Area_NRG', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.area_nrg',

    flex: 1,
    animate: true,
    store: 'Energie_NRG',
	legend: {
		position: 'right'
	},
    axes: [
		{
			type: 'Numeric',
			grid: true,
			position: 'left',
			fields: ['f1_medio','f2_medio','f3_medio'],
			title: 'Grafico Mensile',
			grid: {
				odd: {
					opacity: 1,
					fill: '#ddd',
					stroke: '#bbb',
					'stroke-width': 1
				}
			},
			minimum: 0,
			adjustMinimumByMajorUnit: 0
		},
		{
			type: 'Category',
			position: 'bottom',
			fields: ['data'],
			title: 'Mese dell\'anno',
			grid: true,
			label: {
				rotate: {
					degrees: 315
				}
			}
		}		
	
	],
	series: [{
		type: 'area',
		highlight: true,
		axis: 'left',
		xField: 'data',
		yField: ['f1_medio','f2_medio','f3_medio'],
		style: {
			opacity: 0.93
		}
	}]    
});    
