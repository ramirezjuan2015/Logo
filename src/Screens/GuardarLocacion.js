import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as locContext } from '../context/locContext';
import Spacer from '../Componentes/Spacer';

const GuardarLocacion = ({ navigation }) => {
    const { state, got } = useContext(locContext);
    const _id = navigation.getParam('animalId');
    const animals = state.filter(l => l.animalId === _id);

    console.log('state', state)
    console.log(animals);
    console.log(_id)

    const { container, opacityStyle } = style

    return (
        <>
            <NavigationEvents onWillFocus={got} />

            <View style={container}>
                {
                    animals.map(loc =>

                        <TouchableOpacity style={opacityStyle} onPress={() => navigation.navigate
                            ('GuardarMapa', { animalId: loc.locationId })}>
                            <ListItem chevron title={loc.locationId} />
                        </TouchableOpacity>
                    )
                }
                <Spacer>
                    <Button
                        buttonStyle={{ backgroundColor: 'orange' }}
                        title="Crea una locación"
                        onPress={() => navigation.navigate('Location',
                            { animalId: _id })} />
                </Spacer>

            </View>
        </>
    );
};

GuardarLocacion.navigationOptions = {
    title: 'Navegar'
};

const style = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 10
    },
    opacityStyle: {
        marginTop: 5,
        marginRight: 10,
    }
});

export default GuardarLocacion;