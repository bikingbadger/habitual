import habitActions from './habitActions.js';
import habitMutations from './habitMutations';
import habitGetters from './habitGetters';

export default {
  state() {
    return {
      habits: [
        {
          id: 1,
          name: 'Read ',
          description: 'Read for 45 minutes daily',
          history: [
            { habitId: 1, date: '01/02/21', completed: true },
            { habitId: 1, date: '02/02/21', completed: false },
            { habitId: 1, date: '03/02/21', completed: true },
            { habitId: 1, date: '04/02/21', completed: false },
            { habitId: 1, date: '05/02/21', completed: true },
            { habitId: 1, date: '06/02/21', completed: true },
            { habitId: 1, date: '07/02/21', completed: true },
          ],
        },
      ],
    };
  },
  mutations: habitMutations,
  actions: habitActions,
  getters: habitGetters,
};
