<template>
	<section class="section section-subcription">
		<div class="container">
			<h2 class="section-title animation"><span>subcription</span></h2>
			<p class="subcription-head animation">We run a flat-rate service that we will send recommended items every month to you. It's free for the first month so you can start with confidence.</p>
			<ul class="subcription-list">
				<li v-for="item in subLists" class="animation">
					<a :href="item.url">
						<figure class="subcription-img"><img :src="`./assets/img/top/${item.src}`" :alt="item.desc"></figure>
						<span class="subcription-package">{{item.package}}</span>
						<span class="subcription-price">¥<span>{{item.price}}</span>/m</span>
						<span class="subcription-desc">{{item.desc}}</span>
						<span class="subcription-btn"><span>more detail</span></span>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
  @import "./static/assets/css/views/_top.scss";
</style>

<script>
export default {
	data() {
		return {
			items: [
				{
					url: '#',
					src: 'subscription-starter-image.jpg',
					package: 'Starter',
					price: '2,400',
					desc: 'Starter pack to begin easily',
				},
				{
					url: '#',
					src: 'subscription-standard-image.jpg',
					package: 'Standard',
					price: '7,800',
					desc: 'Recommended standard pack',
				},
				{
					url: '#',
					src: 'subscription-master-image.jpg',
					package: 'Master',
					price: '16,400',
					desc: 'We will deliver a high brand monthly',
				},
			]
		}
	},
	computed: {
		subLists() {
			return this.items
		}
	}
}
</script>