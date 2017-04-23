<?php
require __DIR__ . '/../vendor/autoload.php';

use Kamatos\Http\Application;
use Kamatos\Http\Controller;
use Kamatos\Http\Provider;

$config = require __DIR__ . '/../config.php';

$app = new Application(['settings' => $config]);

$app->bind('logger', new Provider\LoggerProvider($config['logger']['name'], $config['logger']['handler']));
$app->bind('twig', new Provider\TwigProvider($config['twig']['path'], $config['twig']['cache_path']));
$app->bind(Controller\CalculationController::class, function ($container) {
    $router = $container->get('router');
    $twig = $container->get('twig');
    
    return new Controller\CalculationController($router, $twig);
});

require __DIR__ . '/routes.php';

return $app;
