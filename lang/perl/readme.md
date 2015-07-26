# ok, lets install perl

To install perl go

    http://learn.perl.org/

and will point you to do

    curl -L http://xrl.us/installperlosx | bash

It takes a while. To confirm that everything went well do `perl -v` which, have to say, nicely says some useful stuff.

    perl -v                                                                   v1.5.0

    This is perl 5, version 16, subversion 0 (v5.16.0) built for darwin-2level
    (with 1 registered patch, see perl -V for more detail)

    Copyright 1987-2012, Larry Wall

    Perl may be copied only under the terms of either the Artistic License or the
    GNU General Public License, which may be found in the Perl 5 source kit.

    Complete documentation for Perl, including FAQ lists, should be found on
    this system using "man perl" or "perldoc perl".  If you have access to the
    Internet, point your browser at http://www.perl.org/, the Perl Home Page.

That may be very verbose if you try to just know the version of perl though :D.

# hello world

I've found the approach of this site:

    http://www.learnpython.org/

very appealing on how to learn languages. This are the bullet points:

- Hello, World!
- Variables and Types
- Lists
- Basic Operators
- String Formatting
- Basic String Operations
- Conditions
- Loops
- Functions
- Classes and Objects
- Dictionaries
- Modules and Packages

That is true for any language, maybe I'll add more later on. Added the list above to the main readme file (which should be at ../readme.md)

## Hello world

Ok, the hello world looks like this:
````perl
use strict;
use warnings;

print "hello world\n";
````

I've also played around with the  `"` and it seens that not using them
makes the line not to terminate printing this

    hello world\n%

instead of

    hello world

So that's some simple but already funky business.

## 
