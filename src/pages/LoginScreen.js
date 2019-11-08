import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import logo from '../assets/logo-header.png';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function login() {
        if (!email) {
            Alert.alert(null, "Digite o e-mail.");
            return;
        }

        if (!password) {
            Alert.alert(null, "Digite a senha.");
            return;
        }

        navigation.navigate('HomeScreen');
    }

    function register() {
        navigation.navigate('RegisterScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.imageContainer}>
                    <Image source={logo} />
                </View>

                {
                    loading ?
                        <ActivityIndicator color="#17496E" size="large" style={{ padding: 10 }} />
                        :
                        <>
                            <TextInput
                                style={styles.textInput}
                                autoCapitalize="none"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                placeholder="E-mail"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />

                            <TextInput
                                style={styles.textInput}
                                autoCapitalize="none"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                placeholder="Senha"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity style={styles.loginButton} onPress={login}>
                                <Text style={styles.loginButtonText}>Entrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.createButton} onPress={register}>
                                <Text style={styles.createText}>Criar uma conta</Text>
                            </TouchableOpacity>
                        </>
                }
            </View>
        </View>
    );
}

export function LoginNavigationOptions({ navigation }) {
    return {
        header: null
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#17496E",
        padding: 10,
    },

    loginContainer: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10,
    },

    imageContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    textInput: {
        alignSelf: "stretch",
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        height: 40,
        borderRadius: 3,
        marginBottom: 10,
    },

    loginButton: {
        height: 42,
        borderRadius: 5,
        backgroundColor: "#17496E",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    loginButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },

    createButton: {
        height: 42,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#17496E",
        justifyContent: "center",
        alignItems: "center",
    },

    createText: {
        color: "#17496E",
        fontWeight: "bold",
    }
});