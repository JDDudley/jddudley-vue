<template>
  <div>
    <h2 class="pg-title">Work</h2>
    <!--<v-carousel>
        <v-carousel-item v-for="example in workExamples" :src="'/public/work/' + example.img + '-lg.jpg'"></v-carousel-item>
    </v-carousel>-->
    <v-container fluid>
        <v-row>
            <v-col xs6 lg4 v-for="example in workExamples">
                <v-modal>
                    <img :src="'/public/work/' + example.img + '-md.jpg'" :alt="example.alt" class="work-example" slot="activator">
                    <v-card>
                        <v-card-row>
                            <v-card-title class="modal-title">{{ example.alt }}</v-card-title>
                        </v-card-row>
                        <!--<v-card-row :img="'/public/work/' + example.img + '-md.jpg'" height="100%"></v-card-row>-->
                        <v-card-row>
                            <div class="modal-img-div">
                                <a :href="example.url" target="_blank">
                                    <img :src="'/public/work/' + example.img + '-lg.jpg'" :alt="example.alt" class="modal-img">
                                </a>
                            </div>
                        </v-card-row>
                        <v-card-text>
                            <a :href="example.url" target="_blank">
                                <v-btn raised primary class="modal-btn">View Live</v-btn>
                            </a>
                            <p class="modal-p">{{ example.desc }}</p>
                        </v-card-text>
                    </v-card>
                </v-modal>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                workExamples: [
                    {
                        url: 'http://meetingsnow.org',
                        img: 'meetingsnow',
                        alt: 'MeetingsNow',
                        desc: 'Firebase database integration and a user-friendly administrative section. The first mobile-friendly design of its kind.'
                    },
                    {
                        url: 'http://dudleyanalytics.com',
                        img: 'dudleyanalytics',
                        alt: 'Dudley Analytics',
                        desc: 'Exercise in Wordpress capabilities and showcase for data-centric services.'
                    },
                    {
                        url: 'http://tennis-elbow.net',
                        img: 'tenniselbow',
                        alt: 'Tennis Elbow Treatment',
                        desc: 'Built as part of a sales funnel to maintain dominant position in Amazon rankings within its category.'
                    },
                    {
                        url: 'http://www.1xtactical.com',
                        img: '1xtactical',
                        alt: '1X Tactical',
                        desc: 'Developed front end appearance as part of a team whose ongoing work will include a subscription-based e-commerce store.'
                    },
                    {
                        url: 'http://kavamantra.com',
                        img: 'kavamantra',
                        alt: 'Kava Mantra',
                        desc: 'Wordpress E-Commerce site developed for a new-to-market internet and Amazon retailer.'
                    },
                    {
                        url: 'http://jddudley.github.io/nflRoster',
                        img: 'nfl',
                        alt: 'NFL Roster',
                        desc: 'Exercise in front end Javascript (including jQuery) and interactive page design.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .work-example {
        width: 100%;
        max-width: 100%;
    }
    .work-example:hover {
        box-shadow: 2px 2px 10px black;
    }
    .row {
        line-height: 0;
    }
    .row .col {
        padding: 0;
    }
    .work-modal {
        min-height: 90vh;
        min-width: 90vw;
    }
    .modal-title {
        display: block;
        text-align: center;
        margin: 0 auto;
        text-transform: uppercase;
        text-decoration: underline;
        font-weight: 600;
        color: #1F4E5F;
    }
    .modal-img-div {
        max-height: 400px;
        overflow: hidden;
    }
    .modal-img {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    .modal-p {
        line-height: 1.2;
        margin-bottom: 0;
    }
    .modal-btn {
        float: right;
        margin-top: -10px;
    }
</style>
