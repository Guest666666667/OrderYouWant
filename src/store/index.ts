import { createStore } from 'vuex'
import type { MenuItem } from '../types/types';

export default createStore({
  state: {
    itemArray: <MenuItem[]>[], 
    categoryTotals : <Record<number, number>>({}),
    itemQuantities: <Record<number, MenuItem>>({}),
    totalQuantities: <number>0,
    totalAmount: <number>0,
    diningTime: <number>1,
  },
  getters: {
    itemArray: (state) => state.itemArray, 
    categoryTotals: (state) => state.categoryTotals,
    itemQuantities: (state) => state.itemQuantities,
    totalQuantities: (state) => state.totalQuantities,
    totalAmount: (state) => state.totalAmount,
    diningTime: (state) => state.diningTime
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
        state.categoryTotals[Math.floor(id / 100)] += change;
        state.itemQuantities[id].orderNum += change; 
        state.totalQuantities += change;
        state.totalAmount += parseFloat((parseFloat(state.itemQuantities[id].price) * change * 100).toFixed(2));
        if (state.itemQuantities[id].orderNum === 0) { 
          delete state.itemQuantities[id];
        }
      } 
    },
    setDiningTime(state, time) { 
      state.diningTime = time; 
    }, 
  },
  actions: {
  },
  modules: {
  }
})
