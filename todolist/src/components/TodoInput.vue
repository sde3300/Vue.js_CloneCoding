<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="할 일을 입력해주세요." v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            newTodoItem: "",
        };
    },
    methods: {
        addTodo: function () {
            // input 태그에 입력된 내용에서 앞뒤의 공백문자를 제거하고 입력된 내용이 비어있지 않은지 확인
            if (this.newTodoItem.trim() !== "") {
                // trim() : 문자열 중에서 문자열의 앞쪽 및 뒷쪽의 공백문자를 제거하는 명령어
                var value = this.newTodoItem.trim();
                
                // emit()를 사용하여 이벤트 발생
                // 두번째 매개변수에 입력된 데이터가 이벤트 발생 시 부모 컴포넌트로 전달 됨
                this.$emit("addTodo", value);
                // app.vue에서 local 저장소를 컨트롤하기 때문에 TodoInput.vue에서 local 저장소를 사용할 이유가 없어짐
                // 웹 앱의 local 저장소에 데이터를 저장
                //localStorage.setItem(value, value);
            }
            this.clearInput();
        },
        clearInput: function () {
            // 입력된 내용을 초기화
            this.newTodoItem = "";
        },
    },
};
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: rgb(255, 255, 255);
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #ffcbee, #a58aff);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: rgb(255, 255, 255);
    vertical-align: middle;
}
</style>