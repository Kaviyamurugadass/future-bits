<script>
	import { onMount } from 'svelte';
	import { base } from "$app/paths";

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="bg-white">
	<!-- Products Hero Section -->
	<div class="relative bg-white py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative">
				<h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					Our Products
				</h2>
				<p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
					Innovative solutions designed to transform your business operations
				</p>
			</div>
		</div>
	</div>

	<!-- Quick Receipts Section -->
	<div class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 class="text-base text-purple-900 font-semibold tracking-wide uppercase">Featured Product</h2>
				<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Quick Receipts</p>
				<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
					Streamlined Receipt Management for Modern Businesses
				</p>
			</div>

			<div class="mt-16">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div class="relative">
						<div class="aspect-w-16 aspect-h-9">
							<img class="object-cover shadow-lg rounded-lg" src="{base}/images/Manager Desk.png" alt="Quick Receipts Dashboard">
						</div>
					</div>
					<div>
						<div class="text-lg text-gray-500 space-y-4">
							<p>
								Quick Receipts is an innovative tool designed to simplify the creation, management, and processing of receipts for individuals and businesses. Whether you're handling personal transactions or managing batch receipt generation for an entire organization, Quick Receipts offers a seamless and efficient solution.
							</p>
						</div>

						<!-- Features Grid -->
						<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-900 text-white">
										<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h3 class="text-lg font-medium text-gray-900">Quick Generation</h3>
									<p class="mt-2 text-base text-gray-500">Create professional receipts in seconds with our intuitive interface.</p>
								</div>
							</div>

							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-900 text-white">
										<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h3 class="text-lg font-medium text-gray-900">Batch Processing</h3>
									<p class="mt-2 text-base text-gray-500">Generate and manage multiple receipts simultaneously for improved efficiency.</p>
								</div>
							</div>

							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-900 text-white">
										<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h3 class="text-lg font-medium text-gray-900">Compliance Ready</h3>
									<p class="mt-2 text-base text-gray-500">All receipts meet legal and regulatory requirements across different jurisdictions.</p>
								</div>
							</div>

							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-900 text-white">
										<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h3 class="text-lg font-medium text-gray-900">Secure Storage</h3>
									<p class="mt-2 text-base text-gray-500">All data is encrypted and securely stored with automated backups.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Call to Action -->
				<div class="mt-16 flex justify-center space-x-4">
					<a href="https://dgh18q9hppw1s.cloudfront.net/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-900 hover:bg-purple-800">
						Try Quick Receipts
						<svg class="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
						</svg>
					</a>
					<a href="{base}/contact" class="inline-flex items-center px-6 py-3 border border-purple-900 text-base font-medium rounded-md text-purple-900 bg-white hover:bg-gray-50">
						Learn More
						<svg class="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
