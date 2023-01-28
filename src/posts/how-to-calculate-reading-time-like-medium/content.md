---

title: How to calculate reading time, like Medium
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    How to calculate the reading time for your users on blog posts. Like medium.
  image:
    href: /images/share-image-1.webp
    alt: Craig Abbott talking at a conference.
date: 2016-03-31
tags:
  - design
excerpt: |
  Recently, I took a leaf out of Medium's book and decided to add the estimated reading time to my blog posts. This was so that people could decide whether they had enough time to commit to the post before reading it.

  The task was pretty simple. It was only 7 lines of JavaScript. I wrote it and implemented it in a single train journey to Leeds.

  When I tweeted about it, I got a request to write an explanation of the code. So here it goes!
---

# {{title}}

Recently, I took a leaf out of Medium's book and decided to add the estimated reading time to my blog posts. This was so that people could decide whether they had enough time to commit to the post before reading it.

The task was pretty simple. It was only 7 lines of JavaScript. I wrote it and implemented it in a single train journey to Leeds.

When I tweeted about it, I got a request to write an explanation of the code. So here it goes!

Below is the function. I'll go through each line of code and explain in detail what it does, so even if you're not using Node or Javascript, you can reverse engineer it for your language of choice.

``` javascript
function readingTime (text) {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minute read`
}
```

## Step 1 - Declaring the function

The first line sets up the function, giving it the name `readingTime`. It also tells it to expect an input which it can refer to as `text`.

The `text` variable will be your article or blog post, as a string, that you want to calculate the reading time on.

```javascript
function readingTime(text) {}
```

## Step 2 - Setting the number of words per minute

The next step is to create a variable called `wordsPerMinute`, and set it to 200. The value is 200, because according to Google, that's the average number of words per minute a person can read.

It's obviously not going to be the same for everybody, but it seemed like a decent punt. In testing, Medium assumes you can read more. Their read time calculations were substantially faster than my calculations.

I assume this is so that people aren't put off reading stuff on their platform, but I've gone for a more realistic approach.

I've used `const` to declare my variables as I'm using ES6 syntax, but you can also use `var` if you prefer.

``` javascript
function readingTime(text) {
  const wordsPerMinute = 200
}
```

## Step 3 - Calculating the number of words

The next step is the most complex. It's where we take the text and then calculate how many words it contains. There's actually 3 separate steps all chained together.

First, we call the `.split()` method. We can call this on any string. It works by breaking the string up on a specific character you pass in, and it returns an array.

For example, `'I-am-Craig'.split('-')` would return an array of `['I', 'am', 'Craig']`. This is because I told it to split on a hyphen, so it went through and used the hyphens as the marker to create the array.

The problem is, article text isn't joined by hyphens. It will be joined by spaces, tabs, new lines, returns etc. So we're going to need to tell it to split on more than one thing. To do this, we use a regular expression, also known as regex.

A regex will match a pattern rather than a single character. To define a regex, we put a pattern inside of two forward slashes. The pattern I used was `\s`. This stands for whitespace, and it will match spaces, tabs, returns and newlines.

However, `/\s/` would actually stop after finding the first whitespace character. So, we put a `g` after the closing slash, which stands for global. This tells the regex to keep going to the end even if it has found a match.

If you want to learn more about regex, You can play with patterns at [regex101.com/](https://regex101.com/#javascript), and you can do an online course for free at [Codecademy](https://www.codecademy.com/courses/javascript-intermediate-en-NJ7Lr/0/1).

Once we have our regex pattern, we pass that into the `split()` method from earlier. This will use any whitespace characters to break up the text, and return an array of all the words.

Now, the last step is to count all the words in the array. To do that, we use the `.length` property. This can be called on any array and will return a number. For example, our array from earlier `['I', 'am, 'Craig'].length` would return `3`.

Chain them all together and it will give you the number of words in your text.

``` javascript
function readingTime(text) {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
}
```

## Step 4 - Calculate the read time in minutes

In this step, create another new variable called minutes. 

Set it to be the number of words divided by the words per minute. This will calculate the average read time based on our 200 word per minute estimate from Google.

For example, `400 words / 200 words per minute` would equal `2 minutes`.

``` javascript
function readingTime(text) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
}
```

## Step 5 - Rounding up the read time

Whenever you're doing division, it's likely you won't get nice round numbers. You will usually end up with a decimal. We don't want to tell somebody it will take them 3.34 minutes to read an article, so we round the number. 

I've used the `.ceil()` method to do this. This stands for ceiling, and it will round any decimals up to the nearest whole number. Because we're using ceiling it will only round up.

Example:
``` javascript
Math.ceil(1)   // 1
Math.ceil(1.1) // 2
Math.ceil(1.9) // 2
Math.ceil(2)   // 2
```

I chose to round up, as I thought it was better to over estimate than to under estimate. If you want to round down you can use `.floor()` instead of `.ceil()`.

The only downside of using ceiling, is that passing in one word would still return a read time of 1 minute. However, I don't plan on doing any 1 word blog posts, so it shouldn't affect me.

``` javascript
function readingTime(text) {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
}
```

## Step 6 - Return and finish

Now that you have your rounded time in minutes, the last step is to return it from your function. To make it more readable, I've added some words so if our read time was `2`, the function would return `2 minute read`.

I've used backticks to declare my string, but you can do it using `readTime + ' minute read'` if you prefer.

``` javascript
function readingTime(text) {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minute read`
}
```

## Step 7 - Using your function

Now that we've got our function, we can call it by passing in any string to get a read time.

``` javascript
const post = 'This is a test post'
readingTime(post) // returns 1 minute read
```

If you have any more questions, as always just reach out!
