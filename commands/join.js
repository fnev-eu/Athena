exports.run = (client, message, args) => {
    let member         = message.guild.members.get(message.author.id);
    let availableRoles = ['Overwatch', 'Minecraft', 'SeaOfThieves', 'Elite', 'Notifications'];
    let askedRole      = args.shift();

    if (!availableRoles.includes(askedRole)) return;

    let role = message.guild.roles.find(role => role.name === askedRole);

    if (!member.roles.has(role.id)) member.addRole(role);

    return;
};

exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "help",
    category: "Miscelaneous",
    description: "Ajoute le rôle demandé s'il existe.",
    usage: "roles"
};
