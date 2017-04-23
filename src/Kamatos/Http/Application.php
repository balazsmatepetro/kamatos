<?php
namespace Kamatos\Http;

use Kamatos\Provider\ProviderInterface;
use Slim\App as SlimApplication;
use Slim\Exception\ContainerException;

/**
 * Description of Application
 *
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
class Application extends SlimApplication
{
    public function bind($name, $callback)
    {
        $container = $this->getContainer();
        
        if ($container->has($name)) {
            throw new ContainerException('The service \'' . $name . '\' has been provided earlier!');
        }
        
        if (is_object($callback) && $callback instanceof ProviderInterface) {
            $container[$name] = function ($container) use ($callback) {
                return $callback->provide($container);
            };
        } elseif (is_callable($callback)) {
            $container[$name] = $callback;
        } else {
            throw new ContainerException('Invalid service (' . $name . ')!');
        }
    }
}
