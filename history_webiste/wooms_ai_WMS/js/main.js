// ============================================
// WOOMS AI - More than a WMS
// GSAP ScrollTrigger Animations
// Premium scroll experience inspired by gsap.com/scroll
// ============================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// CUSTOM CURSOR & MAGNETIC BUTTONS
// ============================================

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    if (!cursor || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow
    function animateCursor() {
        // Cursor outer ring - slower
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;

        // Cursor dot - faster
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .timeline-item, .marker-circle');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });

    // Magnetic effect on buttons
    const magneticElements = document.querySelectorAll('a[href], button');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// ============================================
// INTERACTIVE TIMELINE VIDEOS
// ============================================

function initInteractiveTimelineVideos() {
    const interactiveItems = document.querySelectorAll('.timeline-item-interactive');

    interactiveItems.forEach(item => {
        const video = item.querySelector('.timeline-video');
        const playOverlay = item.querySelector('.video-overlay-play');
        const startTime = parseFloat(item.dataset.startTime) || 0;

        if (!video) return;

        // Set initial start time
        video.addEventListener('loadedmetadata', () => {
            video.currentTime = startTime;
        });

        // Auto-play on hover
        item.addEventListener('mouseenter', () => {
            if (video.paused) {
                video.currentTime = startTime;
            }
            video.play();
            video.classList.add('playing');
        });

        // Pause on mouse leave
        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = startTime;
            video.classList.remove('playing');
        });

        // Click to toggle play/pause
        if (playOverlay) {
            playOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                if (video.paused) {
                    video.currentTime = startTime;
                    video.play();
                    video.classList.add('playing');
                } else {
                    video.pause();
                    video.classList.remove('playing');
                }
            });
        }
    });
}

// ============================================
// TIMELINE TITLE TYPING ANIMATION
// ============================================

function initTimelineTitleTyping() {
    const taglineElement = document.querySelector('.tagline-text');
    const taglineText = 'Von 1917 bis Heute – 100+ Jahre Innovation';

    if (!taglineElement) return;

    let charIndex = 0;

    function typeCharacter() {
        if (charIndex < taglineText.length) {
            taglineElement.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, 50);
        } else {
            // Remove cursor after typing is done
            setTimeout(() => {
                const cursor = document.querySelector('.tagline-cursor');
                if (cursor) {
                    cursor.style.opacity = '0';
                }
            }, 2000);
        }
    }

    // Start typing after initial animations
    setTimeout(typeCharacter, 1500);
}

// ============================================
// TIMELINE PROGRESS BAR
// ============================================

function initTimelineProgress() {
    const progressFill = document.querySelector('.timeline-progress-fill');
    const timelineSection = document.querySelector('.timeline-section');

    if (!progressFill || !timelineSection) return;

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;

        progressFill.style.width = scrollPercentage + '%';
    });
}

// ============================================
// HERO SECTION ANIMATIONS
// ============================================

