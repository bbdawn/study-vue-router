import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    // path: "/경로",
    // component: import해온 컴포넌트,
    path: "/list",
    component: List,

    // /list 라는 경로로 들어가기 전에 검사를 하고 싶으면 beforeEnter라는 항목 사용
    // /list로 들어가기 전에 "로그인했냐"라는 변수가 false면 /login 페이지로 보내기  
    // beforeEnter: ()=> {
    //     if(로그인했냐 == false) {
    //         return '/login'
    //     }
    // }


    // 파라미터는 두세개 작명이 가능하다
    // 첫 파라미터는 목적지 페이지, 둘째 파라미터는 출발페이지이다.
    // 그리고 그것들은 $route라는 변수랑 똑같이 이용 가능하다
    // to.fullPath 하면 전체경로를 알려주고
    // to.params.id 하면 id파라미터를 알려준다
    // return false는 라우팅 중단, return이 없으면 원래의 route인 /hello로 이동시켜줌 
    // beforeEnter: (to, from)=>{
    //     return to.fullPath
    //   }



  },
  {
    path: "/",
    component: Home,
  },
  {
    // path: "/detail/:id",
    //숫자만 찾아주는 정규식 문법 (\\d+)
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
        {
            // /detail/0/author
            path: "author",
            component: Author,
        },
        {
            // /detail/0/comment
            path: "comment",
            component: Comment,
        }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 