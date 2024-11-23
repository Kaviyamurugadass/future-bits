<script>
	export let variant = 'default';
	export let hover = true;
	export let className = '';

	const baseStyles = 'bg-white overflow-hidden rounded-lg';
	
	const variants = {
		default: 'shadow',
		elevated: 'shadow-lg'
	};
	
	const hoverStyles = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';

	$: cardClass = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;
</script>

<div class={cardClass}>
	<slot />
</div>
