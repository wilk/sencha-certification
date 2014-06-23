Ext.define('SCE.Views', {
    execute: function () {
        var store = Ext.create('Ext.data.Store', {
            fields: ['name', 'age'],
            data: [{
                name: 'Wilk',
                age: 26
            } , {
                name: 'Foo',
                age: 23
            } , {
                name: 'Bar',
                age: 36
            }]
        });

        var tpl = Ext.create('Ext.XTemplate', [
            '<div>',
                '<tpl for=".">',
                    '<div class="myClass">{name} - {age}</div>',
                '</tpl>',
            '</div>'
        ]);

        var list = Ext.create('Ext.view.View', {
            renderTo: Ext.getBody(),
            store: store,
            tpl: tpl,
            itemSelector: 'div.myClass',
            listeners: {
                itemclick: function (view, record) {
                    Ext.Msg.alert('Item clicked', record.get('name') + ' has ' + record.get('age') + ' years old!');
                }
            }
        });
    }
});