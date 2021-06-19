---
path: '/strategy-pattern'
date: '2020-12-16'
title: 'Strategy Pattern'
tags: ['Strategy', 'Design Pattern', 'Java']
excerpt: 'Strategy Pattern with Gatsby and React'
---

***

## Introduction

<mark>The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.</mark>

Easy eh? I know, I know you didn't get a single word. I mean who would understand anything about a design pattern from just a definition. So, let's start learning with examples.

## You just got a new project!

We will be working on a `Cars simulation` game. We start with `car` class in our project.
Every car can be:

- a regular car
- a taxi

Keeping a minimal car functionality in mind we have:

***The Car class***
```java
public class Car {
    public void drive() {
        System.out.println("vroom vroom");
    }

    public void display() {
        System.out.println("This one looks shiny😎");
    }
}
```

As discussed earlier we have 2 types of cars: 
1. Regular Car
2. Taxi

We have already made the `car` class which can act as a super class and using this we can make sub classes. Now let's think about the `Taxis` a bit.

***Taxi***
1. Every taxi is `yellow` in color.

For now let's just stick to this only. The rest of the functionality can be taken from the `Car` class. Keeping everything simple we can now create the `Taxi` class.

```java
public class Taxi extends Car {
    
    @Override
    public void display() {
        System.out.println("Shiny yellow🚕");
    }
}
```
Since the drive functionality is same in both the `Car` and the `Taxi` we only have to override the display method of the `Car` after `inheriting` from the `Car` class.

Let's do the same for the `Regular` car.

***Regular Car***

In our example, regular cars only come in black color. Everything else is good.

```java
public class RegularCar extends Car {
    
    @Override
    public void display() {
        System.out.println("Black color car");
    }
}
```

***Everything looks good, time for a break?***

Just as you thought you got a break after working your ass off on the taxis and regular cars, we got another feature to add. We now have to add an engine in the car. Wait, that's it? Huh! that will take like 10 seconds. I just have to add an engine in the car class.

```java
public class Car {
    public void drive() {
        System.out.println("vroom vroom");
    }

    public void display() {
        System.out.println("This one looks shiny😎");
    }

    public void engine() {
        System.out.println("Car engine");
    }
}
```

Everything works fine here. The `Taxi` and the `Regular` car both inherits the engine from the `Car` class. But wait! There is something wrong here. You are about to get kicked out of the company because you accidently added an engine to a `Toy` car and now all the toy cars are moving at 60 miles/hour and everyone is pissed because of your stupid mistake.

But what exactly went wrong? We added the engine to the `Car` class and there can a lot of other types of cars as well and not every car needs an engine right? So can we still make it work? Let's override the engine method in the `Toy` car class. There we can make it such that it does not require an engine.

```java
public class ToyCar extends Car {
    
    @Override
    public void display() {
        System.out.println("Cute little car");
    }

    @Override
    public void engine() {
        System.out.println("No engine required");
    }
}
```
Pro coder 😎!

This works fine. The system have started to work back fine after the changes made. Well, you're not going to like this, but there is another issue here😭. We just got a call from the project manager and the manager wants 2 more types of cars.

Now, you must be like how is this an issue🤔? You've found the way to inherit the `Car` class such that you can override the methods that needs to be changed.

Now, its your job to add those cars and with your current approach you will have to `override` the methods that needs to be changed in every class. So, the code would look something like this.

```java
public class SportsCar extends Car {
    @Override
    public void engine() {
        System.out.println("Super car engine😎");
    }
    @Override
    public void display() {
        System.out.println("Looks expensive🤑");
    }
}

public class Sedan extends Car {
    @Override
    public void engine() {
        System.out.println("Better car engine");
    }
    @Override
    public void display() {
        System.out.println("Black color car");
    }
}
```

DONE!

Did you notice something? The `Sedan` car is black in color and we have `Regular` car color as black as well. This generates `duplicate code` in our project. Now, you must be saying a ***single line of duplicate code***? Who cares? I can change the code in these files. But Imagine you have 100s of cars and they have matching functionality. How are you going to manage this code with this approach?

You must have got the idea that the approach we are using right now is not feasible.

***What else can we do?***

How about we add the particular functionality to only the classes that need it. In this way, we don't have to override the `Car` class. This can be accomplished with **Interfaces**!

