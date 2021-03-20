import { mount } from '@vue/test-utils';
import HabitListItem from '@/components/HabitListItem.vue';

const listItemFactory = (props) => {
  return mount(HabitListItem, { props });
};

const habitName = 'Exercise';
const habitHistory = [
  { habitId: 1, date: '01/02/21', completed: true },
  { habitId: 1, date: '02/02/21', completed: false },
  { habitId: 1, date: '03/02/21', completed: true },
  { habitId: 1, date: '04/02/21', completed: false },
  { habitId: 1, date: '05/02/21', completed: true },
  { habitId: 1, date: '06/02/21', completed: true },
  { habitId: 1, date: '07/02/21', completed: true },
];

describe('HabitListItem.vue', () => {
  it('renders habit name', () => {
    const wrapper = listItemFactory({ name: habitName, history: habitHistory });
    expect(wrapper.get(`[for="${habitName}"]`).exists()).toBe(true);
  });

  it('renders checkboxes for history', () => {
    const wrapper = listItemFactory({ name: habitName, history: habitHistory });
    expect(wrapper.findAll('[data-history]').length).toEqual(7);
  });
});
