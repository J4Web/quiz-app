import Chip from "@mui/material/Chip";
import "./level.css";
function Level(level) {
  if (level <= 1)
    return <Chip className="name" label={"EASY"} variant="outlined" />;
  else if (level >= 1 && level <= 2)
    return <Chip className="name" label="MEDIUM" variant="outlined" />;
  else if (level >= 2 && level <= 3)
    return <Chip className="name" label="HARD" variant="outlined" />;
}

export default Level;
