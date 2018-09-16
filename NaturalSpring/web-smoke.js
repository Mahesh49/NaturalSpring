exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "https://link.springer.com/",
    useAllAngular2AppRoots: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    ignoreUncaughtExceptions: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './features/*.feature',
    ],
    capabilities: {
        'browserName': 'chrome',
        'recreateChromeDriverSessions': true,
        'acceptInsecureCerts': true,
        'acceptSslCerts': true,
        chromeOptions: {
            args: [
                '--start-maximized',
            ]
        }
    },
    cucumberOpts: {
        require: ['../build/NaturalSpring/step_definitions/*.js', '../setup.js', '../report.js'],
        format: 'pretty',
        tags: ['~@ignore', '@smoke'],
        profile: false,
        'no-source': true,
        keepAlive: false
    },
};