package org.stepdefinition;

import org.utilities.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass{

	@Before
	public void configChrome() {
		System.out.println("Hooks Before Executed");
		launchChromeBrowser();
		loadUrl("https://www.facebook.com");
		windowMaxi();
		
	}
	@After
	public void afterEachScenario() {
		
		
		
		
		driver.quit();
		System.out.println("Hooks After Executed");
		
	
		
	}
	
		
	}
	
		
	

