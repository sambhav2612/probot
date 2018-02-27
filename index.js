var issue_msg = require('/issue_msg.js');

module.exports = robot => {
    robot.on('issues.opened', async context => {
        context.log(context.payload);
        return context.github.issues.createComment(context.issue({ body: issue_msg }));
    });
};