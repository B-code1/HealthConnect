import React from 'react';
import { SafeAreaView, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';




const signup = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    style={{ borderWidth: 1, marginBottom: 10 }}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={{ borderWidth: 1, marginBottom: 10 }}
                />
                <Button title="Sign Up" onPress={() => { }} />
            </View>
            <View>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: 'blue' }}>Log In</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text>Or sign up with</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: 'blue' }}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: 'blue' }}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }}>
                <Text> Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>


    )

}
export default signup
