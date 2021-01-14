import createDataContext from './createDataContext';
import Conection from '../api/Conection';

const loc = (state, action) => {
    switch (action.type) {
        case 'location':
            return action.payload;
        default:
            return state;
    }
};

const got = dispatch => async () => {
    const accion = await Conection.get('/location');
    dispatch({ type: 'location', payload: accion.data });
};

const location = () => async (animalId, locationId) => {
    await Conection.post('/location', { animalId, locationId })
    console.log(locationId)
};

export const { Context, Provider } = createDataContext(
    loc,
    { got, location },
    []
);