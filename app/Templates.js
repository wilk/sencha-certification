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

        xtpl.append(Ext.getBody(), data);

        var data = {
            name: 'Wilk',
            skills: {
                PHP: 30,
                Javascript: 100,
                Python: 50
            }
        };

        var xtpl2 = Ext.create('Ext.XTemplate', [
            '<dl>',
                '<tpl foreach="skills">',
                    '<dd>{$}: {.}</dd>',
                '</tpl>',
            '</dl>'
        ]);

        xtpl2.append(Ext.getBody(), data);

        var data2 = [{
            name: 'wilk',
            skills: ['PHP', 'Python', 'Javascript']
        } , {
            name: 'foo',
            skills: ['Java', 'C', 'Go']
        }];

        var xtpl3 = Ext.create('Ext.XTemplate', [
            '<div>',
                '<tpl for=".">',
                    '<div>{[values.name.toUpperCase() + " knows " + values.skills.join(", ")]}</div>',
                '</tpl>',
            '</div>'
        ]);

        xtpl3.append(Ext.getBody(), data2);

        var langs = ['PHP', 'Python', 'Javascript', 'Ruby'];
        var xtpl4 = Ext.create('Ext.XTemplate', [
            '<div>',
                '<b>List of my favourites programming languages:</b>',
                '<tpl foreach=".">',
                    '{% if (xkey === "PHP") continue; %}',
                    '<div>{.}</div>',
                '</tpl>',
            '</div>'
        ]);

        xtpl4.append(Ext.getBody(), langs);
    }
});