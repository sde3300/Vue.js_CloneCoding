<template>
    <div style="margin-top: 50px; background-color: gray">
        <br />
        <b-container fluid="sm">
            <h4 id="left"><b>Contact Me</b></h4>
            <b-container class="xxl">
                <b-row>
                    <b-col
                        class="p-3 bg-dark"
                        style="
                            font-size: 14px;
                            color: white;
                            text-align: center;
                        "
                    >
                        <i
                            class="fa fa-envelope"
                            style="font-size: 35px; color: white"
                        ></i>
                        <br /><br />email@email.com<br />
                    </b-col>

                    <b-col
                        class="p-3 bg-info"
                        style="
                            font-size: 14px;
                            color: white;
                            text-align: center;
                        "
                    >
                        <i
                            class="fa fa-map-marker"
                            style="font-size: 35px; color: white"
                        ></i>
                        <br /><br />Chicago, US<br />
                    </b-col>

                    <b-col
                        class="p-3 bg-dark"
                        style="
                            font-size: 14px;
                            color: white;
                            text-align: center;
                        "
                    >
                        <i
                            class="fa fa-envelope"
                            style="font-size: 35px; color: white"
                        ></i>
                        <br /><br />512312311
                    </b-col>
                </b-row>
            </b-container>
            <br />
            <hr />
            <h6 id="left">Name</h6>
            <b-form-input v-model="text" placeholder=""></b-form-input>
            <h6 id="left">Email</h6>
            <b-form-input v-model="text" placeholder=""></b-form-input>
            <h6 id="left">Message</h6>
            <b-form-input v-model="text" placeholder=""></b-form-input>
            <br />
            <b-button
                squared
                variant="dark"
                class="fa fa-paper-plane float-left"
            >
                Send Message</b-button
            >
        </b-container>
        <br />
        <br />
        <br />

        <!-- Footer -->
        <footer class="bg-dark text-center text-white">
            <!-- Grid container -->
            <div class="container p-4">
                <b-row>
                    <b-col id="left"
                        ><br />
                        <h4>FOOTER</h4>
                        <br />
                        <h6 id="left">
                            Praesent tincidunt sed tellus ut rutrum. Sed vitae
                            justo condimentum, porta lectus vitae, ultricies
                            congue gravida diam non fringilla.

                            <br />
                            <br />

                            Powered by
                            <a
                                href="https://www.w3schools.com/w3css/default.asp"
                                title="W3.CSS"
                                target="_blank"
                                class="w3-hover-opacity"
                                >w3.css</a
                            >
                        </h6>
                    </b-col>

                    <b-col id="left"
                        ><br />
                        <h4>BLOG POSTS</h4>
                        <br />
                        <b-row>
                            <b-col cols="3" id="right"
                                ><b-img
                                    src="https://www.w3schools.com/w3images/avatar_g2.jpg"
                                    width="70%"
                                    fluid
                                ></b-img
                            ></b-col>

                            <b-col id="left"
                                >Lorem<br />
                                Sed mattis nunc</b-col
                            >
                        </b-row>

                        <hr />

                        <b-row>
                            <b-col cols="3" id="right"
                                ><b-img
                                    src="https://www.w3schools.com/w3images/gondol.jpg"
                                    width="70%"
                                    fluid
                                ></b-img
                            ></b-col>

                            <b-col id="left"
                                >Ipsum<br />
                        Praes tinci sed</b-col
                            >
                        </b-row>
                    </b-col>

                    <b-col id="left"
                        ><br />
                        <h4>POPULAR TAGS</h4>
                        <h3>
                            <b-badge>Travel</b-badge>
                            <b-badge>New York</b-badge>
                            <b-badge>London</b-badge>
                            <b-badge>IKEA</b-badge>
                            <b-badge>NORWAY</b-badge>
                            <b-badge>DIY</b-badge>
                            <b-badge>Ideas</b-badge>
                            <b-badge>Baby</b-badge>
                            <b-badge>Family</b-badge>
                            <b-badge>News</b-badge>
                            <b-badge>Clothing</b-badge>
                            <b-badge>Shopping</b-badge>
                            <b-badge>Sports</b-badge>
                            <b-badge>Games</b-badge>
                        </h3>
                    </b-col>
                </b-row>
            </div>
            <!-- Grid container -->

            <!-- Copyright -->
            <div
                class="text-center p-3"
                style="background-color: rgba(0, 0, 0, 0.2)"
            >
                Powered by
                <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    title="W3.CSS"
                    target="_blank"
                    class="w3-hover-opacity"
                    >w3.css</a
                >
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
</template>

<script>
export default {};
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
</style>