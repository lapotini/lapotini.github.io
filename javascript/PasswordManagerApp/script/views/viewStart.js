var Start = Backbone.View.extend({

    el: "#block",

    template: _.template($('#signin').html()),

    events: {
        "click #buttSignin": "check"
    },
    initialize: function () {
        this.loadUsersData();

    },
    markerError: false,
    check: function () {

        var username = this.$el.find("#inputName").val();
        var password = this.$el.find("#inputPassword").val();

        var findName = users.authentication(username, password);

        if (findName) {
            AppState.currentUsername = username;
            controller.navigate("!/userPage", true); // переход на страницу userPage
        }
        else {
            if (!this.markerError) {
                $('.contact_form').append('<p id="error">incorrect username or password</p>');
                this.markerError = true;
            }
        }
    },

    loadUsersData: function () {
        if (localStorage.getItem('usersAccounts')) {
            var collectionUsersInLocalStorage = JSON.parse(localStorage.getItem('usersAccounts'));
            users.reset();
            collectionUsersInLocalStorage.forEach(function (elem, index) {
                users.add(elem);
            });
        }
    },

    render: function () {
        $(this.el).html(this.template());
    }
});

var start = new Start();

