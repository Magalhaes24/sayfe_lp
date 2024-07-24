/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Select all circles
    const circles = document.querySelectorAll('.bg-circle');
    
    // Adjust circle positions and rotation based on scroll
    circles.forEach(circle => {
        const speed = circle.getAttribute('data-speed');
        const rotationSpeed = circle.getAttribute('data-rotation-speed');
        const translateY = scrollPosition * speed;
        const rotate = scrollPosition * rotationSpeed;
        circle.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
    });
});
