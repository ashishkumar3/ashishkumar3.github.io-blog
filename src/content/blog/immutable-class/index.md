---
path: '/immutable-class'
title: Immutable Classes in Java
date: 2020-04-25 18:00:00
author: Ashish
tags: ['Java', 'Immutability', 'Class']
---

***

## What is meant by Immutability?
Immutability means something that can't be changed. In java, if we say immutable classes, it means that the classes cannot be changed.

But the question is how do we even make a change in a class? Now, since the classes have state and behaviour in it - meaning it has fields and methods in it. We know that we can override the method implementation using method overriding in java. So, in a way we are changing a class's implementation using inheritence.

#### What we understood?
1. Method implementation can be changed using method overriding, once the class is inherited.
2. Data members can also be changed once we create an object.

#### How to restrict this?
It would be great if we restrict the class itself from getting inherited. So, making a class final would do the job.

Making the fields private can help restricting the access and on top of that we can also make them final so that once initiazed they cannot be changed.

If we have non primitive data members in the class then we can initialize them using the deep copy of the object it gets the value from.

#### let's code it up!
```java
public final class Employee {
    private final int id;
    private final String name;
    private final Map<String, String> domainToProjectsMap;

    public Employee(int id, String name, Map<String, String> domainToProjectsMap) {
        this.id = id;

        String newName = new String(name);
        this.name = newName;

        Map<String, String> map = new HashMap<>();

        for(String key: domainToProjectsMap.keySet()) {
            String value = domainToProjectsMap.get(key);

            map.put(key, value);
        }

        this.domainToProjectsMap = map;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", domainToProjectsMap=" + domainToProjectsMap + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("fintech", "Razorpay");
        map.put("shopping", "Amazon");
        map.put("devops", "Docker");

        String name = new String("ashish");
        int id = 101;
        Employee employee = new Employee(id, name, map);
        System.out.println(Employee);
    }
}
```


