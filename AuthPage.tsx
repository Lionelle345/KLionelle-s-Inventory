import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useAuth } from './AuthContext';

const COLORS = {
  ink: '#183B35',
  green: '#285B4B',
  greenDark: '#1C433B',
  cream: '#F8F7F1',
  white: '#FFFFFF',
  muted: '#8D9890',
  orange: '#D87947',
};

function getAuthErrorMessage(error: unknown) {
  const code =
    typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'string'
      ? error.code
      : '';
  switch (code) {
    case 'auth/invalid-email':
      return 'Enter a valid email address.';
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'The email or password is incorrect.';
    case 'auth/email-already-in-use':
      return 'An account already exists for this email. Try signing in.';
    case 'auth/weak-password':
      return 'Choose a password with at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Wait a little and try again.';
    case 'auth/network-request-failed':
      return 'Could not reach Firebase. Check your internet connection.';
    default:
      return 'Could not complete the request. Check your Firebase setup and try again.';
  }
}

export default function AuthPage() {
  const { configured, loading, user, signIn, signUp } = useAuth();
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (configured && !loading && user) router.replace('/(tabs)');
  }, [configured, loading, user]);

  const submit = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !password) {
      setError('Enter your email and password.');
      return;
    }
    if (creatingAccount && password.length < 6) {
      setError('Choose a password with at least 6 characters.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      if (creatingAccount) await signUp(normalizedEmail, password);
      else await signIn(normalizedEmail, password);
      router.replace('/(tabs)');
    } catch (authError) {
      setError(getAuthErrorMessage(authError));
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={COLORS.green} />
        <Text style={styles.loadingText}>Checking your account…</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.page} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.brandMark}><Text style={styles.brandMarkText}>K</Text></View>
        <Text style={styles.eyebrow}>K’LIONELLE’S · INVENTORY</Text>
        <Text style={styles.title}>{configured ? (creatingAccount ? 'Create your account' : 'Welcome back') : 'Connect your account'}</Text>
        <Text style={styles.subtitle}>
          {configured
            ? 'Sign in securely to access your store.'
            : 'Set up Firebase Authentication to enable account sign-in and sign-out.'}
        </Text>

        {configured ? (
          <>
            <View style={styles.formCard}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor={COLORS.muted}
                style={styles.input}
                accessibilityLabel="Email address"
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={creatingAccount ? 'At least 6 characters' : 'Your password'}
                placeholderTextColor={COLORS.muted}
                style={styles.input}
                accessibilityLabel="Password"
                secureTextEntry
                autoCapitalize="none"
                autoComplete={creatingAccount ? 'new-password' : 'password'}
                textContentType={creatingAccount ? 'newPassword' : 'password'}
                onSubmitEditing={submit}
              />
              {error ? <Text style={styles.error}>{error}</Text> : null}
              <Pressable style={[styles.submitButton, busy && styles.disabledButton]} onPress={submit} disabled={busy}>
                {busy ? <ActivityIndicator color={COLORS.white} /> : (
                  <Text style={styles.submitButtonText}>{creatingAccount ? 'Create account' : 'Sign in'}</Text>
                )}
              </Pressable>
            </View>
            <Pressable
              style={styles.switchMode}
              onPress={() => {
                setCreatingAccount((current) => !current);
                setError('');
              }}
            >
              <Text style={styles.switchText}>
                {creatingAccount ? 'Already have an account? ' : 'New to the app? '}
                <Text style={styles.switchLink}>{creatingAccount ? 'Sign in' : 'Create account'}</Text>
              </Text>
            </Pressable>
            <Text style={styles.securityNote}>Firebase securely manages account passwords. Passwords are never saved in this app’s database.</Text>
          </>
        ) : (
          <View style={styles.setupCard}>
            <Text style={styles.setupTitle}>Firebase setup required</Text>
            <Text style={styles.setupText}>1. Create a project at console.firebase.google.com.</Text>
            <Text style={styles.setupText}>2. Add a Web app and enable Email/Password in Authentication → Sign-in method.</Text>
            <Text style={styles.setupText}>3. Copy the app config into a project-root .env.local file, using .env.example as a guide.</Text>
            <Text style={styles.setupText}>4. Restart Expo. See README.md for the full setup steps.</Text>
            <Text style={styles.securityNote}>Firebase client config identifies your project; it is not a service-account key. Never add private service-account credentials to the app.</Text>
          </View>
        )}

        <Pressable style={styles.backButton} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.backButtonText}>← Back to inventory</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: COLORS.cream },
  content: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 36, width: '100%', maxWidth: 520, alignSelf: 'center' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.cream, gap: 12 },
  loadingText: { color: COLORS.muted, fontSize: 12 },
  brandMark: { width: 52, height: 52, borderRadius: 18, backgroundColor: '#D9A16C', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-5deg' }], marginBottom: 18 },
  brandMarkText: { color: COLORS.greenDark, fontSize: 28, fontWeight: '900', fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif' },
  eyebrow: { color: COLORS.orange, fontSize: 9, letterSpacing: 1.65, fontWeight: '800', marginBottom: 8 },
  title: { color: COLORS.ink, fontSize: 27, letterSpacing: -0.8, fontWeight: '800' },
  subtitle: { color: '#77847B', fontSize: 12, marginTop: 7, lineHeight: 18 },
  formCard: { backgroundColor: COLORS.white, borderRadius: 18, borderWidth: 1, borderColor: '#EFF0EA', padding: 18, marginTop: 23 },
  label: { color: '#77847B', fontSize: 8, letterSpacing: 1, fontWeight: '800', marginBottom: 7 },
  input: { height: 45, borderRadius: 11, borderWidth: 1, borderColor: '#E5E9E0', backgroundColor: COLORS.white, paddingHorizontal: 12, color: COLORS.ink, fontSize: 13, marginBottom: 16 },
  error: { color: '#A74733', fontSize: 11, lineHeight: 16, marginTop: -4, marginBottom: 12 },
  submitButton: { height: 47, borderRadius: 13, backgroundColor: COLORS.green, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  disabledButton: { opacity: 0.65 },
  submitButtonText: { color: COLORS.white, fontSize: 12, fontWeight: '800' },
  switchMode: { alignSelf: 'center', paddingVertical: 16 },
  switchText: { color: '#77847B', fontSize: 11 },
  switchLink: { color: COLORS.green, fontWeight: '800' },
  securityNote: { color: COLORS.muted, fontSize: 9, lineHeight: 15, marginTop: 10, textAlign: 'center' },
  setupCard: { backgroundColor: COLORS.white, borderRadius: 18, borderWidth: 1, borderColor: '#EFF0EA', padding: 18, marginTop: 23, gap: 12 },
  setupTitle: { color: COLORS.ink, fontSize: 14, fontWeight: '800', marginBottom: 2 },
  setupText: { color: '#77847B', fontSize: 11, lineHeight: 17 },
  backButton: { alignSelf: 'center', paddingVertical: 18 },
  backButtonText: { color: COLORS.green, fontSize: 11, fontWeight: '800' },
});
