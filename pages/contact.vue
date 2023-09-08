<template>
	<div>
		<Header />
		<div class="main-visual">
      <figure><img src="../static/assets/img/top/mainimage.png" alt=""></figure>
      <div class="main-head">
        <h1 class="main-head_ttl">CONTACT PAGE</h1>
      </div>
    </div>
		<Navigation />
		<main class="page-main page-contact">
			<h1>Contact page</h1>
		</main>
		<Footer />
</div>
</template>

<style lang="scss" scoped>
	.page-contact {
		height: 70vh;
		text-align: center;
	}
	.main-visual {
		position: relative;
		overflow: hidden;
		max-width: 1080px;
		margin: 0 auto;	
	}
	.main-head {
		position: absolute;
		top: 52px;
		right: 100px;
	}
</style>

<script>
export default {
	head: {
    title: 'Shop | Tutorial Nuxtjs',
  },
}
</script>