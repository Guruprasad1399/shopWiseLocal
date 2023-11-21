import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from './welcomeScreenStyle';

const WelcomeScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                setIsLoading(false);
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => {
                setIsLoading(false);
                alert(error.message)
            });
    };

    const navigateToSignUp = () => {
        navigation.navigate('Sign Up');
    };

    const navigateToForgotPassword = () => {
        navigation.navigate('Forgot Password');
    }

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (<View style={styles.container}>
            <Text style={styles.title}>Welcome to the SWL Community</Text>
            <Text style={styles.subtitle}>
                Join us in supporting the growth of the local community
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Or</Text>
            <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={navigateToSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subtitle} onPress={navigateToForgotPassword}>
                <Text style={styles.text}>Forgot Password ?</Text>
            </TouchableOpacity>

        </View>
        )
    );
}

export default WelcomeScreen; 