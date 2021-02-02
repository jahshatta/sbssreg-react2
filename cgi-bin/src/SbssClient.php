<?php
namespace LB;
use GuzzleHttp\Client;

class SbssClient
{
  private $authorized = false;
  private $userAgent = 'Sbss-Perl-Client';
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
    $this->http = new Client(['cookies' => true]);
  }

  public function request(string $type, array $params)
  {
    $response = $this->http->post('http://sbss-admin.local/', [
      'form_params' => [
        'async' => 1
      ]
    ]);
    if($response->getStatusCode() === 200 && $response->getBody) {
      $body = trim($response->getBody()->read(1024), '()');
      $result = json_decode($body);
    }
    $test = $response->getStatusCode();

    $test = '';
  }
}