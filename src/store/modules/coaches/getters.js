export default {
    coaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, rootState, rootgetters){
        const coaches = getters.coaches;
        const userId = rootgetters.userId;
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        if(!lastFetch){
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return(currentTimeStamp - lastFetch) / 1000 > 60;
    }
};