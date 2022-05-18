# Loop Back Context Notes

TODO: 

[https://loopback.io/doc/en/lb4/core-tutorial.html](https://loopback.io/doc/en/lb4/core-tutorial.html)

## Loop Back 4 Context

Honestly I have no idea what I just learned. Hopefully this clicks when I encounter new challenges in monorepo

[https://loopback.io/doc/en/lb4/Context.html](https://loopback.io/doc/en/lb4/Context.html)

> **inversion of control** (**IoC**) is a programming principle. IoC inverts the [flow of control](https://en.wikipedia.org/wiki/Control_flow) as compared to traditional control flow.  [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming): in traditional programming, the custom code that expresses the purpose of the program [calls](https://en.wikipedia.org/wiki/Function_call#Main_concepts) into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.
> 

—[https://en.wikipedia.org/wiki/Inversion_of_control](https://en.wikipedia.org/wiki/Inversion_of_control)

## Inject

> However, when using classes, LoopBack provides a better way to get at stuff in the context via the `@inject` decorator:
> 

```bash
import {inject, Application} from '@loopback/core';

const app = new Application();
app.bind('defaultName').to('John');

export class HelloController {
  constructor(@inject('defaultName') private name: string) {}

  greet(name?: string) {
    return `Hello ${name || this.name}`;
  }
}
```

> Notice we just use the default name as though it were available to the constructor. Context allows LoopBack to give you the necessary information at runtime even if you do not know the value when writing up the Controller. The above will print `Hello John` at run time.
>