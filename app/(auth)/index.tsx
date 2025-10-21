import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button';

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          There's something {"\n"}
          for you on <Text style={styles.boldText}>Twitch</Text>
        </Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <Button variant="primary"
        onPress={() => console.log('Pressed Login')}>
          Log in</Button>
        <Button variant="secondary"
        onPress={() => console.log('Pressed Sign Up')}>
          Sign Up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9147FF',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  boldText: {
    color: '#5C16C5',
    fontWeight: '900',
  },
  buttonsContainer: {
    marginBottom: 20,
  },
});