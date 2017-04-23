<?php
namespace Kamatos\Http\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Interfaces\RouterInterface;
use Slim\Views\Twig;

/**
 * Description of CalculationController
 * 
 * @author Balázs Máté Petro <petrobalazsmate@gmail.com>
 */
class CalculationController
{
    /**
     * @var RouterInterface
     */
    private $router;
    
    /**
     * @var Twig
     */
    private $twig;
    
    /**
     * 
     * @param RouterInterface $router
     * @param Twig $twig
     */
    public function __construct(RouterInterface $router, Twig $twig)
    {
        $this->router = $router;
        $this->twig = $twig;
    }
    
    public function index(ServerRequestInterface $request, ResponseInterface $response)
    {
        return $this->twig->render($response, 'calculation/form.html', [
            'formUrl' => $this->router->pathFor('calculationResult')
        ]);
    }

    public function result(ServerRequestInterface $request, ResponseInterface $response)
    {
        return $this->twig->render($response, 'calculation/result.html');
    }
}
