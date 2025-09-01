// NotchPro JavaScript - Revolutionary Mac Notch App Interactions
// Enhanced performance and SEO optimizations

document.addEventListener('DOMContentLoaded', function() {
    initializeInteractiveElements();
    initializeScrollAnimations();
    initializeHeroNotch();
    initializeFAQ();
    startCounterAnimations();
    initializeSEOOptimizations();
});

function initializeHeroNotch() {
    const heroNotch = document.getElementById('heroNotch');
    const notchContent = heroNotch.querySelector('.notch-content');
    
    const notchStates = [
        'Experience the Future',
        '🔋 AirPods Pro: 87%',
        '🎵 Spotify: Midnight City',
        '📅 Meeting in 15 minutes',
        '🤖 AI: Ready to assist',
        '📊 System: Optimized',
        '🌐 Wi-Fi: Ultra Fast 867Mbps',
        '⚡ MacBook: 89% Charging',
        '🎧 AirPods Max: Connected',
        '📱 iPhone: 67% Wireless'
    ];
    
    let currentState = 0;
    
    heroNotch.addEventListener('click', () => {
        currentState = (currentState + 1) % notchStates.length;
        notchContent.textContent = notchStates[currentState];
        
        // Enhanced click feedback
        heroNotch.style.transform = 'scale(0.95)';
        heroNotch.style.filter = 'brightness(1.2)';
        setTimeout(() => {
            heroNotch.style.transform = 'scale(1)';
            heroNotch.style.filter = 'brightness(1)';
        }, 200);

        // Track user interaction for SEO
        if (typeof gtag !== 'undefined') {
            gtag('event', 'notch_interaction', {
                'event_category': 'engagement',
                'event_label': 'hero_notch_click'
            });
        }
    });

    // Auto-cycle through states for demo
    setInterval(() => {
        if (Math.random() > 0.6) {
            currentState = (currentState + 1) % notchStates.length;
            notchContent.textContent = notchStates[currentState];
            
            // Subtle state change animation
            notchContent.style.opacity = '0.7';
            setTimeout(() => {
                notchContent.style.opacity = '1';
            }, 150);
        }
    }, 4000);
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // SEO tracking for section views
                if (typeof gtag !== 'undefined') {
                    const sectionName = entry.target.id || 'unknown_section';
                    gtag('event', 'section_view', {
                        'event_category': 'engagement',
                        'event_label': sectionName
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature, .gallery-item, .testimonial').forEach(element => {
        observer.observe(element);
    });

    // Enhanced scroll indicator with SEO tracking
    const scrollDots = document.querySelectorAll('.scroll-dot');
    const sections = ['hero', 'features', 'gallery', 'pricing', 'testimonials'];
    
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const section = document.getElementById(sections[index]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                
                // SEO tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'navigation', {
                        'event_category': 'scroll_indicator',
                        'event_label': sections[index]
                    });
                }
            }
        });
    });

    // Enhanced scroll tracking with parallax
    let ticking = false;
    function updateScrollPosition() {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Update active scroll indicator
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop - windowHeight/2 && scrollPos < sectionBottom - windowHeight/2) {
                    scrollDots.forEach(dot => dot.classList.remove('active'));
                    if (scrollDots[index]) {
                        scrollDots[index].classList.add('active');
                    }
                }
            }
        });

        // Enhanced parallax effects
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrollPos * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrollPos * 0.02}deg)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
}

function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                
                // SEO tracking for FAQ interactions
                if (typeof gtag !== 'undefined') {
                    const questionText = question.textContent.replace('+', '').trim();
                    gtag('event', 'faq_interaction', {
                        'event_category': 'engagement',
                        'event_label': questionText
                    });
                }
            }
        });
    });
}

