<script>
	import { onMount } from 'svelte';
	let isVisible = false;
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log('Form submitted:', formData);
		// Reset form
		formData = {
			name: '',
			email: '',
			phone: '',
			message: ''
		};
		alert('Thank you for your message. We will get back to you soon!');
	};

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="bg-white">
	<!-- Contact Hero Section -->
	<div class="relative bg-gray-100 py-16">
		<div class="absolute inset-0">
			<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-100"></div>
		</div>
		<div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
			<div class="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
				<div class="mx-auto max-w-lg">
					<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
					<p class="mt-3 text-lg leading-6 text-gray-500">
						We'd love to hear from you! Send us a message using the form, or reach out to us directly.
					</p>
					<dl class="mt-8 text-base text-gray-500">
						<div>
							<dt class="sr-only">Postal address</dt>
							<dd>
								<p>123 Innovation Street</p>
								<p>Silicon Valley, CA 94025</p>
							</dd>
						</div>
						<div class="mt-6">
							<dt class="sr-only">Phone number</dt>
							<dd class="flex">
								<svg class="h-6 w-6 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg>
								<span class="ml-3">(555) 123-4567</span>
							</dd>
						</div>
						<div class="mt-3">
							<dt class="sr-only">Email</dt>
							<dd class="flex">
								<svg class="h-6 w-6 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>
								<span class="ml-3">info@futurebits.com</span>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
				<div class="mx-auto max-w-lg lg:max-w-none">
					<form on:submit={handleSubmit} class="grid grid-cols-1 gap-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
							<div class="mt-1">
								<input
									type="text"
									name="name"
									id="name"
									bind:value={formData.name}
									required
									class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
							<div class="mt-1">
								<input
									type="email"
									name="email"
									id="email"
									bind:value={formData.email}
									required
									class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								/>
							</div>
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
							<div class="mt-1">
								<input
									type="tel"
									name="phone"
									id="phone"
									bind:value={formData.phone}
									class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								/>
							</div>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
							<div class="mt-1">
								<textarea
									id="message"
									name="message"
									rows="4"
									bind:value={formData.message}
									required
									class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								></textarea>
							</div>
						</div>
						<div>
							<button
								type="submit"
								class="inline-flex justify-center rounded-md border border-transparent bg-purple-900 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
