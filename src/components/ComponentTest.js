import React from 'react-native';
import Banner from './Banner';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default class ComponentTest extends View {
    render() {
        return (
            <View style={styles.container}>
                <Banner />
            </View>
        );
    }
}
