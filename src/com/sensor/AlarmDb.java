package com.sensor;

import java.util.ArrayList;
import java.util.List;

public class AlarmDb {
	
	public static List<Alarm> getAlarms(){
		
		List<Alarm> alarms = new ArrayList<>();
		
		alarms.add(new Alarm("A000000001","a@a.lk","F0001R0001",3,2,0,1));
		alarms.add(new Alarm("A000000002","b@a.lk","F0001R0002",7,6,1,1));
		alarms.add(new Alarm("A000000003","c@a.lk","F0001R0003",8,7,1,1));
		alarms.add(new Alarm("A000000004","d@a.lk","F0001R0004",4,9,0,1));
		
		return alarms;
	}

}
