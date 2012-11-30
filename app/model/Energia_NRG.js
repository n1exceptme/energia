Ext.define('ExtNRG.model.Energia_NRG', {
    extend: 'Ext.data.Model',
    fields: [
			{
			name: 'id',
			type: 'int'
			},
			{
			name: 'anno',
			type: 'int'
			},
			{
			name: 'mese',
			type: 'int'
			},
			{
			name: 'data_nrg',
			type: 'date'
			},
/*			{
			name: 'data',
			type: 'string'
			},
			{
			name: 'f1',
			type: 'float'
			},
			{
			name: 'f2',
			type: 'float'
			},
			{
			name: 'f3',
			type: 'float'
			},
			{
			name: 'f1_ore',
			type: 'int'
			},
			{
			name: 'f2_ore',
			type: 'int'
			},
			{
			name: 'f3_ore',
			type: 'int'
			},
*/			{
			name: 'f1_medio',
			type: 'float'
			},
			{
			name: 'f2_medio',
			type: 'float'
			},
			{
			name: 'f3_medio',
			type: 'float'
			},
 			{
			name: 'pun',
			type: 'float'
			},
			{
			name: 'pun_ore',
			type: 'int'
			},
 			{
			name: 'f1_mensile',
			type: 'float'
			},
			{
			name: 'f2_mensile',
			type: 'float'
			},
			{
			name: 'f3_mensile',
			type: 'float'
			},			
			{
			name: 'pun_medio',
			type: 'float'
			},
/* 			{
			name: 'f1_ip',
			type: 'float'
			},
			{
			name: 'f2_ip',
			type: 'float'
			},
			{
			name: 'f3_ip',
			type: 'float'
			},
			{
			name: 'f1_ore_ip',
			type: 'float'
			},
			{
			name: 'f2_ore_ip',
			type: 'float'
			},
			{
			name: 'f3_ore_ip',
			type: 'float'
			}, */
			{
			name: 'f1_medio_ip',
			type: 'float'
			},
			{
			name: 'f2_medio_ip',
			type: 'float'
			},
			{
			name: 'f3_medio_ip',
			type: 'float'
			},
			{
			name: 'pun_ip',
			type: 'float'
			},
			{
			name: 'pun_ore_ip',
			type: 'float'
			},
			{
			name: 'pun_medio_ip',
			type: 'float'
			},
			{
			name: 'f1_prelievo',
			type: 'float'
			},
			{
			name: 'f2_prelievo',
			type: 'float'
			},
			{
			name: 'f3_prelievo',
			type: 'float'
			},
			{
			name: 'mese_prelievo_anno',
			type: 'float'
			}
    ],
	idProperty: 'id'
});
