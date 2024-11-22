import { writable } from 'svelte/store';

export const selectedImage = writable(null);
export const annotationsStore = writable([]);
export const selectedTemplate = writable(null); 
export const templateName = writable('');
export const imagePreview = writable(null);
