<template>
    <header class="container-fulid">
    <nav>
        <ul
            class="
                nav nav-tabs nav-justified
                fixed-top
                navbar navbar-expand-sm 
                bg-dark
                navbar-dark
            "
        >
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">MENU</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WHERE</a>
            </li>
        </ul>
        <div class="position-relative bgHeader" id="home">
            <div class="position-absolute px-3 py-2 leftBottom">
                <span class="text-center bg-dark px-2 text-white d-inline-block"
                    >Open from 6am to 5pm</span
                >
            </div>
            <div class="position-absolute headerTitle">
                <span class="text-white text-center" style="font-size: 100px"
                    >the<br />Cafe</span
                >
            </div>
        </div>
    </nav>
    </header>
</template>

<script>
export default {};
</script>

<style>
.nav-link {
    color: white;
}

header {
    font-family: "Amatic SC", sans-serif;
}

.bgHeader {
    background-image: url("../assets/coffeehouse.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 70vh;
}

.leftBottom {
    left: 0;
    bottom: 0;
}

.leftBottom span {
    font-size: 1.5rem;
}

.headerTitle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.headerTitle a {
    font-size: 2rem;
}
</style>