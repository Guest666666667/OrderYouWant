import { createStore } from 'vuex'
import type { MenuItem } from '../types/types';

export default createStore({
  state: {
    itemArray: <MenuItem[]>[], 
    itemQuantities: <Record<number, MenuItem>>({}),
    totalQuantities: <number>0,
    totalAmount: <number>0,
  },
  getters: {
    itemArray: (state) => state.itemArray, 
    itemQuantities: (state) => state.itemQuantities,
    totalQuantities: (state) => state.totalQuantities,
    totalAmount: (state) => state.totalAmount
  },
  mutations: {
    setItemArray(state, items) { 
      state.itemArray = items; 
    }, 
    updateItemQuantity(state, { id, change }) {
      // Copy the item if it wasn't in the cart
      if (!state.itemQuantities[id]) { 
        const item = state.itemArray.find(item => item.id === id); 
        if(item){
          state.itemQuantities[id] = item;
        }
      }
      // Item quantities ∈(0, 9]
      const orderN = state.itemQuantities[id].orderNum + change
      if (orderN >=  0 && orderN <= 9) {
        state.itemQuantities[id].orderNum += change; 
        state.totalQuantities += change;
        state.totalAmount += parseFloat(state.itemQuantities[id].price) * change * 100;
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
