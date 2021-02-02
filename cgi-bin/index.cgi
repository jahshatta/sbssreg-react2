#!/usr/bin/env php
<?php

require __DIR__ . '/vendor/autoload.php';

use LB\SbssClient;

$sbssClient = new SbssClient('admin', 'admin');
$sbssClient->request('post', [
    'cmd' => 'clients',
    'token' => 123
]);