function initializeInteractiveElements() {
    // Enhanced gallery interactions with SEO tracking
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.style.transform = 'translateY(-15px) scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'translateY(-15px) scale(1.03)';
            }, 200);

            // SEO tracking
            if (typeof gtag !== 'undefined') {
                const itemTitle = item.querySelector('h3').textContent;
                gtag('event', 'gallery_interaction', {
                    'event_category': 'engagement',
                    'event_label': itemTitle
                });
            }
        });

        // Stagger animation delays
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Music demo interactions
    let isPlaying = false;
    let currentTrack = 0;
    const tracks = [
        { title: 'Midnight City', artist: 'M83' },
        { title: 'Weightless', artist: 'Marconi Union' },
        { title: 'Clair de Lune', artist: 'Claude Debussy' },
        { title: 'Focus Flow', artist: 'Brain.fm' }
    ];

    window.togglePlay = function() {
        isPlaying = !isPlaying;
        const playButton = event.target;
        playButton.textContent = isPlaying ? '⏸' : '▶';
        
        // Enhanced visual feedback
        playButton.style.transform = 'scale(1.15)';
        playButton.style.background = isPlaying ? 
            'linear-gradient(135deg, #ef4444, #f87171)' : 
            'linear-gradient(135deg, #0066ff, #00ccff)';
        
        setTimeout(() => {
            playButton.style.transform = 'scale(1)';
        }, 200);

        // SEO tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'music_control', {
                'event_category': 'demo_interaction',
                'event_label': isPlaying ? 'play' : 'pause'
            });
        }
    };

    window.previousTrack = function() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        updateTrackDisplay();
        animateButton(event.target);
    };

    window.nextTrack = function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        updateTrackDisplay();
        animateButton(event.target);
    };

    function updateTrackDisplay() {
        const musicDemo = document.getElementById('musicDemo');
        const titleElement = musicDemo.querySelector('div[style*="font-size: 1.1rem"]');
        const artistElement = musicDemo.querySelector('div[style*="font-size: 0.9rem"]');
        
        if (titleElement && artistElement) {
            titleElement.textContent = tracks[currentTrack].title;
            artistElement.textContent = tracks[currentTrack].artist;
            
            // Animate track change
            titleElement.style.transform = 'translateX(-10px)';
            titleElement.style.opacity = '0.7';
            setTimeout(() => {
                titleElement.style.transform = 'translateX(0)';
                titleElement.style.opacity = '1';
            }, 200);
        }
    }

    function animateButton(button) {
        button.style.transform = 'scale(1.2)';
        button.style.color = '#00ccff';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.color = '#0066ff';
        }, 200);
    }

    // Enhanced pricing card interaction with mouse tracking
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
        pricingCard.addEventListener('mousemove', (e) => {
            const rect = pricingCard.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            pricingCard.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(0, 102, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.08) 100%)
            `;
        });
        
        pricingCard.addEventListener('mouseleave', () => {
            pricingCard.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))';
        });
    }

    // Enhanced ripple effects for demo containers
    document.querySelectorAll('.demo-container').forEach(container => {
        container.addEventListener('click', (e) => {
            createEnhancedRipple(e, container);
        });
    });
}

function createEnhancedRipple(event, container) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 102, 255, 0.6) 0%, rgba(0, 204, 255, 0.3) 50%, transparent 100%);
        transform: scale(0);
        animation: enhancedRipple 1s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        z-index: 10;
    `;
    
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size/2) + 'px';
    
    container.style.position = 'relative';
    container.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

function startCounterAnimations() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target === 4.9) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

function initializeSEOOptimizations() {
    // Enhanced page visibility tracking
    let startTime = Date.now();
    let isVisible = true;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isVisible = false;
            const timeSpent = Date.now() - startTime;
            
            // Track engagement time for SEO
            if (typeof gtag !== 'undefined' && timeSpent > 5000) {
                gtag('event', 'page_engagement', {
                    'event_category': 'seo',
                    'event_label': 'time_spent',
                    'value': Math.floor(timeSpent / 1000)
                });
            }
        } else {
            isVisible = true;
            startTime = Date.now();
        }
    });

    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'conversion',
                    'event_label': 'pricing_cta',
                    'value': 1
                });
            }
        });
    });

    // Enhanced keyword tag interactions
    document.querySelectorAll('.keyword-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.style.transform = 'translateY(-4px) scale(1.1)';
            tag.style.boxShadow = '0 12px 25px rgba(0, 102, 255, 0.4)';
            
            setTimeout(() => {
                tag.style.transform = 'translateY(-2px) scale(1.05)';
                tag.style.boxShadow = '0 8px 20px rgba(0, 102, 255, 0.3)';
            }, 200);
            
            // SEO tracking for keyword engagement
            if (typeof gtag !== 'undefined') {
                gtag('event', 'keyword_interaction', {
                    'event_category': 'seo',
                    'event_label': tag.textContent
                });
            }
        });
    });

    // Enhanced testimonial interactions
    document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
        testimonial.addEventListener('mouseenter', () => {
            testimonial.style.transform = 'translateY(-10px) scale(1.02)';
        });

        testimonial.addEventListener('mouseleave', () => {
            testimonial.style.transform = 'translateY(0) scale(1)';
        });

        // Stagger testimonial animations
        testimonial.style.animationDelay = `${index * 0.3}s`;
        testimonial.style.animation = 'fadeInUp 1s ease-out both';
    });

    // Progressive enhancement for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))';
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))';
        });
    });
}

