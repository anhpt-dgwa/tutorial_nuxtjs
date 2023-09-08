<template>
  <div id="wrapper">
    <Header />
    <div class="main-visual">
      <figure><img src="../static/assets/img/top/mainimage.png" alt=""></figure>
      <div class="main-head">
        <h1 class="main-head_ttl"><img src="../static/assets/img/top/catchcopy.png" alt="work hard, play hard"></h1>
      </div>
    </div>
    <Navigation />
    <main class="page-main">
      <NewsItems />
      <section class="section section-features">
        <div class="container">
          <h2 class="section-title animation"><span>features</span></h2>
          <div class="features">
            <figure class="features-left animation"><img src="../static/assets/img/top/features-image.jpg" alt=""></figure>
            <div class="features-right">
              <h3 class="features-right_title animation">Waterproof for the outdoor scene</h3>
              <div class="features-right_ctn clearfix">
                <figure class="animation"><img src="../static/assets/img/top/aero888.png" alt="aero 888"></figure>
                <p class="animation">TAKAOSAN's hardware pursues the best material and technology and innovative design.<br>
                    It is a brand sticking to quality thoroughly.<br>
                    TAKAOSAN is developing various things.<br>
                    And The most popular backpack "Aero 888".Using a water repellent nylon with strength "ballistic nylon" on the table cloth, and a tough rubber called hyperon on the lining.Waterproof W on the front and back, it is safe even for outdoor scenes and usual steep rain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubcriptionItems />
      <GalleryItems />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  @import "./static/assets/css/views/_top.scss";
</style>

<script>
export default {
  // name: 'IndexPage',
  // data() {
  //   return {
  //     mountains: []
  //   }
  // },
  // async fetch() {
  //   this.mountains = await fetch(
  //     'https://api.nuxtjs.dev/mountains'
  //   ).then(res => res.json())
  // },
  // created(){
  //   if (process.browser){
  //     console.log(window.innerWidth, window.innerHeight);
  //     window.jQuery = window.$ = jQuery;
  //   }
  //   if (process.client) {
  //     //alert(window);
  //   }
  // },
  head: {
    title: 'Home | Tutorial Nuxtjs',
  }
}
</script>
