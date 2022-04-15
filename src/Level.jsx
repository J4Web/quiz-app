import Chip from "@mui/material/Chip";
function Level(level) {
  if (level <= 1) return <Chip label="EASY" variant="outlined" />;
  else if (level >= 1 && level <= 2)
    return <Chip label="MEDIUM" variant="outlined" />;
  else if (level >= 2 && level <= 3)
    return <Chip label="HARD" variant="outlined" />;
}

export default Level;
