import FormContext from './FormContext'

const FormState = (props) => {

    const state = {
        "name": 'Hasnan',
        email: 'demo@gmail.com',
        phone: '+92 333 333 333',
        address: 'near by park',
        city: 'Somewhere in pakistan',
        state: 'punjab',
        zip: '01234',

    }

    return (
        <FormContext.Provider value={state}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormState