Ext.define('ExtNRG.view.nrg.Grid_NRG', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.grid_nrg',

    id: 'energie-form',
    flex: 0.60,
    store: 'Energie_NRG',
    title:'Mercato Energetico: dati mensili',
	
	features: [
		{
		id: 'group',
		ftype: 'groupingsummary',
		groupHeaderTpl: 'Anno Consumi: {name}',
		hideGroupedHeader: true,
		enableGroupingMenu: false,
		startCollapsed: true
		}
	],		

    perc: function(v) {
        return v + '%';
    },

    initComponent: function() {

        this.columns= [
/* 					{
					xtype: 'rownumberer',
					width: 50,
					align: 'left',
					locked: true,
					sortable: false
					},	 */			
					{
					text: 'ID',
					dataIndex: 'id',
					type: 'int',
					hidden: true,
					menuDisabled: true,
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'Anno',
					dataIndex: 'anno',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'Mese',
					dataIndex: 'mese',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
						},
					summaryType: 'count',
					summaryRenderer: function(value, summaryData, dataIndex) {
						return ((value === 0 || value > 1) ? value + ' Mesi' : '1 Mese');
					}							
					},
					{
					text: 'Data',
					dataIndex: 'data',
					type: 'string',
					hidden: true,
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'string'
					}
					},
					{
					text: 'F1',
					dataIndex: 'f1',
					type: 'float',
					width:110, 
					align:'center',
					hidden: true,
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F2',
					dataIndex: 'f2',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3',
					dataIndex: 'f3',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/ore',
					dataIndex: 'f1_ore',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F2/ore',
					dataIndex: 'f2_ore',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3/ore',
					dataIndex: 'f3_ore',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/Medio',
					dataIndex: 'f1_medio',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F2/Medio',
					dataIndex: 'f2_medio',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3/Medio',
					dataIndex: 'f3_medio',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN',
					dataIndex: 'pun',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN/ore',
					dataIndex: 'pun_ore',
					type: 'int',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN/medio<br>(Baseload)',
					dataIndex: 'pun_medio',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1<br>Ill.Pubb.',
					dataIndex: 'f1_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F2<br>Ill.Pubb.',
					dataIndex: 'f2_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3<br>Ill.Pubb.',
					dataIndex: 'f3_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/ore<br>Ill.Pubb.',
					dataIndex: 'f1_ore_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/ore<br>Ill.Pubb.',
					dataIndex: 'f2_ore_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3/ore<br>Ill.Pubb.',
					dataIndex: 'f3_ore_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/medio<br>Ill.Pubb.',
					dataIndex: 'f1_medio_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F2/medio<br>Ill.Pubb.',
					dataIndex: 'f2_medio_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F3/medio<br>Ill.Pubb.',
					dataIndex: 'f3_medio_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN<br>Ill.Pubb.',
					dataIndex: 'pun_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN/ore<br>Ill.Pubb.',
					dataIndex: 'pun_ore_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					hidden: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'PUN/medio<br>Ill.Pubb.',
					dataIndex: 'pun_medio_ip',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
					}
					},
					{
					text: 'F1/prelievo',
					dataIndex: 'f1_prelievo',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
						},
					renderer: this.perc
					},
					{
					text: 'F2/prelievo',
					dataIndex: 'f2_prelievo',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
						},
					renderer: this.perc
					},
					{
					text: 'F3/prelievo',
					dataIndex: 'f3_prelievo',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
						},
					renderer: this.perc
					},
					{
					text: '% prelievo<br>(mese/anno)',
					dataIndex: 'mese_prelievo_anno',
					type: 'float',
					width:110, 
					align:'center',
					sortable: true,
					filter: {
						type: 'numeric'
						},
					renderer: this.perc
					},				
		];

        this.callParent(arguments);
    }    
});
