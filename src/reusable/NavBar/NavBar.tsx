import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import "./NavBar.scss";

interface NavBarProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

export default function NavBar({
  options,
  selectedOption,
  onSelect,
}: NavBarProps) {
  return (
    <div className="container">
      <MenuList disablePadding>
        {options.map((option) => (
          <MenuItem
            key={option}
            className={`option ${option === selectedOption ? "selected" : ""}`}
            onClick={() => onSelect(option)}
          >
            <ListItemText>
              <span
                className={`text ${
                  option === selectedOption ? "selected" : ""
                }`}
              >
                {option}
              </span>
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}
