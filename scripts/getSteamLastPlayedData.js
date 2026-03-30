const { DOMParser } = require('xmldom');
const fs = require('fs');

const steamLink = 'https://steamcommunity.com/profiles';
const userId = '76561198286466220';

const fetchSteamData = async () => {
  const steamData = await fetch(`${steamLink}/${userId}?xml=1`);
  return steamData.text();
};

const parseSteamData = (steamData) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(steamData, 'text/xml');

  const profilePicture = document.getElementsByTagName('avatarFull')[0].textContent;
  const [games] = Array.from(document.getElementsByTagName('mostPlayedGames'));

  const parsedGames = [];
  for (let i = 0; i < 3; i += 1) {
    parsedGames.push({
      name: games.getElementsByTagName('gameName')[i].textContent,
      link: games.getElementsByTagName('gameLink')[i].textContent,
      logo: games.getElementsByTagName('gameLogo')[i].textContent,
      logoSmall: games.getElementsByTagName('gameLogoSmall')[i].textContent,
      hoursOnRecord: games.getElementsByTagName('hoursOnRecord')[i].textContent,
    });
  }

  return { parsedGames, profilePicture };
};

const main = async () => {
  const steamData = await fetchSteamData();
  const games = parseSteamData(steamData);

  fs.writeFileSync(
    './src/steamData.json',
    JSON.stringify(games, null, 2),
    'utf-8'
  );
};

main();
