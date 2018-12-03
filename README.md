# plucker
A google chrome extension for listing live docker instances. The name plucker says that it's a pluggin on docker.


# prerequisite
You need to write an API to make it work, which gives you the list of docker live instances. This API will be called from your browser througn XMLHttpRequest. So as always don't forget to allow **CORs** in your PHP script.
For example you can take reference of following PHP sample code. I used file name as psapi.php

- Writing an API
```
<?php
header('Access-Control-Allow-Origin: *');
$containers = explode("\n", `docker ps --format "{{.Names}}|{{.Ports}}|{{.Status}}"`);
$containers = array_filter($containers);
foreach($containers as $i=>&$container){
        $container = explode("|",$container);
        $t = explode("->",$container[1]);
        $container[1] = substr($t[0],8,4);
}
echo json_encode($containers);
exit;
?>
```

- Setting API URL in XMLHttpRequest
Second step is to configure API endpoint in your XMLHttpRequest. In our case, let's open **popup.js** and configure endpoint. You can refer below example:

```
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://<your-api-location>/psapi.php", true);
```

- Allow API domain for pluggin
Next thing is to allow your API domain in plugin manifest.json
```
"permissions": [
   "activeTab",
   "http://<your-api-domain>.com"
   ]
```

