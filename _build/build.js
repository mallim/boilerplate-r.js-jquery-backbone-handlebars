({
    optimizeCss: "standard",
    removeCombined: true,
    preserveLicenseComments: false,
    appDir: "../www-root-dev",
    baseUrl: "assets/js/",
    dir: "../www-root",
    keepBuildDir: false,
    optimize: "uglify2",
    paths: {
    	loader: 'app_loader'
    }, 
    modules: [
    {
        name: "app_main"
    }
    ]
})
