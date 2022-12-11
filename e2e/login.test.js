describe('authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should login sucessfully", async () => {
    await element(by.id("username")).typeText("teste@email.com");
    await element(by.id("password")).typeText("123456");
    await element(by.text("LOGAR")).tap();

    await expect(element(by.text("Lista de Tarefas"))).toBeVisible();
    await expect(element(by.id("username"))).toNotExist();
  });

  it ("should fail to login", async () => {
    await element(by.id("username")).typeText("teste@email.com");
    await element(by.id("password")).typeText("12345");
    await element(by.text("LOGAR")).tap();

    await expect(element(by.text("Falha ao realizar o login"))).toBeVisible();
  });
});
