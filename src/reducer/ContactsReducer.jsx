
let ContactsReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.contact];
            
        case 'DELETE_CONTACT':
            let filtered = state.filter((contact) => contact.id !== action.id);
            return filtered;

        default:
            return state;
    }

}

export default ContactsReducer
