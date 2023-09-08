<template>
	<section class="section section-items">
			<div class="container">
				<h2 class="section-title animation"><span>items</span></h2>
				<ul class="section-items_list">
          <li v-for="item in images" class="animation">
						<a :href="item.href">
							<figure><img :src="`./assets/img/top/${item.src}`" :alt="item.title"></figure>
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
					src: 'items-image01.png',
					href: 'google.com',
					title: 'test'
				},
				{
					src: 'items-image02.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image03.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image04.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image05.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image06.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image07.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image08.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image09.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image10.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image11.png',
					href: '#',
					title: 'test'
				},
				{
					src: 'items-image12.png',
					href: '#',
					title: 'test'
				},
      ],
		}
	},
	computed: {
    images() {
      return this.items
    }
  },
}
</script>