<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    // Base URI is used with relative requests
    'base_uri' => 'https://disambelin.com/rest/',
    // You can set any number of default request options.
    'timeout'  => 2.0,
]);

$response = $client->request('GET', 'ppp/secret', ['auth' => ['api', '123456']]);

$body = $response->getBody()->getContents();
$output = json_decode($body, true);
//var_dump($output);
$nomor =1;
echo "<a href=forminput.html>Tambah</a>";
echo "</br>";
echo "</br>";

foreach ($output as $vpn) {
    echo "Nomor: " . $nomor++;
    echo "</br>";
    echo "name: " . $vpn ["name"];
    echo "</br>";
    echo "password: " . $vpn ["password"];
    echo "</br>";
    echo "profile: " . $vpn ["profile"];
    echo "</br>";
    echo "<a href=formedit.php?id=" . $vpn [".id"];
    echo ">edit</a>";
    echo "</br>";
    echo "</br>";

}