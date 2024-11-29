import { createStore } from 'vuex'
import type { MenuItem } from '../types/types';

export default createStore({
  state: {
    itemArray: <MenuItem[]>[], 
    itemQuantities: <Record<number, MenuItem>>({})
  },
  getters: {
    itemArray: (state) => state.itemArray, 
    itemQuantities: (state) => state.itemQuantities
  },
  mutations: {
    setItemArray(state, items) { 
      state.itemArray = items; 
    }, 
    updateItemQuantity(state, { id, change }) { 
      if (!state.itemQuantities[id]) { 
        const item = state.itemArray.find(item => item.id === id); 
        if(item){
          state.itemQuantities[id] = item;
        }
      }
      if (state.itemQuantities[id].orderNum + change >= 0) {
        state.itemQuantities[id].orderNum += change; 
        if (state.itemQuantities[id].orderNum === 0) { 
          delete state.itemQuantities[id];
        }
      } 
    }
  },
  actions: {
  },
  modules: {
  }
})
