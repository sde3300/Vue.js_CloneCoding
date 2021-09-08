<template>
    <main>
        <b-container fluid="sm">
            <span
                class="text-center bg-dark px-2 text-white d-inline-block"
                id="top"
                >ABOUT THE CAFE</span
            >
            <br />
            <br />
            <p id="left">
                The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                <br />
                <br />
                In addition to our full espresso and brew bar menu, we serve
                fresh made-to-order breakfast and lunch sandwiches, as well as a
                selection of sides and salads and other good stuff.
            </p>
            <div class="box" id="top">
                <p id="left">
                    <br>
                    "Use products from nature for what it's worth - but never
                    too early, nor too late." Fresh is the new sweet.
                    <br /><br />
                    Chef, Coffeeist and Owner: Liam Brown
                </p>
            </div>

            <img
                src="../assets/coffeeshop.jpg"
                style="width: 100%"
                class="w3-margin-top"
                id="top"
            />
            <p id="left"><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
            <p id="left"><strong>Address:</strong> 15 Adr street, 5015, NY</p>

            <div class="content text-secondary" id="bottom">
                <div class="container" id="menu">
                    <span
                        class="
                            text-center
                            bg-dark
                            px-2
                            text-white
                            d-inline-block
                        "
                        id="bottom"
                        >THE MENU</span
                    >
                    <br />
                    <div class="shadow p-3 mb-5 bg-white rounded;">
                        <div class="bg-secondary">
                            <div class="d-flex bg-dark text-dark">
                                <router-link
                                    to="/"
                                    class="
                                        flex-fill
                                        text-white text-decoration-none
                                        py-3
                                        px-4
                                        router-link
                                    "
                                    v-bind:class="{ 'bg-dark': isEat }"
                                    >eat</router-link
                                >
                                <router-link
                                    to="/drink"
                                    class="
                                        flex-fill
                                        text-white text-decoration-none
                                        py-3
                                        px-4
                                        router-link
                                    "
                                    v-bind:class="{ 'bg-dark': isDrink }"
                                    >drink</router-link
                                >
                            </div>
                            <div>
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img
                src="../assets/coffeehouse2.jpg"
                style="width: 100%;"
            />

            <span
                class="text-center bg-dark px-2 text-white d-inline-block"
                id="top"
                >WHERE TO FIND US</span
            >
            <div class="content p-0">
                <p id="top" style="text-align:left;">Find us at some address at some place.</p>
                <img
                    src="../assets/map.jpg"
                    class="w3-image w3-greyscale"
                    style="width: 100%"
                    id="myMap"
                />
            </div>
        </b-container>
        <div class="container" id="contact">
                <p id="left">
                <span class="bg-dark text-white d-inline-block">FYI!</span>
                We offer full-service catering for any event, large or small. We
                understand your needs and we will cater the food to satisfy the
                biggerst criteria of them all, both look and taste.
                </p>
                <br>
            <p id="left">
                <strong>Reserve</strong> a table, ask for today's special or
                just send us a message:
            </p>
            <form action="/action_page.php" target="_blank">
                <p>
                    <input
                        class="form-control py-3"
                        type="text"
                        placeholder="Name"
                        required=""
                        name="Name"
                        style="height: 60px; font-size: 20px;"
                    />
                </p>
                <p>
                    <input
                        class="form-control py-3"
                        type="number"
                        placeholder="How many people"
                        required=""
                        name="People"
                        style="height: 60px; font-size: 20px;"
                    />
                </p>
                <p>
                    <input
                        class="form-control py-3"
                        type="datetime-local"
                        placeholder="Date and time"
                        required=""
                        name="date"
                        value="2020-11-16T20:00"
                        style="height: 60px; font-size: 20px;"
                    />
                </p>
                <p>
                    <input
                        class="form-control py-3"
                        type="text"
                        placeholder="Message \ Special requirements"
                        required=""
                        name="Message"
                        style="height: 60px; font-size: 20px;"
                    />
                </p>
                <p>
                    <button type="submit" class="btn btn-dark btn-lg float-left ">
                        SEND MESSAGE
                    </button>
                </p>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            isEat: true,
            isDrink: false,
        };
    },
    updated() {
        if (this.$route.name == "eat") {
            this.isEat = true;
            this.isDrink = false;
        } else {
            this.isEat = false;
            this.isDrink = true;
        }
    },
};
</script>

<style>
#center {
    text-align: center;
}
#left {
    text-align: left;
}
#right {
    text-align: right;
}
.box {
    border-style: solid;
    border-width: 0 0 0 8px;
    padding: 12px;
    word-break: break-all;
    border-color: LightGray;
    background-color: rgba(211, 211, 211, 0.2);
}

main {
    font-family: "Amatic SC", sans-serif;
    font-size: 1.5rem;
}

.reserve {
    font-size: 2rem;
}

.content {
    padding-top: 64px;
    padding-bottom: 64px;
}

.content form button {
    font-size: 1.5rem;
}

.content form input {
    font-size: 1.5rem;
}

#bottom {
    margin-bottom: 50px;
}

#top {
    margin-top: 50px;
}
/* .router-link:hover {
        background-color: #f44336!important;
    } */
</style>