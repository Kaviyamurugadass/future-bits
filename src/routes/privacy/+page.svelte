<script>
	import { onMount } from 'svelte';
	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto">
		<h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
		
		<div class="prose prose-blue max-w-none">
			<p class="text-lg text-gray-500 mb-8">
				Last updated: {new Date().toLocaleDateString()}
			</p>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
				<p class="text-gray-600 mb-4">
					Future Bits ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
				</p>
			</section>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
				<p class="text-gray-600 mb-4">
					We collect several different types of information for various purposes to provide and improve our service to you:
				</p>
				<ul class="list-disc pl-6 text-gray-600 mb-4">
					<li>Personal identification information (Name, email address, phone number)</li>
					<li>Usage data</li>
					<li>Cookies and tracking data</li>
				</ul>
			</section>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
				<p class="text-gray-600 mb-4">
					We use the collected data for various purposes:
				</p>
				<ul class="list-disc pl-6 text-gray-600 mb-4">
					<li>To provide and maintain our service</li>
					<li>To notify you about changes to our service</li>
					<li>To provide customer support</li>
					<li>To gather analysis or valuable information to improve our service</li>
					<li>To monitor the usage of our service</li>
					<li>To detect, prevent and address technical issues</li>
				</ul>
			</section>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
				<p class="text-gray-600 mb-4">
					The security of your data is important to us. We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
				</p>
			</section>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
				<p class="text-gray-600 mb-4">
					You have the right to:
				</p>
				<ul class="list-disc pl-6 text-gray-600 mb-4">
					<li>Access your personal data</li>
					<li>Correct your personal data</li>
					<li>Request erasure of your personal data</li>
					<li>Object to processing of your personal data</li>
					<li>Request restriction of processing your personal data</li>
					<li>Request transfer of your personal data</li>
					<li>Withdraw consent</li>
				</ul>
			</section>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
				<p class="text-gray-600 mb-4">
					If you have any questions about this Privacy Policy, please contact us:
				</p>
				<ul class="list-none text-gray-600">
					<li>By email: privacy@futurebits.com</li>
					<li>By phone: (555) 123-4567</li>
					<li>By mail: 123 Innovation Street, Silicon Valley, CA 94025</li>
				</ul>
			</section>
		</div>
	</div>
</div>
