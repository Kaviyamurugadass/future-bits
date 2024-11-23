<script>
    export let bgColor = 'bg-white';
    
    const stats = [
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '30+' },
        { label: 'Team Members', value: '15+' },
        { label: 'Years Experience', value: '5+' }
    ];
</script>

<div class="{bgColor} py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-base text-themeColor-900 font-semibold tracking-wide uppercase">Our Impact</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Numbers That Speak</p>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Our achievements and growth through the years</p>
        </div>
        
        <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {#each stats as stat}
                <div class="bg-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <dt class="text-base font-normal text-gray-900">{stat.label}</dt>
                    <dd class="mt-1 flex justify-center items-baseline md:block lg:flex">
                        <div class="flex items-baseline text-3xl font-extrabold text-themeColor-900">
                            {stat.value}
                        </div>
                    </dd>
                </div>
            {/each}
        </dl>
    </div>
</div>
