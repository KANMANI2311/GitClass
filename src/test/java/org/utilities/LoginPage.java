package org.utilities;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BaseClass {
	public LoginPage() {
		PageFactory.initElements(driver,this);
		
	}
	 
	 @FindBy(id="email")
private WebElement username;
	 @FindBy(id="pass")
private WebElement password;

	 @FindBy(name="login")
private WebElement Login;
 
 public WebElement getPassword() {
	 return password;
	 
 }
 public WebElement getUsername() {
	 return username;
 }
	
public WebElement getBtnLogin() {
	 return Login;
}
public WebElement getCurrenturl() {
	return getCurrenturl(); 
}
public void quitChrome() {
  quitChrome();
}
}












	
	 
 




