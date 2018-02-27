module.exports = (robot) => {
  robot.log('Yay, my app is loaded');
  
  robot.on('issues.opened', async context => {
    robot.log(context);
    //odepcontext.log(context.payload);
    return context.github.issues.createComment(context.issue({ body: 'Thanks for creating the issue! Someone from our team will get back to you shortly.' }));
  });

  robot.on('pull_request.opened', async context => {
    robot.log(context);
    //context.log(context.payload);
    return context.github.issues.createComment(context.issue({ body: 'Thanks for creating the issue! Someone from our team will get back to you shortly.' }));
  });
};