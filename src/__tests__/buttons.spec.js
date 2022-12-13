import { before } from "cypress/types/lodash"

describe("Buttons", function () {
    before(() => {

        cy.visit('http://localhost:3000')
      
    })
    
    it("render ^ button", function () {
      cy.get("btn-1").should("be.visible")
    })

    it("render ( button", function () {
      cy.get("btn-2").should("be.visible")
    })


    it("render  √ button", function () {
      cy.get("btn-3").should("be.visible")
    })

    it("render  ) button", function () {
      cy.get("btn-4").should("be.visible")
    })


    it("render ^ button", function () {
      cy.get("btn-5").should("be.visible")
    })



    it("render 1 button", function () {
      cy.get("btn-6").should("be.visible")
    })


    it("render 2 button", function () {
      cy.get("btn-7").should("be.visible")
    })


    it("render 3 button", function () {
      cy.get("btn-8").should("be.visible")
    })


    it("render 4 button", function () {
      cy.get("btn-9").should("be.visible")
    })


    it("render 5 button", function () {
      cy.get("btn-10").should("be.visible")
    })

    it("render 6 button", function () {
        cy.get("btn-8").should("be.visible")
      })
  
  
      it("render 7 button", function () {
        cy.get("btn-9").should("be.visible")
      })
  
  
      it("render 8 button", function () {
        cy.get("btn-10").should("be.visible")
      })
    
      it("render 9 button", function () {
        cy.get("btn-10").should("be.visible")
      })
})