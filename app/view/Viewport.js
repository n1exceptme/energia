/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtNRG.view.Viewport', {
    extend: 'Ext.Viewport',    
    
    layout: 'fit',
    
    requires: [
        'ExtNRG.view.nrg.Form_NRG',
        'ExtNRG.view.nrg.Grid_NRG',
        'ExtNRG.view.chart.Bar_NRG',
        'ExtNRG.view.chart.Radar_NRG'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'form_nrg'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
