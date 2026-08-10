---
slug: declarative-ui
title: Declartive UI
authors: [diegoiast]
tags: [announcement]
---

SVision3 is very conservative. Its a retained, imperiveite C++ toolkit. It means
that you build your UI, using objects. You do not "define how it will be built"
like declarative APIs (see QML or Slint).

I did a test - what id we would have a declaraive API? (not a reactive one,
meaning - data would not modify the UI). I started experimenting.

![Declarative](/img/declarative-api.png).

{/* truncate */}

I was impressed - this UI looked cooler and easier to read. On the minimap of
my IDE - I could actually see the the UI tree. The chaining API got a new life
here, being the center of the stage. Everything is chainable.

See how easy is to define a menu/toolbar and center of window (here the root
widget is constructed elsewhere in the code):


``` cpp
window->set_root(
    ui::vbox()
        .margins(ui::no_margins())
        .spacing(ui::no_spacing)
        .add(ui::menubar()
                    .add_menu(
                        ui::menu("&File")
                            .action(new_cmd)
                            .action(open_cmd)
                            .action(save_cmd)
                            .action(export_cmd)
                            .separator()
                            .submenu(
                                "Recent &Files",
                                ui::menu()
                                    .action("&File1.txt", [] { spdlog::info("Opening File1"); })
                                    .action("&File2.txt", [] { spdlog::info("Opening File2"); }))
                            .separator()
                            .action(exit_cmd))
                    .add_menu(ui::menu("&Edit")
                                .action(undo_cmd)
                                .action(redo_cmd)
                                .separator()
                                .action("Cut", [] { spdlog::info("Menu: Cut"); })
                                .action("Copy", [] { spdlog::info("Menu: Copy"); })
                                .action("Paste", [] { spdlog::info("Menu: Paste"); }))
                    .add_menu(ui::menu("&Help")
                                .action("About",
                                        [&window] {
                                            toolkit::MessageBox(window)
                                                .title("About SVision3")
                                                .markdown()
                                                .message("## SVision3\n\n"
                                                        "Declarative API demo application.\n\n"
                                                        "Demo of a C++ **cross-platform** UI "
                                                        "toolkit.")
                                                .show();
                                        })))
        .add(ui::toolbar()
                    .command("OK", [] { spdlog::info("Toolbar: OK"); })
                    .command(exit_cmd)
                    .separator()
                    .command("Disabled", "This command is disabled")
                    .disable()
                    .command("Increase count", "Increase the counter", {}, repeat_action)
                    .add(ui::spacer(), ui::expand)
                    .add(toolbar_theme_toggle)
                    .add(toolbar_theme_combo))
        .add(rootWidget, ui::expand)
```

Then I ported the main demo app into the new declarative API, and the same UI
was written in 200 lines less! Binary size was the same (as this is just
syntactic sugar on top of the imperative API).

Not unlike [Android's Compose API](https://developer.android.com/compose).