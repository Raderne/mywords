import { Colors } from "@/constants/Colors";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
	backgroundColor: string;
	textColor: string;
};

const defaultTheme: Theme = {
	backgroundColor: Colors.dark.background,
	textColor: Colors.dark.text,
};

const ThemeContext = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme] = useState<Theme>(defaultTheme);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
