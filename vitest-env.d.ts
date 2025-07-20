/// <reference types="vitest" />

export { }

declare global {
    interface ImportMeta {
        vitest: typeof import('vitest')
    }
}