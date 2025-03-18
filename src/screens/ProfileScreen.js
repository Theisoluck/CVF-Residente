import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Profile Screen</Text>
            <Button title="Go to History" onPress={() => navigation.navigate('History')} />
        </View>
    );
};

export default ProfileScreen;
