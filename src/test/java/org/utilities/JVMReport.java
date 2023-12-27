package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {

	public static void generateJvmReports(String jsonPath) {
		
		File f = new File(System.getProperty("user.dir")+"\\target\\Report\\JVMreport");
		
		
		Configuration con = new Configuration(f, "Facebook");
		con.addClassifications("Domain", "Travel");
		con.addClassifications("Browser", "Chrome");
		con.addClassifications("Browser Version", "103");
		con.addClassifications("OS", "Windows");
		con.addClassifications("Windows Version", "Windows 11");
		
		List<String>li = new ArrayList<String>();
		li.add(jsonPath);
		
		ReportBuilder r = new ReportBuilder(li, con);
        r.generateReports();
}
}
