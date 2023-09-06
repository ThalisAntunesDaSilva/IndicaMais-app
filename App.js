import React, {useCallback} from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



export default function App(){
  const fontsLoaded= useFonts({
    'Alata-Regular': require('./assets/Alata-Regular.ttf'),
  });




  return(
<Routes onLayout={fontsLoaded}/>
  );

}