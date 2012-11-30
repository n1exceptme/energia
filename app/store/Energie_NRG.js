Ext.define('ExtNRG.store.Energie_NRG', {
    extend: 'Ext.data.Store',
    model: 'ExtNRG.model.Energia_NRG',
	
	storeId: 'Energie_NRG',
	
    remoteSort:true,
	remoteFilter: true,
	simpleSortMode:true,
	autoLoad: true,
    sorters : {
        property : 'mese',
        direction : 'ASC'
    },

	groupField: 'anno',
	
	// allow the grid to interact with the paging scroller by buffering
	//buffered: true,
	pageSize: 105,

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaEnergie_Mensili.php'
        },
		extraParams: {
            regione: 'centrale'
        },
        reader: {
            type: 'json',
            root: 'energie_mesili',
			idProperty: 'id',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'energie_mesili'
        }
    }
});