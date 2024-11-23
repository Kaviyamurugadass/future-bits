<script>
	import { base } from '$app/paths';

	export let quickLinks = [
		{ href: '/about', label: 'About Us' },
		{ href: '/products', label: 'Our Products' },
		{ href: '/contact', label: 'Contact Us' }
	];
</script>

<footer class="bg-themeColor-900 text-primaryTextColor mt-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-xl font-bold mb-4">Future Bits</h3>
				<p class="text-themeColor-100">Innovating the future of technology</p>
			</div>
			<div>
				<h3 class="text-xl font-bold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each quickLinks as { href, label }}
						<li>
							<a href="{base}{href}" class="text-themeColor-100 hover:text-primaryTextColor">
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold mb-4">Contact</h3>
				<ul class="space-y-2 text-themeColor-100">
					<li>Email: info@futurebits.com</li>
					<li>Phone: +1 (555) 123-4567</li>
					<li>Address: 123 Tech Street, Silicon Valley, CA 94025</li>
				</ul>
			</div>
		</div>
		<div class="mt-8 pt-8 border-t border-themeColor-800 text-center text-themeColor-100">
			<p>&copy; {new Date().getFullYear()} Future Bits. All rights reserved.</p>
		</div>
	</div>
</footer>
