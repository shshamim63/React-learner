import { customColor } from "../../style";

export const backButton = {
  position: "absolute",
  top: 2,
  left: 2,
  zIndex: 10,
  background: customColor.grey.secondary,
  minWidth: 15,
  maxWidth: 22,
  minHeight: 15,
  maxHeight: 22,
  color: customColor.deepPurple.deep,
  "&:hover": {
    background: customColor.amber.light,
  },
};
