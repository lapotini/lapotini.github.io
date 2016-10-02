var WebsiteItemsViews = Backbone.View.extend({
    tagName: 'tbody',
    nameForLocalStorage: function () {
        return (AppState.currentUsername + '-infoWebsites');
    },
    initialize: function () {
        this.listenTo(this.collection, 'add', this.addOne);
        this.collection.on('change', this.saveWebsites, this);
        this.collection.on('destroy', this.saveWebsites, this);
        this.collection.on('add', this.saveWebsites, this);
    },
    render: function () {

        if (localStorage.getItem(this.nameForLocalStorage())) {
            var collectionInLocalStorage = JSON.parse(localStorage.getItem(this.nameForLocalStorage()));
            //collectionInLocalStorage.each(this.addOne, inf);
            websiteItemCollection.reset();
            collectionInLocalStorage.forEach(function (elem, index) {
                websiteItemCollection.add(elem);

            });
        } else {
            this.collection.each(this.addOne, this);
        }
        return this;
    },

    addOne: function (task) {
        var websiteItemView = new WebsiteItemView({model: task});
        this.$el.append(websiteItemView.render().el);
    },
    saveWebsites: function () {
        var saveCollection = JSON.stringify(this.collection);
        localStorage.setItem(this.nameForLocalStorage(), saveCollection);
    }
});


var websiteItemsViews = new WebsiteItemsViews({collection: websiteItemCollection});



