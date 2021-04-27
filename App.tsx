import React from 'react';
import {SafeAreaView} from 'react-native';
/* import {CounterScreen} from './src/screens/CounterScreen'; */
/* import {HelloWorld} from './src/screens/HelloWorld'; */
/* import {BoxObjectModel} from './src/screens/BoxObjectModelScreen'; */
import {DimensionScreen} from './src/screens/DimesionScreen';

/* 
<CounterScreen />
<HelloWorld />
<BoxObjectModel />
*/

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DimensionScreen />
    </SafeAreaView>
  );
};

export default App;
