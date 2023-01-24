import { StatusBar, StyleSheet, Text, View } from 'react-native';
import MyTabs from './src/Mainscreens/Navigation/navigation';
import Navigation from './src/Authentication/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar backgroundColor={'transparent'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#EAFDFC',
    paddingTop: 30,
  },
});
