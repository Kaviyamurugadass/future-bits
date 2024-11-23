<script>
	import { onMount } from 'svelte';
	import VisionMission from '$lib/components/VisionMission.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import CompanyStats from '$lib/components/CompanyStats.svelte';
	import GetInTouch from '$lib/components/GetInTouch.svelte';
	import { base } from '$app/paths';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="bg-white">
	<!-- About Hero Section -->
	<div class="relative bg-white py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative">
				<h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					About Future Bits
				</h2>
				<p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
					We're a forward-thinking technology company dedicated to shaping the future through innovation and excellence.
				</p>
			</div>
		</div>
	</div>

	<VisionMission />
	<div class="bg-gray-50">
		<WhyChooseUs />
	</div>
	<CompanyStats />
	<div class="bg-gray-300">
		<GetInTouch />
	</div>
</div>
