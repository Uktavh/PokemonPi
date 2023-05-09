function getEmojis(strings) {

    const emojiDict = {
        "bug": "🐞",
        "dark": "🌑",
        "dragon": "🐉",
        "electric": "⚡️",
        "fairy": "🧚‍♀️",
        "fighting": "🥊",
        "fire": "🔥",
        "ghost": "👻",
        "grass": "🌿",
        "ground": "⛰️",
        "ice": "❄️",
        "normal": "🌌",
        "poison": "☠️",
        "psychic": "🔯",
        "rock": "🪨",
        "shadow": "👿",
        "unknown": "👁️‍🗨️",
        "water": "💧",
        "flying": "🪶"
    };

    return strings.map(s => emojiDict[s]).join("");

};

export default getEmojis;