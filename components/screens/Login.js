import React from 'react'
import { SectionList } from 'react-native'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEB7Ma7zSNqD0N528YcrmWp-zuuILnIzU",
  authDomain: "project-a0ca2.firebaseapp.com",
  projectId: "project-a0ca2",
  storageBucket: "project-a0ca2.appspot.com",
  messagingSenderId: "1078813604120",
  appId: "1:1078813604120:web:7503d411d65a5573a7066d",
  measurementId: "G-CZD2THCQCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const onPress = () =>{
    
}

function Login() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
            
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  )
}

export default Login


