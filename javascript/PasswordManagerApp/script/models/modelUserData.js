var UserData = Backbone.Model.extend({
    defaults: {
        "Name": "",
        "LastName": "",
        "Password": ""
    }
});




var UsersCollection = Backbone.Collection.extend({
    model: UserData,
    isNameClear: function (username) {
        var usersInStorage;
        if (localStorage.getItem('usersAccounts')) {
            usersInStorage = JSON.parse(localStorage.getItem('usersAccounts'));
        } else {
            usersInStorage = this.toJSON();
        }

        var resultCheckName = usersInStorage.find(function (user) {
            return (user.Name == username);

        });
        return resultCheckName == null;
    },
    authentication: function (username, userpassword) {
        var usersInStorage;
        if (localStorage.getItem('usersAccounts')) {
            usersInStorage = JSON.parse(localStorage.getItem('usersAccounts'));
        } else {
            usersInStorage = this.toJSON();
        }

        var authenticationResult = usersInStorage.filter(function (user) {

            if (user.Name == username) {
                return user;
            }

        }).find(function (user) {

            if (user.Password == userpassword) {
                return true;
            }

        });

        return authenticationResult != null;
    }
});

var users = new UsersCollection([
    {
        "Name": 'admin',
        "Password": 'admin'
    },
    {
        "Name": "t",
        "Password": 't'
    }

]);
