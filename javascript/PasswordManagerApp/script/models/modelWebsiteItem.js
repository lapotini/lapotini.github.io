var AppState = {
    currentUsername: ""
};

var WebsiteItem = Backbone.Model.extend({
    defaults: {
        website: "",
        login: "",
        password: ""
    }
});


var WebsiteItemCollection = Backbone.Collection.extend({
    model: WebsiteItem
});

var websiteItemCollection = new WebsiteItemCollection([
    {
        "website": 'www.example.com',
        "login": 'ExampleName',
        "password": 'example password'
    }
]);