function initHeroAnimations() {
    // Animate hero title lines
    gsap.to('.title-line', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
    });

    // Animate hero description
    gsap.to('.hero-description', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
    });

    // Animate hero button
    gsap.to('.hero-btn', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.4
    });

    // Animate scroll indicator - show only after video ends
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('ended', () => {
            gsap.to('.scroll-indicator', {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }

    // Parallax effect on hero video
    gsap.to('.hero-video', {
        scale: 1.2,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Fade out hero content on scroll
    gsap.to('.hero-content', {
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// TIMELINE SECTION
// ============================================

function initTimelineAnimations() {
    // Animate section title
    gsap.from('.timeline-section .section-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate each timeline item
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        const isTop = item.querySelector('.timeline-top');
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.marker-circle');
        const icon = item.querySelector('.timeline-icon');

        if (!content || !marker || !icon) return;

        // Initial state
        gsap.set(item, {
            opacity: 1
        });

        gsap.set(content, {
            x: isTop ? -100 : 100,
            opacity: 0
        });

        gsap.set(marker, {
            scale: 0,
            opacity: 0
        });

        gsap.set(icon, {
            scale: 0,
            rotation: -180,
            opacity: 0
        });

        // Create timeline for each item
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                end: 'top 25%',
                toggleActions: 'play none none reverse',
                onEnter: () => item.classList.add('active'),
                onLeaveBack: () => item.classList.remove('active')
            }
        });

        // Animate marker
        tl.to(marker, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
        })
        // Animate content
        .to(content, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.3')
        // Animate icon
        .to(icon, {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        // Animate points
        .from(item.querySelectorAll('.timeline-points li'), {
            x: -20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.4');
    });

    // Animate timeline line progress
    gsap.to('.timeline-line', {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
        }
    });
}

// ============================================
// ANALYTICS SECTION ANIMATIONS
// ============================================

function initAnalyticsAnimations() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.analytics-section',
            start: 'top 60%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Feature content animations
    tl.from('.analytics-section .feature-label', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.analytics-section .feature-title', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.analytics-section .feature-description', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.analytics-section .feature-list li', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4');

    // Chart bars animation
    gsap.to('.analytics-section .bar', {
        scaleY: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.analytics-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Data points animation
    gsap.to('.analytics-section .data-point', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.analytics-card',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Card parallax
    gsap.to('.analytics-card', {
        y: -50,
        scrollTrigger: {
            trigger: '.analytics-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// ADDRESS GUARDIAN ANIMATIONS
// ============================================

function initGuardianAnimations() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.guardian-section',
            start: 'top 60%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Feature content
    tl.from('.guardian-section .feature-label', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.guardian-section .feature-title', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.guardian-section .feature-description', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.guardian-section .feature-list li', {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4');

    // Input lines animation
    gsap.to('.guardian-section .input-line', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.guardian-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Validation check animation
    gsap.to('.guardian-section .validation-check', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.guardian-card',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Map overlay animation
    gsap.to('.guardian-section .map-overlay', {
        opacity: 1,
        duration: 0.6,
        delay: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.guardian-card',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Card parallax
    gsap.to('.guardian-card', {
        y: -50,
        scrollTrigger: {
            trigger: '.guardian-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// ROUTING SECTION ANIMATIONS
// ============================================

function initRoutingAnimations() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.routing-section',
            start: 'top 60%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Feature content
    tl.from('.routing-section .feature-label', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.routing-section .feature-title', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.routing-section .feature-description', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.routing-section .feature-list li', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4');

    // Route lines animation
    gsap.to('.routing-section .route-line', {
        scaleX: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: '.routing-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Nodes animation
    gsap.to('.routing-section .node', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.routing-card',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        }
    });

    // Card parallax
    gsap.to('.routing-card', {
        y: -50,
        scrollTrigger: {
            trigger: '.routing-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// INVENTORY SECTION ANIMATIONS
// ============================================

function initInventoryAnimations() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.inventory-section',
            start: 'top 60%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Feature content
    tl.from('.inventory-section .feature-label', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.inventory-section .feature-title', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.inventory-section .feature-description', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.inventory-section .feature-list li', {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4');

    // Level bars animation
    gsap.to('.inventory-section .level-bar', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.inventory-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Prediction curve animation
    gsap.to('.inventory-section .prediction-curve', {
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.inventory-card',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        }
    });

    // Card parallax
    gsap.to('.inventory-card', {
        y: -50,
        scrollTrigger: {
            trigger: '.inventory-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// VISION SECTION ANIMATIONS
// ============================================

function initVisionAnimations() {
    // Section title
    gsap.from('.vision-section .section-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.vision-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Future cards
    gsap.to('.future-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.future-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Parallax effect on vision section
    gsap.to('.vision-section', {
        backgroundPosition: '50% 100px',
        scrollTrigger: {
            trigger: '.vision-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// CTA SECTION ANIMATIONS
// ============================================

function initCTAAnimations() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    tl.from('.cta-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.cta-description', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.cta-btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4');
}

// ============================================
// NAVIGATION BEHAVIOR
// ============================================

function initNavigation() {
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.boxShadow = 'none';
        }

        // Hide/show navigation
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// CARD HOVER EFFECTS
// ============================================

function initCardEffects() {
    const cards = document.querySelectorAll('.visual-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================

function init() {
    // Wait for page to load
    window.addEventListener('load', () => {
        // Initialize custom cursor
        initCustomCursor();

        // Initialize interactive timeline videos
        initInteractiveTimelineVideos();

        // Initialize timeline title typing
        initTimelineTitleTyping();

        // Initialize timeline progress
        initTimelineProgress();

        // Initialize all animation functions
        initHeroAnimations();
        initTimelineAnimations();
        initAnalyticsAnimations();
        initGuardianAnimations();
        initRoutingAnimations();
        initInventoryAnimations();
        initVisionAnimations();
        initCTAAnimations();
        initNavigation();
        initCardEffects();

        // Refresh ScrollTrigger after all animations are set up
        ScrollTrigger.refresh();
    });

    // Update on resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
}

// Start the application
init();

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Log ScrollTrigger instances for debugging
// console.log('ScrollTrigger instances:', ScrollTrigger.getAll());
