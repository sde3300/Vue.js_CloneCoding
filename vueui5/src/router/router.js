import Vue from 'vue' // 뷰인스턴스 로드
import Router from 'vue-router' // 뷰 라우터 라이브러리 로드

// 라우터 정보가 들어있는 컴포넌트를 로드
import pizzaVue from '../components/pizza.vue'
import saladsVue from '../components/salads.vue'
import starterVue from '../components/starter.vue'

// 뷰 라우터 사용 설정
Vue.use(Router)

//  라우터 정보 입력
export default new Router({
    routes: [
        {
            path: '/', // 라우팅되는 경로
            name: 'pizza', // 라우팅되는 이름
            component: pizzaVue // 실제 사용되는 컴포넌트
        },
        {
            path: '/salads',
            name: 'salads',
            component: saladsVue
        },
        {
            path: '/starter',
            name: 'starter',
            component: starterVue
        }
    ]
});
