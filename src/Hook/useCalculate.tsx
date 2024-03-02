import {useState} from 'react';
import { addDash, addValueBaseNumber } from '../util/validations';

const useCalculate = () => {
  const [baseNum, setBaseNum] = useState<string>('0');
  const [prev, setPrev] = useState<string>('0');

  // **************Actions***************
  const actions = (value: string) => {
    // build Number
    if (!isNaN(+value) || '.') {
      // if there is . no add
      if (baseNum.includes('.') && value === '.') {
        return;
      }
      setBaseNum(
        `${ addValueBaseNumber(baseNum,value) ? '' : baseNum
        }${value}`,
      );
    }

    switch (value) {
      case 'C':
        setBaseNum('0');
        break;

      case '+/-':
        if (baseNum.includes('-')) {
          setBaseNum(baseNum.replace('-', ''));
        } else {
          setBaseNum(addDash(baseNum) ? '-' + baseNum : baseNum);
        }
        break;

      default:
        break;
    }
  };
  // **************Actions***************
  return {baseNum, prev, actions};
};

export default useCalculate;
