import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as locContext } from '../context/locContext';
import { navigate } from '../navigationRef';

export default () => {
    const {
        state: { locationId },
        reset } = useContext(LocationContext);
    const {
        location,
        got
    } = useContext(locContext);

    const saveList = async (animalId) => {
        console.log(locationId, animalId)
        await location(locationId, animalId);
        reset();
        got();
        navigate('Guardar');
    };

    return [saveList];
};