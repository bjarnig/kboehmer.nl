var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Composition = new keystone.List('Composition', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true }
});

Composition.add({
    title: { type: String, required: true },
    slug: { type: String, index: true },
    content: {
        english: { type: Types.Html, wysiwyg: true, height: 800 }
    },
    order: { type: Number }
});

Composition.addPattern('standard meta');
Composition.defaultColumns = 'title, slug|20%';
Composition.register();