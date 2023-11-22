import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from './forgotPasswordStyle';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            Alert.alert("Password Reset", "Check your email to reset your password.");
            navigation.navigate("WelcomeHome")
        }).catch(error => {
            Alert.alert("Error", error.message);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"black"}
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordScreen;
