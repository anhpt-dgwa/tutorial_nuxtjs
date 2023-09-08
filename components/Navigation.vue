<template>
	<nav class="gnav">
		<div class="site-logo_fixed"><a href="./"><img src="../static/assets/img/common/logo.png" alt="TAKAOSAN"></a></div>
		<ul class="menu container">
			<li><NuxtLink to="/"><span>home</span></NuxtLink></li>
			<li><NuxtLink to="/about"><span>about</span></NuxtLink></li>
			<li><NuxtLink to="/shop"><span>shop</span></NuxtLink></li>
			<li><NuxtLink to="/access"><span>access</span></NuxtLink></li>
			<li><NuxtLink to="/blog"><span>blog</span></NuxtLink></li>
			<li><NuxtLink to="/contact"><span>contact</span></NuxtLink></li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
	.gnav {
		//padding: 40px 0px 56px 0px;
		transition: all .3s ease-in-out;
		&.fixed {
			position: sticky;
			//padding: 15px 0px;
		}
	}
	.menu {
		a {
			.nuxt-link-active,
			&:hover {
				color: #9aaf24;
			}
		}
	}
}
</style>