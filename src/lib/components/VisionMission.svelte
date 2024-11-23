<script>
	import { base } from "$app/paths";

	// Props for customization if needed
	export let bgColor = "bg-gray-50"; // Allow customizing background color
</script>

<div class="py-16 {bgColor}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base text-themeColor-900 font-semibold tracking-wide uppercase">Our Purpose</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Vision & Mission</p>
			<p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Guiding principles that drive our innovation and shape our commitment to excellence in technology</p>
		</div>
		<div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
			<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
				<div class="px-6 py-8">
					<div class="flex justify-center mb-6">
						<img src="{base}/images/Inventing.png" alt="Vision illustration" class="w-48 h-48 object-contain"/>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 text-center">Our Vision</h3>
					<p class="mt-2 textthemeColor-800 font-medium text-center">Shaping Tomorrow's Technology</p>
					<p class="mt-4 text-lg text-gray-600">To revolutionize industries through cutting-edge technology and sustainable innovation, empowering businesses and individuals to thrive in a connected and dynamic world.</p>
				</div>
			</div>
			<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
				<div class="px-6 py-8">
					<div class="flex justify-center mb-6">
						<img src="{base}/images/Business Presentation.png" alt="Mission illustration" class="w-48 h-48 object-contain"/>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 text-center">Our Mission</h3>
					<p class="mt-2 textthemeColor-800 font-medium text-center">Delivering Excellence Through Innovation</p>
					<p class="mt-4 text-lg text-gray-600">Our mission is to deliver transformative digital solutions by leveraging advanced technologies, fostering creativity, and building partnerships. We strive to create scalable, user-centric products that solve real-world challenges and drive progress for our clients and communities.</p>
				</div>
			</div>
		</div>
	</div>
</div>
