module.exports = {
	before : function (browser) {
		browser.resizeWindow(1920, 3000);
	},
	after: function(browser) {
		browser.end() ;
	},
	'viu.tv epg page' : function (browser) {
		browser
			.url('https://viu.tv/epg/99')
			.waitForElementVisible('body', 1000)
			.saveScreenshot('./screenshot/epg.99.png')
			 

			// .assert.elementPresent('.banner_carousel-container', 'banner')
			// .assert.elementPresent('.section-container', '最多人睇')
			// .assert.elementPresent('.topic-container', 'section-container')
			// .click('.most_watched .programme-container a')
			// .waitForElementVisible('body', 1000)
			// .execute('scrollTo(0,3000)')
			// .saveScreenshot('./screenshot/most_watched_01.png')
			// .click('.navbar-brand')
			// .waitForElementVisible('body', 1000)
			// .execute('scrollTo(0,3000)')
			// .click('.navbar-collapse ul > :first-child')
			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0, function() {})
			// .saveScreenshot('./screenshot/catchup.png')
			.pause(1000) ;
			// .setValue('input[type=search]', 'nightwatch')
			// .waitForElementVisible('input[type=submit]', 1000)
			// .click('input[type=submit]')
			
			// .saveScreenshot('./screenshot/index.png')
			// .assert.elementPresent('a[href="/packages/nightwatch"]', 'The Night Watch')
			// .end(); 
	}
} ;