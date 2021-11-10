<template>
  <div class="app-container">
    <div class="todo-app-container">
      <div class="todo-menu">
        <div>
          <h1>Todos</h1>

          <div class="input-field add-todo-container">
            <input
              v-model="newTodoRef"
              id="add-todo"
              type="text"
              class="validate"
              @keydown.enter="addTodo"
            />
            <label for="add-todo">Add Todo</label>
            <a
              class="waves-effect waves-light primary-btn"
              id="submit-todo-btn"
              type="submit"
              @click="addTodo"
            >
              Submit
            </a>
          </div>

          <div class="poke-container">
            <a class="secondary-btn" @click="addPokemon()">
              Add Random Pokémon
            </a>
          </div>
        </div>
      </div>

      <div class="flex-center">
        <div class="divider"></div>
      </div>

      <div class="width-full v-align-center">
        <ul class="todos-container">
          <li
            class="todo-card"
            v-for="(todo, todoIndex) in todos"
            :key="todo.content"
          >
            <input
              class="todo-content"
              type="text"
              v-model.lazy="todo.content"
            />

            <span class="todo-btn-container">
              <i
                class="remove-btn material-icons"
                @click="removeTodo(todoIndex)"
              >
                clear
              </i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { Todo } from '../types';
import { capitalize } from '../utils/functions';
import PokeGenerator from '../utils/PokeGenerator';

export default defineComponent({
  name: 'Todos',
  setup() {
    let newTodoRef: Ref<string> = ref('');
    let todos: Ref<Todo[]> = ref([]);

    const pokeGenerator: PokeGenerator = new PokeGenerator();

    /**
     * Adds a todo to the todo array.
     */
    function addTodo(): void {
      const newTodo: Todo = {
        content: newTodoRef.value,
      };

      if (newTodo.content) {
        todos.value.push(newTodo);
        newTodoRef.value = '';
      }
    }

    /**
     * Removes a todo from the todos array.
     * @param {number} todoIndex Index of the todo in the todos array.
     */
    function removeTodo(todoIndex: number): void {
      todos.value.splice(todoIndex, 1);
    }

    /**
     * Adds a random pokémon to the todos array
     * using PokeGenerator class.
     */
    async function addPokemon(): Promise<void> {
      const pokemon: string | undefined =
        await pokeGenerator.getRandomPokemon();

      if (pokemon) {
        newTodoRef.value = capitalize(pokemon);
        addTodo();
      }
    }

    return {
      newTodoRef,
      todos,
      addTodo,
      removeTodo,
      addPokemon,
    };
  },
});
</script>

<style scoped lang="scss">
@import '../styles/main';

ul {
  list-style-type: none;
}

h1 {
  @include margin-vertical(0, $space-small);
  color: #333;

  @include break-at('small') {
    font-size: 24px;
  }
}

.app-container {
  @extend .flex-center;
  @include size(100vw, 100vh);
  padding: $space-huge;
  background-color: #ddd;

  @include break-at('medium') {
    padding: 0;
  }
}

.todo-app-container {
  @include size(60vw, 100%);
  overflow-y: auto;
  background-color: $background-color;
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: $space-large;

  @include break-at('medium') {
    width: 100vw;
  }

  @include break-at('small') {
    display: block;
  }

  @include break-at('tiny') {
    padding: $space-small;
  }
}

.todo-menu {
  @extend .flex-center;
  @include size(50vw, 100%);

  @include break-at('small') {
    @include size(100%, auto);
    display: block;
  }
}

.add-todo-container {
  @include break-at('small') {
    display: flex;
  }
}

.todos-container {
  @include size(100%, 100%);
  margin: 0 auto;
  overflow-y: auto;
}

.todo-card {
  @extend .flex-center;
  padding-top: $space-tiny;
  padding-right: $space-small;
  text-align: left;
}

.todo-content {
  border-bottom: none !important; // Remove Materialize CSS default
  padding: 0 !important;
  margin: 0 !important;
  height: auto !important;
  width: auto !important;
}

.todo-btn-container {
  display: flex;
  margin-left: auto;
}

.todo-btn-container i {
  cursor: pointer;
}

.divider {
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid #999;
  margin: 0 $space-large;

  @include break-at('small') {
    border-left: none;
    border-bottom: 1px solid #999;
    height: auto;
    width: 100%;
    margin: $space-medium 0 $space-small 0;
  }
}

.primary-btn {
  @extend .btn;
  margin-top: $space-small;
  margin-bottom: $space-small;
  width: 100%;

  @include break-at('small') {
    width: 10em;
    min-width: 6em;
    margin-left: 10vw;
  }
}

.secondary-btn {
  @extend .btn;
  @include size(100%, auto);
  background-color: transparent;
  box-shadow: none;
  border: 1px solid $primary-color;
  color: $primary-color;
}
</style>
