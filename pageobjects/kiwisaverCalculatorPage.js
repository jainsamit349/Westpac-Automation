const { expect } = require("@playwright/test");

class kiwisaverCalculatorPage {
  constructor(page) {
    this.page = page;
    this.openCalculatorLink = this.page.locator("span", {
      hasText: "Open the calculator",
    });
    this.ageQuesInput = this.page.locator("#text-QUESTION_AGE");
    this.nextQuestuionButton = this.page.getByRole("button", {
      name: "Next Question",
    });

    this.timeForPurchaseDropDown = this.page.locator(
      "[aria-labelledby='dropdown-QUESTION_WHEN_TO_BUY_HOME']",
      { hasText: "Choose option" }
    );

    this.employmentStatusDropDown = this.page.locator(
      "[aria-labelledby='dropdown-QUESTION_EMPLOYMENT_STATUS']",
      { hasText: "Choose option" }
    );
    this.incomeFrequencyDropDown = this.page.locator(
      "[aria-labelledby='dropdown-QUESTION_INCOME']",
      { hasText: "per" }
    );
    this.enterIncome = this.page.locator("#text-QUESTION_INCOME");
    this.nextQuestionIncome = this.page
      .getByRole("button", {
        name: "Next Question",
      })
      .nth(1);
    this.kiwisaverBalance = this.page.locator(
      "#text-QUESTION_KIWISAVER_BALANCE"
    );

    this.nextQuestionKiwisaver = this.page
      .getByRole("button", {
        name: "Next Question",
      })
      .nth(2);

    this.below18Dialog = this.page.getByLabel("We’re here to help.");
    this.below18DialogConfirm = this.page.locator("span", {
      hasText: "Ok, I understand",
    });
    this.above64DialogConfirm = this.page.locator("span", {
      hasText: "Close",
    });

    this.contRateDropDown = this.page.locator(
      "[aria-labelledby='dropdown-QUESTION_CONTRIBUTION_PERCENTAGE']",
      { hasText: "Choose option" }
    );
    this.fundTypeDropDown = this.page.locator(
      "[aria-labelledby='dropdown-QUESTION_CURRENT_FUND']",
      { hasText: "Choose fund" }
    );

    //this.currentProjectionText = this.page.locator("h2", {
    //  hasText: "Your current projection.",
    // });
    this.currentProjectionText = this.page.locator(
      "[data-testid='kiwisaver-projections-full-screen-dialog']"
    );
  }

  async openKiwiSaverCalculator() {
    await this.openCalculatorLink.click();
  }

  async enterCurrentAge(age) {
    await this.ageQuesInput.type(age);
    await this.nextQuestuionButton.click();
  }

  async isBelow18DialogVisible() {
    await expect(this.below18Dialog).toBeVisible();
    await expect(this.below18Dialog).toContainText(
      "As you haven’t turned 18 yet, you should complete this tool with a parent or guardian"
    );
    await this.below18DialogConfirm.click();
  }

  async isAbove64DialogVisible() {
    await expect(this.below18Dialog).toBeVisible();
    await expect(this.below18Dialog).toContainText(
      "As you’re nearing or at an age where you can withdraw your funds for retirement"
    );
    await this.above64DialogConfirm.click();
  }

  async isNextQuestuionButtonDisabled() {
    await expect(this.nextQuestuionButton).toBeDisabled();
  }

  async selectKiwiSaverPurpose(kiwisaverpurpose) {
    this.kiwisaverpurposeOption = this.page.locator("button", {
      hasText: kiwisaverpurpose,
    });
    await this.kiwisaverpurposeOption.click();
  }
  async selectYearsToPurchase(yearstopurchase) {
    this.timeForPurchaseValue = this.page.getByRole("option", {
      name: yearstopurchase,
    });
    await this.timeForPurchaseDropDown.click();
    await this.timeForPurchaseValue.click();
  }
  async selectEmploymentStatus(employmentstatus) {
    this.employmentValue = this.page.locator(
      "[data-value='" + employmentstatus + "']"
    );
    await this.employmentStatusDropDown.click();
    await this.employmentValue.click();
  }
  async selectIncome(incomefrequency, incomeamount) {
    this.incomeFrequencyValue = this.page.locator(
      "[data-value='" + incomefrequency + "']"
    );
    await this.incomeFrequencyDropDown.click();
    await this.incomeFrequencyValue.click();
    await this.enterIncome.type(incomeamount);
    await this.nextQuestionIncome.click();
  }
  async isNextQuestuionIncomeButtonDisabled() {
    await expect(this.nextQuestionIncome).toBeDisabled();
  }
  async enterKiwisaverBalance(kiwisaverbalance) {
    await this.kiwisaverBalance.type(kiwisaverbalance);
    await this.nextQuestionKiwisaver.click();
  }
  async isNextQuestuionKiwiSaverButtonDisabled() {
    await expect(this.nextQuestionKiwisaver).toBeDisabled();
  }
  async selectContributionRate(contributionrate) {
    this.contRateValue = this.page.locator(
      "[data-value='" + contributionrate + "']"
    );
    await this.contRateDropDown.click();
    await this.contRateValue.click();
  }
  async selectFundType(fundtype) {
    this.fundTypeValue = this.page.locator("[data-value='" + fundtype + "']");
    await this.fundTypeDropDown.click();
    await this.fundTypeValue.click();
  }
  async isCurrentProjectionDisplayed() {
    await expect(this.currentProjectionText).toBeVisible();
    await expect(this.currentProjectionText).toContainText(
      "Your current projection."
    );
  }
}
module.exports = { kiwisaverCalculatorPage };
