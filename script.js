// CeylonSecCon Website Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Dropdown functionality for CeylonSecCon years
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (menu) {
            dropdown.addEventListener('mouseenter', () => {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(-10px)';
            });
        }
    });
    
    // Cursor trail animation
    const cursorTrail = document.querySelector('.cursor-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorTrail.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', function() {
        cursorTrail.style.opacity = '0';
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
    
    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Placeholder for video functionality
            console.log('Video player would open here');
        });
        
        videoPlaceholder.style.cursor = 'pointer';
    }
    
    // Smooth scrolling for internal links
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
    
    // Page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Navigation Link Handlers with Redirects
function setupNavigationRedirects() {
    const navigationMap = {
        // Events dropdown
        '#conferences': '/conferences',
        '#workshops': '/workshops',
        
        // Briefings dropdown
        '#security-briefings': '/briefings/security',
        '#technical-briefings': '/briefings/technical',
        
        // Trainings dropdown
        '#hands-on-training': '/training/hands-on',
        '#certification': '/training/certification',
        
        // Arsenal dropdown
        '#tools': '/arsenal/tools',
        '#demos': '/arsenal/demos',
        
        // Summit dropdown
        '#executive-summit': '/summit/executive',
        '#ciso-summit': '/summit/ciso',
        
        // Webinars dropdown
        '#upcoming-webinars': '/webinars/upcoming',
        '#past-webinars': '/webinars/archive',
        
        // Sponsorships dropdown
        '#sponsor-packages': '/sponsorships/packages',
        '#partner-with-us': '/sponsorships/partnership',
        
        // About dropdown
        '#about-us': '/about',
        '#contact': '/contact',
        
        // Main sections
        '#register': '/register',
        '#events': '/events',
        '#briefings': '/briefings',
        '#trainings': '/training',
        '#arsenal': '/arsenal',
        '#summit': '/summit',
        '#webinars': '/webinars',
        '#sponsorships': '/sponsorships',
        '#about': '/about'
    };
    
    // Add click handlers for navigation links
    Object.keys(navigationMap).forEach(selector => {
        const element = document.querySelector(`a[href="${selector}"]`);
        if (element) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                // Create a smooth transition effect
                document.body.style.opacity = '0.7';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = navigationMap[selector];
                }, 300);
            });
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Webinar link interactions
function setupWebinarInteractions() {
    const webinarLinks = document.querySelectorAll('.webinars-list a');
    webinarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.textContent;
            const webinarSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            window.open(`/webinars/${webinarSlug}`, '_blank');
        });
    });
    
    // Sponsor and view all webinars links
    const sponsorLink = document.querySelector('.webinar-link[href="#"]:first-of-type');
    if (sponsorLink) {
        sponsorLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/webinars/sponsor';
        });
    }
    
    const viewAllLink = document.querySelector('.webinar-link[href="#"]:last-of-type');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/webinars/archive';
        });
    }
}

// Event item interactions
function setupEventInteractions() {
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const eventTitle = this.querySelector('.event-title').textContent;
            const eventSlug = eventTitle.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `/events/${eventSlug}`;
        });
        
        // Hover effects
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 168, 204, 0.1)';
            this.style.borderLeft = '3px solid var(--black-hat-cyan)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderLeft = '';
        });
    });
}

// Blog and Stay Connected interactions
function setupSidebarInteractions() {
    const blogLink = document.querySelector('.blog-link');
    if (blogLink) {
        blogLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/blog';
        });
    }
    
    const connectLink = document.querySelector('.connect-link');
    if (connectLink) {
        connectLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/newsletter';
        });
    }
}

// Footer link interactions
function setupFooterInteractions() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    const footerMap = {
        'Informa PLC': 'https://www.informa.com/',
        'About us': '/about',
        'Investor relations': 'https://www.informa.com/investors/',
        'Talent': 'https://www.informa.com/talent/'
    };
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            const url = footerMap[text];
            if (url) {
                if (url.startsWith('http')) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        });
    });
}

// Social media interactions
function setupSocialInteractions() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    const socialMap = {
        'fa-envelope': 'mailto:info@ceylonseccon.com',
        'fa-facebook-f': 'https://facebook.com/ceylonseccon',
        'fa-twitter': 'https://twitter.com/ceylonseccon',
        'fa-linkedin-in': 'https://linkedin.com/company/ceylonseccon',
        'fa-youtube': 'https://youtube.com/ceylonseccon',
        'fa-instagram': 'https://instagram.com/ceylonseccon'
    };
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.querySelector('i').className;
            const platform = Object.keys(socialMap).find(key => iconClass.includes(key));
            if (platform) {
                const url = socialMap[platform];
                if (url.startsWith('mailto:')) {
                    window.location.href = url;
                } else {
                    window.open(url, '_blank');
                }
            }
        });
    });
}

// Initialize all interactions
function initializeAllInteractions() {
    setupNavigationRedirects();
    setupWebinarInteractions();
    setupEventInteractions();
    setupSidebarInteractions();
    setupFooterInteractions();
    setupSocialInteractions();
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllInteractions);
} else {
    initializeAllInteractions();
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--black-hat-darker)';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
