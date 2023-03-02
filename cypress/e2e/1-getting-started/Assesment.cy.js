Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Assessment project', () => {

  it('Verify date selection', () => {
    
    cy.visit('https://www.qa.paydaytest.gainhq.com/hrm/dashboard');
    
    // Login Here
    cy.get("input[placeholder=\"Enter your email\"]").type('sqa@gain.media');
    cy.get("input[placeholder=\"Enter your password\"]").type('candidate@QA00');
    cy.get('.btn > .w-100').click();
    
    // Punch In here
    cy.get('.float-md-right > :nth-child(1) > .d-flex > .btn').click();
    cy.get('.text-center > .w-100').click();
    
    // Punch Out here
    cy.reload()
    cy.get('.float-md-right > :nth-child(1) > .d-flex > .btn').click();
    cy.get('.text-center > .w-100').click();
   
    // See Employess
    cy.reload()
    cy.get('[href="#employee"] > .menu-arrow').click();
    cy.get('#employee > .nav > :nth-child(1) > .nav-link').click();
    
    // Employee Details
    cy.get(':nth-child(1) > .card > .card-body > .mt-4 > .btn').click();
    cy.scrollTo(0, 500);
    
    // Add Employee
    cy.get('[href="#employee"] > .menu-arrow').click();
    cy.get('#employee > .nav > :nth-child(1) > .nav-link').click();
    cy.get('.btn-success').click();
    cy.wait(5000);
    cy.get("input[placeholder=\"Enter first name \"]").click().type('Ashibur');
    cy.get("input[placeholder=\"Enter last name \"]").click().type('Rahman');
    cy.get("input[placeholder=\"Enter email \"]").click().type('ashibur001@gmail.com');
    cy.get(':nth-child(1) > .outside').click();
    cy.xpath("//select[@id='formData.department_id']").select(1);
    cy.xpath("//select[@id='formData.designation_id']").select(1);
    cy.xpath("//select[@id='formData.employment_status_id']").select(2);
    cy.get(".add").click().xpath("(//a[@class='dropdown-item'][normalize-space()='Employee'])[2]").click();
    cy.xpath("//input[@id='formData.salary']").type('40000');
    cy.xpath("//input[@placeholder='Enter joining date ']").type('03-03-2023');
    cy.xpath("//span[@class='w-100']").click();
    cy.wait(5000);

    // See Employee details
    // Upload & See documents
    
    cy.reload()
    cy.get('[href="#employee"] > .menu-arrow').click();
    cy.get('#employee > .nav > :nth-child(1) > .nav-link').click();
     
    cy.get(':nth-child(1) > .card > .card-body > .mt-4 > .btn').click();
    cy.scrollTo(0, 500);
    
    cy.xpath("//span[normalize-space()='documents']").click();
    cy.xpath("//button[normalize-space()='Add New']").click();
    cy.xpath("//input[@id='formData.name']").type('Prince');
    const filepath = 'cypress.txt';
    cy.get('input[type=file]').selectFile('filepath');
    cy.xpath("//span[@class='w-100']").click();

    // Log Out
    cy.get('.avatars-w-40 > .rounded-circle').click();
    cy.get('[href="https://www.qa.paydaytest.gainhq.com/hrm/admin/log-out"]').click();
    
  })
    }) 