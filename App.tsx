import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./src/routes/app.routes";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'


import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";

import theme from "./src/global/styles/theme";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar 
          barStyle="light-content"
          translucent
          backgroundColor="transparent" 
        />
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
