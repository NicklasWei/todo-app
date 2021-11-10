import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Todo from '@/components/Todo.vue';

describe('App.vue', () => {
  const wrapper = shallowMount(App);

  it('Todo component mounted on App', () => {
    expect(wrapper.findComponent(Todo).exists()).toBe(true);
  });
});
