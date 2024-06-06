import { createContext } from "react";
import { Post } from "../types.ts/commontypes";

export interface IAppContext {
  jsonData: Post[] | undefined;
  setJsonData: (args: Post[]) => void;
  checked?: boolean;
  setChecked: (args: boolean) => void | undefined;
}

export const AppContext = createContext<IAppContext | null>(null);