Ext.define('SCE.Trees', {
    execute: function () {
        var treeStore = Ext.create('Ext.data.TreeStore', {
            root: {
                text: 'Root',
                name: 'Root',
                description: 'Desc Root',
                expanded: true,
                children: [{
                    leaf: true,
                    name: '1 Lvl',
                    description: 'Desc 1 Lvl',
                    text: '1 level'
                } , {
                    leaf: false,
                    text: '1 Level',
                    name: '1 Lvl',
                    description: 'Desc 1 Lvl',
                    children: [{
                        leaf: true,
                        name: '2 Lvl',
                        description: 'Desc 2 Lvl',
                        text: '2 Level'
                    }]
                }]
            }
        });

        Ext.create('Ext.tree.Panel', {
            store: treeStore,
            title: 'Simple Jack',
            width: 500,
            height: 500,
            renderTo: Ext.getBody()
        });

        Ext.create('Ext.tree.Panel', {
            store: treeStore,
            title: 'Simple Jack',
            width: 500,
            height: 500,
            renderTo: Ext.getBody(),
            fields: ['name', 'description'],
            columns: [{
                xtype: 'treecolumn',
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            } , {
                text: 'Description',
                dataIndex: 'description',
                flex: 1
            }]
        });
    }
});