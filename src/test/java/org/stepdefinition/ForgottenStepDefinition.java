package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgottenStepDefinition extends BaseClass {



@Given("User should open chrome browser and load url")
public void userShouldOpenChromeBrowserAndLoadUrl() {
    launchChromeBrowser();
    loadUrl("https://www.facebook.com");
    windowMaxi();
}

@When("User should click the forgotten password link")
public void userShouldClickTheForgottenPasswordLink() throws InterruptedException {
    driver.findElement(By.xpath("//a[text()='Forgotten password?']")).click();
    Thread.sleep(2000);
}

@When("User should input invalid mobile number on the textbox")
public void userShouldInputInvalidMobileNumberOnTheTextbox() {
   driver.findElement(By.xpath("//input[@id='identify_email']")).sendKeys("9879879887");
}

@When("User should click the search button")
public void userShouldClickTheSearchButton() {
	driver.findElement(By.xpath("//button[@id='did_submit']")).click();
    
}

@Then("User should navigate to recover page")
public void userShouldNavigateToRecoverPage() {
    String currentUrl = driver.getCurrentUrl();
    Assert.assertTrue("Check forgot", currentUrl.contains("recover"));
    System.out.println("Forgotten - Pass");
}


}
