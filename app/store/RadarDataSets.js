Ext.define('ExtNRG.store.RadarDataSets', {
    extend: 'Ext.data.ArrayStore',
    model: 'ExtNRG.model.RadarDataSet',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },

    data: [
		{
			'Name': 'pun_medio',
			'Data': 100
		}, 
		{
			'Name': 'f1_prelievo',
			'Data': 100
		}, 
		{
			'Name': 'f2_prelievo',
			'Data': 100
		}, 
		{
			'Name': 'f3_prelievo',
			'Data': 100
		}, 
 		{
			'Name': 'mese_prelievo_anno',
			'Data': 100
		}
	]
});
