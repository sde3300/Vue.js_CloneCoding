<template>
    <b-container fluid="sm">
        <b-row id="left">
            <b-col cols="4">
                <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/mountains.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
                    <b-card-text>
                        Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                        condimentum, porta lectus vitae, ultricies congue gravida
                        diam non fringilla.
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="4">
                <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/lights.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-col>

            <b-col cols="4">
                <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/nature.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-col>
        </b-row>

        <b-row id="left">
            <b-col cols="4">
                <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/p1.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-col>

            <b-col cols="4">
            <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/p2.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-col>

            <b-col cols="4">

            <b-card
                title="Lorem Ipsum"
                img-src="https://www.w3schools.com/w3images/p3.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-col>
        </b-row>

        <div class="mt-3">
            <b-pagination-nav
                link-gen="linkGen"
                number-of-pages="4"
                base-url="#"
                align="center"
            ></b-pagination-nav>
        </div>
        <br />
        <br />

            <b-row>
                <b-col>
                    <b-img
                        src="https://www.w3schools.com/w3images/avatar_g.jpg"
                        fluid
                        alt="Responsive image"
                    ></b-img
                ></b-col>
                <b-col>
                    <b-img
                        src="https://www.w3schools.com/w3images/me2.jpg"
                        fluid
                        alt="Responsive image"
                    ></b-img
                ></b-col>
            </b-row>

        <br />
        <h4 style="margin-top: 50px" id="left"><b>About Me</b></h4>
        <p id="left">
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
        </p>

        <h4 style="margin-top: 50px" id="left">Technical Skills</h4>

        <h6 id="left">Progress label</h6>
        <b-progress
            :value="95"
            :max="max"
            show-progress
            class="mb-3"
            variant="dark"
            height="2rem"
        ></b-progress>
        <h6 id="left">Web Desing</h6>
        <b-progress
            :value="85"
            :max="max"
            show-progress
            class="mb-3"
            variant="dark"
            height="2rem"
        ></b-progress>
        <h6 id="left">Photoshop</h6>
        <b-progress
            :value="80"
            :max="max"
            show-progress
            class="mb-3"
            variant="dark"
            height="2rem"
        ></b-progress>

        <b-button squared variant="dark" class="float-left"><i class="fa fa-download w3-margin-right"></i>Download Resume</b-button>

        <h4 style="margin-top: 50px" id="left"> How much I charge</h4>

        <div class="row row-cols-1 row-cols-md-3 g-1" fluid>
            <b-list-group>
                <b-list-group-item variant="dark"><h1>Basic</h1></b-list-group-item>
                <b-list-group-item>Web Design</b-list-group-item>
                <b-list-group-item>Photography</b-list-group-item>
                <b-list-group-item>1GB Storage</b-list-group-item>
                <b-list-group-item>Mail Support</b-list-group-item>
                <b-list-group-item
                    ><h1>$ 10</h1>
                    per month</b-list-group-item
                >
                <b-list-group-item
                    ><b-button squared variant="info"
                        >Sign Up</b-button
                    ></b-list-group-item
                >
            </b-list-group>

            <b-list-group>
                <b-list-group-item variant="info"><h1>Pro</h1></b-list-group-item>
                <b-list-group-item>Web Design</b-list-group-item>
                <b-list-group-item>Photography</b-list-group-item>
                <b-list-group-item>50GB Storage</b-list-group-item>
                <b-list-group-item>Endless Support</b-list-group-item>
                <b-list-group-item
                    ><h1>$ 25</h1>
                    per month</b-list-group-item
                >
                <b-list-group-item
                    ><b-button squared variant="info"
                        >Sign Up</b-button
                    ></b-list-group-item
                >
            </b-list-group>

            <b-list-group>
                <b-list-group-item variant="dark"><h1>Premium</h1></b-list-group-item>
                <b-list-group-item>Web Design</b-list-group-item>
                <b-list-group-item>Photography</b-list-group-item>
                <b-list-group-item>Unlimited Storage</b-list-group-item>
                <b-list-group-item>Endless Support</b-list-group-item>
                <b-list-group-item
                    ><h1>$ 25</h1>
                    per month</b-list-group-item
                >
                <b-list-group-item
                    ><b-button squared variant="info"
                        >Sign Up</b-button
                    ></b-list-group-item
                >
            </b-list-group>
        </div>
    </b-container>
</template>

<script>
export default {
    methods: {
        linkGen(pageNum) {
            return pageNum === 1 ? "?" : `?page=${pageNum}`;
        },
    },

    data() {
        return {
            striped: true,
        };
    },
};
</script>

<style>
#center{text-align: center;}
#left{text-align: left;}
#right{text-align: right;}
</style>