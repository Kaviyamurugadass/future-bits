<script>
	export let src;
	export let alt = '';
	export let size = 'md';
	export let className = '';

	const sizes = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-24 h-24',
		'2xl': 'w-48 h-48'
	};

	$: sizeClass = sizes[size] || size; // Use predefined size or custom size string
</script>

<div class="[&>img]:fill-current [&>img]:text-themeColor-900 {className}">
	<img {src} {alt} class="{sizeClass} object-contain" />
</div>
