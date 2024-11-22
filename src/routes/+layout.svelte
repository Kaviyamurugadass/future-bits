<script>
	import '../app.css';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Initialize PostHog only when running in the browser
	onMount(() => {
		if (browser) {
			posthog.init('phc_6AiiqGQtK0nfmFgF6OtEfoKopueLIsUgJodNXh2KUif', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only'
			});
		}
	});

	let isMenuOpen = false;
	const toggleMenu = () => isMenuOpen = !isMenuOpen;

	$: currentPath = $page.url.pathname;
</script>

<div class="min-h-screen bg-white">
	<nav class="bg-purple-900 shadow-lg fixed w-full z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-2xl font-bold text-white">Future Bits</a>
					</div>
				</div>
				
				<!-- Desktop Navigation -->
				<div class="hidden sm:flex sm:items-center space-x-6">
					<a href="/" class="px-4 py-2 rounded-md text-sm font-medium {currentPath === '/' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Home</a>
					<a href="/about" class="px-4 py-2 rounded-md text-sm font-medium {currentPath === '/about' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">About Us</a>
					<a href="/products" class="px-4 py-2 rounded-md text-sm font-medium {currentPath === '/products' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Our Products</a>
					<a href="/contact" class="px-4 py-2 rounded-md text-sm font-medium {currentPath === '/contact' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Contact Us</a>
					<a href="/privacy" class="px-4 py-2 rounded-md text-sm font-medium {currentPath === '/privacy' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Privacy Policy</a>
				</div>

				<!-- Mobile menu button -->
				<div class="flex items-center sm:hidden">
					<button on:click={toggleMenu} class="text-white hover:bg-purple-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{#if isMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="sm:hidden bg-purple-900 border-t border-purple-800">
				<div class="pt-2 pb-3 space-y-1">
					<a href="/" class="block px-3 py-2 text-base font-medium {currentPath === '/' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Home</a>
					<a href="/about" class="block px-3 py-2 text-base font-medium {currentPath === '/about' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">About Us</a>
					<a href="/products" class="block px-3 py-2 text-base font-medium {currentPath === '/products' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Our Products</a>
					<a href="/contact" class="block px-3 py-2 text-base font-medium {currentPath === '/contact' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Contact Us</a>
					<a href="/privacy" class="block px-3 py-2 text-base font-medium {currentPath === '/privacy' ? 'text-white bg-purple-700' : 'text-purple-100 hover:text-white hover:bg-purple-800'}">Privacy Policy</a>
				</div>
			</div>
		{/if}
	</nav>

	<main class="pt-16">
		<slot />
	</main>

	<footer class="bg-purple-900 text-white mt-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-xl font-bold mb-4">Future Bits</h3>
					<p class="text-purple-100">Innovating the future of technology</p>
				</div>
				<div>
					<h3 class="text-xl font-bold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li><a href="/about" class="text-purple-100 hover:text-white">About Us</a></li>
						<li><a href="/products" class="text-purple-100 hover:text-white">Our Products</a></li>
						<li><a href="/contact" class="text-purple-100 hover:text-white">Contact Us</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-xl font-bold mb-4">Contact</h3>
					<ul class="space-y-2 text-purple-100">
						<li>Email: info@futurebits.com</li>
						<li>Phone: (555) 123-4567</li>
					</ul>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-purple-800 text-center text-purple-100">
				<p>&copy; {new Date().getFullYear()} Future Bits. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
