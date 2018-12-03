# plucker
A google chrome extension for listing live docker instances


# prerequisite
You need to write an API to make it work, which gives you the list of docker live instances. This API will be called from your browser througn XMLHttpRequest. So as always don't forget to allow **CORs** in your PHP script.
For example you can take reference of following PHP sample code. I used file name as psapi.php

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
