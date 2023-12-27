package org.stepdefinition;



import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginStepDefinition extends BaseClass{


@Given("User should launch the chrome browser and load url")
public void user_should_launch_the_chrome_browser_and_load_url() {
    launchChromeBrowser();
    loadUrl("https:www.facebook.com");
    windowMaxi();
}


@When("User should input invalid username and invalid password in the textbook")
public void user_should_input_invalid_username_and_invalid_password_in_the_textbook() {
	LoginPage l = new LoginPage();
	WebElement username = l.getUsername();
	WebElement password = l.getPassword();
	passText(username, "Greens");
	passText(password, "Greens@123");
    
}

@When("User should print the title of the page")
public void user_should_print_the_title_of_the_page() {
    printTitle();
}

@When("User should click the login button")
public void user_should_click_the_login_button() throws InterruptedException {
	LoginPage l = new LoginPage();
	WebElement Login = l.getBtnLogin();
	Login.click();
	Thread.sleep(2000);
    
}


@When("User should print the current Url of my page")
public void user_should_print_the_current_Url_of_my_page() {
    printCurrentUrl();
}


@Then("User should navigate to incorrect credential page")
public void user_should_navigate_to_incorrect_credential_page() {
   String currentUrl = driver.getCurrentUrl();
   Assert.assertTrue("Check Login Page", currentUrl.contains("privacy"));
   System.out.println("Test Case Pass");
}


@When("User should print the current Url of the page")
public void userShouldPrintTheCurrentUrlOfThePage() {
    printCurrentUrl();
}

@When("User should input valid username and invalid password in the textbook")
public void user_should_input_valid_username_and_invalid_password_in_the_textbook() {
	LoginPage l = new LoginPage();
	WebElement username = l.getUsername();
	WebElement password = l.getPassword();
	passText(username, "mkanmani23");
	passText(password, "Greens@123");
    
}

@When("User should input invalid username {string} and valid password {string} in the textbook")
public void userShouldInputInvalidUsernameAndValidPasswordInTheTextbook(String s1, String s2) {
	
	LoginPage l = new LoginPage();
	WebElement username = l.getUsername();
	WebElement password = l.getPassword();
	passText(username, s1);
	passText(password, s2);   
}


@When("User should input invalid username and invalid passworD in the textbook")
public void userShouldInputInvalidUsernameAndInvalidPassworDInTheTextbook(io.cucumber.datatable.DataTable d) throws InterruptedException {

	LoginPage l = new LoginPage();
	WebElement username = l.getUsername();
	WebElement password = l.getPassword();
	List<List<String>> li = d.asLists();
	List<String> a = li.get(1);
	String uservalue = a.get(4);
	
	List<String> b = li.get(2);
	String passvalue = b.get(3);
	
	passText(username,uservalue);
	passText(password,passvalue);
	Thread.sleep(2000);


}





}