// Enhanced music progress animation and utility functions
function addMusicProgressStyles() {
    const musicProgressStyle = document.createElement('style');
    musicProgressStyle.textContent = `
        @keyframes musicProgress {
            0%, 100% { width: 65%; }
            50% { width: 72%; }
        }
        
        @keyframes enhancedRipple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(musicProgressStyle);
}

// SEO-enhanced smooth scrolling with tracking
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // SEO tracking for internal navigation
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'internal_navigation', {
                        'event_category': 'navigation',
                        'event_label': this.getAttribute('href')
                    });
                }
            }
        });
    });
}

// Enhanced button hover effects with performance optimization
function initializeButtonEffects() {
    document.querySelectorAll('.cta-button').forEach(button => {
        let hoverTimeout;

        button.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            button.style.transform = 'translateY(-6px) scale(1.08)';
            button.style.boxShadow = '0 30px 70px rgba(0, 102, 255, 0.6)';
        });
        
        button.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '0 15px 40px rgba(0, 102, 255, 0.4)';
            }, 50);
        });
    });
}

// Enhanced performance monitoring
function initializePerformanceOptimizations() {
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting) {
                element.style.animationPlayState = 'running';
                element.classList.add('gpu-accelerated');
            } else {
                element.style.animationPlayState = 'paused';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sparkle, .floating-notch, .parallax-bg, .demo-container').forEach(element => {
        performanceObserver.observe(element);
    });
}

// Enhanced typewriter effect for hero subtitle
function initializeTypewriterEffect() {
    setTimeout(() => {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const subtitleText = 'Transform Your Mac Notch Into Pure Magic';
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < subtitleText.length) {
                heroSubtitle.textContent += subtitleText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Add cursor blink effect
                const cursor = document.createElement('span');
                cursor.textContent = '|';
                cursor.style.animation = 'blink 1s infinite';
                cursor.style.color = '#0066ff';
                heroSubtitle.appendChild(cursor);
                
                setTimeout(() => {
                    cursor.remove();
                }, 3000);
            }
        };
        typeWriter();
    }, 1500);
}

// Add cursor blink animation
function addCursorBlinkStyles() {
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(cursorStyle);
}

// Enhanced notch welcome sequence
function initializeNotchWelcomeSequence() {
    setTimeout(() => {
        const heroNotch = document.getElementById('heroNotch');
        const notchContent = heroNotch.querySelector('.notch-content');
        
        // Expansion animation
        heroNotch.style.width = '380px';
        heroNotch.style.background = 'linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(0, 204, 255, 0.2))';
        notchContent.textContent = '✨ Welcome to the future of Mac productivity';
        
        setTimeout(() => {
            heroNotch.style.width = '320px';
            heroNotch.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))';
            notchContent.textContent = 'Experience the Future';
        }, 3000);
    }, 3000);
}

// Enhanced gallery item float animations
function initializeGalleryAnimations() {
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        const delay = index * 0.4;
        item.style.animationDelay = `${delay}s`;
        item.style.animation = `float 6s ease-in-out infinite`;
        
        // Add hover sound effect simulation
        item.addEventListener('mouseenter', () => {
            if (window.AudioContext) {
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.1);
                } catch (e) {
                    // Fallback for browsers that don't support Web Audio API
                    console.log('Audio context not available');
                }
            }
        });
    });
}

// Enhanced scroll-triggered animations
function initializeScrollTriggerAnimations() {
    const scrollTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Add scroll trigger to elements that need it
    document.querySelectorAll('.feature-card, .testimonial, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollTriggerObserver.observe(element);
    });
}

// Enhanced demo interactions with haptic feedback simulation
function simulateHapticFeedback(element) {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Visual haptic feedback
    element.style.filter = 'brightness(1.2)';
    setTimeout(() => {
        element.style.filter = 'brightness(1)';
    }, 100);
}

// Add haptic feedback to interactive elements
function initializeHapticFeedback() {
    document.querySelectorAll('.feature-card, .gallery-item, .cta-button').forEach(element => {
        element.addEventListener('click', () => {
            simulateHapticFeedback(element);
        });
    });
}

// Enhanced accessibility with keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// SEO-enhanced lazy loading for better performance
function initializeLazyLoading() {
    const lazyElements = document.querySelectorAll('.demo-container, .feature-card');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                lazyObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '50px' });

    lazyElements.forEach(element => {
        lazyObserver.observe(element);
    });
}

// Enhanced error handling and graceful degradation
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.log('Graceful error handling:', e.message);
        // Continue with basic functionality even if advanced features fail
    });
}

// Enhanced performance metrics tracking
function initializePerformanceTracking() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_time', {
                        'event_category': 'performance',
                        'value': Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                    });
                }
            }, 0);
        });
    }
}

// Enhanced cookie-free analytics preparation
function trackEvent(eventName, category, label, value) {
    // Placeholder for cookie-free analytics
    console.log(`Event: ${eventName}, Category: ${category}, Label: ${label}, Value: ${value}`);
    
    // This can be connected to privacy-focused analytics like Plausible or Fathom
    if (typeof plausible !== 'undefined') {
        plausible(eventName, { props: { category, label, value } });
    }
}

// Enhanced mobile optimization
function initializeMobileOptimizations() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.sparkle').forEach(sparkle => {
            sparkle.style.animationDuration = '6s'; // Slower on mobile for better performance
        });
        
        // Reduce parallax intensity on mobile
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            bg.style.animationDuration = '45s';
        });
    }
}

// Enhanced progressive web app features
function initializePWAFeatures() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Placeholder for PWA service worker registration
            console.log('PWA features ready for implementation');
        });
    }
}

// Enhanced accessibility announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Enhanced feature showcase rotation
function initializeFeatureRotation() {
    const featureRotation = [
        'AirPods Pro battery monitoring',
        'Spotify integration for Mac',
        'Smart calendar notifications',
        'AI assistant capabilities',
        'Glassmorphism UI design',
        'Mac productivity optimization'
    ];

    let rotationIndex = 0;
    setInterval(() => {
        const heroNotch = document.getElementById('heroNotch');
        const notchContent = heroNotch.querySelector('.notch-content');
        
        if (Math.random() > 0.7) {
            const feature = featureRotation[rotationIndex];
            notchContent.textContent = `✨ ${feature}`;
            rotationIndex = (rotationIndex + 1) % featureRotation.length;
            
            setTimeout(() => {
                notchContent.textContent = 'Experience the Future';
            }, 2500);
        }
    }, 5000);
}

// Enhanced form validation for email capture (if added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced conversion tracking
function trackConversion(conversionType, value) {
    trackEvent('conversion', 'signup', conversionType, value);
    
    // Announce to screen reader
    announceToScreenReader(`Thank you for your interest in NotchPro, the best Dynamic Island app for Mac`);
}

// Enhanced A/B testing preparation
function initializeABTesting() {
    const abTestVariant = Math.random() > 0.5 ? 'A' : 'B';
    document.body.setAttribute('data-ab-variant', abTestVariant);
}

// Enhanced international support
function initializeInternationalization() {
    const userLanguage = navigator.language || navigator.userLanguage;
    document.documentElement.setAttribute('lang', userLanguage.split('-')[0]);
}

// Enhanced preloading for critical resources
function preloadCriticalResources() {
    const criticalImages = [
        // Add any critical images here when they exist
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Enhanced error boundary for graceful degradation
function createFallbackContent(container, message) {
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: rgba(255, 255, 255, 0.7);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">⚠️</div>
            <div>${message}</div>
        </div>
    `;
}

