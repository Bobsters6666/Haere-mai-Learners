// export interface BackgroundEllipseProps {
//   left: number;
//   top: number;
//   blur: number;
//   width: number;
//   height: number;
// }

import { MouseEventHandler } from "react"

export interface NavbarProps {
  selectedPage: string,
  setSelectedPage: (selectedPage: string) => void
  isBackdrop?: boolean,
  setIsBackdrop?: (isBackdrop: boolean) => VoidFunction
}

export interface PointsProps {
  points: number
}

export interface CustomButtonProps {
  text: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit" 
}
