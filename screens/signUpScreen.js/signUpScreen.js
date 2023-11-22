import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from './signupScreenStyle';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = email => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignUp = () => {
        if (!validateEmail(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address.");
            return;
        }
        if (password === confirmPassword && password !== '') {
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    setIsLoading(false);
                    userCredentials.user;
                    navigation.navigate('WelcomeHome')
                })
                .catch(error => {
                    setIsLoading(false);
                    alert(error.message)
                });
        } else {
            Alert.alert("Password Mismatch", "The passwords do not match or are empty.");
        }
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />) : (<View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor={"black"}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    placeholderTextColor={"black"}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    placeholderTextColor={"black"}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    );
}
