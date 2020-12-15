---
path: '/dependency-injection'
title: Dependency Injection
date: 2020-04-29 18:39:00
author: Ashish
tags: ['Java', 'Dependency Injection', 'Spring']
---
***
## Introduction

<mark>Dependency injection means to provide an object, the instance variables that it is dependent on</mark>. That's it! Let's take a simple example.

![Dependency Injection](https://ashishkumar39.github.io/blogs/dependency-injection.jpeg "Dependency Injdection diagram")

## Using a simple approach

Let's say we want to make a drawing app. Using this we can draw triangles on the screen. Let's make the <mark>_Triangle_</mark> class for this. Here, we will have 3 instance variables(fields) as our points(coordinates).

```java
class Triangle {
  Point a; // highlight-line
  Point b; // highlight-line
  Point c; // highlight-line
  
  public void draw() {
    System.out.println("Drawing a triangle on: ("
    + a.x + ", " + a.y + "), (" 
    + b.x + ", " + b.y + "), (" 
    + c.x + ", " + c.y + ")");
  }
}
```

These coordinates are of type Point and it's class looks something like this -

```java
class Point {
  int x;
  int y;
  
  public Point(int i, int j) {
      x = i;
      y = j;
  }
}
```

Now the question comes, where will we initialize the values for the co-ordinates of the traingle? Should I initialize the Points in the Triangle class itself or make another class(something like a main class?) and initialize the points there? Let's start with initializing the Points in the Triangle class first. This is how it will look.

```java
class Triangle {
  Point a = new Point(0, 1); // highlight-line
  Point b = new Point(1, 2); // highlight-line
  Point c = new Point(0, 0); // highlight-line
  
  public void draw() {
      System.out.println("Drawing a triangle on: ("
                          + a.x + ", " + a.y + "), (" 
                          + b.x + ", " + b.y + "), (" 
                          + c.x + ", " + c.y + ")");
  }
}
```

Easy right? Now I can easily draw my triangles with this code :D But there is something really awful here :P The thing is there is something called Seperation of Concerns. It is a design principle which says that every section of your code should handle seperate concerns and if something is not it's job to handle then it should not care about that. In our example we are doing exactly the opposite. It is not the job of Triangle class to initialize the Point objects. It's only job is to take 3 Points and draw a Triangle.

But wait? why should I care about that? It's works anyways right? Well yes, for now. But as the application grows it becomes really difficult to manage such code. The practice we are following right now is called strong coupling. Which is consided a really bad practice. It means we are tying together our Triangle class with our Point class such that our Traingle class is responsible for creating the objects for the Point class. Which is not it's concern.

## What else can I do?

What about the other option we talked about earlier? Make another class and there initialize all the objects we need in the Triangle class. Now I no longer need the initializations in the class itself therefore I will need either a constructor to initialize the values for the Points or setter methods.

```JAVA
class Triangle {
    Point a;
    Point b;
    Point c;
    
    public Triangle(Point x, Point y, Point z) {
        a = x;
        b = y;
        c = z;
    }
  
    public void draw() {
        System.out.println("Drawing a triangle on: ("
                           + a.x + ", " + a.y + "), (" 
                           + b.x + ", " + b.y + "), (" 
                           + c.x + ", " + c.y + ")");
    }
}
```

The constructor here is used to inject the values to the Points. Now we will use this constructor(make an object) in our Main class and provide the required dependencies for the class Triangle.

```java:title=Main.java
class Main {
    Point a = new Point(1, 2);
    Point b = new Point(2, 2);
    Point c = new Point(1, 0);

    Triangle triangle = new Triangle(a, b, c);
    triangle.draw();
}
```

**Output -**

![Output](https://ashishkumar39.github.io/blogs/dependency-injection-output1.png)

This is also called Constructor Injection since we are injecting the objects through the constructor. Similarly if we inject the objects using Setter Injection in which we use the setter methods to inject the dependencies. These are the 2 types of the Dependency Injection.

```java
class Triangle {
    Point a;
    Point b;
    Point c;
    
    public Triangle(Point x, Point y, Point z) {
        a = x;
        b = y;
        c = z;
    }
    
    /*
    * Setter methods
    */
    public void setA(Point x) {
        a = x;
    }
    
    public void setB(Point y) {
        b = y;
    }
    
    public void setC(Point z) {
        c = z;
    }
  
    public void draw() {
        System.out.println("Drawing a triangle on: ("
                           + a.x + ", " + a.y + "), (" 
                           + b.x + ", " + b.y + "), (" 
                           + c.x + ", " + c.y + ")");
    }
}
```

Using the setters to initialize the Points will also produce the exact same result.

## Conclusion

So here we injected the Points to the Triangle object and that's it! This is dependency injection :D There are some frameworks which takes this to another level by automatically providing all the dependency on it's own. For example, Spring Framework uses Inversion of Control which handles the injection of the dependencies so that you only have to create any objects at all in your application!

Checkout my Dependency Injection in Spring Framework article!

Found a mistake? [edit](http://google.com) on github.
***