> Program to an interface, not an implementation!

If you remember, an Interface is used to implement complete abstraction. So, we only specify the method declaration and the classes that implements them, have to give the definition for those methods.

Now this helps in seperating our implementations. So, the question comes, what interfaces to make and which methods to add in those interfaces?

> Identify the aspects of your application that vary and separate them from what stays the same.

Only the `drive` method is not changing throughout the project, so that will remain the same and now we can move display and engine method to the interfaces.

> Interfaces follow a naming convention where their name end with -able. This means something which implements it, is <mark>able</mark> to do that.

***Displayable and Enginable Interfaces***

As the name suggests, something which is able to be displayed or something which is able to be enginable. The classes which will implement this, can then override the method.

```java
public interface Displayable {
    void display();
}

public interface Enginable {
    void engine();
}
```

That's it! But we did used this earlier too right? I mean with the `Car` class, we had overriden the methods and same thing we are doing here! `Override` methods?
<!-- Rephrase it! -->
There we had a concrete implementation, i.e. a concrete class `Car` had the methods and if we have a class that extends the concrete class but has a different functionality, we need to make changes in those. So, this was an issue.

Now that I have `Displayable` and `Enginable` interfaces, I can create multiple implementations and then use the implementation that suits our need.

***Let's start building implementations!***

Before we start writing the code, the implementations of the interfaces in strategy pattern usually have a slight different naming convention. These are called `Strategies`. So, if you have an interface called `Enginable`, the strategy will be called `SomeEngineStrategy`. This obviously depends on the type of engine. So, we can use this type of strategy wherever we need this specific type of engine.

```java
public class RegularEngineStrategy implements Enginable {
    @Override
    public void engine() {
        System.out.println("Regular car engine");
    }
}

public class SportsEngineStrategy implements Enginable {
    @Override
    public void engine() {
        System.out.println("Sports car engine");
    }
}

public class NoEngineStrategy implements Enginable {
    @Override
    public void engine() {
        System.out.println("No engine");
    }
}
```

Same for Display -

```java
public class YellowDisplayStrategy implements Displayable {
    @Override
    public void display() {
        System.out.println("Yellow car");
    }
}

public class BlackDisplayStrategy implements Displayable {
    @Override
    public void display() {
        System.out.println("Black car");
    }
}
```

To use these implementations, think it this way. Every `Taxi` *has a* `Yellow` display and every `Sports` car *has a* `Sports engine` but every `Taxi` and `Sports` car *is a* car.

***is a - relationship***

This is used in parent child relations. That is, one class extends the other.

***has a - relationship***

This is used in composition. That means that we have fields inside the class that it is dependent on. These fields are the implementations. This is generally better than inheritance.

***Car class updated***

```java
public class Car {

    Displayable displayable;
    Enginable enginable;

    public void drive() {
        System.out.println("vroom vroom");
    }

    public void display() {
        displayable.display();
    }

    public void engine() {
        enginable.engine();
    }
}
```

Similarly, our cars will also be updated. Let's take the sports car example.

```java
public class SportsCar extends Car {
    public SportsCar() {
        displayable = new BlackDisplayStrategy();
        enginable = new SportsEngineStrategy();
    }
}
```

Finally our main class where we will test the functionality.

```java
public static void main(String[] args) {
    Car sportscar = new SportsCar();
    sportscar.display(); // outputs - Black car
    sportscar.engine(); // outputs - Sports engine
}
```

That's it! You have implemented the `strategy pattern`. Now let's go back to the definition we have on the first line. Let's break it and try to understand it.

<mark>The Strategy Pattern defines a family of algorithms</mark>: Which in our case are the different strategies.

<mark>Encapsulates each one</mark>: Inside the strategy classes.

<mark>Makes them interchangeable</mark>: With the help of interfaces. 

<mark>Strategy lets the algorithm vary independently from clients that use it</mark>: can vary because of interfaces and composition.

If you liked it, you might want to check out my [Observer Pattern acrticle](https://ashishkumar3.github.io/blog/observer-pattern)

***

<mark>*The references are taken from the book 'Head first design patterns'.*</mark>

Found a mistake? [edit](https://github.com/ashishkumar3/blog/blob/master/src/content/blog/strategy-pattern/index.md) on github.