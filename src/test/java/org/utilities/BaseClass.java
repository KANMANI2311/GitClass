package org.utilities;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
public static WebDriver driver;

public static void launchChromeBrowser() {
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
}
public static void windowMaxi() {
	driver.manage().window().maximize();
}
public static void loadUrl(String url) {
	driver.get(url);
}
public static void printTitle() {
	driver.getTitle();
}

public static void passText(WebElement element,String value) {
	element.sendKeys(value);
	
}
public static void btnClick(WebElement btnLogin) {
	btnLogin.click();
	
}

public static void printCurrentUrl() {
	driver.getCurrentUrl();
}
public static void screenShot(String name) {
	TakesScreenshot t = (TakesScreenshot)driver;
	File src = t.getScreenshotAs(OutputType.FILE);
	File des = new File("C:\\Users\\mahar\\eclipse-workspace\\Cucumber\\target\\Screenshot\\"+name+".jpg");
	try {
		FileUtils.copyFile(src, des);
	} catch(IOException e) {
	}
}

public static String titleText() {
	String title = driver.getTitle();
	return title;
}

public static void closeEntireBrowser() {
	driver.quit();
	
}
}
