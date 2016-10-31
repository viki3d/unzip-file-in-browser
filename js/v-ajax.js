
	var VAjax = {
	
		makeRequest : function (url, ajaxHandlerFunction) {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				alert('Giving up :( Cannot create an XMLHTTP instance');
				return false;
			}
			httpRequest.onreadystatechange = function () {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						ajaxHandlerFunction(httpRequest.responseText);
					} 
					else {
						alert('There was a problem with the request.');
					}
				}
			}
			httpRequest.open('GET', url);
			httpRequest.send();
		}
		
	}


