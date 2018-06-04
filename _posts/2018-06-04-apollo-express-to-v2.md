---
layout: post
title: Incrementally adopt Apollo-server-v2 from Apollo-server-express + GraphQLSchema
tags:
  - apollo
  - graphql
  - node
description: >
  Apollo server v2 is in beta, this article show you how to incrementally
  adopt it from apollo server express, from the use of GraphQLSchema to SDL.
hero: https://images.unsplash.com/photo-1471347334704-25603ca7d537?ixlib=rb-0.3.5&s=7055e589bcccffaf54a05a197e1c1f7c&auto=format&fit=crop&w=1950&q=80
overlay: apollo
published: true
---

## Problem we have

We have a *running in production* apollo server microservices, started from a time where GraphQLSchema Object was the way to go. One year after using it, we wanted to adopt the new apollo server v2, with the GraphQL SDL [^1].
{: .lead}

## Barriers to the full adoption

We don't want to fully adopt apollo server v2 and rewrite our features from our GraphQL 


Etiam porta **sem malesuada magna** mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
<!–-break-–>

> Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta **sem malesuada magna** mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
{: .notice}

## Inline HTML elements

HTML defines a long list of available inline tags, a complete list of which can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

- **To bold text**, use `**To bold text**`.
- *To italicize text*, use `*To italicize text*`.
- Abbreviations, like HTML should be defined like this `*[HTML]: HyperText Markup Language`.
- Citations, like <cite>&mdash; Mark otto</cite>, should use `<cite>`.
- ~~Deleted~~ text should use `~~deleted~~` and <ins>inserted</ins> text should use `<ins>`.
- Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.

Most of these elements are styled by browsers with few modifications on our part.

## Heading

Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

## Code

Cum sociis natoque penatibus et magnis dis `code element` montes, nascetur ridiculus mus.

~~~js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those
// arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
~~~

## Lists

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.

HyperText Markup Language (HTML)
: The language used to describe and define the content of a Web page

Cascading Style Sheets (CSS)
: Used to describe the appearance of Web content

JavaScript (JS)
: The programming language used to build advanced Web sites and applications

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
{: .notice-alert}

## Images

Quisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.

![1200x700](http://placehold.it/1200x700 "Large example image"){:.oversize}
![800x400](http://placehold.it/800x400 "Large example image"){:.lead}
![400x200](http://placehold.it/400x200 "Medium example image")
![200x200](http://placehold.it/200x200 "Small example image")

## Tables

Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

| Name     | Upvotes   | Downvotes |
|----------|-----------|-----------|
| Alice    |        10 |        11 |
| Bob      |         4 |         3 |
| Charlie  |         7 |         9 |
|Totals    |        21 |        23 |

Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.

## Math


Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
Nullam id [^2] dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.

[^1]: Schema Definition Language https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51

[^2]: Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript