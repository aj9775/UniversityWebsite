import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composerEnhancer = composeWithDevTools({
    name: `Redux`,
    realtime: true,
    trace: true,
    traceLimit: 25
});

export default createStore(composerEnhancer(applyMiddleware(ReduxThunk)));