// Enhanced meta tag updates for dynamic SEO
function updateMetaTags(title, description) {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description;
    }
}

// Enhanced structured data for rich snippets
function addEnhancedStructuredData() {
    const enhancedStructuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "NotchPro - Dynamic Island for Mac",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "macOS",
        "description": "The ultimate Dynamic Island alternative for Mac with AirPods battery monitoring, Spotify integration, calendar reminders and AI assistant",
        "url": "https://notchpro.app",
        "downloadUrl": "https://notchpro.app/download",
        "screenshot": "https://notchpro.app/screenshots/main.jpg",
        "softwareVersion": "2.1.0",
        "datePublished": "2025-01-15",
        "publisher": {
            "@type": "Organization",
            "name": "NotchPro"
        },
        "offers": {
            "@type": "Offer",
            "price": "2.00",
            "priceCurrency": "USD",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "2.00",
                "priceCurrency": "USD",
                "billingIncrement": "1",
                "unitCode": "MON"
            },
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2847",
            "bestRating": "5"
        },
        "featureList": [
            "AirPods battery monitoring",
            "Spotify integration for Mac", 
            "Mac calendar integration",
            "AI assistant for Mac",
            "Glassmorphism Mac apps design",
            "Real-time device connectivity"
        ]
    };

    // Inject enhanced structured data
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(enhancedStructuredData);
    document.head.appendChild(structuredDataScript);
}

