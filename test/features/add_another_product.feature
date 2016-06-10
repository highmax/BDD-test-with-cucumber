Feature:  Add Another Product

  Scenario: the user add another product
    Given there are at least 1 product selected
    When the user select add another product
    Then a new product list should be visible
