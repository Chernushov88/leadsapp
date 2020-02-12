import Vue from 'vue'
import Router from 'vue-router'

import Auth from './views/Auth'
import AppContainer from './views/AppContainer'
import Main from './views/Main'
import Integration from './views/Integration'
import Statistic from './views/Statistic'
import StatisticSpreadsheets from './views/StatisticSpreadsheets'
import RealTime from './views/RealTime'
import Personal from './views/Personal'
import Plan from './views/Plan'
import SettingData from './views/SettingData'

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
                    path: 'statisticspreadsheets',
                    name: 'statisticspreadsheets',
                    component: StatisticSpreadsheets
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
                    path: 'personal',
                    name: 'personal',
                    component: Personal
                },
                {
                    path: 'plan',
                    name: 'plan',
                    component: Plan
                }
            ]
        }
    ]
})
  