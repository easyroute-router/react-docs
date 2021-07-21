const puppeteer = require('puppeteer')
const util = require('util');
const exec = util.promisify(require('child_process').exec)
const path = require('path')
const fs = require('fs')

const { mkdir, writeFile } = fs.promises

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const pages = [
    '/',
    '/page/installation',
    '/page/getting-started',
    '/page/dynamic-matching',
    '/page/current-route-info',
    '/page/router-links',
    '/page/programmatic-navigation',
    '/page/nested-routes',
    '/page/navigation-guards',
    '/page/loading-data-in-hooks',
    '/page/css-transitions',
    '/page/named-outlets',
    '/page/silent-mode',
    '/playground/demo/params'
]

async function processPage(url, browser, prerenderDir) {
    const page = await browser.newPage();
    await page.goto('http://localhost:8556' + url, {
        waitUntil: 'networkidle0'
    });
    const html = await page.content()
    if (url === '/') {
        return await writeFile(path.resolve(prerenderDir, 'index.html'), html, 'utf8')
    } else {
        const pathDir = path.join(prerenderDir, url)
        await mkdir(pathDir, { recursive: true })
        return await writeFile(pathDir + '/index.html', html, 'utf8')
    }
}

async function prerenderFiles() {
    console.log('Prerendering site...')
    exec('./node_modules/.bin/sirv ./dist -s -p 8556')
    await delay(1000)
    const browser = await puppeteer.launch();

    const prerenderDir = path.resolve(__dirname, 'dist')
    if (!fs.existsSync(prerenderDir)) {
        await mkdir(prerenderDir, { recursive: true })
    }

    const allProcessings = []

    for (let i = 0; i < pages.length; i++) {
        const url = pages[i]
        allProcessings.push(processPage(url, browser, prerenderDir))
    }

    Promise.all(allProcessings).then(() => {
        console.log('Done')
        process.exit(0)
    })
}

prerenderFiles()
