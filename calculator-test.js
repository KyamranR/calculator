
it('should calculate the monthly rate correctly', function () {
  const values ={amount: 500000, years: 30, rate: 7.5};

  expect(calculateMonthlyPayment(values)).toEqual('3496.07');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 549324, years: 30, rate: 7.5}

  expect(calculateMonthlyPayment(values)).toEqual('3840.95');
});

/// etc
