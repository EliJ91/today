
const defaultState ={
                user:{
                    logged: false,                    
                    first_name: "Test First Name",
                    last_name: "Test Last Name",
                },
                weatherInfo:
                    {
                        city: "Deland",
                        zip: 32744,
                        temp: 45,
                        icon: "c02d",
                        state: "OK",
                        clouds: "Cloudy"
                    }
                
            }


const Reducer = (user = defaultState, action)=>{
    switch(action.type){
        case 'LOGGED_IN':
            return action.payload                
        case 'LOGGED_OUT':       
            return defaultState;
        default:
            return user;
    }
}

export default Reducer;


