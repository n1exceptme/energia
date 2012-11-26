Ext.define('ExtNRG.view.chart.Pie_NRG', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.pie_nrg',

    margin: '0 0 0 0',
    insetPadding: 20,
    flex: 1.2,
    animate: false,
    store: 'RadarDataSets',
	shadow: false,

	legend: {
		position: 'right'
	},	
	
	insetPadding: 60,
	theme: 'Base:gradients',	
	
    series: [
		{
		type: 'pie',
		field: 'Data',
		showInLegend: true,
		donut: false,
		tips: {
		  trackMouse: true,
		  width: 140,
		  height: 28
		  // ,
		  // renderer: function(storeItem, item) {
			////calculate percentage.
			// var store1 = getRadarDataSetsStore();
			// var total = 0;
			// store1.each(function(rec) {
				// total += rec.get('Data');
			// });
			// this.setTitle(storeItem.get('Name') + ': ' + Math.round(storeItem.get('Data') / total * 100) + '%');
		  // }
		},
		highlight: {
		  segment: {
			margin: 20
		  }
		},
 		label: {
			field: 'Name',
			display: 'rotate',
			contrast: true,
			font: '9px Arial'
		}
		}
	]
});