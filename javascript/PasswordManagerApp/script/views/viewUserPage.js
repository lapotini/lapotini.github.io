var UserPage = Backbone.View.extend({
    collection: websiteItemCollection,
    el: "#block",

    template: _.template($('#userPage').html()),

    initialize: function () {
        this.render();

    },

    events: {
        "click #add-websiteItem": "addWebsiteItem",
        "click #logOut": "logOut"
    },

    addWebsiteItem: function () {
        var newWebsite = this.$el.find("#websiteInput");
        var newLogin = this.$el.find("#loginInput");
        var newPassword = this.$el.find("#passwordInput");
        var newWebsiteInfo = {
            website: newWebsite.val(),
            login: newLogin.val(),
            password: newPassword.val()
        };
        newWebsite.val('');
        newLogin.val('');
        newPassword.val('');
        this.collection.add(newWebsiteInfo);
    },
    logOut: function () {
        controller.navigate("", true);
        window.location.reload(); // без этого не получилось:))

    },

    render: function () {
        $(this.el).html(this.template());
    }
});

var userPage = new UserPage();
