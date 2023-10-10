---
path: '/spring-annotations/'
title: Spring Annotations
date: 2020-12-13 18:39:00
author: Ashish
tags: ['Java', 'Annotations', 'Spring']
---

***

## Introduction

Annotations were introduced in java so that we don't have to work on xml based configurations. Which one is the better approach? Well, the answer is not clear. <mark><a href="https://stackoverflow.com/questions/182393/xml-configuration-versus-annotation-based-configuration?noredirect=1&lq=1" target="_blank">It depends</a></mark>.

**Configuration**

To register beans we can make individual bean definitions like we did earlier, but they can be registered in a shorter way by using the context namespace. This helps us to configure the annotations with just one line of code.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        https://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/> // highlight-line
</beans>
```

## Annotations

1. **@Required**

The <mark>@Required</mark> annotation make sure that the object on which it is applied to is not null at the time of configuration. Throws an exception when null.

As of Spring 5.1 <mark>@Required</mark> annotation is deprecated.

```java
private Color color;

@Required
public void setColor(Color color) {
    this.color = color;
}
```

2. **@Autowired**

The <mark>@Autowired</mark> annotation can be applied to the constructor of the class.

```java
public class ColorBook {
    private Color color;

    @Autowired
    public ColorBook(Color color) {
        this.color = color;
    }
}
```

If a class has multiple constructors and none of them has the <mark>@Autowired</mark> then primary constructor will be used if present.

We can also apply the annotation to setter methods, instance variables and constructors.

```java
public class Game {
    @Autowired // instance variable autowiring
    private Player player;
    private Environment env;
    private Scoreboard scoreboard;

    @Autowired // setting the environment with autowiring in the constructor
    public Game(Environment env) {
        this.env = env;
    }

    @Autowired // setting the scoreboard with autowiring in the setter
    public void setScoreboard(Scoreboard scoreboard) {
        this.scoreboard = scoreboard;
    }
}
```

We can also use the annotation to provide beans in an array or collection. The map collection can be autowired but only if the key is of type <mark>String</mark>.

The default behaviour is making the fields required but if in any case we want to annotate a non required field as autowired then we can apply the required attribute in the <mark>@Autowired</mark> annotation as <mark>false</mark>.

```java
public class Player {
    private Power power;

    @Autowired(required = false)
    public Player(Power power) {
        this.power = power;
    }
}
```

3. **@Primary**

This annotation states that a particular <mark>bean</mark> should be given preference when there are multiple beans to be autowired to a single type of dependency.

```java
@Configuration
public class EnvironmentConfig {
    @Bean
    @Primary
    public Environment minimalEnvironment() {
        // ...
    }

    @Bean
    public Environment modedEnvironment() {
        // ...
    }
}

public class EnvironmentManager {
    @Autowired
    private Environment environment;
}
```

This will autowire the minimal environment as it is annotated as primary. Similar can be done in xml configuration as well.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        https://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>

    <bean class="com.ashish.Environment" primary="true">
    </bean>

    <bean class="com.ashish.Environment">
    </bean>

    <bean id="environmentManager" class="com.ashish.EnvironmentManager"/>
</beans>
```

4. **@Qualifier**

<mark>@Qualifier</mark> annotation is also use to match the dependency just like <mark>@Primary</mark>, but in @Primary we can only work on dependencies of same type where as in @Qualifier we provide a value using which we can seperate the dependencies.

`spring` `annotations`