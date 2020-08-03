export const log_in = data => {
    return{
        type: 'LOGGED_IN',
        payload: data
    };
};

export const log_out= () => {
    return{
        type: 'LOGGED_OUT'
    };
};