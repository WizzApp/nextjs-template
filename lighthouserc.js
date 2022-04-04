module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage',
        },
        collect: {
            url: ['http://localhost:3000/'],
            startServerCommand: 'NODE_ENV=production npm run start',
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'csp-xss': 'off',
                'html-has-lang': 'off',
                'legacy-javascript': 'off'
            }
        },
    },
}