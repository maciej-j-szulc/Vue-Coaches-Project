import {createStore} from 'vuex';

import coachesModule from './modules/coaches/index.js'
import requestModult from './modules/requests/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModult,
        auth: authModule
    }
});

export default store;