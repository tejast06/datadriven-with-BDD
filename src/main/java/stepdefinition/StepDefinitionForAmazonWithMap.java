package stepdefinition;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinitionForAmazonWithMap {
WebDriver driver;
	
	@Given("^user is already on amazon page$")
	public void user_is_already_on_amazon_page() throws Throwable {
		driver = new ChromeDriver();
	    driver.get("https://www.amazon.in/");
	    driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);  
	    
	}

	
//	@Then("^enter \"([^\"]*)\" on searchbar and click on serach button$")
//	public void enter_on_searchbar_and_click_on_serach_button(String testdata) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		driver.findElement(By.xpath("//input[@type='text']")).click();
//		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(testdata);
//		driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
//	    
//	}
	
	
	@Then("^enter data on searchbar and click on search button$")
	public void enter_data_on_searchbar_and_click_on_search_button(DataTable dataTable) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		
		Map<String, String> list = dataTable.asMap(String.class, String.class);
		
		driver.findElement(By.xpath("//input[@type='text']")).click();
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(list.get("searchbar"));
		driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
		
		
		driver.findElement(By.xpath("//input[@type='text']")).click();
		driver.findElement(By.xpath("//input[@type='text']")).clear();
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(list.get("searchbar"));
		driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
		
		driver.findElement(By.xpath("//input[@type='text']")).click();
		driver.findElement(By.xpath("//input[@type='text']")).clear();
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(list.get("searchbar"));
		driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
		
		
	   
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
	    
	}


}
