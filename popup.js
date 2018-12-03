document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://dockerv2.simplilearn.com/docker/psapi.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        
        var obj = xhr.responseText;
        obj = JSON.parse(obj);
        
        var table = document.createElement('TABLE');
        table.id = 'dockerindex';
        table.border = '1';

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        

        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        
        
        var td = document.createElement('TH');
        td.appendChild(document.createTextNode("Port"));
        tr.appendChild(td);
        var td = document.createElement('TH');
        td.appendChild(document.createTextNode("Up Since"));
        tr.appendChild(td);
        var td = document.createElement('TH');
        td.appendChild(document.createTextNode("Launch"));
        tr.appendChild(td);

        for(var k in obj){
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
          
          var newA = document.createElement('a');
          newA.setAttribute('href',"http://dockerv2.simplilearn.com:"+obj[k][1]);
          newA.innerHTML = "Go";
          newA.target = "_blank";

          var td = document.createElement('TD');
          td.appendChild(document.createTextNode(obj[k][1]));
          tr.appendChild(td);
          
          var td = document.createElement('TD');
          td.appendChild(document.createTextNode(obj[k][2]));
          tr.appendChild(td);

          var td = document.createElement('TD');
          td.appendChild(newA);
          tr.appendChild(td);


        }
        document.getElementById("resp").appendChild(table);
      }
    }
    xhr.send();
}, false);
