<template>
    <section>
        <ul>
            <!-- v-for 사용 시 배열의 데이터를 저장하는 객체 부분에 ()를 사용하고, 두번재 매개변수를 사용 시 두번 재 매개변수에 해당 배열의 index 번호를 저장함 -->
            <li v-for="(item, index) in propsdata" class="shadow">
                <i class="checkBtn fa fa-check"></i>
                {{ item }}
                <span class="removeBtn" type="button" v-on:click="removeTodo(item, index)">
                    <i class="fa fa-trash-o"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ["propsdata"],
    // data: function () {
    //     return {
    //         todoLists: [],
    //     };
    // },
    // created: function () {
    //     // local 저장소에 저장된 데이터의 개수를 확인
    //     // 0 이상일 경우 data 속성의 todoLists 배열 변수에 데이터 저장
    //     if (localStorage.length > 0) {
    //         for (var i = 0; i < localStorage.length; i++) {
    //             // push() : 배열의 끝에 데이터를 추가하는 명령어
    //             // key() : 지정한 index에 있는 데이터를 가져 오는 명령어
    //             if (localStorage.key(i) != "loglevel:webpack-dev-server") {
    //             this.todoLists.push(localStorage.key(i));
    //             }
    //         }
    //     }
    // },
    methods: {
        removeTodo: function(item, index) {
            this.$emit("removeTodo", item, index);
            // local 저장소에 저장되어 있는 데이터 삭제
            //localStorage.removeItem(item);
            // 현재 컴포넌트인 TodoList의 data 속성에 정의된 배열 변수 todoLists의 데이터 중 지정한 위치의 데이터를 삭제
            //this.todoLists.splice(index, 1);
            // this,todoLists[index]=""; 이렇게 삭제하면 배열의 전체 길이는 그대로라서 splice를 사용하여 배열의 크기도 줄여야 한다
        }
    }
}
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: center;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>