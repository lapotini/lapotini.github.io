var Controller = Backbone.Router.extend({
    routes: {
        "": "signin",
        "!/": "signin",
        "!/createAccount": "createAccount",
        "!/userPage": "userPage"
    },
    initialize: function () {
        Backbone.history.start();
    },
    signin: function () {
        if (start != null) {
            AppState.currentUsername = '';
            start.render();
        }
    },
    createAccount: function () {
        if (createAccount != null) {
            createAccount.render();
        }
    },
    userPage: function () {
        if (userPage != null && AppState.currentUsername) {
            userPage.render();
            $('.table').append(websiteItemsViews.render().el);
        }
        else {
            this.navigate("", true);
        }
    }

});
var controller = new Controller();
