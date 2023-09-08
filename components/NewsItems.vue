<template>
	<section class="section section-news">
		<div class="container">
			<h2 class="section-title animation"><span>news</span></h2>
			<ul class="section-news_list">
				<li v-for="item in newsList" class="animation">
					<span>{{item.date}}</span>
					<a v-bind:href="item.href">{{item.title}}</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
  @import "./static/assets/css/views/_top.scss";
	.section-news_list {
		li {
			align-items: flex-start;
		}
	}
</style>

<script>
export default {
	data() {
		return {
			items: [
				{
					date: '2023.08.30',
					href: '#',
					title: 'We are selling TAKAOSAN original hard shell.',
				},
				{
					date: '2023.08.30',
					href: '#',
					title: 'PFC free water repellent agent present campaign in progress',
				},
				{
					date: '2023.08.30',
					href: '#',
					title: 'Information on the snowmobile athletic meet tour.',
				},
				{
					date: '2023.08.30',
					href: '#',
					title: 'The TAKAOSAN online shop has opened.Online coupons are being distributed for a limited time. Do not miss it!',
				},
			]
		}
	},
	computed: {
    newsList() {
      return this.items
    }
  },
}
</script>