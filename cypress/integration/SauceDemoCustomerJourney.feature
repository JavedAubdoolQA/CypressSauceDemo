Feature: This feature is to verify customer can add products to cart and remove products from the cart

    Scenario: Verify customer can add and remove single product from cart
    Given products page is displayed
    When user adds a single product to cart
    And single product will be displayed in the shopping cart
    When user goes to the cart 
    And single product will be displayed in the cart page
    And validate the product in the cart page
    When remove product
    Then shopping cart is empty

    Scenario: Verify customer can add and remove multiple products from cart
    Given products page is displayed
    When user adds a multiple products to cart
    And user goes to the cart
    Then expected total number of products will be displayed
    And validate the product in the cart page
    When remove product
    Then shopping cart is empty

