describe("calculator test", () => {
  test("truthy operation", () => {
    var name = "prakhar";
    var voidVar = null;
    expect(name).not.toBeNull();
    expect(voidVar).toBeNull();

    expect(name).toBeTruthy();
    expect(voidVar).toBeFalsy();

    var num1 = 100;
    var num2 = 20;
    expect(num1).toBeGreaterThan(10);
  });
});
