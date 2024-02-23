import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants/themes'

export default function SignIn({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    function handleSignIn() {
        if (username === "" && password === "") {
            Alert.alert('Status', 'Please all field are required')

        } else {

            navigation.navigate('TopTabBars')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In</Text>
            <TextInput
                onChangeText={(value) => setUsername(value)}
                placeholderTextColor={COLORS.primary}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Username' />
            <TextInput
                onChangeText={(value) => setPassword(value)}
                placeholderTextColor={COLORS.primary}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password'
                secureTextEntry={true} />
            <TouchableOpacity
                onPress={handleSignIn}
                activeOpacity={0.8}
                style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 20,
        padding: 20,
    },
    text: {
        fontSize: FONTS.SIZES.extralarge,
        color: COLORS.primary,
        alignSelf: 'center',
        paddingVertical: 20,
        fontWeight: '800',
    },
    input: {
        height: 45,
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        borderColor: COLORS.primary,
        color: COLORS.primary,
    },
    button: {
        borderWidth: 2,
        borderColor: COLORS.gray,
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        fontSize: FONTS.SIZES.large,
        color: COLORS.white,
    },
})