// ColorSchemeContext.tsx file
import { MantineColorScheme } from "@mantine/core";
import { createContext } from "react";

export default createContext<{ colorScheme: MantineColorScheme; onChange: React.Dispatch<React.SetStateAction<MantineColorScheme>>} | null>(null);
