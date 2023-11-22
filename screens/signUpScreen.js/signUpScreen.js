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
        if (password !== confirmPassword || password === '') {
            Alert.alert("Password Mismatch", "The passwords do not match or are empty.");
            return;
        }

        setIsLoading(true);
        fetch('http://192.168.1.94:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                // Handle the response data
                navigation.navigate('WelcomeHome');
            })
            .catch(error => {
                setIsLoading(false);
                console.error('Error:', error);
                Alert.alert("Sign Up Error", "An error occurred during sign up.");
            });
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
