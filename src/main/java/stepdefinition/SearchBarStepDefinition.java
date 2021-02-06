package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SearchBarStepDefinition {
	WebDriver driver;
	
	@Given("^user is already on amazon page$")
	public void user_is_already_on_amazon_page() throws Throwable {
		driver = new ChromeDriver();
	    driver.get("https://www.amazon.in/");
	    driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);  
	    
	}

	
	@Then("^enter \"([^\"]*)\" on searchbar and click on serach button$")
	public void enter_on_searchbar_and_click_on_serach_button(String testdata) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@type='text']")).click();
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(testdata);
		driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
	    
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
	    
	}

}
