Ext.define('SCE.Templates', {
    constructor: function (cfg) {
        this.initConfig(cfg);
    },
    execute: function () {
        var template = Ext.create('Ext.Template', [
            '<ul>',
                '<li>{name}</li>',
                '<li>{age}</li>',
                '<li>{amount:currency}</li>',
            '</ul>'
        ]);

        template.compile();
        template.append(Ext.getBody(), {
            name: 'Wilk',
            age: 26,
            amount: 23.594
        });

        var xtpl = Ext.create('Ext.XTemplate', [
            '<div>',
                '<ul>',
                    '<li>{name}</li>',
                    '<li>{age}</li>',
                    '<li>{amount:currency}</li>',
                '</ul>',
                '<ul>',
                    '<tpl for="skills">',
                        '<li>{#}) {.}</li>',
                    '</tpl>',
                '</ul>',
                '<ul>',
                    '<tpl foreach="knows">',
                        '<tpl if="this.checkLanguage(parent.name)">',
                            '<li>{$} : {.}</li>',
                        '</tpl>',
                    '</tpl>',
                '</ul>',
            '</div>',
            {
                checkLanguage: function (language) {
                    return language !== 'Wilk';
                }
            }
        ]),
            data = {
                name: 'Wilk',
                age: 26,
                amount: 23.594,
                skills: ['developer', 'farmer'],
                knows: {
                    php: 'good',
                    javascript: 'ninja',
                    python: 'a lot'
                }
            };

        xtpl.overwrite(Ext.getBody(), data);
    }
});