import { Colors } from "@/constants/Colors";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
	textColor: string;
	backgroundColor: string;
	backgroundColorLight: string;
	primaryColor: string;
	primaryColorLight: string;
	secondaryColor: string;
	accentColor: string;
	sprayColor: string;
	skyColor: string;
	creamColor: string;
	salmonColor: string;
};

const defaultTheme: Theme = {
	backgroundColor: Colors.dark.background,
	textColor: Colors.dark.text,
	backgroundColorLight: Colors.dark.background_light,
	primaryColor: Colors.dark.primary,
	primaryColorLight: Colors.dark.primary_light,
	secondaryColor: Colors.dark.secondary,
	accentColor: Colors.dark.accent,
	sprayColor: Colors.dark.spray,
	skyColor: Colors.dark.sky,
	creamColor: Colors.dark.cream,
	salmonColor: Colors.dark.salmon,
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
