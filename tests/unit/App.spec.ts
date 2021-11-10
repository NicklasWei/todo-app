import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Todos from '@/components/Todos.vue';

describe('App.vue', () => {
  const wrapper = shallowMount(App);

  it('Todos component mounted on App', () => {
    expect(wrapper.findComponent(Todos).exists()).toBe(true);
  });
});
