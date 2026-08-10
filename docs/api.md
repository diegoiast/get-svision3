# API design

Developers using this library should feel "confortable" using this API, meaning
it should be consistent. Here are some core designs in for the API:

- Never using naked pointers. New allocations are `std::make_shared` and
  when passed to a container (a window, or layout) you can get back `std::weak_ptr`
- Objects have a `get_...()` method that returns a value, and a `set_...()`
  method that returns a reference to the object.
- API chainability - by default you can always construct a widget (for example)
  with an empty constructor. If you add it to a window, you get back a `weak_ptr`
  and then you can start chaining commands to modify them.
```cpp
using namespace std;
using namespacew toolkit;

auto window = make_shared<Window>();
auto save = toolkit::Command::create("&Save", [] { save_document(); });
save->set_shortcut("Ctrl+S");
save->set_icon("document-save");

// Note that the first call is a pointer, but later on references.
window->add(make_shared<Button>())
    ->set_text("Hello)
    .set_command(save)
    .set_flat(true)
    .on_click = [window](){
        // clicked!
    };
```
- When a component is different per platform, an abstract interface is created.
  Then the platform will give you a concrete implementation, for this platform.
  For example Painters, or ImageLoader.
- All drawing is done via painters. Those a thin wrappers against Cocoa, GDI+,
  Cairo or OpenGL. You should not care about how things are actually drawed.
- Widgets always draw primitives using a theme. This ensures that they will look
  native on each platform.
- Developers using this library, can use the callback functions (meaning those
  should be used in applications). If you are writing a library, leave those
  APIs for consumers of your library. Do not hook `Button::on_click`, but instead
  handle the click events.