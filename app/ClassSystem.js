Ext.define('SCE.ClassSystem', {
    constructor: function () {
        Ext.define('Human', {
            config: {
                gender: 'male'
            },

            race: function () {
                console.log('Race', 'Human race');
            }
        });

        Ext.define('Person', {
            extend: 'Human',
            config: {
                age: 18,
                name: '',
                place: {
                    address: '',
                    city: '',
                    cap: ''
                }
            },

            statics: {
                peopleCounter: 0,
                summary: function () {
                    Ext.Msg.show({
                        title: 'Summary',
                        msg: 'People instantied are: ' + Person.peopleCounter,
                        icon: Ext.Msg.INFO,
                        buttons: Ext.Msg.OK
                    });
                }
            },

            mixins: {
                'observable': Ext.util.Observable
            },

            constructor: function (cfg) {
                var me = this;

                me.initConfig(cfg);

                me.mixins.observable.constructor.call(me, cfg);

                Person.peopleCounter++;
            },

            hello: function () {
                console.log('Presentation', 'Hi, my name is ' + this.getName() + ' and I\'m ' + this.getAge() + ' years old!');
            }
        });
    },

    execute: function () {
        var foo = Ext.create('Person', {
                name: 'Foo',
                age: 45,
                place: {
                    address: 'Via tal dei tali, 65',
                    city: 'RE',
                    cap: '42012'
                }
            }),
            bar = Ext.create('Person', {
                name: 'Bar',
                age: 25,
                place: {
                    address: 'Via asder',
                    city: 'PR',
                    cap: '42000'
                }
            });

        console.log(foo.getName(), foo.getAge(), foo.getPlace());
        console.log(bar.getName(), bar.getAge(), bar.getPlace());

        foo.hello();
        bar.race();
        Person.summary();
    }
});