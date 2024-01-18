---
title: Web Chat accessibility considerations
date: 2023-12-05
dateModified: 2023-12-05
tags:
  - accessibility
meta:
  description: >-
    A guide on accessibility considerations for web chat development.
eleventyComputed:
  permalink: '/blog/{{title|slugify}}/'
  imgPath: '/posts/{{title|slugify}}/images'
  meta:
    image:
      name: 'share-image'
      extension: 'jpg'
      href: '{{imgPath}}/{{name}}.{{extension}}'
      alt: Illustration representing web chat accessibility. A chat interface, users with a screen reader and keyboard, and assistive technology icons, emphasising inclusivity.
  excerpt: |
    Web Chat relies on real time information and notifications, so you're going to need to use several features of Aria (Accessible Rich Internet Applications).

    In this post, I'm going to cover in detail which of the Web Content Accessibility Guidelines (WCAG) you're going to need to consider, and some examples of how you can use advanced attributes to give screen reader users the best possible experience.
---

# {{title}}

Web Chat relies on real time information and notifications, so you're going to need to use several features of [Aria (Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

In this post, I'm going to cover in detail which of the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/) you're going to need to consider, and some examples of how you can use advanced attributes to give screen reader users the best possible experience.

## Overview

Not all chat features are the same. Some are a full page, some are a small window which pops up at the bottom of the screen. Depending on which style you choose, the accessibility impacts are going to be different.

### Questions to ask yourself
The following are a selection of questions I recommend you ask yourself before building your web chat feature, as it may help you identify any gaps:
- How is the user able to interact with the interface?
  - What if they are using just a keyboard?
  - What if they are using a screen reader?
  - What if they are using dictation software?
- How are new messages announced?
  - Are they always read out in full?
  - Are they only read out when the window has focus?
  - Are they only read out when the chat feature has focus?
  - Are there secondary indicators, such as sounds or notification icons?
- What happens if a user has multiple browser windows open?
  - Does the chat persist on each window?
  - Do notifications persist on each window?
  - What if I have multiple browser windows open and I'm on a completely different website?

### Key features
As well as asking yourself these questions, you'll need to consider that *all* chat interactions will likely need to have several key features.

- it needs to be easy to find and intuitive to use
- new messages need to be easy to identify and available to assistive technologies, for example, a new message might create a visual notification, play an auditory sound or vibrate a haptic device
- all notifications need to be available to everybody
- all messages (old and new) need to be available to everybody

## WCAG criteria

For chat, there are several WCAG criteria you'll definitely need to consider, and several more you may need to consider depending on how you design the feature.

Below is a selection of WCAG criteria which are likely to cause issues if you fail to consider them properly.

### 1.3.1 Info and Relationships

[1.3.1 Info and Relationships]({wcagify}) is for making visual relationships between content also available to people using assistive technologies such as a screen reader.

For example, if you used large bold text to make a heading, then it would also need to be marked up as a heading using something like a `<h2>` tag, otherwise it would fail because it is only a heading to people that can see it.

For chat features, imagine something like Apple iMessage. It shows your messages in blue on the right hand side of the screen, and it shows replies to you in grey on the left hand side of the screen.

![An iMessage conversation between Craig and Gavin. Gavins messages are highlighted as grey bubbles on the left hand side of the screen, and Craigs are blue on the right hand side of the screen. Gavin is asking Craig if he wants to meet up next week, but Craig is stating that he is in Lisbon and cannot make it.]({{imgPath}}/imessenger.webp)


So, if you can see, it's obvious who each message belongs to. 

Now, imagine if you just visually created the same style but you didn't add any supporting information. If you are using a screen reader, the messages may get read out in order, but you wouldn't be aware of who wrote each message.

For example:
```html
<p class="left">
  Can you please explain the problem?
</p>
<p class="right">
  I'm having trouble resetting my password.
</p>
```

You can add visually hidden content to add supporting information. This is content which is not visible to sighted users, but will still be read out by screen readers. This can help people who cannot see the relationship to still understand it.

