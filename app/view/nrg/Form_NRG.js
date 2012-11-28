Ext.define('ExtNRG.view.nrg.Form_NRG', {
    extend: 'Ext.form.Panel',
    alias : 'widget.form_nrg',

    requires: [
        'ExtNRG.view.nrg.Grid_NRG',
        'ExtNRG.view.chart.Area_NRG',
        'ExtNRG.view.chart.Pie_NRG'
    ],

    title: 'Andamento del Mercato',
    frame: true,
    bodyPadding: 5,
    //width: 870,
    //height: 720,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items: [
        {
        
        layout: {type: 'hbox', align: 'stretch'},
        flex: 4,
        border: false,
        bodyStyle: 'background-color: transparent',
        
        items: [
			{
			xtype: 'tabpanel',
			items: [
				{
				xtype: 'grid_nrg'
				},
				{
				xtype: 'container',
				itemId: 'mycontainer5',
				items: [
					{
						xtype: 'image',
						html: '<div id="header"><h2>Catholic News</h2></div>',
						itemId: 'myimage1',
						src: 'localhost/'
					}
				]              			
				}
				]
			},
			{
			xtype: 'tabpanel',
            flex: 0.35,
            layout: {
                type: 'vbox',
                align:'stretch'
				},
            margin: '0 0 0 5',
            title: 'Andamento Dettagliato',
            items: [
					{
					title:'Offset',
					margin: '5',
					flex: 1,
					defaults: {
						width: 240,
						labelWidth: 90,
						disabled: true
						},
					defaultType: 'numberfield',
					items: [
						{
						fieldLabel: 'Data',
						name: 'data',
						xtype: 'textfield'
						},
						{
						fieldLabel: 'BaseLoad',
						name: 'pun_medio',
						maxValue: 100,
						minValue: 0,
						enforceMaxLength: true,
						maxLength: 5
						},
						{
						fieldLabel: 'F1 (prelievo mensile) %',
						name: 'f1_prelievo',
						maxValue: 100,
						minValue: 0,
						enforceMaxLength: true,
						maxLength: 5
						},
						{
						fieldLabel: 'F2 (prelievo mensile) %',
						name: 'f2_prelievo',
						maxValue: 100,
						minValue: 0,
						enforceMaxLength: true,
						maxLength: 5
						},
						{
						fieldLabel: 'F3 (prelievo mensile) %',
						name: 'f3_prelievo',
						maxValue: 100,
						minValue: 0,
						enforceMaxLength: true,
						maxLength: 5
						},
						{
						fieldLabel: 'Mese (prelievo annuo) %',
						name: 'mese_prelievo_anno',
						maxValue: 100,
						minValue: 0,
						enforceMaxLength: true,
						maxLength: 5
						}
					]
				}, 
				{
				title:'Pie Chart',
				xtype:'pie_nrg'
				}, 
				{
				title: 'Radar Chart',
				xtype:'radar_nrg'
				}
			]
        }]
    },
	{
		xtype: 'tabpanel',
		height: 330,
		layout: 'fit',
		margin: '0 0 3 0',
		items: [
			{
			title: 'Area Chart',
			xtype: 'area_nrg'
			},
			{ 
			title: 'Bar Chart',
			xtype: 'bar_nrg'
			},
			{
			title: 'Altro'
			}
			]
	}
	]
});
