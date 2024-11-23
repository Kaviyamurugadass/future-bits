<script>
	export let title = '';
	export let subtitle = '';
	export let bgColor = 'bg-white';
	export let className = '';
	export let titleClass = '';
	export let subtitleClass = '';
</script>

<section class="py-16 {bgColor} {className}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if title || subtitle}
			<div class="text-center mb-12">
				{#if title}
					<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl {titleClass}">
						{title}
					</h2>
				{/if}
				{#if subtitle}
					<p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto {subtitleClass}">
						{subtitle}
					</p>
				{/if}
			</div>
		{/if}
		<slot />
	</div>
</section>
