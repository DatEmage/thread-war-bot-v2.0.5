const db = require('quick.db');

const {Client, MessageEmbed, Intents, WebhookClient} = require('discord.js');
const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'GUILD_MEMBERS']
})

const wh = new WebhookClient({url: 'WEBHOOK URL HERE'})

client.on('ready', () => {
    wh.send(`ðŸŸ¢ **${client.user.tag}** is online!`)
})

client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if(message.author.webhook) return;
    if(message.content.startsWith('tw!manualdbadd')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permissions to perform this action!**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.get(`${mt.id}_items_1`)
        db.get(`${mt.id}_items_2`)
        db.get(`${mt.id}_items_3`)
        db.get(`${mt.id}_items_4`)
        db.get(`${mt.id}_items_5`)
        db.get(`${mt.id}_elo`)
        db.get(`${mt.id}_trole`)
        db.get(`${mt.id}_twgp`)
        db.get(`${mt.id}_clan`)
        db.set(`${mt.id}_items_1`, 0)
        db.set(`${mt.id}_items_2`, 0)
        db.set(`${mt.id}_items_3`, 0)
        db.set(`${mt.id}_items_4`, 0)
        db.set(`${mt.id}_items_5`, 0)
        db.set(`${mt.id}_elo`, 0)
        db.set(`${mt.id}_trole`, '<@&947225115035316234>')
        db.set(`${mt.id}_twgp`, 0)
        db.set(`${mt.id}_clan`, 'None')
        message.channel.send(':white_check_mark: **Success!**')
        
    }
    if(message.content.startsWith('tw!add12elo')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permissions to perform this action!**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
      const e = await db.get(`${mt.id}_elo`)
      if(e === null) {
          db.set(`${mt.id}_elo`, 0)
      }
      db.add(`${mt.id}_elo`, 12)
      message.channel.send(`:white_check_mark: **Success! \`${mt.tag}\` now has \`${e}\` ELO!**`)
    }
    if(message.content.startsWith('tw!add6elo')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permissions to perform this action!**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
      const e = await db.get(`${mt.id}_elo`)
      if(e === null) {
          db.set(`${mt.id}_elo`, 0)
      }
      db.add(`${mt.id}_elo`, 6)
      message.channel.send(`:white_check_mark: **Success! \`${mt.tag}\` now has \`${e}\` ELO!**`)
    }
    if(message.content.startsWith('tw!remove6elo')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permissions to perform this action!**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
      const e = await db.get(`${mt.id}_elo`)
      if(e === null) {
          db.set(`${mt.id}_elo`, 0)
      }
      db.subtract(`${mt.id}_elo`, 6) 
      message.channel.send(`:white_check_mark: **Success! \`${mt.tag}\` now has \`${e}\` ELO!**`)
    }
    if(message.content.startsWith('tw!resetelo')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permissions to perform this action!**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
      const e = await db.get(`${mt.id}_elo`)
      if(e === null) {
          db.set(`${mt.id}_elo`, 0)
      }
      db.set(`${mt.id}_elo`, 0) 
      message.channel.send(`:white_check_mark: **Success! \`${mt.tag}\` now has \`${e}\` ELO!**`)
    }
    if(message.content.startsWith('tw!profile')) {
        const mt = message.mentions.users.first()
        if(!mt) {
        // stats
        const tier = await db.get(`${message.author.id}_trole`)
        const t = await db.get(`${message.author.id}_twgp`)
        const e = await db.get(`${message.author.id}_elo`)
        const cln = await db.get(`${message.author.id}_clan`)
        // if(t === null) {
        //    db.set(`${message.author.id}_twgp`, 0)
        // }
        // if(e === null) {
        //     db.set(`${message.author.id}_elo`, 0)
        // }
        // if(tier === null) {
        //     db.set(`${message.author.id}_trole`, '<@&947225115035316234>')
        // }
        // items
        const i1 = await db.get(`${message.author.id}_items_1`)
        const i2 = await db.get(`${message.author.id}_items_2`)
        const i3 = await db.get(`${message.author.id}_items_3`)
        const i4 = await db.get(`${message.author.id}_items_4`)
        const i5 = await db.get(`${message.author.id}_items_5`)
        // if(i1 === null) {
        //     const i1 = 0;
        // }
        // if(i2 === null) {
        //     const i2 = 0;
        // }
        // if(i3 === null) {
        //     const i3 = 0;
        // }
        // if(i4 === null) {
        //     const i4 = 0;
        // }
        // if(i5 === null) {
        //     const i5 = 0;
        // }
        const selfPfStatsEmbed = new MessageEmbed()
        .setTitle(':bar_chart: ' + message.author.tag + '\'s Stats')
        .addField(':dollar: TWGP', `\`${t}\``, true)
        .addField(':trophy: ELO', `\`${e}\``, true)
        .addField(':medal: Tier', `${tier}`, true)
        .addField(':busts_in_silhouette: Clan', `${cln}`, false)
        const selfPfInvEmbed = new MessageEmbed()
        .setTitle(':package: ' + message.author.tag + '\'s Inventory')
        .setDescription(`
:tickets: **25x DupeRPG Emeralds** (\`${i1}\`)
:tickets: **500 KR** (\`${i2}\`)
:tickets: **100K Dank memer money** (\`${i3}\`)
:tickets: **25M SlotBot Cash** (\`${i4}\`)
<:Krystal:947228639999688784> **Krystal** (\`${i5}\`)
        `)
        message.channel.send({embeds: [selfPfStatsEmbed, selfPfInvEmbed]})
    } else {
        const tier = await db.get(`${mt.id}_trole`)
        const t = await db.get(`${mt.id}_twgp`)
        const e = await db.get(`${mt.id}_elo`)
        const cln = await db.get(`${mt.id}_clan`)
        const i1 = await db.get(`${mt.id}_items_1`)
        const i2 = await db.get(`${mt.id}_items_2`)
        const i3 = await db.get(`${mt.id}_items_3`)
        const i4 = await db.get(`${mt.id}_items_4`)
        const i5 = await db.get(`${mt.id}_items_5`)
        const MtPfStatsEmbed = new MessageEmbed()
        .setTitle(':bar_chart: ' + mt.tag + '\'s Stats')
        .addField(':dollar: TWGP', `\`${t}\``, true)
        .addField(':trophy: ELO', `\`${e}\``, true)
        .addField(':medal: Tier', `${tier}`, true)
        .addField(':busts_in_silhouette: Clan', `${cln}`, false)
        const MtPfInvEmbed = new MessageEmbed()
        .setTitle(':package: ' + mt.tag + '\'s Inventory')
        .setDescription(`
:tickets: **25x DupeRPG Emeralds** (\`${i1}\`)
:tickets: **500 KR** (\`${i2}\`)
:tickets: **100K Dank memer money** (\`${i3}\`)
:tickets: **25M SlotBot Cash** (\`${i4}\`)
<:Krystal:947228639999688784> **Krystal** (\`${i5}\`)
        `)
        message.channel.send({embeds: [MtPfStatsEmbed, MtPfInvEmbed]})
    }
    }
    if(message.content === 'tw!shop') {
        const shopEmbed = new MessageEmbed()
        .setTitle(':shopping_cart: Thread War Shop')
        .setDescription(`
*__Thread War 1__*
(**LIMITED!**) :tickets: **25x DupeRPG Emeralds** (\`100 TWGP\`)
(**LIMITED!**) :tickets: **500 KR** (\`250 TWGP\`)
:tickets: **100K Dank memer Money** (\`150 TWGP\`)
:tickets: **25M SlotBot Cash** (\`50 TWGP\`)
        `)
        .setFooter({text: 'Current War: 1 (1/5)'})
        message.channel.send({embeds: [shopEmbed]})
    }
    if(message.content.startsWith('tw!gibdailyelo')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        const selections = ['1', '2', '3']
        const selection = selections[Math.floor(Math.random() * selections.length)]
            db.add(`${mt.id}_elo`, selection)
            message.channel.send(':white_check_mark: **Success!**')
        
    }
    if(message.content.startsWith('tw!bronze')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_trole`, '<@&947222987164241980>')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!underranked')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_trole`, '<@&947450716769878016>')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!unranked')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_trole`, '<@&947225115035316234>')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!silver')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_trole`, '<@&947222931514220615>')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!gold')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_trole`, '<@&947222879462916196>')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!sky_clan')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_clan`, '[**SKY**]')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!noclan')) {
        if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_clan`, 'None')
        message.channel.send(':white_check_mark: **Success!**')
    }
    if(message.content.startsWith('tw!clan')) {
        const mt = message.mentions.users.first()
        if(!mt) {
            const tier = await db.get(`${message.author.id}_trole`)
            const wootTier = await db.get(`753409302680699021_trole`)
        const currentClan = await db.get(`${message.author.id}_clan`)
        if(currentClan === '[**SKY**]') {
            const skyClanEmbed = new MessageEmbed()
            .setTitle(':busts_in_silhouette: [SKY] Clan Page')
            .setDescription(`
:crown: Owner: **DatEmage#5303**
:busts_in_silhouette: Members: **2**
:calendar_spiral: Created on: **27/02/2022**

:busts_in_silhouette: __**Members**__ (2)
:crown: \`DatEmage#5303\` (${tier})
:bust_in_silhouette: \`wott?#6277\` (${wootTier})
            `)
            .setFooter({text: '[SKY] Clan Page'})
            message.channel.send({embeds: [skyClanEmbed]})
        }
        if(currentClan === 'None') {
            message.channel.send(':no_entry_sign: **You didn\'t join a clan!** (To create or join a clan dm \`minecrafttime#0283\`)')
        }
        if(currentClan === '[**LMAO**]') {
            const LmaoClanEmbed = new MessageEmbed()
            .setTitle(':busts_in_silhouette: [LMAO] Clan Page')
            .setDescription(`
:crown: Owner: **DefinitelyACat#6969**
:busts_in_silhouette: Members: **1**
:calendar_spiral: Created on: **27/02/2022**

:busts_in_silhouette: __**Members**__ (1)
:crown: \`DefinitelyACat#6969\` (${tier})
            `)
            .setFooter({text: '[LMAO] Clan Page'})
            message.channel.send({embeds: [LmaoClanEmbed]})
        }
        } else {
            const defTier = await db.get(`900755932605198336_trole`)
            const emageTier = await db.get(`905207658188005397_trole`)
            const wootTier = await db.get(`753409302680699021_trole`)
        const currentClan = await db.get(`${mt.id}_clan`)
        if(currentClan === '[**SKY**]') {
            const skyClanEmbed = new MessageEmbed()
            .setTitle(':busts_in_silhouette: [SKY] Clan Page')
            .setDescription(`
:crown: Owner: **DatEmage#5303**
:busts_in_silhouette: Members: **2**
:calendar_spiral: Created on: **27/02/2022**

:busts_in_silhouette: __**Members**__ (2)
:crown: \`DatEmage#5303\` (${emageTier})
:bust_in_silhouette: \`wott?#6277\` (${wootTier})
            `)
            .setFooter({text: '[SKY] Clan Page'})
            message.channel.send({embeds: [skyClanEmbed]})
        }
        if(currentClan === 'None') {
            message.channel.send(':no_entry_sign: **You didn\'t join a clan!** (To create or join a clan dm \`minecrafttime#0283\`)')
        }
        if(currentClan === '[**LMAO**]') {
            const LmaoClanEmbed = new MessageEmbed()
            .setTitle(':busts_in_silhouette: [LMAO] Clan Page')
            .setDescription(`
:crown: Owner: **DefinitelyACat#6969**
:busts_in_silhouette: Members: **1**
:calendar_spiral: Created on: **27/02/2022**

:busts_in_silhouette: __**Members**__ (1)
:crown: \`DefinitelyACat#6969\` (${defTier})
            `)
            .setFooter({text: '[LMAO] Clan Page'})
            message.channel.send({embeds: [LmaoClanEmbed]})
        }
        }
    }
    if(message.content.startsWith('tw!lmao_clan')) {
    if(message.author.id !== def) return message.channel.send(':no_entry_sign: **You do not have permission to perform this action**')
        const mt = message.mentions.users.first()
        if(!mt) return message.channel.send(':no_entry_sign: **Mention someone!**')
        db.set(`${mt.id}_clan`, '[**LMAO**]')
        message.channel.send(':white_check_mark: **Success!**')
    }
})

client.login('TOKEN HERE')
