import firebase from '@/utils/firebase';

const habitRef = firebase.firestore().collection('habit');

export default {
  async addHabit({ commit, rootGetters }, habit) {
    const userId = rootGetters.getUserId;
    if (!userId) return;
    console.log(userId);
    const habitData = {
      uid: userId,
      name: habit.name,
      description: habit.description,
    };
    console.log(habitData);
    await habitRef
      .add(habitData)
      .then(() => {
        commit('ADD_HABIT', habit);
      })
      .catch((error) => {
        console.error('Error adding habit: ', error);
      });
  },
};
