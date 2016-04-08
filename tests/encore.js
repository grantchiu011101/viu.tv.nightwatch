module.exports = {
	before : function (browser) {
		browser.resizeWindow(1920, 3000);
	},
	after: function(browser) {
		browser.end() ;
	},
	'viu.tv encore page' : function (browser) {
		browser
			.url('https://viu.tv/encore')
			.waitForElementVisible('body', 1000)
			.saveScreenshot('./screenshot/encore.png')


			.moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			.saveScreenshot('./screenshot/encore.factual-entertainment.png')
			.click('.navbar-collapse ul > :first-child .dropdown-menu > :first-child')
			.pause(1000) ;

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.variety.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(2)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.lifestyle.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(3)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.drama.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(4)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.animation.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(5)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.kids.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(6)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.sports.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(7)')

			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .pause(1000)
			// .saveScreenshot('./screenshot/encore.news-and-finance.png')
			// .click('.navbar-collapse ul > :first-child .dropdown-menu > :nth-child(8)')


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
			// .click('.navbar-collapse ul > :first-child', 0, 0)
			// .moveToElement('.navbar-collapse ul > :first-child', 0, 0)
			// .saveScreenshot('./screenshot/catchup.png')
			// .pause(1000) ;
			// .setValue('input[type=search]', 'nightwatch')
			// .waitForElementVisible('input[type=submit]', 1000)
			// .click('input[type=submit]')
			
			// .saveScreenshot('./screenshot/index.png')
			// .assert.elementPresent('a[href="/packages/nightwatch"]', 'The Night Watch')
			// .end(); 
	}
} ;