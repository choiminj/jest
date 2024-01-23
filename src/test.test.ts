const getUser = (id: number) => {
  return {
    id,
    email: `user${id}@test.com`,
  };
};

const drinkAll = (callback: Function, flavor: string) => {
  if (flavor !== "octopus") {
    callback(flavor);
  }
};

describe("테스트01", () => {
  test("1 + 2는 3이다.", () => {
    expect(1 + 2).toEqual(3);
  });

  test("return a user object", () => {
    expect(getUser(1)).toEqual({
      id: 1,
      email: "user1@test.com",
    });
  });

  test("Undefined Test", () => {
    expect(undefined).not.toBeDefined();
  });
});

describe("테스트02", () => {
  const drink = jest.fn();

  test("Function Test1", () => {
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("Function Test2", () => {
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });

  test("배열 테스트", () => {
    const colors = ["red", "blue", "yellow"];
    expect(colors).toHaveLength(3);
    expect(colors).not.toContain("test");
  });
});

describe("모킹 테스트", () => {
  const mockFn = jest.fn();

  test("반환 값 지정", () => {
    mockFn.mockReturnValue("apple");
    mockFn(); // apple
  });

  test("커스텀 함수 구현", () => {
    mockFn.mockImplementation(name => `hello ${name}`);
    mockFn("lee"); // hello lee
  });

  test("실행 테스트", () => {
    mockFn.mockImplementation(name => `나는 ${name}`);

    mockFn("a");
    mockFn(["b", "c"]);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith("a");
  });
});
