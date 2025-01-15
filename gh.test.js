let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

  test("The h1 header content'", async () => {
    const expected =
      "GitHub · Build and ship software on a single, collaborative platform · GitHub";
    page.setDefaultTimeout(10_000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1"); //Ждёт появление селектора
    const title2 = await page.title();
    expect(title2).toEqual(expected);
  });

 test("The first link attribute", async () => {
    const expected = "#start-of-content";
    page.setDefaultTimeout(5_000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual(expected);
  });

    test("The page contains Sign in button", async () => {
    const expected = "Get started with Team";
    page.setDefaultTimeout(5_000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain(expected);
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });


