export const history = createBrowserHistory()

const getMiddleware = function () {
    return process.env.NODE_ENV === 'production' ?
        applyMiddleware(MovieDbApiMiddleware(), routerMiddleware(history)) :
        applyMiddleware(MovieDbApiMiddleware(), routerMiddleware(history), createLogger())
}

const rootReducer = combineReducers({
    ui: uiReducer,
    common: commonReducer,
    user: userReducer,
    movie: movieReducer,
    home: homeReducer,
    search: searchReducer,
    entities: entitiesReducer,
    router: connectRouter(history)
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(getMiddleware()))