import Vue from 'vue'
import Router from 'vue-router'

import Auth from './views/Auth'
import AppContainer from './views/AppContainer'
import Main from './views/Main'
import Integration from './views/Integration'
import Statistic from './views/Statistic'
import RealTime from './views/RealTime'
import Personal from './views/Personal'
import Plan from './views/Plan'
import SettingData from './views/SettingData'
import SettingData2 from './views/SettingData2'
import Forms from './views/Forms'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Auth,
        },
        {
            path: '/cabinet',
            name: 'cabinet',
            component: AppContainer,
            children: [
                {
                    path: 'main',
                    name: 'main',
                    component: Main
                },
                {
                    path: 'integration',
                    name: 'integration',
                    component: Integration
                },
                {
                    path: 'statistic',
                    name: 'statistic',
                    component: Statistic
                },
                {
                    path: 'realtime',
                    name: 'real-time',
                    component: RealTime
                },
                {
                    path: 'setting',
                    name: 'setting',
                    component: SettingData
                },
                {
                    path: 'setting2',
                    name: 'setting2',
                    component: SettingData2
                },
                {
                    path: 'personal',
                    name: 'personal',
                    component: Personal
                },
                {
                    path: 'plan',
                    name: 'plan',
                    component: Plan
                },
                {
                    path: 'forms',
                    name: 'forms',
                    component: Forms
                }
            ]
        }
    ]
})
  