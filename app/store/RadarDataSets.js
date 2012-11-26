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
        'Name': 'Price',
        'Data': 100
    }, {
        'Name': 'Revenue %',
        'Data': 100
    }, {
        'Name': 'Growth %',
        'Data': 100
    }, {
        'Name': 'Product %',
        'Data': 100
    }, {
        'Name': 'Market %',
        'Data': 100
    }]
});
