+++
date = '2026-06-11T20:49:01+03:00'
draft = false
title = 'History'
+++

When I started coding my first programming environment was Turbo Pascal.
I started coding games (see https://web.archive.org/web/19990203031917/http://www.geocities.com/SiliconValley/Vista/1595/)
and I also found [Turbo Vision](https://tvision.sourceforge.net/). I was learning
using [Denthor's VGA Training programs](https://nambafa.com/tutorials-computer-graphics.php?series=denthor&part=1)
and PCGPE (see [original link on wayback](https://web.archive.org/web/20201111164240/http://bespin.org/~qz/pc-gpe/) and 
[modern mirror](https://bespin.org/~qz/pc-gpe/)).

At some point I decided to code svision - a "recreation of Turbo Vision" in SVGA.
This was still an MSDOS TP7 library. I always wanted to revisit this project. I
was thinking of porting this to modern architecture using pascal... but eventually
decided on a fresh port, re-writing in C++ using modern toolchains. 

The main trigger was [Fenster](https://github.com/zserge/fenster). This gave
me an idea how this can be implemented. Thus was born SVision2 - still available. 
See https://github.com/diegoiast/svision2.

From that project, this new one got revived - svision3. I took it as a concept
and run along. Lots of code in SVision3 is written using LLMs, and some parts
are just copies (as in I just copied the file) and others took inspiration from
both Qt, SVision2 and modern needs.