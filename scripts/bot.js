module.exports = function(robot) {
    robot.respond(/hello/i, function(msg) {
        msg.reply("Hey Zak!");
    });
    robot.respond(/what is the time/i, function(msg) {
        msg.reply("Hey Zak!");
    });
}

answers = ["hey", "you're the best", "i love you", "yes master"];