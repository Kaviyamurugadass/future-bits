<script>
	import { onMount } from 'svelte';
	import VisionMission from '$lib/components/VisionMission.svelte';
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

	<!-- Team Section -->
	<div class="bg-gray-50">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-12">
				<div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
					<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
					<p class="text-xl text-gray-500">
						Meet the passionate individuals behind Future Bits who are dedicated to bringing innovation to life.
					</p>
				</div>
				<ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
					<!-- Team Member 1 -->
					<li>
						<div class="space-y-4">
							<div class="aspect-w-3 aspect-h-2">
								<img class="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<div class="space-y-2">
								<div class="text-lg leading-6 font-medium space-y-1">
									<h3>John Doe</h3>
									<p class="text-blue-600">CEO & Founder</p>
								</div>
								<ul class="flex space-x-5">
									<li>
										<a href="#" class="text-gray-400 hover:text-gray-500">
											<span class="sr-only">LinkedIn</span>
											<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>

					<!-- Team Member 2 -->
					<li>
						<div class="space-y-4">
							<div class="aspect-w-3 aspect-h-2">
								<img class="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<div class="space-y-2">
								<div class="text-lg leading-6 font-medium space-y-1">
									<h3>Jane Smith</h3>
									<p class="text-blue-600">CTO</p>
								</div>
								<ul class="flex space-x-5">
									<li>
										<a href="#" class="text-gray-400 hover:text-gray-500">
											<span class="sr-only">LinkedIn</span>
											<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
