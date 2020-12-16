---
path: '/strategy-pattern'
date: '2020-11-14'
title: 'Strategy Pattern'
tags: ['Strategy', 'Design Pattern', 'Java']
excerpt: 'Strategy Pattern with Gatsby and React'
---

***

## Introduction

<mark>The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.</mark>

Easy eh? I know, I know you didn't get a single word. I mean who would understand anything about a design pattern from just a definition. So let's start with learning with examples.

## You just got a new project!

We will be working on a `Cars simulation` game. We start with `car` class in our project.
Every car can be used:

- as taxis
- by regular people

So how do you want to start the project? See, we know that we will be working a lot with cars in this project so let's start with the car class itself. Keeping a minimal car functionality in mind we have:

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

As discussed earlier we have 3 types of cars: 
1. Taxis
3. Regular use

We have already made the `car` class which can act as a super class and using this super class we can make sub classes. Now let's think about the `Taxis` a bit.

***Taxi***
1. Every taxi is `yellow` in color.

For now let's just stick to this only. The rest of the functionality can be taken from the `Car` class. Keeping everything simple we can now create the `Taxi` class.

```java
public class Taxi implements Car {
    
    @Override
    public void display() {
        System.out.println("Shiny yellow🚕");
    }
}
```
Since the drive functionality is same in both the `Car` and the `Taxi` we only have to override the display method of the `Car` after `inheriting` from the `Car` class.

Let's do the same for the `Regular` car.

***Regular Car***
In our example regular cars only come in black color. Everything else is good.

```java
public class RegularCar implements Car {
    
    @Override
    public void display() {
        System.out.println("Black regular car");
    }
}
```

***Everything looks good, time for a break?***
Just as you thought you got a break after working your ass off on the taxis and regular cars, we got another feature to add. We now have to add engine in the car. Wait, that's it? Huh! that will take like 10 seconds. I just have to add engine in the car class.

```java
public class Car {
    public void drive() {
        System.out.println("vroom vroom");
    }

    public void display() {
        System.out.println("This one looks shiny😎");
    }

    public void installEngine() {
        System.out.println("Car engine");
    }
}
```

Everything works fine here. The `Taxi` and the `Regular` car both inherits the engine from the `Car` class. But wait! There is something wrong here. You are about to get kicked out of the company because you accidently added an engine to a toy car and now all the toy cars are moving at 60 miles/hour and everyone is pissed because of your stupid mistake.

But what exactly went wrong? We added the engine to the `Car` class and there can a lot of types of car and not every car needs an engine right? So can we still make it work? let's override the installEngine method in the `Toy` car class. There we can make it such that it does not require an engine.

```java
public class ToyCar implements Car {
    
    @Override
    public void display() {
        System.out.println("Cute little car");
    }

    @Override
    public void installEngine() {
        System.out.println("No engine required");
    }
}
```

This actually works fine. The system have started to work back fine after the changes made. Well, you're not going to like this. But there is another issue here😭. We just got a call from the project managers and they want 3 more types of cars. Now, its your job to add those cars and with your current approach you will have to `override` the engine method in every class. 3 cars are still fine. Imagine you have 100 of cars. Out of these 

***