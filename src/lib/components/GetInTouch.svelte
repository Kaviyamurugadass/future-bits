<script>
    export let bgColor = 'bg-white';
    import { base } from '$app/paths';
</script>

<div class="{bgColor} py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative bg-themeColor-900 rounded-3xl shadow-xl">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <!-- Contact information -->
                <div class="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl bg-gradient-to-b from-themeColor-900 tothemeColor-800">
                    <!-- Decorative angle backgrounds -->
                    <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                        <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice">
                            <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                        </svg>
                    </div>
                    <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                        <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice">
                            <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                        </svg>
                    </div>
                    <div class="relative">
                        <h3 class="text-lg font-medium text-white">Contact Information</h3>
                        <p class="mt-6 text-base text-themeColor-50 max-w-3xl">Ready to start your next project? We're here to help turn your ideas into reality.</p>
                        <dl class="mt-8 space-y-6">
                            <dt><span class="sr-only">Email</span></dt>
                            <dd class="flex text-base text-themeColor-50">
                                <svg class="flex-shrink-0 w-6 h-6 text-themeColor-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span class="ml-3">contact@futurebits.com</span>
                            </dd>
                            <dt><span class="sr-only">Phone number</span></dt>
                            <dd class="flex text-base text-themeColor-50">
                                <svg class="flex-shrink-0 w-6 h-6 text-themeColor-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span class="ml-3">+1 (555) 123-4567</span>
                            </dd>
                        </dl>
                        <ul class="mt-8 flex space-x-12">
                            <li>
                                <a class="text-themeColor-200 hover:text-themeColor-100" href="#">
                                    <span class="sr-only">Facebook</span>
                                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a class="text-themeColor-200 hover:text-themeColor-100" href="#">
                                    <span class="sr-only">GitHub</span>
                                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a class="text-themeColor-200 hover:text-themeColor-100" href="#">
                                    <span class="sr-only">LinkedIn</span>
                                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Contact form -->
                <div class="py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12 bg-white rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl">
                    <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
                    <form class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div class="sm:col-span-2">
                            <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                            <div class="mt-1">
                                <input type="text" name="name" id="name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-themeColor-500 focus:border-themeColor-500 border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-themeColor-500 focus:border-themeColor-500 border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                            <div class="mt-1">
                                <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-themeColor-500 focus:border-themeColor-500 border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-themeColor-900 hover:bgthemeColor-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeColor-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Add any custom styles here */
</style>
