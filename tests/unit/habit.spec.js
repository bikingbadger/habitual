import { mount } from '@vue/test-utils';
import Habit from '@/components/Habit.vue';

describe('Habit.vue', () => {
  it('renders habit name', () => {
    const wrapper = mount(Habit);
    console.log(wrapper.html());
  });
});
