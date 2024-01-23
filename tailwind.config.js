module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue, js, ts, jsx,tsx}"
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-white':'url(../images/wave-white.png)' 
            })
        }
    },
    variants: {
        extend: {},
    }, 
    plugins: [],
}