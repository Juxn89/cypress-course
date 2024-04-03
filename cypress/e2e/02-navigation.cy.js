describe('Navigation', { browser: 'chrome' }, () => {
  it('Navigate to first page', () => {
    cy.visit('https://www.platzi.com')
  })
  
  it('Reload page', () => {
    cy.reload()
  })
  
  it('Reload page forced way', () => {
    cy.visit('https://www.google.com')
    cy.reload(true)
  })

  it.only('Go back navigation', () => {
    cy.visit('https://www.google.com')
    cy.visit('https://www.google.com/search?q=platzi&sca_esv=bf11c2ab1d752dbe&sca_upv=1&source=hp&ei=B5X9ZbKbC_KshbIP7uqpgAE&iflsig=ANes7DEAAAAAZf2jF5sx6F0TKdxf-xUoyQpOvk8TYICS&ved=0ahUKEwjyuvPZiYiFAxVyVkEAHW51ChAQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyCxAuGIAEGMcBGNEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESL0UUN0IWO8PcAF4AJABAJgBvQOgAb4MqgEHMi01LjAuMbgBA8gBAPgBAZgCB6AC1QyoAgrCAhAQLhgDGI8BGOUCGOoCGIwDwgIQEAAYAxiPARjlAhjqAhiMA8ICDhAuGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYgwHCAgQQABgDwgIIEAAYgAQYsQPCAhEQLhiABBixAxiDARjHARjRA8ICDhAAGIAEGIoFGLEDGIMBwgIFEC4YgATCAgsQLhiDARixAxiABMICBxAAGIAEGArCAgsQLhiABBjHARivAZgDBpIHCTEuMC41LjAuMaAH5DE&sclient=gws-wiz')
    // cy.go(-1)
    cy.go('back')
    cy.go('forward')
  })
})
