<?php

use Kamatos\Http\Controller\CalculationController;

$app->get('/', CalculationController::class . ':index')->setName('calculationForm');

$app->get('/szamitas-eredmenye', CalculationController::class . ':result')->setName('calculationResult');