Ext.Loader.setConfig({
    enable: true
});

Ext.onReady(function () {
    var dependencies = ['SCE.ClassSystem', 'SCE.Templates', 'SCE.Data', 'SCE.Trees', 'SCE.Charts', 'SCE.Views', 'SCE.Grids'];

    Ext.application({
        name: 'SCE',

        requires: Ext.clone(dependencies),

        launch: function () {
            var me = this;

            Ext.Msg.prompt('Choice', 'Choose something to execute from the following list: ' + dependencies.join(', '), function (result, value) {
                value = 'SCE.' + value;

                if (dependencies.indexOf(value) !== -1) Ext.create(value).execute();
                else Ext.Msg.alert('Error', 'No class name ' + value + ' exists!');
            });
        }
    });
});