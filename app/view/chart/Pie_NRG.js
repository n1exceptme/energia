Ext.define('ExtNRG.view.chart.Pie_NRG', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.pie_nrg',

    margin: '0 0 0 0',
    insetPadding: 20,
    flex: 1.2,
    animate: false,
    store: 'RadarDataSets',
	shadow: false,

/* 	legend: {
		position: 'right',
		labelFont : '12px Arial'
	},	 */
	
	insetPadding: 60,
	theme: 'Base:gradients',	
	
    series: [
		{
        type: 'pie',
        angleField: 'Data',
        showInLegend: true,
        tips: {
				trackMouse: true,
				fill: '#18428E',
				width: 70,
				height: 30,
				renderer: function(storeItem, item) {
					this.setTitle( storeItem.get('Data') + ' %');
				}		
            // trackMouse: true,
            // width: 140,
            // height: 28,
            // renderer: function(storeItem, item) {
                ////calculate and display percentage on hover
                // var total = 0;
                // store.each(function(rec) {
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
			font: '12px Arial'
		}
		}
	]
});