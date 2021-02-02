<?php

namespace LB;

use GuzzleHttp\Client;

class SbssClient
{
  private $authorized = false;
  private $userAgent = 'Sbss-PHP-Client';
  private $username = '';
  private $password = '';
  private $apiKey = [
    'name'  => '',
    'value' => ''
  ];
  private $http;

  public function __construct(string $username, string $password)
  {
    $this->username = $username;
    $this->password = $password;
    $this->http = new Client([
      'cookies' => true,
      'headers' => [
        'User-Agent' => $this->userAgent
      ]
    ]);
  }

  public function request(string $type, array $params)
  {
    $response = $this->http->post('http://sbss-admin.local/', [
      'form_params' => [
        'async' => 1
      ]
    ]);
    if ($response->getStatusCode() === 200 && $response->getBody()) {
      $body = trim($response->getBody()->read(1024), '()');
      $result = json_decode($body);
      $challenge = $result->challenge;
      $hash = sha1($this->username . md5($this->password) . $challenge);
    }
    $test = [
      'login' => $this->username,
      'remember' => 0,
      'authorize' => $hash,
      'async' => 1
    ];
    $response = $this->http->request($type, 'http://sbss-admin.local/', [
      'form_params' => [
        'login' => $this->username,
        'remember' => 0,
        'authorize' => $hash,
        'async' => 1
      ]
    ]);
    $body = trim($response->getBody()->read(1024), '()');

    $test = '';
  }
}
