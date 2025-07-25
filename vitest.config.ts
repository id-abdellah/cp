import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        includeSource: ['**/*.{ts,js}'],
        exclude: ['node_modules', 'dist', '.git'],
        environment: 'node',
    },
})