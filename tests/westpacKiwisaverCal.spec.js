const { test, expect } = require("@playwright/test");
const {
  kiwisaverCalculatorPage,
} = require("../pageobjects/kiwisaverCalculatorPage");

const calculatorTestData = JSON.parse(
  JSON.stringify(require("../fixtures/calculatorTestData.json"))
);
for (const data of calculatorTestData) {
  test.describe(`Verify with Iteration ${data.Scenario}`, () => {
    test("verify kiwisaver calculator functionality", async ({ page }) => {
      const kiwisavercalculatorpage = new kiwisaverCalculatorPage(page);
      await page.goto(data.url);
      await kiwisavercalculatorpage.openKiwiSaverCalculator();
      await kiwisavercalculatorpage.isNextQuestuionButtonDisabled();
      await kiwisavercalculatorpage.enterCurrentAge(data.age);

      if (data.age < "18") {
        await kiwisavercalculatorpage.isBelow18DialogVisible();
      } else if (data.age >= "64") {
        await kiwisavercalculatorpage.isAbove64DialogVisible();
        console.log(
          "Finishing test since age of applicant is more than 64 and application cant be continued online"
        );
        return;
      }
      await kiwisavercalculatorpage.selectKiwiSaverPurpose(
        data.kiwisaverpurpose
      );
      if (data.kiwisaverpurpose == "First Home") {
        await kiwisavercalculatorpage.selectYearsToPurchase(
          data.yearstopurchase
        );
      }
      await kiwisavercalculatorpage.selectEmploymentStatus(
        data.employmentstatus
      );
      if (data.employmentstatus == "Employed") {
        await kiwisavercalculatorpage.isNextQuestuionIncomeButtonDisabled();
        await kiwisavercalculatorpage.selectIncome(
          data.incomefrequency,
          data.incomeamount
        );
      }
      await kiwisavercalculatorpage.isNextQuestuionKiwiSaverButtonDisabled();
      await kiwisavercalculatorpage.enterKiwisaverBalance(
        data.kiwisaverbalance
      );
      await kiwisavercalculatorpage.selectContributionRate(
        data.contributionrate
      );
      await kiwisavercalculatorpage.selectFundType(data.fundtype);
      await kiwisavercalculatorpage.isCurrentProjectionDisplayed();
    });
  });
}
