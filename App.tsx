import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>READET</Text>
        <Text style={styles.title}>
          Welcome to Readet, the future social network for readers.
        </Text>
        <Text style={styles.description}>
          A home for every page that stays with you.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F2E8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  eyebrow: {
    color: '#9A4A2D',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 20,
  },
  title: {
    color: '#1D2A2A',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -0.8,
    lineHeight: 43,
  },
  description: {
    color: '#52605A',
    fontSize: 18,
    lineHeight: 27,
    marginTop: 20,
  },
});
