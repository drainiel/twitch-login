import { colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="logo-twitch" size={100} color="black" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          There's something {"\n"}
          for you on <Text style={styles.boldText}>Twitch</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button variant="primary"
          onPress={() => router.push('/(tabs)/home')}>
          Log in</Button>
        <Button variant="secondary"
          onPress={() => router.push('/(tabs)/home')}>
          Sign Up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  iconContainer: {
    top: 250,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boldText: {
    color: 'white',
    fontWeight: '900',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});