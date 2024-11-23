<script>
	import { base } from "$app/paths";
	import Section from '$lib/components/common/Section.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import SvgIcon from '$lib/components/common/SvgIcon.svelte';

	// Props for customization if needed
	export let bgColor = "bg-gray-50"; // Allow customizing background color
</script>

<Section
	title="Vision & Mission"
	subtitle="Guiding principles that drive our innovation and shape our commitment to excellence in technology"
	bgColor={bgColor}
>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<Card>
			<div class="px-6 py-8">
				<div class="flex justify-center mb-6">
					<SvgIcon
						src="{base}/images/Inventing.svg"
						alt="Vision illustration"
						size="2xl"
					/>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 text-center">Our Vision</h3>
				<p class="mt-2 text-themeColor-800 font-medium text-center">Shaping Tomorrow's Technology</p>
				<p class="mt-4 text-lg text-gray-600">To revolutionize industries through cutting-edge technology and sustainable innovation, empowering businesses and individuals to thrive in a connected and dynamic world.</p>
			</div>
		</Card>

		<Card>
			<div class="px-6 py-8">
				<div class="flex justify-center mb-6">
					<SvgIcon
						src="{base}/images/Business Presentation.svg"
						alt="Mission illustration"
						size="2xl"
					/>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 text-center">Our Mission</h3>
				<p class="mt-2 text-themeColor-800 font-medium text-center">Delivering Excellence Through Innovation</p>
				<p class="mt-4 text-lg text-gray-600">Our mission is to deliver transformative digital solutions by leveraging advanced technologies, fostering creativity, and building partnerships. We strive to create scalable, user-centric products that solve real-world challenges and drive progress for our clients and communities.</p>
			</div>
		</Card>
	</div>
</Section>
