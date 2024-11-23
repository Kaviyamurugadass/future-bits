<script>
	// import UnderConstruction from '../components/UnderConstruction.svelte';
	import { onMount } from 'svelte';
	import VisionMission from '$lib/components/VisionMission.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import CustomerStories from '$lib/components/CustomerStories.svelte';
	import { base } from '$app/paths';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>
<!-- <UnderConstruction /> -->

<div class="relative overflow-hidden bg-gradient-to-r from-purple-900 to-purple-800">
	<!-- Hero Section -->
	<div class="relative bg-white overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
				<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
					<div class="sm:text-center lg:text-left">
						<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span class="block xl:inline">Welcome to</span>
							<span class="block text-purple-900 xl:inline">Future Bits</span>
						</h1>
						<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
							Innovating tomorrow's solutions today. We're a startup dedicated to transforming ideas into cutting-edge technology solutions.
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow">
								<a href="{base}/products" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-900 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
									Our Products
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a href="{base}/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Technology workspace">
		</div>
	</div>

	<div class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<VisionMission />
			<WhyChooseUs bgColor="bg-white" />
		</div>
	</div>
	<CustomerStories bgColor="bg-gray-50" />
	<CallToAction />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
