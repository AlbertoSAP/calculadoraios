import {StyleSheet} from 'react-native';

export const {
  background,
  styleResult,
  container,
  stylePrev,
  buttons,
  textButtons,
  buttonRow, 
} = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  styleResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom:5,
  },
  stylePrev: {
    color: 'white',
    opacity: 0.4,
    fontSize: 30,
    textAlign: 'right',
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom:10,
  },
  textButtons: {
    textAlign: 'center',
    // color: 'black',
    fontSize: 40,
    padding: 10,
    fontWeight: '400',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
