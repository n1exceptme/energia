Ext.define('ExtNRG.view.nrg.Grid_NRG', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.grid_nrg',

    id: 'company-form',
    flex: 0.60,
    store: 'Energie_NRG',
    title:'Company Data',

    perc: function(v) {
        return v + '%';
    },

    initComponent: function() {

        this.columns= [
            {
                id       :'company',
                text   : 'Company',
                flex: 1,
                sortable : true,
                dataIndex: 'company'
            },
            {
                text   : 'Price',
                width    : 75,
                sortable : true,
                dataIndex: 'price',
                align: 'right',
                renderer : 'usMoney'
            },
            {
                text   : 'Revenue',
                width    : 75,
                sortable : true,
                align: 'right',
                dataIndex: 'revenue %',
                renderer: this.perc
            },
            {
                text   : 'Growth',
                width    : 75,
                sortable : true,
                align: 'right',
                dataIndex: 'growth %',
                renderer: this.perc
            },
            {
                text   : 'Product',
                width    : 75,
                sortable : true,
                align: 'right',
                dataIndex: 'product %',
                renderer: this.perc
            },
            {
                text   : 'Market',
                width    : 75,
                sortable : true,
                align: 'right',
                dataIndex: 'market %',
                renderer: this.perc
            }
        ];

        this.callParent(arguments);
    }    
});
