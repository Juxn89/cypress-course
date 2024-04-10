const devices = [ 
	{ viewport: 'macbook-15', type: "desktop" }, 
	{ viewport: 'ipad-2', type: "mobile" }, 
	{ viewport: [1280, 720], type: "desktop" }, 
	{ viewport: [375, 667], type: "mobile" }
]

describe('Mobile Devices', () => {
	it('Using the viewport', () => {
		// cy.viewport(1280, 720)
		cy.viewport('iphone-8')
		cy.visit('/')
		cy.contains('Safari').should('exist')
	})

	it('Using the viewport mobile', () => {
		cy.viewport(375, 667)
		cy.visit('/')
		cy.contains('Safari').should('not.be.visible')
	})

	it('Using the viewport desktop preset', () => {
		cy.viewport('macbook-16')
		cy.visit('/')
		cy.contains('Safari').should('exist')
	})

	devices.forEach(device => {
		it(`Testing with the viewport ${device.viewport}`, () => {
			if(Cypress._.isArray(device.viewport)) {
				cy.viewport(device.viewport[0], device.viewport[1])
			}
			else {
				cy.viewport(device.viewport)
			}

			cy.visit('/')

			if(device.type === 'desktop')
				cy.contains('Safari').should('exist')
			else
				cy.contains('Safari').should('not.be.visible')
		})
	})
})