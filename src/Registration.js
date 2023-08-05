import { View, Text, TouchableOpacity, TextInput, StyleSheet  } from "react-native";
import React, {useState}  from "react";
import { firebase } from "../config";



const Registration = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    registerUser = async (email, password, firstName, lastName) => {

      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: "https://app2-bfb0e.firebaseapp.com",
        })

        .then(() => {
          alert("Verification email sent")
        
           }).catch((error) => {
            alert(error.message)
           })
           .then(() => {
            firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({
              firstName,
              lastName,
              email,
            
            })

           })

     .catch((error) => {
      alert(error.message)
     })

  })
    .catch((error => {
      alert(error.message)
    }))
}
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 23}}>
     
        Formulario de registro

      </Text>
      <View style={{marginTop:40}}> 

      <TextInput
      style={styles.TextInput}
      placeholder="Nombre"
      onChangeText={(firstName) => setFirstName(firstName)}
      autoCorrect={false}
      />

    <TextInput
      style={styles.TextInput}
      placeholder="Apellido"
      onChangeText={(lastName) => setLastName(lastName)}
      autoCorrect={false}
      
    />

    <TextInput
      style={styles.TextInput}
      placeholder="Correo"
      onChangeText={(email) => setEmail(email)}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      />

    <TextInput
      style={styles.TextInput}
      placeholder="Contraseña"
      onChangeText={(password) => setPassword(password)}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      
    />

      </View>

    <TouchableOpacity 
    onPress={() => registerUser(email, password, firstName, lastName)}
    style={styles.button}
    >
      <Text style={{color: "black", fontWeight: "bold", fontSize: 22}}>
        Registrarse
      </Text>
    
    </TouchableOpacity>

    </View>
  )
    

}
export default Registration;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  TextInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});