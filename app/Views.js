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

        Ext.create('Ext.view.View', {
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

        var imgStore = Ext.create('Ext.data.Store', {
            fields: ['description', 'src'],
            data: [{
                description: 'WAT WAT WAT',
                src: 'images/wat.jpg'
            } , {
                description: 'MEME',
                src: 'images/meme.jpg'
            } , {
                description: 'TROLL MEME',
                src: 'images/troll.png'
            }]
        });

        var imgTpl = Ext.create('Ext.XTemplate', [
            '<div>',
                '<tpl for=".">',
                    '<div class="listImg">',
                        '<img src="{src}" style="width: 200px; height: 200px">',
                        '<div class="description" style="display: none">{description}</div>',
                    '</div>',
                '</tpl>',
            '</div>'
        ]);

        Ext.create('Ext.view.View', {
            renderTo: Ext.getBody(),
            itemSelector: 'div.listImg',
            tpl: imgTpl,
            store: imgStore,
            listeners: {
                itemclick: function (view, record) {
                    var descriptionEl = view.getEl().down('.description');

                    if (descriptionEl.isVisible()) descriptionEl.slideOut();
                    else descriptionEl.slideIn();
                }
            }
        });
    }
});