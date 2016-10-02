var WebsiteItemView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#website-item').html()),

    initialize: function () {

        this.listenTo(this.model, 'destroy', this.remove);
    },

    events: {
        'click .buttDelete': 'deleteItem',
        'click .buttShowPassword': 'showPassword',
        'click .buttEdit': 'startEdit',
        'blur input': 'finishEdit'
    },
    deleteItem: function () {
        this.model.destroy();
    },
    remove: function () {
        this.$el.remove();

    },
    startEdit: function (event) {
        var editValue = $(event.target).siblings('input');
        editValue.prop('disabled', false);
        editValue.focus();

    },
    finishEdit: function (event) {
        var editValue = $(event.target);
        editValue.prop('disabled', true);

        this.model.set('website', $('.infWebsite').val());
        this.model.set('login', $('.infLogin').val());
        this.model.set('password', $('.infPass').val());
    },

    showPassword: function (event) {

        var inpPass = $(event.target).parents('tr').find('.infPass');
        if (inpPass.attr('type') == 'password') {
            inpPass.attr("type", 'text');
        } else {
            inpPass.attr("type", 'password');
        }
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


