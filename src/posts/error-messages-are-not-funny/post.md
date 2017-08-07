I’m at that age now where all my friends are into having babies. Because of this, I ended up browsing [kidly.co.uk](kidly.co.uk). It’s an eCommerce site aimed at gifts for 0-4-year-olds. They do a great job of selling themselves as a ‘by people for people’ kind of company. There are fluffy images of the team looking happy. The about us section is full of references to parenting so that people can relate.

I get this type of marketing. It’s smart. It bypasses your brain's neocortex and buries itself deep into your emotional core. If you relate to these people, and they seem like you, you’re more likely to buy from them. It’s genius.

I don't have a problem with this type of marketing, until it begins to encroach on the user experience. 

On the page that asked for my details, I hit the submit button on the form without entering my phone number. I was then faced with the following red validation error, placed below the field I had left out.

> Oops, you forgot to pop in your number! Don’t be shy.

There are so many things wrong with this error message, and it caused a bit of a debate when I tweeted about it. You can [view this conversation on twitter](https://twitter.com/abbott567/status/867654758588440576).

Out of curiosity, I deleted everything and hit submit again to see the full extent of the problem. The following screenshot shows the error messages in all their glory. For the sake of this post, I’m going to focus on the mobile number field.

![A screenshot of kidly.co.uk's website. It shows 3 text fields for recipient name, your mobile and recipient address. The error messages in red read: Please enter a recipient name. Oops, you forgot to pop in your mobile number, don't be shy. And, Doh! We need this to know where we're going.](/images/error-messages-are-not-funny.jpg "Screenshot of kidly.co.uk's error messages")

Problem 1 - Making assumptions about behaviour

It suggests I forgot to enter my number. But I didn’t. I deliberately didn’t enter my phone number, because I didn’t want to. Particularly because buried in the privacy policy you can find the phrase: 

> From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.

What if I didn’t own a mobile phone? What if I couldn’t remember my number? By making this field mandatory, they were already excluding a set of users. They’re saying, ‘If you don’t give us a phone number to spam you with, you can’t buy this stuff you wanted.’

If you’re truly doing user centred design, only ask for information that is essential. By forcing people to enter a mobile number for marketing purposes, you are designing for the needs of the business. This will make people drop out before paying you any money.

A solution is to not ask for the mobile number, or at the very east make it optional and tell the user exactly why you want it.

Problem 2 - Assuming personality

“Don't be shy.” Well, this is a bit insulting. I wasn't shy. I was trying to pay for my stuff! We're not on a first date. I'm not even using Tinder. It’s a website, where you offer products and I buy the ones I want. Making assumptions about peoples reasons for omitting something is an absolute minefield.

A solution here would be to delete this immediately. Then, have a quiet word with yourself for thinking it was a good idea in the first place.

Problem 3 - Using idioms

‘Pop’ in your number? How do you ‘pop in’ a number? This type of language is known as an idiom. It means you have no way of working out what it means without anybody teaching you explicitly.

This type of language can lead to difficulties. It is particularly difficult for people who speak English as a second language, and those on the Autistic spectrum. Those with autism can take things quite literally. Phrases such as ‘Over the moon’ and ‘raining cats and dogs’ can be confusing and stressful. It places them under unnecessary cognitive load.

A better solution is to tell the user exactly what they need to do to progress. If you need a phone number and there is no way round it, then explain that. The phrase ‘enter a phone number’ leaves no ambiguity as to what the user needs to do.

Problem 4 - Humour

The language tries to sound light hearted. It’s trying to be amusing.

In the twitter debate, somebody asked the following question. 

> “Do you wonder if it breaks the user's frustration and makes them chuckle?” 

No. I don’t think it does. I have no user need to be entertained. I have no user need for a chuckle during the checkout process. My need at this point is still very much to buy a gift for my friend's new child. And if I don't understand what the error message is telling me, it’s going to make the process even more frustrating.

The solution to this again is to tell the user exactly what they need to do to progress, using as few words as possible.

Problem 5 - Inaccessible markup

They have positioned the message telling you what is wrong below the field. Imagine you can’t see the screen and you’re using a screen reader. You will have to navigate past the thing you need to fix to find out what you did wrong. Then, you have to go back up the page again to edit the field, and this can be disorientating.

The solution to this is to inform the user there has been a problem. Then to give a summary to what they need to do to fix it along with clear and concise error messages on each field.

I’m going to base the next example on the design pattern we use for errors and validation in Government. You can view the GDS pattern for errors on the GOVUK elements site.

The first thing needed is an error heading. This can be something like “There’s been a problem.” It should be the first thing in the main tag on the page. This lets the screen reader immediately inform the user when the page has reloaded.

Wrap it in a div and add a tab index of -1. This allows you to fire some javascript on document ready to set the focus. This ensures that the error heading is the first thing read out. By default, only links and form elements are focusable. But, adding a tab index of -1 to anything else allows you to focus it them using javascript. Because it's -1, it wont add it to the usual flow of links and form elements that happens when you hit the tab key. For example:

``` html
  <div id=“error-summary” tabindex=“-1”>
    <h1>There’s been a problem</h1>
  </div>
```

``` javascript
// jQuery
$(document).ready(function() {
    $(‘#error-summary’).focus();
});
```

Next, add a list of the errors. If I’ve made errors, list them at the top of the page. This helps understand how many issues there are and how to fix each one before I even attempt to navigate the page. For example:

``` html
  <div id=“error-summary” tabindex=“-1”>
    <h1>There’s been a problem</h1>
    <p>Check the following:</p>
    <ul>
        <li><a href=“#mobile-number”>Mobile number cannot be blank</a></li>
    </ul>
 </div>
```

Last but not least. Position your error messages between the label and the input instead of underneath. This gives it a more natural flow and means I don’t have to navigate past the input to find out what’s wrong. For example: 

``` html
  <div class=“form-group error”>
    <label for=“mobile-number”>
        Mobile number
        <span>Enter your mobile number</span>
    </label>

    <input type=“text” id=“mobile-number” />
  </div>
```

Now, when the page loads, the screen reader will automatically focus the error summary. Read out there’s been a problem. Give you a list the problems in a concise manner, and link each list item to the input.

As always, I'm happy to discussing anything I've written about in more detail, just drop me a tweet.