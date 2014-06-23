Ext.define('SCE.Data', {
    execute: function () {
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [{
                type: 'string',
                name: 'name'
            } , {
                type: 'number',
                name: 'age'
            } , {
                type: 'string',
                name: 'gender'
            } , {
                type: 'string',
                name: 'role'
            }],

            validations: [{
                type: 'presence',
                name: 'name'
            } , {
                type: 'length',
                name: 'name',
                min: 4
            } , {
                type: 'inclusion',
                name: 'gender',
                list: ['male', 'female']
            } , {
                type: 'exclusion',
                name: 'role',
                list: ['admin']
            }]
        });

        var user = Ext.create('User', {
            name: 'Wilk',
            age: 18,
            gender: 'male',
            role: 'admin'
        });

        var errors = user.validate();

        if (errors.isValid()) Ext.Msg.alert('Alert', 'Valid!');
        else {
            console.log(errors.items);
            console.log(errors.getByField('name'),errors.getByField('role'));
        }

        Ext.define('Blog', {
            extend: 'Ext.data.Model',
            fields: ['name'],

            proxy: {
                type: 'localstorage',
                id: 'blog'
            },

            hasMany: ['Post']
        });

        Ext.define('Post', {
            extend: 'Ext.data.Model',
            fields: ['title'],

            proxy: {
                type: 'localstorage',
                id: 'post'
            },

            belongsTo: 'Blog',
            hasMany: ['Comment']
        });

        Ext.define('Comment', {
            extend: 'Ext.data.Model',
            fields: ['content'],

            proxy: {
                type: 'localstorage',
                id: 'comment'
            },

            belongsTo: 'Post'
        });

        var aBlog = Ext.create('Blog', {name: 'MyBlog'});

        aBlog.save({
            success: function (aBlog) {
                var id = aBlog.getId();
                console.log(id);
                Blog.load(id, {
                    success: function (anotherBlog) {
                        console.log(anotherBlog, anotherBlog.posts());
                        anotherBlog.posts().add({
                            title: 'A post'
                        });

                        anotherBlog.posts().sync({
                            callback: function (posts) {
                                anotherBlog.posts().each(function (post) {
                                    console.log(post);
                                    post.comments().add({
                                        content: 'A comment'
                                    });

                                    post.comments().sync({
                                        callback: function (comments) {
                                            post.comments().each(function (comment) {
                                                console.log(comment);
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }
        });

        var store = Ext.create('Ext.data.Store', {
            model: 'User',
            data: [{
                name: 'Wilk',
                age: 25,
                role: 'Customer'
            } , {
                name: 'Foo',
                age: 20,
                role: 'Leader'
            } , {
                name: 'Bar',
                age: 35,
                role: 'Customer'
            }],

            sorters: ['name'],
            filters: [{
                property: 'role',
                value: 'Customer'
            }],
            groupField: 'age',
            groupDir: 'DESC'
        });

        Ext.create('Ext.grid.Panel', {
            store: store,
            width: 500,
            height: 500,
            title: 'Users',

            columns: [{
                text: 'Name',
                dataIndex: 'name'
            } , {
                text: 'Age',
                dataIndex: 'age'
            } , {
                text: 'Role',
                dataIndex: 'role'
            }],

            renderTo: Ext.getBody()
        });
    }
});