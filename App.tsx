import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calculatora from './src/screen/Calculatora';
import { background } from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={background}>
      <StatusBar
       backgroundColor={'black'}
       barStyle={'light-content'}
      />
      <Calculatora/>
    </SafeAreaView>
  );
};

export default App;
