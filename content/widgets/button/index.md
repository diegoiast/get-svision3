+++
title = 'Button'
weight = 10
+++ 

This defines a button in the toolkit.

<!--more-->

Buttons can:

1. Have a callback on click.
2. Auto toggle: meaning pressing the button will continue to generate click events
3. Can be disabled.
4. Have an image.
5. Have a menu attached.
6. Have a command attached (clicking it will trigger the command)
7. Have a mnemonic (a shortcut to trigger it when not in focus).
8. Have a flat display. Some themes will render the button without frame
   until you hover the button with your mouse.

## Behaviour

When the users initiates a click - and release the mouse while your mouse is still over
the widget - the callback you defined is called (or action, or both). If user 
moves the mouse ("drag") outside the widget - button state will change to reflect
that releasing the widget will not trigger. Some themes support on hover effects
(when the mouse is on top of the widget, but clicked). 

## Example:

``` C++
auto action = new svision3::Action("Click me", () {
    spodlog::info("Action triggered");
});
auto button = new svision3::Button("Click me")
    .set_repeat(250) // triggers every 250 msec
    .set_action(action)
    .set_flat(true)
    .set_onclick( () {
        spdlog::info("Button pressed");
    });
```




[Back to Widgets](../)
