import { UserData } from "./user-data";

export default interface PopUpProps {
  index: number,
  componentState: [variable: UserData, setVariable: React.Dispatch<React.SetStateAction<any>>],
  saveUser?: () => Promise<boolean>
}