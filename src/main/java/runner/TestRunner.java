package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "F:\\eclipse\\BDDPractice\\src\\main\\java\\feature\\Login.Feature",
		glue = {"stepdefinition"},
		format = {"pretty","html:testoutput"},
		dryRun = false,
		monochrome = true,
		strict = true
	    
		)

public class TestRunner {

}
