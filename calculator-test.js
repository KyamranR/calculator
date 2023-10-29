
it('should calculate the monthly rate correctly', function () {
  const values ={amount: 500000, years: 30, rate: 7.5};

  expect(calculateMonthlyPayment(values)).toEqual('3496.07');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 549324, years: 30, rate: 7.5}

  expect(calculateMonthlyPayment(values)).toEqual('3840.95');
});

it('should handle 3 digit interest rate', function(){
  const values = {amount: 549324, years: 30, rate: 101}
  expect(calculateMonthlyPayment(values)).toEqual('46234.77');
})
/// etc
