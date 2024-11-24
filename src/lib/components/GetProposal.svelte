<script>
    let formData = {
        name: '',
        email: '',
        company: '',
        projectType: '',
        description: ''
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        formData = {
            name: '',
            email: '',
            company: '',
            projectType: '',
            description: ''
        };
        alert('Thank you for your interest! We will get back to you soon.');
    };
</script>

<section class="relative py-20 bg-gradient-to-b from-gray-50 to-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span class="block">Ready to Transform Your Ideas?</span>
                <span class="block text-themeColor-900 mt-2">Get Your Custom Proposal Today</span>
            </h2>
            <p class="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Share your vision with us, and we'll help you bring it to life with cutting-edge technology solutions
            </p>
        </div>

        <div class="relative max-w-lg mx-auto">
            <!-- Card Container -->
            <div class="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
                <form on:submit={handleSubmit} class="space-y-6">
                    <!-- Form Grid -->
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-1">
                            <label for="name" class="block text-sm font-semibold text-gray-700">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                bind:value={formData.name}
                                required
                                class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-themeColor-500 focus:ring-themeColor-500 transition-colors duration-200 bg-gray-50"
                                placeholder="John Doe"
                            />
                        </div>

                        <div class="col-span-1">
                            <label for="email" class="block text-sm font-semibold text-gray-700">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-themeColor-500 focus:ring-themeColor-500 transition-colors duration-200 bg-gray-50"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div class="col-span-1">
                            <label for="company" class="block text-sm font-semibold text-gray-700">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                bind:value={formData.company}
                                class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-themeColor-500 focus:ring-themeColor-500 transition-colors duration-200 bg-gray-50"
                                placeholder="Your Company"
                            />
                        </div>

                        <div class="col-span-1">
                            <label for="projectType" class="block text-sm font-semibold text-gray-700">Project Type *</label>
                            <select
                                id="projectType"
                                name="projectType"
                                bind:value={formData.projectType}
                                required
                                class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-themeColor-500 focus:ring-themeColor-500 transition-colors duration-200 bg-gray-50"
                            >
                                <option value="">Select type</option>
                                <option value="web">Web Development</option>
                                <option value="mobile">Mobile App</option>
                                <option value="desktop">Desktop Application</option>
                                <option value="ai">AI/ML Solution</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label for="description" class="block text-sm font-semibold text-gray-700">Project Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            bind:value={formData.description}
                            required
                            class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-themeColor-500 focus:ring-themeColor-500 transition-colors duration-200 bg-gray-50"
                            placeholder="Tell us about your project goals and requirements..."
                        ></textarea>
                    </div>

                    <div class="pt-4">
                        <button
                            type="submit"
                            class="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg text-base font-medium text-white bg-gradient-to-r from-themeColor-600 to-themeColor-700 hover:from-themeColor-700 hover:to-themeColor-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeColor-500 transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            Get Your Free Proposal
                            <svg class="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    <p class="text-center text-sm text-gray-500 mt-4">
                        By submitting this form, you agree to our 
                        <a href="#" class="text-themeColor-900 hover:text-themeColor-700">Terms of Service</a> and 
                        <a href="#" class="text-themeColor-900 hover:text-themeColor-700">Privacy Policy</a>
                    </p>
                </form>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div class="absolute -bottom-8 -left-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
    </div>
</section>

<style>
    @keyframes blob {
        0% {
            transform: translate(0px, 0px) scale(1);
        }
        33% {
            transform: translate(30px, -50px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
            transform: translate(0px, 0px) scale(1);
        }
    }

    .animate-blob {
        animation: blob 7s infinite;
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    /* Add smooth transitions */
    input, select, textarea {
        transition: all 0.2s ease-in-out;
    }

    input:focus, select:focus, textarea:focus {
        transform: translateY(-1px);
    }
</style>
