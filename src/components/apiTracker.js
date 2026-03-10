function apiTracker(){

    let attempts = 0;

    return function(){

        attempts++;

        return {
            attempts: attempts,
            lastTimeStamp: new Date().toLocaleTimeString()
        };
    }
}

export default apiTracker;

//this is a closuree