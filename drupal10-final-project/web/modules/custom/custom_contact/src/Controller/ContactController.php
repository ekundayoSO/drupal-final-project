<?php

namespace Drupal\custom_contact\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Form\FormBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class ContactController.
 *
 * Provides a page to display the contact form.
 */
class ContactController extends ControllerBase
{

    /**
     * The form builder service.
     *
     * @var \Drupal\Core\Form\FormBuilderInterface
     */
    protected $formBuilder;

    /**
     * ContactController constructor.
     *
     * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
     *   The form builder service.
     */
    public function __construct(FormBuilderInterface $form_builder)
    {
        $this->formBuilder = $form_builder;
    }

    /**
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container)
    {
        return new static(
            $container->get('form_builder')
        );
    }

    /**
     * Renders the custom contact form.
     *
     * @return array
     *   A render array containing the form.
     */
    public function contactForm()
    {
        // Render the custom form within the controller.
        return $this->formBuilder->getForm('\Drupal\custom_contact\Form\ContactForm');
    }
}
