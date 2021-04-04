<template>
    <div>
        <div data-app="true" class="v-application v-application--is-ltr theme--dark" id="app">
            <div class="v-application--wrap">
                <nav
                    class="text-center v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open theme--dark"
                    style="height: 100vh; top: 0px; max-height: calc(100% - 0px); transform: translateX(0%); width: 256px; background-color: rgb(24, 24, 24); border-color: rgb(24, 24, 24);"
                    data-booted="true">
                    <div class="v-navigation-drawer__content">
                        <div class="row flex-column fill-height py-5 mx-0 align-center justify-center"><h2
                            class="display-3 font-weight-black primary--text mb-2">JS</h2>
                            <div class="display-1 mb-2">John Smith</div>
                            <span class="title font-weight-light mb-5">Front-end Developer</span>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>About Me</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Services</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Experience</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Skills &amp; Education</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Portfolio</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Clients</span></span></button>
                            </div>
                            <div>
                                <button type="button"
                                        class="text-capitalize subheading font-weight-light mb-3 v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                                    <span class="v-btn__content"><span>Contact</span></span></button>
                            </div>
                            <div class="mt-auto">
                                <div data-v-7801366a="" class="my-4"><a data-v-7801366a=""
                                                                        href="https://twitter.com/john"
                                                                        title="Twitter profile" class="mx-2"><i
                                    data-v-7801366a="" aria-hidden="true"
                                    class="v-icon notranslate mdi mdi-twitter-box theme--dark"></i></a><a
                                    data-v-7801366a="" href="https://linkedin.com/john" title="LinkedIn profile"
                                    class="mx-2"><i data-v-7801366a="" aria-hidden="true"
                                                    class="v-icon notranslate mdi mdi-linkedin-box theme--dark"></i></a><a
                                    data-v-7801366a="" href="https://github.com/john" title="Github profile"
                                    class="mx-2"><i data-v-7801366a="" aria-hidden="true"
                                                    class="v-icon notranslate mdi mdi-github-box theme--dark"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="v-navigation-drawer__border"></div>
                </nav>
                <main class="v-content overflow-hidden" data-booted="true" style="padding: 0px 0px 0px 256px;">
                    <div class="v-content__wrap">
                        <div>
                            <section id="hero">
                                <div class="v-responsive v-image" style="height: 100vh;">
                                    <div class="v-responsive__sizer" style="padding-bottom: 66.5973%;"></div>
                                    <div class="v-image__image v-image__image--cover"
                                         style="background-image: url(&quot;https://material-portfolio-dark.vuetifyjs.com/img/hero.e530afc6.png&quot;); background-position: center center;"></div>
                                    <div class="v-responsive__content" style="width: 1922px;">
                                        <div class="row fill-height text-right pa-md-5 pa-3 mx-0 align-end justify-end">
                                            <div>
                                                <div class="text-uppercase display-3">John Smith</div>
                                                <h1 class="primary--text text-uppercase display-4">Front-end
                                                    Developer</h1></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="container py-5 px-0 container--fluid">
                                <section id="who-i-am" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="v-responsive v-image abstract-1" style="height: 528px; width: 613px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 86.1338%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;data:image/png;base64,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&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 613px;"></div>
                                    </div>
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        Who I am.</h2></div>
                                    <div class="col-md-7 col-12">
                                        <div class="row justify-space-between">
                                            <div class="col-md-7 col-12">
                                                <div class="subheading mb-5 mb-0"><p>I am front-end developer that
                                                    specializes in Vue and Veutify development. Consectetur adipisicing
                                                    elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo
                                                    augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur
                                                    sem. Nam liber tempor cum soluta nobis eleifend option congue nihil
                                                    imperdiet doming id quom placerat facer possim assum.</p>
                                                    <div>
                                                        <div class="v-responsive v-image ml-auto" style="width: 150px;">
                                                            <div class="v-responsive__sizer"
                                                                 style="padding-bottom: 39.1867%;"></div>
                                                            <div class="v-image__image v-image__image--cover"
                                                                 style="background-image: url(&quot;https://material-portfolio-dark.vuetifyjs.com/img/signature.0302022c.png&quot;); background-position: center center;"></div>
                                                            <div class="v-responsive__content"
                                                                 style="width: 541px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="row align-center">
                                                    <div
                                                        class="text-uppercase primary--text font-weight-medium col col-6">
                                                        <div class="mb-3">Location</div>
                                                        <div class="mb-3">Email</div>
                                                        <div class="mb-3">Phone</div>
                                                        <div>Discord</div>
                                                    </div>
                                                    <div class="subheading text-no-wrap col col-6">
                                                        <div class="mb-3">United States</div>
                                                        <div class="mb-3 text-truncate">john.smith@gmail.com</div>
                                                        <div class="mb-3">(912) 555-4321</div>
                                                        <div>@j.smith#3992</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hidden-sm-and-down text-right text-uppercase col col-5">
                                        <div class="display-1">Front-end Developer</div>
                                        <span class="primary--text headline font-weight-light">John Smith</span>
                                        <div class="v-responsive v-image"
                                             style="height: 900px; right: 0px; position: absolute; top: 300px;">
                                            <div class="v-responsive__sizer" style="padding-bottom: 122.571%;"></div>
                                            <div class="v-image__image v-image__image--contain"
                                                 style="background-image: url(&quot;https://material-portfolio-dark.vuetifyjs.com/img/john.d70ed315.png&quot;); background-position: center center;"></div>
                                            <div class="v-responsive__content" style="width: 700px;"></div>
                                        </div>
                                    </div>
                                </section>
                                <section id="what-i-can-do-for-you" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        What I can do for you.</h2></div>
                                    <div class="col-md-6 col-12">
                                        <div
                                            class="v-item-group theme--dark v-expansion-panels v-expansion-panels--popout">
                                            <div aria-expanded="true"
                                                 class="v-expansion-panel v-expansion-panel--active v-item--active">
                                                <button type="button"
                                                        class="v-expansion-panel-header title font-weight-light v-expansion-panel-header--active">
                                                    <div>Web Development</div>
                                                    <div class="v-expansion-panel-header__icon"><i aria-hidden="true"
                                                                                                   class="v-icon notranslate mdi mdi-chevron-down theme--dark"></i>
                                                    </div>
                                                </button>
                                                <div class="v-expansion-panel-content">
                                                    <div class="v-expansion-panel-content__wrap">
                                                        <div>
                                                            <div
                                                                class="v-card v-card--flat v-sheet theme--dark transparent">
                                                                <div class="v-card__text">
                                                                    <div>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do tempor. Lorem ipsum
                                                                        dolor sit amet consectetur adipisicing elit,
                                                                        eiusmod tempor. Proin luctus nulla elit, vitae
                                                                        varius massa.Etiam massa sapien, ultricies quis
                                                                        enim at, tempor fringilla metus. Nulla rhoncus
                                                                        enim sed consectetur. Mauris et eros feugiat,
                                                                        tincidunt eget, dictum neque. Maecenas dapibus
                                                                        sodales magna, eget lectus vehicula non.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div aria-expanded="false" class="v-expansion-panel">
                                                <button type="button"
                                                        class="v-expansion-panel-header title font-weight-light">
                                                    <div>Design</div>
                                                    <div class="v-expansion-panel-header__icon"><i aria-hidden="true"
                                                                                                   class="v-icon notranslate mdi mdi-chevron-down theme--dark"></i>
                                                    </div>
                                                </button>
                                                <div class="v-expansion-panel-content transparent"
                                                     style="display: none;"></div>
                                            </div>
                                            <div aria-expanded="false" class="v-expansion-panel">
                                                <button type="button"
                                                        class="v-expansion-panel-header title font-weight-light">
                                                    <div>Marketing</div>
                                                    <div class="v-expansion-panel-header__icon"><i aria-hidden="true"
                                                                                                   class="v-icon notranslate mdi mdi-chevron-down theme--dark"></i>
                                                    </div>
                                                </button>
                                                <div class="v-expansion-panel-content transparent"
                                                     style="display: none;"></div>
                                            </div>
                                            <div aria-expanded="false" class="v-expansion-panel">
                                                <button type="button"
                                                        class="v-expansion-panel-header title font-weight-light">
                                                    <div>Support</div>
                                                    <div class="v-expansion-panel-header__icon"><i aria-hidden="true"
                                                                                                   class="v-icon notranslate mdi mdi-chevron-down theme--dark"></i>
                                                    </div>
                                                </button>
                                                <div class="v-expansion-panel-content transparent"
                                                     style="display: none;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section id="where-ive-been" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        Where I've been</h2></div>
                                    <div class="mx-auto px-0 col-md-9 col-12">
                                        <div class="v-timeline theme--light">
                                            <div class="v-timeline-item v-timeline-item--fill-dot theme--light"
                                                 largedot="true">
                                                <div class="v-timeline-item__body">
                                                    <div class="pa-3 v-card v-sheet theme--light"><h3
                                                        class="subheading font-weight-bold">My Fake Company</h3>
                                                        <div>Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet
                                                            consetetur conclusionemque eum id, eros petentium eam cu.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__divider">
                                                    <div class="v-timeline-item__dot">
                                                        <div class="v-timeline-item__inner-dot primary"></div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__opposite"><span>2018</span></div>
                                            </div>
                                            <div class="v-timeline-item theme--light">
                                                <div class="v-timeline-item__body">
                                                    <div class="pa-3 v-card v-sheet theme--light"><h3
                                                        class="subheading font-weight-bold">Boston Electronics</h3>
                                                        <div>Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet
                                                            consetetur conclusionemque eum id, eros petentium eam cu.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__divider">
                                                    <div class="v-timeline-item__dot">
                                                        <div class="v-timeline-item__inner-dot primary"></div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__opposite"><span>2015</span></div>
                                            </div>
                                            <div class="v-timeline-item theme--light">
                                                <div class="v-timeline-item__body">
                                                    <div class="pa-3 v-card v-sheet theme--light"><h3
                                                        class="subheading font-weight-bold">Batteries&amp;Bulbs</h3>
                                                        <div>Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet
                                                            consetetur conclusionemque eum id, eros petentium eam cu.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__divider">
                                                    <div class="v-timeline-item__dot">
                                                        <div class="v-timeline-item__inner-dot primary"></div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__opposite"><span>2012</span></div>
                                            </div>
                                            <div class="v-timeline-item v-timeline-item--fill-dot theme--light"
                                                 largedot="true">
                                                <div class="v-timeline-item__body">
                                                    <div class="pa-3 v-card v-sheet theme--light"><h3
                                                        class="subheading font-weight-bold">State University</h3>
                                                        <div>Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet
                                                            consetetur conclusionemque eum id, eros petentium eam cu.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__divider">
                                                    <div class="v-timeline-item__dot">
                                                        <div class="v-timeline-item__inner-dot primary"></div>
                                                    </div>
                                                </div>
                                                <div class="v-timeline-item__opposite"><span>2009</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section id="what-i-know" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="v-responsive v-image abstract-2" style="height: 711px; width: 778px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 109.423%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://material-portfolio-dark.vuetifyjs.com/img/abstract2.3a696edc.png&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 711px;"></div>
                                    </div>
                                    <div class="col col-12">
                                        <div class="row justify-space-between">
                                            <div class="col col-auto"><h2
                                                class="font-weight-bold primary--text mb-4 display-2"> What I
                                                know. </h2></div>
                                            <div class="col col-auto">
                                                <blockquote style="max-width: 230px;"><p
                                                    class="subheading font-weight-light font-italic"> I have been a Core
                                                    Contributor to the Vuetify opensource project for 2 years and
                                                    counting... </p>
                                                    <footer class="text-center">
                                                        <button type="button"
                                                                class="v-btn v-btn--contained theme--dark v-size--default primary">
                                                            <span class="v-btn__content"> download cv </span></button>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-12">
                                        <div class="row justify-space-around">
                                            <section id="my-education" class="col-md-3 col-12"><h3
                                                class="headline font-weight-medium mb-4 primary--text"> My
                                                Education </h3>
                                                <div class="mb-5 v-sheet theme--dark transparent">
                                                    <div class="row mx-0">
                                                        <div class="mr-3 v-sheet v-sheet--tile theme--dark primary"
                                                             style="height: 100px; width: 1px;"></div>
                                                        <div class="col">
                                                            <div class="mb-3">State University</div>
                                                            <div class="text-right"><span class="title primary--text">Bachelor of Computer Science</span>
                                                                <footer>
                                                                    <div>Computer Sciences</div>
                                                                    <div>2013-
                                                                        2017
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-5 v-sheet theme--dark transparent">
                                                    <div class="row mx-0">
                                                        <div class="mr-3 v-sheet v-sheet--tile theme--dark primary"
                                                             style="height: 100px; width: 1px;"></div>
                                                        <div class="col">
                                                            <div class="mb-3">Community College</div>
                                                            <div class="text-right"><span class="title primary--text">Certificate of Completion</span>
                                                                <footer>
                                                                    <div>Modern Logo Design</div>
                                                                    <div>2012-
                                                                        2013
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-5 v-sheet theme--dark transparent">
                                                    <div class="row mx-0">
                                                        <div class="mr-3 v-sheet v-sheet--tile theme--dark primary"
                                                             style="height: 100px; width: 1px;"></div>
                                                        <div class="col">
                                                            <div class="mb-3">Community College</div>
                                                            <div class="text-right"><span class="title primary--text">Associate of Science</span>
                                                                <footer>
                                                                    <div>Graphic Design</div>
                                                                    <div>2010-
                                                                        2012
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-5 v-sheet theme--dark transparent">
                                                    <div class="row mx-0">
                                                        <div class="mr-3 v-sheet v-sheet--tile theme--dark primary"
                                                             style="height: 100px; width: 1px;"></div>
                                                        <div class="col">
                                                            <div class="mb-3">Community College</div>
                                                            <div class="text-right"><span class="title primary--text">Certificate of Completion</span>
                                                                <footer>
                                                                    <div>Marketing</div>
                                                                    <div>2010-
                                                                        2010
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section id="my-skills" class="col-md-4 col-12"><h3
                                                class="headline font-weight-medium mb-4 primary--text"> My Skills </h3>
                                                <div class="mb-4"><h4 class="text-uppercase mb-3 primary--text">
                                                    Graphics/Media</h4>
                                                    <div class="pl-md-4">
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Photoshop</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">
                                                                Illustrator</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Fireworks</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">InDesign</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">After
                                                                Effects</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4"><h4 class="text-uppercase mb-3 primary--text">
                                                    Programming</h4>
                                                    <div class="pl-md-4">
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">
                                                                Javascript</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">PHP/MYSQL</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">jQuery</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">
                                                                HTML5/CSS3</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4"><h4 class="text-uppercase mb-3 primary--text">
                                                    Other</h4>
                                                    <div class="pl-md-4">
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Graphic
                                                                Design</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Marketing</h5>
                                                            </div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Web
                                                                Design</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2 mx-0 align-center">
                                                            <div class="col col-4"><h5 class="subheading">Logo
                                                                Design</h5></div>
                                                            <div class="col col-8">
                                                                <div
                                                                    class="v-rating v-rating--readonly v-rating--dense">
                                                                    <i role="button"
                                                                       class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark primary--text"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i><i
                                                                    role="button"
                                                                    class="v-icon notranslate v-icon--link mdi mdi-record theme--dark grey--text text--darken-4"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                                <section id="what-ive-done" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="v-responsive v-image abstract-3" style="height: 100%; width: 100%;">
                                        <div class="v-image__image v-image__image--preload v-image__image--cover"
                                             style="background-position: center center;"></div>
                                        <div class="v-responsive__content"></div>
                                    </div>
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        What I've done</h2></div>
                                    <div class="col col-12">
                                        <div
                                            class="v-window elevation-0 v-item-group theme--dark v-carousel v-carousel--hide-delimiter-background"
                                            style="height: 650px;">
                                            <div class="v-window__container">
                                                <div class="v-window-item">
                                                    <div class="v-responsive v-image v-carousel__item"
                                                         style="height: 650px;">
                                                        <div class="v-responsive__content">
                                                            <div class="py-md-5 v-sheet theme--dark transparent"
                                                                 style="height: 100%;">
                                                                <div class="text-center mb-5"><h2
                                                                    class="primary--text title font-weight-light mb-1">
                                                                    Classic Cafe Rebrand</h2><span class="subheading">Logo Design</span>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-auto">
                                                                        <div class="mb-3" style="max-width: 500px;"><h2
                                                                            class="primary--text title font-weight-light mb-3">
                                                                            Project Details </h2>
                                                                            <div class="subheading mb-5"> In ac felis
                                                                                quis tortor malesuada pretium. Phasellus
                                                                                dolor. Fusce fermentum odio nec arcu.
                                                                                Integer tincidunt. Cum sociis natoque
                                                                                penatibus et magnis dis parturient
                                                                                montes, nascetur ridiculus mus. In ac
                                                                                felis quis tortor malesuada pretium.
                                                                                Phasellus dolor. Fusce fermentum odio
                                                                                nec arcu. Integer tincidunt.
                                                                            </div>
                                                                            <h2 class="primary--text title font-weight-light">
                                                                                Project Info </h2>
                                                                            <div role="list"
                                                                                 class="v-list transparent v-sheet v-sheet--tile theme--dark">
                                                                                <div tabindex="-1" role="listitem"
                                                                                     class="v-list-item theme--dark">
                                                                                    <div class="v-list-item__action"><i
                                                                                        aria-hidden="true"
                                                                                        class="v-icon notranslate mdi mdi-account theme--dark primary--text"></i>
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title mr-2">
                                                                                        Client Name
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title caption grey--text text--lighten-1 hidden-sm-and-down">
                                                                                        the clients name
                                                                                    </div>
                                                                                </div>
                                                                                <div tabindex="-1" role="listitem"
                                                                                     class="v-list-item theme--dark">
                                                                                    <div class="v-list-item__action"><i
                                                                                        aria-hidden="true"
                                                                                        class="v-icon notranslate mdi mdi-calendar theme--dark primary--text"></i>
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title mr-2">
                                                                                        Project Dates
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title caption grey--text text--lighten-1 hidden-sm-and-down">
                                                                                        date, date
                                                                                    </div>
                                                                                </div>
                                                                                <div tabindex="-1" role="listitem"
                                                                                     class="v-list-item theme--dark">
                                                                                    <div class="v-list-item__action"><i
                                                                                        aria-hidden="true"
                                                                                        class="v-icon notranslate mdi mdi-tag theme--dark primary--text"></i>
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title mr-2">
                                                                                        Project Category
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-list-item__title caption grey--text text--lighten-1 hidden-sm-and-down">
                                                                                        category, category, category
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hidden-sm-and-down col">
                                                                        <div class="v-responsive v-image mx-auto"
                                                                             style="height: 350px; width: 500px;">
                                                                            <div
                                                                                class="v-image__image v-image__image--preload v-image__image--contain"
                                                                                style="background-position: center center;"></div>
                                                                            <div class="v-responsive__content"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="v-window-item" style="display: none;"></div>
                                                <div class="v-window-item" style="display: none;"></div>
                                            </div>
                                            <div class="v-carousel__controls" style="left: auto; right: auto;">
                                                <div class="v-item-group theme--dark">
                                                    <button type="button" value="0"
                                                            class="v-carousel__controls__item v-btn v-item--active v-btn--active v-btn--flat v-btn--icon v-btn--round theme--dark v-size--small"
                                                            aria-label="Carousel slide 1 of 3"><span
                                                        class="v-btn__content"><i aria-hidden="true"
                                                                                  class="v-icon notranslate mdi mdi-circle theme--dark"
                                                                                  style="font-size: 18px;"></i></span>
                                                    </button>
                                                    <button type="button" value="1"
                                                            class="v-carousel__controls__item v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--small"
                                                            aria-label="Carousel slide 2 of 3"><span
                                                        class="v-btn__content"><i aria-hidden="true"
                                                                                  class="v-icon notranslate mdi mdi-circle theme--dark"
                                                                                  style="font-size: 18px;"></i></span>
                                                    </button>
                                                    <button type="button" value="2"
                                                            class="v-carousel__controls__item v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--small"
                                                            aria-label="Carousel slide 3 of 3"><span
                                                        class="v-btn__content"><i aria-hidden="true"
                                                                                  class="v-icon notranslate mdi mdi-circle theme--dark"
                                                                                  style="font-size: 18px;"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section id="what-my-clients-say" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="v-responsive v-image abstract-4" style="height: 90%; width: 100%;">
                                        <div class="v-image__image v-image__image--preload v-image__image--cover"
                                             style="background-position: center center;"></div>
                                        <div class="v-responsive__content"></div>
                                    </div>
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        What my clients say.</h2></div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">J. Williams</span> | <span
                                                        class="gre--text">Motion</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">A. Long</span> | <span class="gre--text">Classic Cafe</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">M. Hernandez</span> | <span
                                                        class="gre--text">Flagship</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">L. McCannon</span> | <span
                                                        class="gre--text">Motion</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">A. Mah</span> | <span class="gre--text">Classic Cafe</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <div class="v-sheet theme--dark transparent ma-5">
                                            <div class="row mx-0"><i aria-hidden="true"
                                                                     class="v-icon notranslate align-self-start mr-2 mdi mdi-pause theme--dark primary--text"
                                                                     style="font-size: 48px;"></i>
                                                <div class="pt-3 font-italic"><p class="subheading font-weight-light">
                                                    Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
                                                    ullamcorper fringilla risus et lacinia.Aliquam eget lacus a
                                                    libero.</p>
                                                    <div class="row align-center justify-end"><span
                                                        class="primary--text">H. Russo</span> | <span class="gre--text">Flagship</span>
                                                        <div class="v-avatar ml-4"
                                                             style="height: 48px; min-width: 48px; width: 48px;">
                                                            <div class="v-responsive v-image">
                                                                <div
                                                                    class="v-image__image v-image__image--preload v-image__image--cover"
                                                                    style="background-position: center center;"></div>
                                                                <div class="v-responsive__content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12">
                                        <div class="v-responsive v-image" style="height: 75px;">
                                            <div class="v-image__image v-image__image--preload v-image__image--contain"
                                                 style="background-position: center center;"></div>
                                            <div class="v-responsive__content"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12">
                                        <div class="v-responsive v-image" style="height: 75px;">
                                            <div class="v-image__image v-image__image--preload v-image__image--contain"
                                                 style="background-position: center center;"></div>
                                            <div class="v-responsive__content"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12">
                                        <div class="v-responsive v-image" style="height: 75px;">
                                            <div class="v-image__image v-image__image--preload v-image__image--contain"
                                                 style="background-position: center center;"></div>
                                            <div class="v-responsive__content"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12">
                                        <div class="v-responsive v-image" style="height: 75px;">
                                            <div class="v-image__image v-image__image--preload v-image__image--contain"
                                                 style="background-position: center center;"></div>
                                            <div class="v-responsive__content"></div>
                                        </div>
                                    </div>
                                </section>
                                <section id="lets-talk" class="row pa-5 mx-0" style="position: relative;">
                                    <div class="col col-12"><h2 class="font-weight-bold primary--text mb-4 display-2">
                                        Let's talk.</h2></div>
                                    <div class="mb-4 pr-md-5 col-md-5 col-12"><h2
                                        class="primary--text title font-weight-light text-uppercase"> What can I do for
                                        you? </h2>
                                        <div class="subheading mb-5 mb-5"> Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Fusce vel est interdum, pharetra magna ac, facilisis ante.
                                            Fusce eu finibus magna. Sest interdum, pharetra magna ac, facilisis ante.
                                            Fusce eu finibus magna.
                                        </div>
                                        <h2 class="primary--text title font-weight-light text-uppercase mb-3"> Send me a
                                            Message </h2>
                                        <form novalidate="novalidate" class="v-form">
                                            <div
                                                class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed">
                                                <div class="v-input__control">
                                                    <div class="v-input__slot">
                                                        <div class="v-text-field__slot"><label for="input-109"
                                                                                               class="v-label theme--dark"
                                                                                               style="left: 0px; right: auto; position: absolute;">Name</label><input
                                                            id="input-109" type="text"></div>
                                                    </div>
                                                    <div class="v-text-field__details">
                                                        <div class="v-messages theme--dark">
                                                            <div class="v-messages__wrapper"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed">
                                                <div class="v-input__control">
                                                    <div class="v-input__slot">
                                                        <div class="v-text-field__slot"><label for="input-112"
                                                                                               class="v-label theme--dark"
                                                                                               style="left: 0px; right: auto; position: absolute;">Email</label><input
                                                            id="input-112" type="text"></div>
                                                    </div>
                                                    <div class="v-text-field__details">
                                                        <div class="v-messages theme--dark">
                                                            <div class="v-messages__wrapper"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed">
                                                <div class="v-input__control">
                                                    <div class="v-input__slot">
                                                        <div class="v-text-field__slot"><label for="input-115"
                                                                                               class="v-label theme--dark"
                                                                                               style="left: 0px; right: auto; position: absolute;">Subject</label><input
                                                            id="input-115" type="text"></div>
                                                    </div>
                                                    <div class="v-text-field__details">
                                                        <div class="v-messages theme--dark">
                                                            <div class="v-messages__wrapper"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="v-input v-textarea theme--dark v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed">
                                                <div class="v-input__control">
                                                    <div class="v-input__slot">
                                                        <div class="v-text-field__slot"><label for="input-118"
                                                                                               class="v-label theme--dark"
                                                                                               style="left: 0px; right: auto; position: absolute;">Message</label><textarea
                                                            id="input-118" rows="5"></textarea></div>
                                                    </div>
                                                    <div class="v-text-field__details">
                                                        <div class="v-messages theme--dark">
                                                            <div class="v-messages__wrapper"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button"
                                                    class="ma-0 v-btn v-btn--contained theme--dark v-size--default primary">
                                                <span class="v-btn__content"> Contact Me </span></button>
                                        </form>
                                    </div>
                                    <div class="text-left col-md-4 col-12"><h2
                                        class="primary--text title font-weight-light text-uppercase"> Social
                                        Contacts </h2>
                                        <div data-v-7801366a="" class="my-4"><a data-v-7801366a=""
                                                                                href="https://twitter.com/john"
                                                                                title="Twitter profile" class="mx-2"><i
                                            data-v-7801366a="" aria-hidden="true"
                                            class="v-icon notranslate mdi mdi-twitter-box theme--dark"></i></a><a
                                            data-v-7801366a="" href="https://linkedin.com/john" title="LinkedIn profile"
                                            class="mx-2"><i data-v-7801366a="" aria-hidden="true"
                                                            class="v-icon notranslate mdi mdi-linkedin-box theme--dark"></i></a><a
                                            data-v-7801366a="" href="https://github.com/john" title="Github profile"
                                            class="mx-2"><i data-v-7801366a="" aria-hidden="true"
                                                            class="v-icon notranslate mdi mdi-github-box theme--dark"></i></a>
                                        </div>
                                        <div role="list"
                                             class="v-list transparent v-sheet v-sheet--tile theme--dark v-list--three-line">
                                            <div tabindex="-1" role="listitem" class="v-list-item theme--dark">
                                                <div class="v-avatar v-list-item__avatar"
                                                     style="height: 40px; min-width: 40px; width: 40px;"><i
                                                    aria-hidden="true"
                                                    class="v-icon notranslate mr-5 mdi mdi-map-marker theme--dark primary--text"
                                                    style="font-size: 48px;"></i></div>
                                                <div class="v-list-item__content">
                                                    <div class="v-list-item__title primary--text"> Address</div>
                                                    <div class="v-list-item__subtitle"> 2712 Broadway St<br> San
                                                        Francisco, CA 94115
                                                    </div>
                                                </div>
                                            </div>
                                            <div tabindex="-1" role="listitem" class="v-list-item theme--dark">
                                                <div class="v-avatar v-list-item__avatar"
                                                     style="height: 40px; min-width: 40px; width: 40px;"><i
                                                    aria-hidden="true"
                                                    class="v-icon notranslate mr-5 mdi mdi-email theme--dark primary--text"
                                                    style="font-size: 48px;"></i></div>
                                                <div class="v-list-item__content">
                                                    <div class="v-list-item__title primary--text"> Email</div>
                                                    <div class="v-list-item__subtitle">john.smith@gmail.com</div>
                                                </div>
                                            </div>
                                            <div tabindex="-1" role="listitem" class="v-list-item theme--dark">
                                                <div class="v-avatar v-list-item__avatar"
                                                     style="height: 40px; min-width: 40px; width: 40px;"><i
                                                    aria-hidden="true"
                                                    class="v-icon notranslate mr-5 mdi mdi-phone theme--dark primary--text"
                                                    style="font-size: 48px;"></i></div>
                                                <div class="v-list-item__content">
                                                    <div class="v-list-item__title primary--text"> Phone</div>
                                                    <div class="v-list-item__subtitle">(912) 555-4321</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="v-responsive v-image"
                                         style="max-width: 30vw; width: 100%; bottom: -20px; right: 0px; position: absolute;">
                                        <div class="v-image__image v-image__image--preload v-image__image--contain"
                                             style="background-position: center center;"></div>
                                        <div class="v-responsive__content"></div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        text: '',
    }),
};
</script>