For example:
```html
<p>
  <span class="visually-hidden">
    Customer Support: 
  </span>
  Can you please explain the problem?
</p>
<p>
  <span class="visually-hidden">
    Me: 
  </span>
  I'm having trouble resetting my password.
</p>
```

This is the CSS I use for my visually hidden class. I don't profess to be a CSS Wizard, so there is likely a cleaner way to achieve this. But this works for me:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  white-space: nowrap;
  background-color: black; /* to prevent axe false flags on contrast */
  color: white; /* to prevent axe false flags on contrast */
}

.visually-hidden .focusable:active,
.visually-hidden .focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### 1.3.2 Meaningful Sequence

[1.3.2 Meaningful Sequence]({wcagify}) is to make sure that for content which needs to be read in order, the correct reading order can be established by assistive technologies such as a screen reader.

If the messages are all in the same order in the code as they are on the screen you should automatically pass.

For example:
```html
<p>
  Customer Support: Hi
</p>
<p>
  Me: Hi
</p>
<p>
  Customer Support: How can I help today?
</p>
<p>
  Me: I'm having trouble resetting my password.
</p>
<p>
  Customer Support: I see! No worries, let me take a look.
</p>
```

But, imagine you tried to style the conversation to look like the iMessage example, and you used columns to do that, so on the screen it looked like a back-and-fourth conversation.

If on a screen reader it read all of the messages from person 1 first, and then all of the messages from person 2 second, you wouldn't be able to follow the conversation. This would fail.

For example:
```html
<div class="left">
  <p>
    Customer Support: Hi
  </p>
  <p>
    Customer Support: How can I help today?
  </p>
  <p>
    Customer Support: I see! No worries, let me take a look.
  </p>
</div>
<div class="right">
  <p>
    Me: Hi
  </p>
  <p>
    Me: I'm having trouble resetting my password.
  </p>
</div>
```

### 1.3.3 Sensory Characteristics

[1.3.3 Sensory Characteristics]({wcagify}) is to make sure that content is available to everybody, regardless of what senses they can use.

For chat, this may apply in a few ways. You will have to alert the user that they have a new message. So, you might play a sound effect.

If somebody is Deaf, they wouldn't hear the sound. Neither would somebody who had their speakers turned off. So if a sound effect was the only way to know there was a new message, then you would fail this criterion as it is relying on a single sensory characteristic.

To make users aware there is a new message, you might do several things at the same time: 
- play a subtle sound effect
- highlight the chat window with a visual border for several seconds
- use `aria-live` to announce to the screen reader that there is an unread message that needs their attention
- prepend "New message" to the page title, so if somebody is on another browser tab they may see it change

### 1.3.4 Orientation

[1.3.4 Orientation]({wcagify}) is to make sure features work in both portrait and landscape modes. This is pretty self explanatory and shouldn't really be an issue unless you deliberately lock the orientation and you don't use responsive design principles to pass 1.4.10 Reflow.

### 1.4.3 Contrast (Minimum)

[1.4.3 Contrast (Minimum)]({wcagify}) is to make sure that text can be perceived by people who might have visual impairments. 

This one is pretty self explanatory. With all content, in most cases text needs to have a ratio of 4.5:1 with the background it is placed on.

If it's larger than 24px, or; bold and larger than 14px, then it can have a ratio of 3:1. But it's better to aim for 4.5:1 as best practice just to be absolutely sure.

### 1.4.10 Reflow

[1.4.10 Reflow]({wcagify}) is to make sure that the app works on multiple devices, zooms and screen sizes.

To pass this criterion, the chat feature would always need to fit on the screen regardless of it's size down to a device width of 320px wide, without requiring the user to scroll horizontally. Scrolling vertically is fine.

### 1.4.11 Non-text Contrast

[1.4.11 Non-text Contrast]({wcagify}) is to make sure that images, icons and anything else which is not text, has a text alternative.

For example, if you use an image such as a speech bubble to access the chat feature, it will need to have alternative text so it can be identified by screen readers.

```html
  <button>
    <img src="chat-icon.png" alt="Chat with customer support" />
  </button>
```

