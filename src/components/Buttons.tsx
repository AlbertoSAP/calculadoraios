import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { buttons, textButtons} from '../theme/AppTheme';
import {OPERATIONESENUM} from '../util/calcutatoraCode';

export interface ButtonsProps {
  text: string;
  isWidth?: boolean;
  action:(value:string) => void;
}

const colors = [
  '#2D2D2D', //GRIS OSCURO
  '#FF9427', // NARANJA
];

const Buttons: React.FC<ButtonsProps> = ({text, isWidth = false,action,id,
}) => {
  const colorText = useRef<string>('black');
  const widthSize = useRef<number>(isWidth ? 177 : 80);
  const changeColor = () => {
    // transformamos el enum en una arreglo de valores example [+-x ]
    const exist = Object.values(OPERATIONESENUM).find(op => op === text);
    if (exist) {
      colorText.current = 'white';
      return {backgroundColor: colors[1]};
    } else if (!isNaN(+text) && +text < 10) {
      colorText.current = 'white';
      return {backgroundColor: colors[0]};
    } else if (text === '.') {
      colorText.current = 'white';
      return {backgroundColor: colors[0]};
    }
    return {};
  };

  return (
    <TouchableOpacity onPress={()=>action(text)} >
      <View style={{...buttons, ...changeColor(), width: widthSize.current}}>
        <Text style={{...textButtons, color: colorText.current}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;
