function Level(level) {
  if (level <= 1) return "EASY";
  else if (level >= 1 && level <= 2) return "MEDIUM";
  else if (level >= 2 && level <= 3) return "HARD";
}

export default Level;