// Enhanced social media meta tags updates
function updateSocialMeta() {
    const socialMetas = [
        { property: 'og:title', content: 'NotchPro - Best Dynamic Island App for Mac | AirPods Battery & Spotify Control' },
        { property: 'og:description', content: 'Transform your Mac notch with intelligent AirPods battery monitoring, Spotify integration, calendar reminders & AI assistant. $2/month.' },
        { name: 'twitter:title', content: 'NotchPro - Dynamic Island for Mac' },
        { name: 'twitter:description', content: 'The most beautiful way to use your Mac notch. AirPods battery, Spotify controls, calendar & AI assistant.' }
    ];

    socialMetas.forEach(meta => {
        let element = document.querySelector(`meta[${meta.property ? 'property' : 'name'}="${meta.property || meta.name}"]`);
        if (element) {
            element.content = meta.content;
        }
    });
}

// Enhanced conversion optimization
function initializeConversionOptimization() {
    let engagementScore = 0;
    const engagementEvents = ['click', 'scroll', 'mousemove', 'keydown'];
    
    engagementEvents.forEach(event => {
        document.addEventListener(event, () => {
            engagementScore++;
            if (engagementScore === 50) { // High engagement threshold
                // Show special offer or enhanced CTA
                console.log('High engagement detected - opportunity for conversion optimization');
            }
        }, { passive: true });
    });
}

// Enhanced exit intent detection
function initializeExitIntentDetection() {
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
            // User is about to leave - could trigger exit intent popup
            console.log('Exit intent detected - opportunity for retention');
        }
    });
}

// Add FAQ structured data
function addFAQStructuredData() {
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which Mac models support NotchPro's Dynamic Island features?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NotchPro works perfectly with all MacBook Pro models with a notch (2021 and later). Our Mac notch customization requires macOS Monterey 12.0 or later for full AirPods battery monitoring and Spotify integration features."
                }
            },
            {
                "@type": "Question", 
                "name": "What music apps work with the Spotify Mac integration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Full support for Spotify, Apple Music, YouTube Music, SoundCloud, and any app using macOS media controls. Our mini music player for Mac adapts to your favorite streaming service automatically."
                }
            }
        ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(faqScript);
}

// Initialize all features when DOM is ready
function initializeAllFeatures() {
    addMusicProgressStyles();
    addCursorBlinkStyles();
    initializeSmoothScrolling();
    initializeButtonEffects();
    initializePerformanceOptimizations();
    initializeTypewriterEffect();
    initializeNotchWelcomeSequence();
    initializeGalleryAnimations();
    initializeScrollTriggerAnimations();
    initializeHapticFeedback();
    initializeKeyboardNavigation();
    initializeLazyLoading();
    initializeErrorHandling();
    initializePerformanceTracking();
    initializeMobileOptimizations();
    initializePWAFeatures();
    initializeConversionOptimization();
    initializeExitIntentDetection();
    initializeABTesting();
    initializeInternationalization();
    preloadCriticalResources();
    addEnhancedStructuredData();
    updateSocialMeta();
    addFAQStructuredData();
    initializeFeatureRotation();
}

// Final enhancement: Ensure all animations complete properly
window.addEventListener('beforeunload', () => {
    document.querySelectorAll('*').forEach(element => {
        element.style.animationPlayState = 'paused';
    });
});

// Initialize all features after DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeAllFeatures);