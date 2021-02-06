package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
	   
		driver = new ChromeDriver();
		driver.get("https://classic.freecrm.com/index.html");
		
		
	    
	}

	@When("^title of login page is CRMPRO  - CRM software for customer relationship management, sales, and support\\.$")
	public void title_of_login_page_is_CRMPRO_CRM_software_for_customer_relationship_management_sales_and_support() throws Throwable {
	    String title = driver.getTitle();
	   // Assert.assertEquals(title, "CRMPRO  - CRM software for customer relationship management, sales, and support");
	   
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) throws Throwable {
	    driver.findElement(By.xpath("//input[@type='text']")).sendKeys(username);
	    driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
	    
	}

	

}