### 2.1.1 Keyboard

[2.1.1 Keyboard]({wcagify}) is to make sure that everything you can do with a mouse, you can also do with a keyboard.

So opening and closing the chat feature, replying to messages, scrolling through the conversation etc. All of those things would need to work using just a keyboard.

### 2.1.2 No Keyboard Trap

[2.1.2 No Keyboard Trap]({wcagify}) is to make sure that people using a keyboard don't get stuck in a feature and be unable to get back out without refreshing the page.

The keyboard is not considered trapped if it is held temporarily inside of a feature, as long as there is a mechanism to return it to the main page, such as a close button on a pop-up.

In a lot of cases it is best practice to hold the focus inside of modals or pop-ups to stop the keyboard focus disappearing under the modal which can cause a failure of [2.4.7 Focus Visible]({wcagify}) in 2.1, or [2.4.11 Focus Not Obscured (Minimum)]({wcagify}) in 2.2.

However, in the case of a chat feature, you'd need to make sure that if the keyboard user closed the chat window mid-chat to return the focus to the main page to continue browsing, then they are made aware when they have new messages they need to deal with, and that they can return to the chat window without any loss of data.

### 2.2.1 Timing Adjustable

[2.2.1 Timing Adjustable]({wcagify}) is to make sure that users are aware of any activities that are timed and they are given the opportunity to extend the timeout before they are forced to start the activity from the beginning.

For example, if the chat session times out after a period of inactivity, the user will need to be notified before it happens and given at least 20 seconds to extend it.

This could be as simple as adding a notification to the chat window if they have not typed anything for 1 minute which says:

> "This chat will end in 20 seconds if you do not reply." 

You could then use JavaScript to monitor characters being entered into the reply input field. If the number of characters in the field goes up, you extend the chat session.

The reason for listening for characters being entered and not listening for a reply, is that it may take somebody more than 20 seconds to write a reply, so their session would still be terminated even though they were trying to extend it. 

Also, listening for character count rather than keys being pressed means if somebody us using dictation software like Dragon it will still work.

Dictating with Dragon does not simulate keyboard presses. So, if you use JavaScript to listen for keys being pressed rather than characters being entered into the input, the session would not be extended for somebody who is in the middle of typing using dictation software.

### 2.2.2 Pause, Stop, Hide

[2.2.2 Pause, Stop, Hide]({wcagify}) is to make sure users can control features which can get overwhelming such as animations and auto-updating information.

If an agent is writing too many messages in a short period of time, a screen reader user may get overwhelmed if there is too much content being read out constantly at a pace they cannot manage.

So a mechanism should be available to pause, stop or hide the content unless it is essential.

For a chat feature, it probably would be a technical pass because it would probably be considered essential content, and there is also an option to end the chat which is a mechanism of stopping it. However, we can all probably agree this is an awful experience for the user.

A better option might be to have messages read out verbatim if the chat feature is focused, and resort to a sound effect  to note there is a new message without reading out the entire thing if the chat feature is not focused. This would reduce the noise for a screen reader user without completely removing the ability to stay up to date.

### 2.4.11 Focus Not Obscured (Minimum)

[2.4.11 Focus Not Obscured (Minimum)]({wcagify}) is to make sure the keyboard focus can always be seen on the screen. A common fail is when people fail to contain the keyboard focus within pop-ups and modals, such as chat windows.

For example, if your chat feature is a pop-up window, and the keyboard focus can get behind it and become non-visible, it would fail this criterion.

### 4.1.2 Name, Role, Value

[4.1.2 Name, Role, Value]({wcagify}) is to make sure that elements can be identified correctly.

#### Name
If we imagine you had a button to open the chat feature, it would need to have an accessible name such as "Chat with customer support" so a screen reader can give context.

You can do this with physical text, alt text on images, like in the example for non-text content, or with aria-labels. Text is obviously the simplest.

For example:
```html
<button>Chat with customer support</button>
<button><img src="chat-icon.png" alt="Chat with customer support" /></button>
<button aria-label="Chat with customer support">💬</button>
```

