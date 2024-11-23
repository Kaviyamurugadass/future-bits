<script>
	export let type = 'button';
	export let variant = 'primary';
	export let size = 'md';
	export let className = '';
	export let disabled = false;

	const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors duration-200';
	
	const variants = {
		primary: 'bg-themeColor-900 text-primaryTextColor hover:bg-themeColor-800 active:bg-themeColor-700',
		secondary: 'bg-secondaryColor text-primaryTextColor hover:bg-opacity-90 active:bg-opacity-100',
		outline: 'border-2 border-themeColor-900 text-themeColor-900 hover:bg-themeColor-50 active:bg-themeColor-100'
	};
	
	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	$: buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
</script>

<button
	{type}
	{disabled}
	class={buttonClass}
	on:click
>
	<slot />
</button>
