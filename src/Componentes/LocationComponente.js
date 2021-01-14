import React, { useContext } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../Componentes/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import Locacion from '../hooks/locacion';
import Spinner from '../Componentes/spinner';

const Location = ({ animalId, route }) => {
    const {
        state: { locationId, loading },
        add_name,
        startLoading,
    } = useContext(LocationContext);
    const [saveList] = Locacion();

    const Screen = () => {
        startLoading();
        saveList(animalId);
    };

    console.log(route?.params?.animalId)

    return (
        <View>
            <Spacer>
                <TextInput
                    value={locationId}
                    onChangeText={add_name}
                    placeholder="Ingrese locación"
                />
            </Spacer>
            <Spacer>
                {loading ? (
                    <Spinner />
                ) : (
                        <Button
                            buttonStyle={{ backgroundColor: 'orange' }}
                            title="Guardar locación"
                            onPress={Screen} />
                    )}
            </Spacer>
        </View>
    );
};

const style = StyleSheet.create({});

export default Location;