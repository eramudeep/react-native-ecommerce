import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default async function  () {
    GoogleSignin.configure({
        webClientId: '1015972329649-kdmpvmdagf6f3ndqnmqqpp7svgoe699e.apps.googleusercontent.com',
      });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential); 
}