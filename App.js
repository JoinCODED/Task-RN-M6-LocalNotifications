import { StyleSheet, Button, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/posture.gif')} />
      <Button title="Start"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95c4ce',
    alignItems: 'center',
  },
});
