// src/store/index.js
import { createStore } from 'redux';
import rootReducer from './reducers';  // Убедись, что путь корректный

const store = createStore(rootReducer);

export default store;
