<template>
	<header class="page-header">
		<div class="container">
			<a href="/" class="site-logo"><img src="../static/assets/img/common/logo.png" alt=""></a>
			<div id="hambuger">
				<div class="nav-icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'TheHeader',
  beforeMount() {
    window.addEventListener('click', this.hambugerMenu);
		window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
		hambugerMenu() {
			let slideUp = (target, duration=500) => {
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.boxSizing = 'border-box';
				target.style.height = target.offsetHeight + 'px';
				target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				window.setTimeout( () => {
				target.style.display = 'none';
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				//alert("!");
				}, duration);
			}

			let slideDown = (target, duration=500) => {
				target.style.removeProperty('display');
				let display = window.getComputedStyle(target).display;

				if (display === 'none')
				display = 'block';

				target.style.display = display;
				let height = target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				target.offsetHeight;
				target.style.boxSizing = 'border-box';
				target.style.transitionProperty = "height, margin, padding";
				target.style.transitionDuration = duration + 'ms';
				target.style.height = height + 'px';
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				window.setTimeout( () => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				}, duration);
			}
			var slideToggle = (target, duration = 500) => {
				if (window.getComputedStyle(target).display === 'none') {
				return slideDown(target, duration);
				} else {
				return slideUp(target, duration);
				}
			}
			document.querySelector('.nav-icon').onclick = function() {
				//alert('aaa');
				this.classList.toggle('open');
				slideToggle(document.querySelector(".gnav"), 200);
			}
		},

		handleScroll(){
      var hd = document.querySelector('.page-header').offsetHeight;
      var mv = document.querySelector('.main-visual').offsetHeight;
      var nav = document.querySelector('.gnav');
      var tt = (hd + mv);
      //console.log(tt);
      if(window.pageYOffset > tt + 40){
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }

			const the_animation = document.querySelectorAll('.animation')
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fadeInUp')
					}
					else {
						entry.target.classList.remove('fadeInUp')
					}
				})
			},{ threshold: 0.5});
			for (let i = 0; i < the_animation.length; i++) {
				const elements = the_animation[i];
				observer.observe(elements);
			}
    }
  }
}
</script>