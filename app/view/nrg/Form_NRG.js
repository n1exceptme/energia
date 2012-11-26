Ext.define('ExtNRG.view.nrg.Form_NRG', {
    extend: 'Ext.form.Panel',
    alias : 'widget.form_nrg',

    requires: [
        'ExtNRG.view.nrg.Grid_NRG',
        'ExtNRG.view.chart.Bar_NRG',
        'ExtNRG.view.chart.Radar_NRG'
    ],

    title: 'Company data',
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
            height: 200,
            layout: 'fit',
            margin: '0 0 3 0',
            items: [{ xtype: 'bar_nrg'}]
        },
        {
        
        layout: {type: 'hbox', align: 'stretch'},
        flex: 3,
        border: false,
        bodyStyle: 'background-color: transparent',
        
        items: [{
            xtype: 'grid_nrg'
        }, {
            flex: 0.4,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            margin: '0 0 0 5',
            title: 'Company Details',
            items: [{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                title:'Company details',
                defaults: {
                    width: 240,
                    labelWidth: 90,
                    disabled: true
                },
                defaultType: 'numberfield',
                items: [{
                    fieldLabel: 'Name',
                    name: 'company',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'Price',
                    name: 'price',
                    maxValue: 100,
                    minValue: 0,
                    enforceMaxLength: true,
                    maxLength: 5
                },{
                    fieldLabel: 'Revenue %',
                    name: 'revenue %',
                    maxValue: 100,
                    minValue: 0,
                    enforceMaxLength: true,
                    maxLength: 5
                },{
                    fieldLabel: 'Growth %',
                    name: 'growth %',
                    maxValue: 100,
                    minValue: 0,
                    enforceMaxLength: true,
                    maxLength: 5
                },{
                    fieldLabel: 'Product %',
                    name: 'product %',
                    maxValue: 100,
                    minValue: 0,
                    enforceMaxLength: true,
                    maxLength: 5
                },{
                    fieldLabel: 'Market %',
                    name: 'market %',
                    maxValue: 100,
                    minValue: 0,
                    enforceMaxLength: true,
                    maxLength: 5
                }]
            }, {xtype:'radar_nrg'}]
        }]
    }]
});
