import React from 'react';
import {Text, View} from 'react-native';
import {styleResult, container, stylePrev, buttonRow} from '../theme/AppTheme';
import Buttons from '../components/Buttons';
import {operationes} from '../util/calcutatoraCode';
import useCalculate from '../Hook/useCalculate';
const Calculatora = () => {

  const {baseNum,prev, setBaseNum,actions} = useCalculate();

  const generateGridButtons = () => {
    let col: React.JSX.Element[] = [];
    let row: React.JSX.Element[] = [];
    operationes.forEach((op, index) => {
      col.push(<Buttons id={op} action={actions} key={index} text={op} isWidth={op === '0'} />);
      if (
        index + 1 === 4 ||
        index + 1 === 8 ||
        index + 1 === 12 ||
        index + 1 === 16 ||
        index + 1 === 19
      ) {
        row.push(
          <View key={`row${index}`} style={buttonRow}>
            {[...col]}
          </View>,
        );
        col = [];
      }
    });
    return row;
  };

  return (
    <View style={container}>
     {prev > '0' && <Text style={stylePrev}>{prev}</Text>}
      <Text style={styleResult}
      numberOfLines={1}
      adjustsFontSizeToFit
      >{baseNum}</Text>
      {[...generateGridButtons()]}
    </View>
  );
};

export default Calculatora;
