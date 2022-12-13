import { describe } from "mocha";

const apiCalculator = `${Cypress.env("apiUrl")}/calculate`;


describe("Calculator API", function () {
    context("POST /calculate", function () {
        it("returns output of operation", function () {
    
          cy.request("POST", `${apiCalculator}`, {
            operand1: 2,
            operand2: 5,
            operation: "*",
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq("10");
          });
        });
      });
})