import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJh1sa6Ye32Sx_eyuZZ-N1W4wd3G4cOGc",
    authDomain: "crwn-clothing-6058e.firebaseapp.com",
    projectId: "crwn-clothing-6058e",
    storageBucket: "crwn-clothing-6058e.appspot.com",
    messagingSenderId: "840020891865",
    appId: "1:840020891865:web:4a46bf70166c883f4c06c8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (error) {
            console.log(error);
        }
    }

    // If User Data Exists
    return userDocRef;
}