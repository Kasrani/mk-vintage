import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: null,
        tasks: [
            {
                id: 1,
                title: "Tache par défaut",
                done: false,
                dueDate: '2021-05-01'
            }
        ],
        snackbar: {
            show: false,
            text: '',
        }
    },
    mutations: {
        setSearch(state, value) {
            state.search = value
        },
        addTask(state, newTaskTitle) {
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false,
                dueDate: null
            };
            state.tasks.push(newTask)
        },
        doneTask(state, id) {
            let task = state.tasks.filter((task) => task.id === id)[0]
            task.done = !task.done;
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id)
        },
        updateTaskTitle(state, payload) {
            let task = state.tasks.filter((task) => task.id === payload.id)[0]
            task.title = payload.title
        },
        updateTaskDueDate(state, payload) {
            let task = state.tasks.filter((task) => task.id === payload.id)[0]
            task.dueDate = payload.dueDate
        },
        showSnackbar(state, text) {
            let timeout = 0
            if (state.snackbar.show) {
                state.snackbar.show = false
                timeout = 300
            }
            setTimeout(() => {
                state.snackbar.show = true
                state.snackbar.text = text
            }, timeout)
        },
        hideSnackbar(state) {
            state.snackbar.show = false
        }
    },
    actions: {
        addTask({ commit }, newTaskTitle) {
            commit('addTask', newTaskTitle)
            commit('showSnackbar', 'Tache ajoutée !')
        },
        deleteTask({ commit }, id) {
            commit('deleteTask', id)
            commit('showSnackbar', 'Tache supprimée !')
        },
        updateTaskTitle({ commit }, payload) {
            commit('updateTaskTitle', payload)
            commit('showSnackbar', 'Tache à jour !')
        },
        updateTaskDueDate({ commit }, payload) {
            commit('updateTaskDueDate', payload)
            commit('showSnackbar', 'Date à jour !')
        }
    },
    getters: {
        tasksFiltred(state) {
            if (!state.search) {
                return state.tasks
            }
            return state.tasks.filter(task =>
                task.title.toLowerCase().includes(state.search.toLowerCase())

            )
        }
    },
    modules: {

    }
})