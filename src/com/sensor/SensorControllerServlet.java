package com.sensor;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SensorControllerServlet")
public class SensorControllerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public SensorControllerServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Alarm> alarms = AlarmDb.getAlarms();
		request.setAttribute("alarm_list", alarms);
		RequestDispatcher dispatcher = request.getRequestDispatcher("Sensor.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
