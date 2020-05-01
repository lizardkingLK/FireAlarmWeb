<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="java.util.*, com.sensor.*"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="ISO-8859-1">
<title>Fire Alarm Monitoring System</title>
<link type="text/css" rel="stylesheet" href="css/style.css">
</head>

<%
	List<Alarm> theAlarms = (List<Alarm>) request.getAttribute("alarm_list");
%>

<body>
	<div id="wrapper">
		<div id="header">
			<h1>Fire Alarm Monitoring System</h1>
		</div>
	</div>
	<div id="container">
		<div id ="legend">
			<div class="legendIn">
				<div class="circle danger"></div>
				<small> Smoke/CO2 is high levels</small>
			</div>
			<div class="legendIn">
				<div class="circle broke"></div>
				<small> Alarm broke </small>
			</div>
			<div class="legendIn small">
				<small>Last updated : </small>
				<small id="lastupdated"></small>
			</div> 
		</div>
		<div id="content">
			<table id="table">
				<tr>
					<th>Alarm ID</th>
					<th>Floor No</th>
					<th>Room No</th>
					<th>Smoke Level</th>
					<th>CO2 Level</th>
					<th>Active state</th>
					<th>Working state</th>
				</tr>
				<!-- -->
				<tbody id="tableBody">
				<%
					for(Alarm a : theAlarms) {
								if(a.getSmokeLevel()>5)
									out.print("<tr class=\"row danger\">");
								else if(a.getIsWorking() == 0)
									out.print("<tr class=\"row danger\">");
								else
									out.print("<tr class=\"row danger\">");
								
									out.print("<td class=\"rowCell\">"+a.getAid()+"</td>");
									out.print("<td class=\"rowCell\">"+a.getLid().substring(0, 5)+"</td>");
									out.print("<td class=\"rowCell\">"+a.getLid().substring(5, 10)+"</td>");
									out.print("<td class=\"rowCell\">"+a.getSmokeLevel()+"</td>");
									out.print("<td class=\"rowCell\">"+a.getCo2Level()+"</td>");
									out.print("<td class=\"rowCell\">"+a.getIsActive()+"</td>");
									out.print("<td class=\"rowCell\">"+a.getIsWorking()+"</td>");
								out.print("<tr/>");
							}
				%>
				</tbody>
			</table>
		</div>
	</div>
	
	<script type="text/javascript" src="js/main.js"></script>
</body>

</html>