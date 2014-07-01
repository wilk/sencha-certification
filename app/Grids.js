Ext.define('SCE.Grids', {
    execute: function () {
        var store = Ext.create('Ext.data.Store', {
            fields: ['name', 'title', {
                name: 'age',
                type: 'number'
            } , {
                name: 'amount',
                type: 'number'
            } , {
                name: 'birthdate',
                type: 'date',
                format: 'd/m/Y'
            } , {
                name: 'member',
                type: 'boolean'
            }],
            data: [{
                name: 'Foo',
                title: 'Mr',
                age: 25,
                amount: 2500,
                birthdate: '10/25/1969',
                member: true
            } , {
                name: 'Bar',
                title: 'Doc',
                age: 36,
                amount: 2200.50,
                birthdate: '10/01/1979',
                member: true
            } , {
                name: 'Boo',
                title: 'Dude',
                age: 50,
                amount: 5500.60,
                birthdate: '12/04/1989',
                member: false
            }]
        });

        Ext.create('Ext.grid.Panel', {
            title: 'Columns Test',
            width: 600,
            height: 600,
            renderTo: Ext.getBody(),
            store: store,

            columns: [{
                xtype: 'rownumberer',
                text: 'Index'
            } , {
                xtype: 'checkcolumn',
                text: 'Choose',
                dataIndex: 'member'
            } , {
                xtype: 'templatecolumn',
                text: 'Name',
                tpl: '{title} {name}'
            } , {
                xtype: 'numbercolumn',
                text: 'Amount',
                dataIndex: 'amount'
            } , {
                xtype: 'datecolumn',
                text: 'Birthdate',
                dataIndex: 'birthdate',
                format: 'd/m/Y'
            } , {
                xtype: 'booleancolumn',
                text: 'Member',
                dataIndex: 'member',
                trueText: 'A member',
                falseText: 'Not a member'
            }]
        });
    }
});