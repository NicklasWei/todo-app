import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
  it('Todo input field exists', () => {
    const wrapper: VueWrapper<any> = mount(Todo)
    const todoInput: DOMWrapper<HTMLInputElement> = wrapper.find('#add-todo')

    expect(todoInput.exists()).toBe(true)
  })

  it('Todo submission adds todo', async () => {
    const wrapper = mount(Todo)
    const todoInput = wrapper.find('#add-todo')
    const submitTodoBtn = wrapper.find('#submit-todo-btn')
    const todosContainer = wrapper.find('.todos-container')

    await todoInput.setValue('Test')
    await submitTodoBtn.trigger('click')

    expect(todosContainer.element.childElementCount).toBe(1)
  })
})
