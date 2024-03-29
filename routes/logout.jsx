FlowRouter.route('/logout', {
    name: 'logout',
    action() {
        if(Meteor.user()) {
            Meteor.logout();
            ReactLayout.render(Index, {
                content: <Logout />
            });
        } else {
            FlowRouter.redirect('/');
        }
    }
});