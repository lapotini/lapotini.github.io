var CreateAccount = Backbone.View.extend({
    el: "#block",
    template: _.template($('#createAccount').html()),

    initialize: function () {
        this.listenTo(this.collection, 'add', this.saveAll);

    },
    saveAll: function () {
        var saveAccount = JSON.stringify(this.collection);
        localStorage.setItem('usersAccounts', saveAccount);
    },


    events: {
        "click #buttReg": "registration"
    },

    registration: function () {
        var newUserName = this.$el.find("#inputRegName").val();
        var newUserLastName = this.$el.find("#inputRegLastName").val();
        var newUserPassword = this.$el.find("#inputRegPass").val();

        var clearName = this.collection.isNameClear(newUserName);

        if (clearName) {
            if (newUserName.length > 2 && newUserLastName.length > 2 && newUserPassword.length > 2) {
                var usersRegData = {
                    Name: newUserName,
                    LastName: newUserLastName,
                    Password: newUserPassword
                };
                this.collection.add(usersRegData);
                alert('Thank you for signing up');
                controller.navigate("", true);
            }
            else {
                $('#error').remove();
                $('.contact_form').append('<p id="error">Fill in all fields</p>');
            }
        } else {
            $('#error').remove();
            $('.contact_form').append('<p id="error">name empoyed</p>');
        }
    },
    render: function () {
        $(this.el).html(this.template());
    }
});
var createAccount = new CreateAccount({collection: users});