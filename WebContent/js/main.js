const table = document.querySelector('#table');
const lastupdated = document.querySelector('#lastupdated');
lastupdated.innerHTML = new Date().toUTCString();

const getAlarmsList = function() {
	const tableBody = table.querySelector('#tableBody');
	const req = new XMLHttpRequest();
	req.open('GET', 'http://localhost:8080/FireAlarmRest/rest/AlarmService/getAlarms', true);
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200) {
			var alarmsArray = req.responseText;
			let jso = JSON.parse(alarmsArray);
			
			var newBody = document.createElement('tbody');
			newBody.setAttribute('id','tableBody');
			
			for (var i = 0; i < jso.length; i++) {
				let obj = JSON.parse(JSON.stringify(jso[i]));
				
				var a = document.createElement('tr');
				a.setAttribute('class','row');
					
				var b1 = document.createElement('td');
				b1.setAttribute('class','rowCell');
				b1.append(obj.aid.toString());
				
				var b2A = document.createElement('td');
				b2A.setAttribute('class','rowCell');
				b2A.append(obj.lid.toString().substring(0,5));
				
				var b2B = document.createElement('td');
				b2B.setAttribute('class','rowCell');
				b2B.append(obj.lid.toString().substring(5,10));
				
				var b3 = document.createElement('td');
				if(parseInt(obj.smokeLevel.toString()) > 5)
					b3.setAttribute('class','rowCell danger');
				else
					b3.setAttribute('class','rowCell');
				b3.append(obj.smokeLevel.toString());
				
				var b4 = document.createElement('td');
				if(parseInt(obj.co2Level.toString()) > 5)
					b4.setAttribute('class','rowCell danger');
				else
					b4.setAttribute('class','rowCell');
				b4.append(obj.co2Level.toString());
				
				var b5 = document.createElement('td');
				b5.setAttribute('class','rowCell');
				b5.append(obj.isActive.toString());
				
				var b6 = document.createElement('td');
				if(parseInt(obj.isWorking.toString()) == 0)
					b6.setAttribute('class','rowCell broke');
				else
					b6.setAttribute('class','rowCell');
				b6.append(obj.isWorking.toString());
				
				a.append(b1,b2A,b2B,b3,b4,b5,b6);				
				newBody.appendChild(a);
			}

			clearTable();
			tableBody.parentNode.replaceChild(newBody, tableBody);
		} 
		else
			return null;
	};
	
	req.send();
}

const clearTable = function() {
	tableBody.innerHTML = '';
}

const repeat = function() {
    setInterval(function() {
    	getAlarmsList();
    	lastupdated.innerHTML = new Date().toUTCString();
	}, 30000);
};

repeat();