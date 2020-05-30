const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUK_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

//(previousState, action )=> newState

const initialState = {
    numOfCakes: 10
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State is :',store.getState())
const unsubscibe = store.subscribe(() => console.log('Updated State is: ',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscibe()