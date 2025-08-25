import React, { useState, useEffect } from 'react';
import './Home.css'; // Import CSS file
import homeImage from '../../assets/homeImg.jpg'; // Import the hero image

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero slider images with background images
  const heroSlides = [
    {
      title: "Authentic Chinese Cuisine",
      subtitle: "Experience the rich flavors of traditional Guangzhou cooking",
      description: "Elegant restaurant interior with traditional Chinese decor",
      backgroundImage: homeImage
    },
   
  ];

  // ... existing featuredDishes array and useEffect hooks remain the same ...

  const featuredDishes = [
    { 
      name: "Peking Duck", 
      price: "$28.99", 
      description: "Traditional roasted duck with pancakes and hoisin sauce",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      name: "Kung Pao Chicken", 
      price: "$18.99", 
      description: "Spicy Szechuan classic with peanuts and chilies",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      name: "Dim Sum Platter", 
      price: "$22.99", 
      description: "Assorted steamed dumplings and buns",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      name: "Mapo Tofu", 
      price: "$15.99", 
      description: "Silky tofu in spicy Szechuan sauce",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Hero Section with Background Images */}
      <section className="hero" id="home">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="hero-slide"
              style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            >
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <button className="primary-btn" onClick={() => scrollToSection('section-menu')}>
                    View Menu
                  </button>
                  <button className="secondary-btn" onClick={() => scrollToSection('section-about')}>
                    Our Story
                  </button>
                </div>
              </div>
              {/* Fallback background for slow loading */}
              <div className="hero-fallback-bg"></div>
            </div>
          ))}
        </div>
        
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className="indicator"
              style={{
                backgroundColor: index === currentSlide ? '#d97d0a' : 'rgba(255,255,255,0.5)'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Rest of your existing sections remain the same */}
      {/* Welcome Section - Updated with image */}
      <section 
        className={`welcome-section ${isVisible['section-welcome'] ? 'visible' : ''}`}
        id="section-welcome"
      >
        <div className="welcome-content">
          <div className="welcome-grid">
            <div className="welcome-text-section">
              <h2 className="section-title">Welcome to Grand Minato</h2>
              <p className="welcome-text">
                For over 38 years, Grand Minato has been serving authentic Chinese cuisine that brings families and friends together. 
                Our master chefs use traditional techniques and the finest ingredients to create unforgettable dining experiences.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">38+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Signature Dishes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="welcome-image-section">
              <div className="welcome-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grand Minato Restaurant Interior"
                  className="welcome-image"
                />
                <div className="welcome-image-fallback">
                  <span className="restaurant-icon">🏮</span>
                  <p>Elegant Restaurant Interior</p>
                </div>
                <div className="welcome-image-overlay">
                  <div className="overlay-content">
                    <h3>Traditional Atmosphere</h3>
                    <p>Experience authentic Chinese dining ambiance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of your existing sections remain unchanged ... */}
      
      {/* Featured Menu */}
      <section 
        className={`menu-section ${isVisible['section-menu'] ? 'visible' : ''}`}
        id="section-menu"
      >
        <h2 className="section-title">Featured Dishes</h2>
        <p className="section-subtitle">Discover our most beloved culinary creations</p>
        
        <div className="dishes-grid">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <div className="dish-image-container">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="dish-image-real"
                />
                <div className="dish-image-fallback">
                  <span className="dish-icon">🍜</span>
                </div>
                <div className="dish-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={() => alert(`View details for ${dish.name}`)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="dish-content">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <div className="dish-footer">
                  <span className="dish-price">{dish.price}</span>
                  <button 
                    className="order-btn"
                    onClick={() => alert(`Added ${dish.name} to cart!`)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section 
        className={`experience-section ${isVisible['section-experience'] ? 'visible' : ''}`}
        id="section-experience"
      >
        <div className="experience-grid">
          <div>
            <h2 className="section-title">Your Dining Experience</h2>
            <div className="experience-options">
              <div className="experience-option">
                <span className="experience-icon">🍽️</span>
                <div>
                  <h3>Dine In</h3>
                  <p>Elegant atmosphere with traditional Chinese ambiance</p>
                </div>
              </div>
              <div className="experience-option">
                <span className="experience-icon">🥡</span>
                <div>
                  <h3>Takeaway</h3>
                  <p>Quick and convenient pickup service</p>
                </div>
              </div>
              <div className="experience-option">
                <span className="experience-icon">🚚</span>
                <div>
                  <h3>Delivery</h3>
                  <p>Fresh food delivered to your doorstep</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="image-placeholder">
              Beautiful Restaurant Interior
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className={`about-section ${isVisible['section-about'] ? 'visible' : ''}`}
        id="section-about"
      >
        <div className="about-grid">
          <div>
            <div className="image-placeholder">Master Chef in Action</div>
          </div>
          <div>
            <h2 className="section-title">Our Master Chef</h2>
            <p className="about-text">
              Master Chef Liu Wei brings over four decades of culinary excellence to Grand Minato. 
              Trained in the traditional techniques of Guangzhou cuisine, he ensures every dish maintains 
              the authentic flavors that have made our restaurant a beloved destination.
            </p>
            <div className="features">
              <div className="feature">✨ Traditional Techniques</div>
              <div className="feature">🥇 Premium Ingredients</div>
              <div className="feature">❤️ Family Recipes</div>
            </div>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Experience Grand Minato?</h2>
          <p className="cta-text">Join thousands of satisfied customers who have made us their favorite Chinese restaurant</p>
          <div className="cta-buttons">
            <button className="primary-btn">Make Reservation</button>
            <button className="secondary-btn">View Full Menu</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Grand Minato</h3>
            <p className="footer-text">Authentic Chinese cuisine since 1985</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📞 (+94) 77-3224567</p>
            <p>📧 info@grandminato.com</p>
            <p>📍 10 Street,Temple road, Baththaramulla</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon-Thu: 11AM - 10PM</p>
            <p>Fri-Sat: 11AM - 11PM</p>
            <p>Sunday: 12PM - 9PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Grand Minato Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;