import React from 'react';
import { View, Text, Button } from 'react-native';

const UpdateScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Update Screen</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default UpdateScreen;
