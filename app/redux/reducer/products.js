
const intiialState = {
    products :[] //can be  multiple
}

export default (state = intiialState, action) => {
    const {type,payload} =action
    switch (type) {
        case "ANY_CASE" : 
        return state;
        default:
            return state;
    }
};