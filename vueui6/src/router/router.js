import Vue from 'vue' // 뷰인스턴스 로드
import Router from 'vue-router' // 뷰 라우터 라이브러리 로드

// 라우터 정보가 들어있는 컴포넌트를 로드
import eatVue from '../components/eat.vue'
import drinkVue from '../components/drink.vue'

// 뷰 라우터 사용 설정
Vue.use(Router)

//  라우터 정보 입력
export default new Router({
    routes: [
        {
            path: '/', // 라우팅되는 경로
            name: 'eat', // 라우팅되는 이름
            component: eatVue // 실제 사용되는 컴포넌트
        },
        {
            path: '/drink',
            name: 'drink',
            component: drinkVue
        },
    ]
});