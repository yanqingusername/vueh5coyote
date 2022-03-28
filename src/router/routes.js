import Login from '../pages/login/login.vue'
// import Home from '../pages/home/home.vue'
// import Index from '../pages/index/index.vue'
// import Scene from '../pages/scene/scene.vue'
// import Mine from '../pages/mine/mine.vue'
// import Task from '../pages/task/task.vue'
import Page404 from '../pages/page404/index.vue'
import instrumentList from '../pages/instrumentList.vue'
import instrumentBind from '../pages/instrumentBind.vue'

const routes = [{
        path: '/login',
        component: Login
    },
    // {
    //     name: 'home',
    //     path: '/home',
    //     component: Home,
    //     children: [{
    //         name: 'index',
    //         path: 'index',
    //         component: Index
    //     }, {
    //         name: 'task',
    //         path: 'task',
    //         component: Task
    //     }, {
    //         name: 'scene',
    //         path: 'scene',
    //         component: Scene
    //     }, {
    //         name: 'mine',
    //         path: 'mine',
    //         component: Mine
    //     }, {
    //         path: '/',
    //         redirect: 'index'
    //     }]
    // },
    {
        path:"/instrumentList",
        component: instrumentList
    },
    {
        path:"/instrumentBind",
        component: instrumentBind
    },
    {
        path: '/',
        component: Login
    },
    {
        path: '*',
        component: Page404 //404页面
    }
]

export default routes