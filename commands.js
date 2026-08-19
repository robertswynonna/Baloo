import 'dotenv/config';

const command = {
    name: 'ping',
    description: 'Replies with Pong!'
};

const response = await fetch(
    `https://discord.com/api/v10/applications/${process.env.APP_ID}/commands`,
    {
        method: 'POST',
        headers: {
            'Authorization': `Bot ${process.env.DISCORD_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(command)
    }
);

console.log(await response.json());