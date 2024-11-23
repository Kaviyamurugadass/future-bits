<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let isMenuOpen = false;
	const toggleMenu = () => isMenuOpen = !isMenuOpen;

	$: currentPath = $page.url.pathname;

	export let navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/products', label: 'Our Products' },
		{ href: '/contact', label: 'Contact Us' },
		{ href: '/privacy', label: 'Privacy Policy' }
	];
</script>

<nav class="bg-themeColor-900 shadow-lg fixed w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<a href="{base}/" class="text-2xl font-bold text-primaryTextColor">Future Bits</a>
				</div>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden sm:flex sm:items-center space-x-6">
				{#each navItems as { href, label }}
					<a 
						href="{base}{href}" 
						class="px-4 py-2 rounded-md text-sm font-medium {currentPath === href ? 'text-primaryTextColor bg-themeColor-700' : 'text-themeColor-100 hover:text-primaryTextColor hover:bg-themeColor-800 active:bg-themeColor-600'}"
					>
						{label}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center sm:hidden">
				<button on:click={toggleMenu} class="text-primaryTextColor hover:bg-themeColor-800 active:bg-themeColor-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-themeColor-300">
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

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="sm:hidden bg-themeColor-900 border-t border-themeColor-800">
				<div class="pt-2 pb-3 space-y-1">
					{#each navItems as { href, label }}
						<a 
							href="{base}{href}" 
							class="block px-3 py-2 text-base font-medium {currentPath === href ? 'text-primaryTextColor bg-themeColor-700' : 'text-themeColor-100 hover:text-primaryTextColor hover:bg-themeColor-800 active:bg-themeColor-600'}"
						>
							{label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>