#### Role
It would also need to have a role so it can be identified by speech recognition software. So, for example, if the chat control looks like a button it must behave like a button.

Each interactive HTML element has an implicit role. You don't need to give these a role attribute unless you style them to look like something else.

In the following example, both button elements would render the same, you don't need to give a button a role of button, as it's implicit:
```html
<button>Chat with customer support</button>
<button role="button">Chat with customer support</button>
```

It only becomes a problem if you style an element to look like a different one and you don't manually change the role. 

For example, if you styled a link to look like a button and you didn't update the role, then it would be a fail. Because it looks like a button, but behaves like a link.

```html
<a href="#" class="button">
  Chat with customer support
</a>
```

To correctly align the visual look of an element, and its semantic meaning, thats when you need to give it the correct role attribute:
```html
<a href="#" class="button" role="button">
  Chat with customer support
</a>
```

#### Value
Value is the current state of the control. So if your chat window is an expandable section, it can be open or closed, then you need to also maintain that state. This lets screen reader users know what to expect if they are looking for particular content.

You would tie the button to the expandable window using `aria-controls` and you would state whether it was expanded or not. `aria-expanded` can be `false` or `true`.

Closed example:
```html
<button aria-controls="chat-window" aria-expanded="false">
  Chat with customer support
</button>
<div id="chat-window" hidden>…</div>
```

Open example
```html
<button aria-controls="chat-window" aria-expanded="true">
  Chat with customer support
</button>
<div id="chat-window">…</div>
```

### 4.1.3 Status Message

[4.1.3 Status Message]({wcagify}) is for making updates available to screen reader users when content changes that might not have focus at that time.

This is really important for a chat feature, because messages might get added to the page when the user is focused on other parts of the page, or writing their own message to a previous reply.

On a chat feature, you'd likely need several status updates:
- the chat has started
- there is a new message
- the chat has ended

In most cases, you can use `role="log"` to create an accessible chat window. So every time you append a new element to the log, the screen reader will read it out verbatim. You can [read more about the log role on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/log_role).

By default, the log role will use `aria-polite`, so it will queue messages up rather than interrupting the previous message if a new one is sent immediately after.

For example:
```html
<h2 id="chat-heading">
  Chat: Customer support
</h2>
<div id="chat-window" role="log" aria-labelledby="chat-heading">
  <p>Customer Support has joined the chat</p>
  <p>Customer Support is typing…</p>
  <p>Customer Support: Hi, how can I help you today?</p>
  <p>Me: Hi, I'm struggling to reset my password, can you help?</p>
</div>
```

If you're using an expandable chat window, you'll need to make a decision on whether reading out every message is going to be too noisy. If the user is expected to continue using the service and multi-tasking the chat, you might need to get more creative with how you announce the messages.

You may choose to play a sound effect, and then read out the messages when the user moves the focus back into the chat window, but this will obviously be more complex.

A `log` landmark must have an accessible name, so link it to a heading using `aria-labelledby` or use `aria-label` to give it one directly on the element.

## Conclusion

Chat is a complex feature. Probably one of the most difficult you will have in terms of balancing overwhelm with confusion. If you read out too much in the wrong context, it's noisy. If you read out too little then the user can miss vital information.

In short, you need to make the chat easy to find, easy to use, and make sure that any features which help the user are available to multiple senses. If you rely solely on visual cues for new messages, or reading old messages, the feature is going to be unusable for a lot of people.

Chat is difficult. It's substantially easier when it's the only feature on a page, but this relies on your organisation having the capacity to respond in a timely manner. If your chat wait times are long, then allowing the user to keep browsing the rest of the site is preferred.

Use `role="log"` with an accessible name to semantically mark up a chat window, this will implicitly assign `aria-polite` to read out new content to a screen reader.

Always make sure you test any new features extensively with assistive technologies and screen readers, and make sure alternatives are available. Can somebody ring up or use a sign language interpreter, for example.

As always, I hope this was useful.

Thanks,
Craig