---
title: Working with developers when you're not one
date: '2019-05-14'
duration: '☕️ 6 min read'
cover_image: "./post-header.jpg"
---

Hiring and working with developers sounds like a real challenge if you don't have a technical background. Indeed, every profession has its own vocabulary, methods, specificities, almost its own universe, things you need to keep in mind. I studied and used to work in a [totally different, very non-tech sector](https://alexiatoulmet.com/about/) and decided to become a developer only 3 years ago a little bit out of the blue. So here are the things I learned when I crossed to the other side of the technical fence 🚀

<h3>Accept the invisible difficulty</h3>
<p>
I have seen non tech people ask a dev to "add a simple button" countless times. "It's just a button, it should not take long, right?" 🤷‍♀️
The first thing you need to keep in mind is that it's not because it looks easy that it is easy.
A basic example: creating a login page. If you don't use third party authentication services (such as Google, Facebook, etc.), coding a logging system requires to create a page and add the code behind it for:

- signup
- email confirmation
- sign in
- forgot password
- reset password


On top of that, when adding features to an existing project, the developer has to go through more complicated processes like deploying in preprod, testing, and deploy in prod. A basic principle to keep in mind is that the bigger the application, the easier it is to break something unexpectedly. 

![Something breaks](./problem.jpg)

Let's take another basic example: letting users add their own avatars to the previously mentioned logged in page. It looks pretty basic, but so many things could go wrong 🙈

- You can't accept files that are too heavy if you don't want to spend all your money on web servers.
- Uploads are a big wide open door to security fails. You have to make sure hackers won't upload malicious files.
- What if someone wants to upload an inappropriate picture? You must be able to moderate the uploaded files.
- And what about people who don't want to upload a picture? There must be a default behaviour, otherwise it could lead to major bugs and everything could break.

I’m guessing you probably didn't think about all this? That's ok, but be aware that a dev a developer must go through all these steps, and it definitely takes time. Whether you're working with freelancers or your own employees, you should take all that into consideration when setting deadlines. </p>


<h3>Go into details, and stick to it</h3>

<p>
Product Managers have a really important mission: making choices about the product, and making sure every requirement is clear for the developer. Those choices are made considering technical aspects. If you don't have a Product Manager (PM), you have to try your best to follow the same methods 🤓

You need to be as specific as possible when making the list of features you need the developer to code. The best way to make sure this list is clear and comprehensive is at least to go through it with someone who knows the tech needs.

Once the list is completed, you have to stick to it, even if you want to “simply change a small color". I know it sounds like a good idea to change your requirements right after a customer interview for example, but it's not. Because one small detail, plus another small detail, plus an unexpected bugfix, and another change request from someone else in the team, and your dev will quickly be overwhelmed with tons of requests. I can't emphasise it enough: it's not because it looks easy that it is easy. Constantly making small modifications is not an efficient way to work, it's not motivating at all for the dev, so it should definitely be avoided.

Instead, make small iterations when working in tech, create a whole new list of specs, ask your dev to code it, test it, deploy it, and start again. 
</p>

<h3>Devs are more than executors</h3>

<p>
When splitting the work, it looks natural to have the business team think about the product, and developers simply code it. But you should remember that it's much more efficient to have your dev take part in more than just execution. Developers have another way of thinking about a problem and can provide valuable input: make sure you take full advantage of it, giving full credit to your dev's opinion. When you want to make a new feature, you won't know what is time consuming or not. Your dev will. Let's go back to the avatar upload example. In your case, does it really add a value to your product? Is it really worth developing it? Working in collaboration with a dev is the best way to focus on quick wins 🚀 

<h3>Where can you find the right developer for your project?</h3>

Whether you're looking for your next technical cofounder, or your next new recruit, all means are good: social networks, headhunters, specialized platforms - like [Comet](https://comet.co/), [Malt](https://www.malt.fr/), [WeLoveDev](https://welovedevs.com/fr/), [Talent.io](https://www.talent.io/), [Hired](https://fr.hired.com/) - asking your acquaintances, pitching your idea in afterwork events, meetups, etc.

![Startup logos](./logos-startup.png)

However, you need to prepare for all this first, by at least being able to give basic information about your needs, and respecting basic rules:

- If you want to use technical words, make sure you're using the right ones. It's better to say nothing than sending a Linkedin message saying you need a Java frontend developer to code an IOS app.
- If you're looking for a cofounder or first employee, your pitch must make them dream. Right now, coders are presented with tons of requests to be recruited / co-found the next biggest startup. Moreover, don't forget that developers are able to create things on their own. You have to show that you'll bring something to the project, an expertise they don't have, that you know the market you're addressing.
- Be transparent about your financial resources. If you can't compete with the market wages, it's super important to compensate in another way. You can give shares of your company, but it has to be meaningful. Don't expect to recruit a dev as first employee for free if you give him 1% of the company.
</p>

If you stick to those basic best practices it should make it easier to work with technical people. 
Any thoughts, feedbacks, questions about this article? Don't hesitate to shoot me an email at alexia.toulmet@gmail.com!