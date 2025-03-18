import React from 'react';
import { View, Text, Button } from 'react-native';

const HistoryScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>History Screen</Text>
            <Button title="Go to Update" onPress={() => navigation.navigate('Update')} />
        </View>
    );
};

export default HistoryScreen;
