const nicknames = [
    "Shadow", "Blaze", "Frost", "Nova", "Phantom", "Raven", "Storm", "Inferno",
    "Dragon", "Hunter", "Wolf", "Phoenix", "Thunder", "Vortex", "Knight", "Legend",
    "Ghost", "Maverick", "Striker", "Titan", "Hawk", "Crimson", "Savage", "Dagger",
    "Glitch", "Cyber", "Alpha", "Omega", "Nebula", "Cosmos", "Specter", "Lunar",
     "Nightmare", "Tempest", "Reaper", "Falcon", "Spartan", "Sniper", "Rogue",
    "Doom", "Warden", "Sentinel", "Pulse", "Voltage", "Flare", "Sapphire", "Emerald",
    "Obsidian", "Quartz", "Comet", "Eclipse", "Chaos", "Viper", "Lightning", "Zenith",
    "Onyx", "Blizzard", "Archer", "Warrior", "Assassin", "Mercury", "Cobalt", "Jet",
    "Crusher", "Predator", "Ironclad", "Tornado", "Raptor", "Mystic", "AlphaWolf"
  ];
  let lastNickname = "";
  
  function generateNickname() {
    let randomNickname;
  
    do {
      randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    } while (randomNickname === lastNickname);
  
    lastNickname = randomNickname;
    document.getElementById("output").textContent = randomNickname;
  }
  