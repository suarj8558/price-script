  // Initially we are adding some class on body for ensuring our test is running correctly.
  if (!document.querySelector('body').classList.contains('spz_10003')) {
    document.querySelector('body').classList.add('spz_10003');

    document.querySelector('head title').textContent = 'Uplisting Pricing';

    // Adding some custom classes on elements so we can use them for styling or custom Javascript code.
    document.querySelector('.pricing--page-steps').classList.add('spz_10003_pricing--page-steps');
    document.querySelector('.pricing--page-features').classList.add('spz_10003_pricing-table');

    // To manage pricing in both the table and accordion sections, we define a country-specific 
    // object that allows us to easily retrieve the appropriate value.
    const pricingConfig = {
      GBP: {
        symbol: '£',
        Monthly: {
          pro: {
            client_statement: '4.5/m. per property',
            client_portal: '4.5/m. per property',
            guest_identity: '1.25 per verification',
            security_deposits: '4.5/m. per property',
          },
          enterprise: {
            client_statement: '4.5/m. per property',
            client_portal: '4.5/m. per property',
            guest_identity: '1.25 per verification',
            security_deposits: '4.5/m. per property',
          },
          faq: ['£16/m.', '£80/m.'],
          proPricing: ['£80/m'],
          currencyPrice: ['£16'],
        },
        Yearly: {
          pro: {
            client_statement: '4.05/m. per property',
            client_portal: '4.05/m. per property',
            guest_identity: '1.125 per verification',
            security_deposits: '4.05/m. per property',
          },
          enterprise: {
            client_statement: '4.05/m. per property',
            client_portal: '4.05/m. per property',
            guest_identity: '1.125 per verification',
            security_deposits: '4.05/m. per property',
          },
          faq: ['£14.40/m.', '£72/m.'],
          proPricing: ['£72/m'],
          currencyPrice: ['£14.40'],
        },
      },
      EUR: {
        symbol: '€',
        Monthly: {
          pro: {
            client_statement: '5/m. per property',
            client_portal: '5/m. per property',
            guest_identity: '1.50 per verification',
            security_deposits: '5/m. per property',
          },
          enterprise: {
            client_statement: '5/m. per property',
            client_portal: '5/m. per property',
            guest_identity: '1.50 per verification',
            security_deposits: '5/m. per property',
          },
          faq: ['€18/m.', '€90/m.'],
          proPricing: ['€90/m'],
          currencyPrice: ['€18'],
        },
        Yearly: {
          pro: {
            client_statement: '5/m. per property',
            client_portal: '5/m. per property',
            guest_identity: '1.50 per verification',
            security_deposits: '5/m. per property',
          },
          enterprise: {
            client_statement: '5/m. per property',
            client_portal: '5/m. per property',
            guest_identity: '1.50 per verification',
            security_deposits: '5/m. per property',
          },
          faq: ['€16.20/m.', '€81/m.'],
          proPricing: ['€81/m'],
          currencyPrice: ['€16.20'],
        },
      },
      CAD: {
        symbol: '$',
        Monthly: {
          pro: {
            client_statement: '7.5/m. per property',
            client_portal: '7.5/m. per property',
            guest_identity: '2 per verification',
            security_deposits: '7.5/m. per property',
          },
          enterprise: {
            client_statement: '7.5/m. per property',
            client_portal: '7.5/m. per property',
            guest_identity: '2 per verification',
            security_deposits: '7.5/m. per property',
          },
          faq: ['$26.40/m.', '$132/m.'],
          proPricing: ['$132/m'],
          currencyPrice: ['$26.40'],
        },
        Yearly: {
          pro: {
            client_statement: '7.5/m. per property',
            client_portal: '7.5/m. per property',
            guest_identity: '2 per verification',
            security_deposits: '7.5/m. per property',
          },
          enterprise: {
            client_statement: '7.5/m. per property',
            client_portal: '7.5/m. per property',
            guest_identity: '2 per verification',
            security_deposits: '7.5/m. per property',
          },
          faq: ['$23.76/m.', '$188.8/m.'],
          proPricing: ['$188.8/m'],
          currencyPrice: ['$23.76'],
        },
      },
      AUD: {
        symbol: '$',
        Monthly: {
          pro: {
            client_statement: '9/m. per property',
            client_portal: '9/m. per property',
            guest_identity: '2.5 per verification',
            security_deposits: '9/m. per property',
          },
          enterprise: {
            client_statement: '9/m. per property',
            client_portal: '9/m. per property',
            guest_identity: '2.5 per verification',
            security_deposits: '9/m. per property',
          },
          faq: ['$28.80/m.', '$144/m.'],
          proPricing: ['$144/m'],
          currencyPrice: ['$28.80'],
        },
        Yearly: {
          pro: {
            client_statement: '9/m. per property',
            client_portal: '9/m. per property',
            guest_identity: '2.5 per verification',
            security_deposits: '9/m. per property',
          },
          enterprise: {
            client_statement: '9/m. per property',
            client_portal: '9/m. per property',
            guest_identity: '2.5 per verification',
            security_deposits: '9/m. per property',
          },
          faq: ['$25.92/m.', '$129.6/m.'],
          proPricing: ['$129.6/m'],
          currencyPrice: ['$25.92'],
        },
      },
      USD: {
        symbol: '$',
        Monthly: {
          pro: {
            client_statement: '6/m. per property',
            client_portal: '6/m. per property',
            guest_identity: '1.65 per verification',
            security_deposits: '6/m. per property',
          },
          enterprise: {
            client_statement: '6/m. per property',
            client_portal: '6/m. per property',
            guest_identity: '1.65 per verification',
            security_deposits: '6/m. per property',
          },
          faq: ['$20/m.', '$100/m.'],
          proPricing: ['$100/m'],
          currencyPrice: ['$20'],
        },
        Yearly: {
          pro: {
            client_statement: '6/m. per property',
            client_portal: '6/m. per property',
            guest_identity: '1.65 per verification',
            security_deposits: '6/m. per property',
          },
          enterprise: {
            client_statement: '6/m. per property',
            client_portal: '6/m. per property',
            guest_identity: '1.65 per verification',
            security_deposits: '6/m. per property',
          },
          faq: ['$18/m.', '$90/m.'],
          proPricing: ['$90/m'],
          currencyPrice: ['$18'],
        },
      },
    };

    // This object for managing timezone
    const timezoneMap = {
      EUR: ['Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Madrid', 'Europe/Amsterdam',
        'Europe/Brussels', 'Europe/Vienna', 'Europe/Prague', 'Europe/Warsaw', 'Europe/Stockholm',
        'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Athens', 'Europe/Dublin', 'Europe/Lisbon',
        'Europe/Budapest', 'Europe/Bucharest', 'Europe/Sofia', 'Europe/Zagreb', 'Europe/Ljubljana',
        'Europe/Bratislava', 'Europe/Tallinn', 'Europe/Riga', 'Europe/Vilnius', 'Europe/Luxembourg',
        'Europe/Malta'],
      GBP: ['Europe/London'],
      USD: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles'],
      CAD: ['America/Toronto', 'America/Vancouver', 'America/Montreal', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax'],
      AUD: ['Australia/Sydney', 'Australia/Melbourne']
    };


    // let currentCurrency = 'USD';
    // let currentBillingPeriod = 'Monthly';

    let currentBillingPeriod = 'Monthly';
    let currentCurrency = null;

    // Detect currency based on timezone
    const detectCurrency = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log('Detected timezone:', timezone);

      // Check exact matches first
      for (const [currency, zones] of Object.entries(timezoneMap)) {
        if (zones.includes(timezone)) {
          console.log('Exact match - Currency:', currency);
          return currency;
        }
      }

      // For Canadian detection - check if timezone includes Canadian cities
      const canadianCities = ['Toronto', 'Vancouver', 'Montreal', 'Edmonton', 'Winnipeg', 'Halifax', 'Ottawa', 'Quebec', 'Calgary'];
      if (canadianCities.some(city => timezone.includes(city))) {
        console.log('Canadian timezone detected by city - Currency: CAD');
        return 'CAD';
      }

      // Check for other America timezones (prioritize Canada over US)
      if (timezone.startsWith('America/')) {
        // Additional Canadian timezone patterns
        if (timezone.includes('Toronto') || timezone.includes('Montreal') || timezone.includes('Vancouver') ||
          timezone.includes('Edmonton') || timezone.includes('Winnipeg') || timezone.includes('Halifax')) {
          console.log('Canadian timezone detected - Currency: CAD');
          return 'CAD';
        }
        console.log('US timezone detected - Currency: USD');
        return 'USD';
      }

      // Check for European timezones
      if (timezone.startsWith('Europe/')) {
        if (timezone === 'Europe/London') {
          console.log('UK timezone detected - Currency: GBP');
          return 'GBP';
        }
        console.log('European timezone detected - Currency: EUR');
        return 'EUR';
      }

      // Check for Australian timezones
      if (timezone.startsWith('Australia/')) {
        console.log('Australian timezone detected - Currency: AUD');
        return 'AUD';
      }

      console.log('No match found, defaulting to USD');
      return 'USD'; // default fallback
    };

    // Helper function to update pricing display
    const updatePricingDisplay = () => {
      // const currentCurrency = detectCurrency();
      if (!currentCurrency) {
        currentCurrency = detectCurrency();
      }

      const cfg = pricingConfig[currentCurrency]?.[currentBillingPeriod];
      if (!cfg) {
        console.log('No config found for:', currentCurrency, currentBillingPeriod);
        return;
      }

      const symbol = pricingConfig[currentCurrency].symbol;

      // Helper to set HTML content
      const setHTML = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = `${symbol}${value}<br> Available add-on`;
      };

      // Update pro section
      setHTML('p.pricing--text.client_statement_pricing_text_pro', cfg.pro.client_statement);
      setHTML('p.pricing--text.client_portal_pricing_text_pro', cfg.pro.client_portal);
      setHTML('p.pricing--text.guest_identity_verification_pricing_text_pro', cfg.pro.guest_identity);
      setHTML('p.pricing--text.security_deposits_pricing_text_pro', cfg.pro.security_deposits);

      // Update enterprise section
      setHTML('p.pricing--text.client_statement_pricing_text_enterprise', cfg.enterprise.client_statement);
      setHTML('p.pricing--text.client_portal_pricing_text_enterprise', cfg.enterprise.client_portal);
      setHTML('p.pricing--text.guest_identity_verification_pricing_text_enterprise', cfg.enterprise.guest_identity);
      setHTML('p.pricing--text.security_deposits_pricing_text_enterprise', cfg.enterprise.security_deposits);

      // Update FAQ text
      const faq1 = document.querySelector('span.faq_currency_one');
      const faq2 = document.querySelector('span.faq_currency_two');
      if (faq1) faq1.textContent = cfg.faq[0];
      if (faq2) faq2.textContent = cfg.faq[1];

      const proPricingElem = document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter .pricing--top .spz_pro_pricing');
      if (proPricingElem) proPricingElem.textContent = cfg.proPricing;

      const currencyValue = document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter .pricing--top .pricing--price.pro-pricing .span--pro-monthly-price');
      if (currencyValue) {
        currencyValue.textContent = cfg.currencyPrice[0];
        console.log('Updated price to:', cfg.currencyPrice[0], 'for', currentCurrency, currentBillingPeriod);
      }
    };



    // Currency selector event listeners
    document.querySelectorAll('.pricing-steps--wrapper > .pricing-steps--rbf').forEach(ele => {
      if (ele.dataset.listenerAdded) return;
      ele.dataset.listenerAdded = "true";

      ele.addEventListener('click', e => {
        const currency = e.currentTarget.querySelector('span.pricing-steps--label').textContent;
        if (pricingConfig[currency]) {
          currentCurrency = currency;
          updatePricingDisplay();
        }
      });
    });

    document.querySelectorAll('.pricing-page.billing-period .pricing-steps--rbf').forEach(ele => {
      if (ele.dataset.billingListenerAdded) return;
      ele.dataset.billingListenerAdded = "true";

      ele.addEventListener('click', e => {
        const labelSpan = e.currentTarget.querySelector('span.pricing-steps--label');
        if (labelSpan) {
          const period = labelSpan.textContent.trim();

          // Handle both "Monthly" and "Yearly (save 10%)" formats
          if (period === 'Monthly' || period.includes('Monthly')) {
            currentBillingPeriod = 'Monthly';
          } else if (period === 'Yearly' || period.includes('Yearly')) {
            currentBillingPeriod = 'Yearly';
          }

          setTimeout(function () {
            updatePricingDisplay();
          }, 10);

          console.log('Billing period updated to:', currentBillingPeriod); // Debug log
        }
      });
    });



    // Also listen for radio button change events as backup
    document.querySelectorAll('input[name="Select-Billing"]').forEach(radio => {
      if (radio.dataset.changeListenerAdded) return;
      radio.dataset.changeListenerAdded = "true";

      radio.addEventListener('change', e => {
        const radioId = e.target.id;
        currentBillingPeriod = radioId === 'Yearly' ? 'Yearly' : 'Monthly';
        updatePricingDisplay();
        console.log('Radio change - Billing period updated to:', currentBillingPeriod);
      });
    });


    // calling all functions here
    topHeadingUpdates();
    topTableUpdates();
    addingNewTable();
    testimonialChanges();
    faqSectionChanges();
    updatePricingDisplay();
    clickEvents();
    updatePricingText();
  }


  // Object for handlinng Monthly & Yearly pricing
  const proMonthlyPricing = {
    "GBP": "£16",
    "EUR": "€18",
    "USD": "$20",
    "CAD": "$26.40",
    "AUD": "$28.80",
    "NZD": "$30"
  };

  const proYearlyPricing = {
    "GBP": "£14.40",
    "EUR": "€16.20",
    "USD": "$18",
    "CAD": "$23.76",
    "AUD": "$25.92",
    "NZD": "$27"
  };


  function topHeadingUpdates() {
    const topHeading = document.querySelector('.spz_10003_pricing--page-steps h2');
    if (topHeading) {
      topHeading.textContent = 'Pricing';
    }
  }

  // Adding custom toggle button for table
  function topTableUpdates() {
    document.querySelectorAll('.spz_10003_pricing-table .pricing--column').forEach(function (ele) {
      if (!ele.querySelector('.spz-feature-toggle-button')) {
        ele.querySelector('.pricing--top').insertAdjacentHTML('afterend', `<div class="spz-feature-toggle-button">Compare all features <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			  <g clip-path="url(#clip0_27109_1649)">
			    <path d="M16.25 7.5L10 13.75L3.75 7.5" stroke="#00996E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			  </g>
			  <defs>
			    <clipPath id="clip0_27109_1649">
			      <rect width="20" height="20" fill="white"/>
			    </clipPath>
			  </defs>
			</svg></div>`);
      }
    });


    const proPricing = document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter .pricing--top .pricing--bot-description');
    const quoteCTA = document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter .pricing--top .button.pricing--page.new-sales-button');

    if (proPricing && quoteCTA) {
      // Clone the element
      const clonedPricing = proPricing.cloneNode(true);

      // Remove all existing classes
      clonedPricing.removeAttribute('class');

      // Add only the new class
      clonedPricing.classList.add('spz_pro_pricing');

      // Insert the clone after the CTA button
      quoteCTA.insertAdjacentElement('afterend', clonedPricing);

      // Add spz-hide class to the original element
      proPricing.classList.add('spz-hide');
    }


    // manage pro pricing content
    const childContent = document.querySelector(
      ".spz_10003_pricing-table .pricing--column.column--starter .pricing--top .pricing--price.pro-pricing"
    );

    if (childContent && childContent.childNodes[1]) {
      const text = childContent.childNodes[1].textContent.trim(); // "/m per property"
      const parts = text.split(" "); // ["/m", "per", "property"]
      const extracted = parts.slice(1).join(" "); // "per property"

      // Create span and insert it
      const span = document.createElement("span");
      span.className = "spz-extracted";
      span.textContent = extracted;

      // Replace old text node with span
      childContent.replaceChild(span, childContent.childNodes[1]);
    }


    // Cusom box changes
    document.querySelector('.spz_10003_pricing-table .pricing--column.green-outline .pricing--top .pricing--bot-description').textContent = '6+ properties*';

    // Update CTA Text
    document.querySelectorAll('.spz_10003_pricing-table .pricing--column.green-outline a[href="/contact-sales"], .spz_10003_pricing-table .pricing--column.green-outline .button.pricing--page').forEach(function (blackCTA) {
      blackCTA.textContent = 'Get a quote';
    })

    document.querySelectorAll('.spz_10003_pricing-table .pricing--column.column--starter .pricing--top a.button.pricing--page, .spz_10003_pricing-table .pricing--column.column--starter a.button.pricing--page.is--bot').forEach(function (greenCTA) {
      greenCTA.textContent = 'Start your free trial';
    })



    if (!document.querySelector('.spz_10003 .spz_10003_pricing-table .pricing--column.green-outline .pricing--top > div > a.button.pricing--page .spz_custom_textPara')) {
      document.querySelector('.spz_10003 .spz_10003_pricing-table .pricing--column.green-outline .pricing--top > div > a.button.pricing--page').insertAdjacentHTML('afterend', `<p class="spz_custom_textPara">*Bulk discounts available</p>`);
    }
  }

  // Inserting our new custom table
  function addingNewTable() {
    if (!document.querySelector('.spz_10003_pricing-table .pricing--column.is--mobile-hidden .spz-pricing-bot')) {
      document.querySelector('.spz_10003_pricing-table .pricing--column.is--mobile-hidden').insertAdjacentHTML('beforeend', `<div class="spz-pricing-bot pricing-bot-one is-table-hidden">
  <div class="pricing-row bg-gray">
    <p class="pricing--text is--bold">Additional Support Features</p>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Live Chat Support</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Best-in-class support. Just check out our reviews on Capterra or TrustPilot. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">14-day free trial</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Try Uplisting for 14 days, risk-free. No credit card required. Connect in ‘Read only’ mode to get started without affecting your current listings. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Free 1:1 Onboarding</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Every Uplisting customer gets free 1:1 onboarding with a real human expert. Visit uplisting.io/onboarding to get started and book a call. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold">Guest Experience Features</p>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Unified Inbox</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Manage guest messages from Airbnb, Vrbo, Booking.com, and direct booking sites in one single inbox. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Multi-Calendar</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white"> Manage bookings, prices, availability and restrictions for all booking sites in one place. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Automated Guest Messages</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Set up auto replies to keep guests informed from booking to check-out, without having to lift a finger yourself. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Mobile App</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Manage your bookings on-the-go with the Uplisting mobile app. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Automated Reviews</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Automate the collection of guest reviews to boost your listing’s credibility and attract more guests. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Enquiry Auto-responder</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Auto-respond to Airbnb enquiries to help boost your Airbnb rankings. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray spz-sms">
    <p class="pricing--text"> SMS</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Send SMS messages from the Unified Inbox to your guest’s phones for ultimate convenience. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Drafts smart replies to guest questions using your listing details and house rules. You just review and send — saving time while keeping messages personal.</p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold">Revenue Growth Features</p>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Channel Manager</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Manage listings across Airbnb, Vrbo, Booking.com, Google and direct booking sites from one place. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Direct Booking Website</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Easily create a direct booking site in minutes. 0% commission on bookings, no technical skills needed. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Guest Payment Links</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Collect payments from direct bookings securely, quickly, and easily. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Guest Payment Plans</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Offer flexible payment plans to guests to increase bookings. For example, collect 10% at booking, and the remainder 7 days before check-in. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray spz-upsells">
    <p class="pricing--text">Upsells</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Increase revenue per booking by offering upsells, like a fee for early check-in. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold">Operational Features</p>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Client (owner) Statements</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Create and send monthly owner statements in seconds. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Client (owner) Portal</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Grant your clients visibility to their listings on Uplisting. They can see basic information and mark dates unavailable. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">Cleaning Scheduler</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Let cleaning manage itself with Uplisting’s advanced changeover feature. Invite your cleaning team, and let Uplisting do the rest (except for cleaning!). </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Guest Identity Verification</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Easily and securely verify guest identities. Verify authenticity of over 4,000 document types from 100+ countries through Uplisting. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row bg-gray">
    <p class="pricing--text">eSignature Rental Agreement</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Have guests sign rental agreements electronically, and provide them with a downloadable .pdf copy. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
  <div class="pricing-row">
    <p class="pricing--text">Security Deposits</p>
    <div class="container--more-info">
      <div style="display: none; opacity: 0;" class="more-info--pop-up">
        <p class="text-size-14 text-white">Automate security deposit collection from Booking.com, Vrbo, and direct booking sites. </p>
      </div>
      <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
    </div>
  </div>
</div>`);
    }

    if (!document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter .spz-pricing-bot')) {
      document.querySelector('.spz_10003_pricing-table .pricing--column.column--starter').insertAdjacentHTML('beforeend', `<div class="spz-pricing-bot pricing-bot-two is-table-hidden">
  <div class="pricing-row bg-gray">
    <p class="pricing--text is--bold is--desktop-hidden">Additional Support Features</p>
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Live Chat Support</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">14-day free trial</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Free 1:1 Onboarding</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Guest Experience Features</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Unified Inbox</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Multi-Calendar</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Automated Guest Messages</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Mobile App</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Automated Reviews</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Enquiry Auto-responder</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center spz-sms">
    <div class="is--desktop-hidden">
      <p class="pricing--text"> SMS</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Revenue Growth Features</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Channel Manager</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Direct Booking Website</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Payment Links</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Payment Plans</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center spz-upsells">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Upsells</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Operational Features</p>
  </div>
  <div class="pricing-row bg-gray is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Client (owner) Statements</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text client_statement_pricing_text_pro">$6/m. per property <br> Available add-on</p>
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Client (owner) Portal</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text client_portal_pricing_text_pro">$6/m. per property <br> Available add-on</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Cleaning Scheduler</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Identity Verification</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text guest_identity_verification_pricing_text_pro">$1.65 per verification <br> Available add-on</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">eSignature Rental Agreement</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Security Deposits</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text security_deposits_pricing_text_pro">$6/m. per property <br> Available add-on</p>
  </div>
  <a href="https://auth.airdna.co/oauth2/register?client_id=df16ce59-357b-4ddd-9ab0-de9b5174a7f9&amp;redirect_uri=https://app.uplisting.io/auth-callback&amp;response_type=token&amp;amp_device_id=9c1ccdf0-1556-481f-a45f-7dfb536b07f2R" class="button pricing--page is--bot w-button">Start your free trial</a>
</div>`);
    }

    if (!document.querySelector('.spz_10003_pricing-table .pricing--column.green-outline .spz-pricing-bot')) {
      document.querySelector('.spz_10003_pricing-table .pricing--column.green-outline').insertAdjacentHTML('beforeend', `<div class="spz-pricing-bot pricing-bot-three is-table-hidden">
  <div class="pricing-row bg-gray">
    <p class="pricing--text is--bold is--desktop-hidden">Additional Support Features</p>
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Live Chat Support</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text">Priority</p>
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">14-day free trial</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Free 1:1 Onboarding</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Guest Experience Features</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Unified Inbox</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Multi-Calendar</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Automated Guest Messages</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Mobile App</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Automated Reviews</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Enquiry Auto-responder</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center spz-sms">
    <div class="is--desktop-hidden">
      <p class="pricing--text"> SMS</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Revenue Growth Features</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Channel Manager</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Direct Booking Website</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Payment Links</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Payment Plans</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row bg-gray is--center spz-upsells">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Upsells</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>

  <div class="pricing-row">
    <p class="pricing--text is--bold is--desktop-hidden">Operational Features</p>
  </div>
  <div class="pricing-row bg-gray is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Client (owner) Statements</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text client_statement_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Client (owner) Portal</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text client_portal_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Cleaning Scheduler</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Guest Identity Verification</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text guest_identity_verification_pricing_text_enterprise">$1.65 per verification <br> Available add-on</p>
  </div>
  <div class="pricing-row bg-gray is--center">
    <div class="is--desktop-hidden">
      <p class="pricing--text">eSignature Rental Agreement</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
  </div>
  <div class="pricing-row is--center mobile-flex">
    <div class="is--desktop-hidden">
      <p class="pricing--text">Security Deposits</p>
      <div class="container--more-info is--hidden">
        <div style="display: none; opacity: 0;" class="more-info--pop-up">
          <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
      </div>
    </div>
    <p class="pricing--text security_deposits_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
  </div>
  <a href="/contact-sales" class="button pricing--page enterprise is--bot w-button">Get a quote</a>
</div>`);
    }



    if (!document.querySelector('.section.bg-theme-white.pricing--page-features .pricing--columns + .spz-mobile-table')) {
      document.querySelector('.section.bg-theme-white.pricing--page-features .pricing--columns').insertAdjacentHTML('afterend', `<div class="spz_mobile_pricing_table">
   <div class="pricing--column is--mobile-hidden w-col w-col-4">
      <div class="spz-pricing-bot pricing-bot-one">
         <div class="pricing-row bg-gray">
            <p class="pricing--text is--bold">Additional Support Features</p>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Live Chat Support</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Best-in-class support. Just check out our reviews on Capterra or TrustPilot. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">14-day free trial</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Try Uplisting for 14 days, risk-free. No credit card required. Connect in ‘Read only’ mode to get started without affecting your current listings. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Free 1:1 Onboarding</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Every Uplisting customer gets free 1:1 onboarding with a real human expert. Visit uplisting.io/onboarding to get started and book a call. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold">Guest Experience Features</p>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Unified Inbox</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Manage guest messages from Airbnb, Vrbo, Booking.com, and direct booking sites in one single inbox. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Multi-Calendar</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white"> Manage bookings, prices, availability and restrictions for all booking sites in one place. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Automated Guest Messages</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Set up auto replies to keep guests informed from booking to check-out, without having to lift a finger yourself. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Mobile App</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Manage your bookings on-the-go with the Uplisting mobile app. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Automated Reviews</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Automate the collection of guest reviews to boost your listing’s credibility and attract more guests. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Enquiry Auto-responder</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Auto-respond to Airbnb enquiries to help boost your Airbnb rankings. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray spz-sms">
            <p class="pricing--text"> SMS</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Send SMS messages from the Unified Inbox to your guest’s phones for ultimate convenience. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Drafts smart replies to guest questions using your listing details and house rules. You just review and send — saving time while keeping messages personal.</p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold">Revenue Growth Features</p>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Channel Manager</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Manage listings across Airbnb, Vrbo, Booking.com, Google and direct booking sites from one place. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Direct Booking Website</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Easily create a direct booking site in minutes. 0% commission on bookings, no technical skills needed. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Guest Payment Links</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Collect payments from direct bookings securely, quickly, and easily. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Guest Payment Plans</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Offer flexible payment plans to guests to increase bookings. For example, collect 10% at booking, and the remainder 7 days before check-in. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray spz-upsells">
            <p class="pricing--text">Upsells</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Increase revenue per booking by offering upsells, like a fee for early check-in. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold">Operational Features</p>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Client (owner) Statements</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Create and send monthly owner statements in seconds. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Client (owner) Portal</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Grant your clients visibility to their listings on Uplisting. They can see basic information and mark dates unavailable. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">Cleaning Scheduler</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Let cleaning manage itself with Uplisting’s advanced changeover feature. Invite your cleaning team, and let Uplisting do the rest (except for cleaning!). </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Guest Identity Verification</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Easily and securely verify guest identities. Verify authenticity of over 4,000 document types from 100+ countries through Uplisting. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row bg-gray">
            <p class="pricing--text">eSignature Rental Agreement</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Have guests sign rental agreements electronically, and provide them with a downloadable .pdf copy. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
         <div class="pricing-row">
            <p class="pricing--text">Security Deposits</p>
            <div class="container--more-info">
               <div style="display: none; opacity: 0;" class="more-info--pop-up">
                  <p class="text-size-14 text-white">Automate security deposit collection from Booking.com, Vrbo, and direct booking sites. </p>
               </div>
               <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
            </div>
         </div>
      </div>
   </div>
   <div class="pricing--column column--starter w-col w-col-4">
      <div class="spz-pricing-bot pricing-bot-two ">
         <div class="pricing-row bg-gray">
            <p class="pricing--text is--bold is--desktop-hidden">Additional Support Features</p>
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Live Chat Support</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">14-day free trial</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Free 1:1 Onboarding</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Guest Experience Features</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Unified Inbox</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Multi-Calendar</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Automated Guest Messages</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Mobile App</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Automated Reviews</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Enquiry Auto-responder</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center spz-sms">
            <div class="is--desktop-hidden">
               <p class="pricing--text"> SMS</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Revenue Growth Features</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Channel Manager</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Direct Booking Website</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Payment Links</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Payment Plans</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center spz-upsells">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Upsells</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Operational Features</p>
         </div>
         <div class="pricing-row bg-gray is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Client (owner) Statements</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text client_statement_pricing_text_pro">$6/m. per property <br> Available add-on</p>
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Client (owner) Portal</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text client_portal_pricing_text_pro">$6/m. per property <br> Available add-on</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Cleaning Scheduler</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Identity Verification</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text guest_identity_verification_pricing_text_pro">$1.65 per verification <br> Available add-on</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">eSignature Rental Agreement</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Security Deposits</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text security_deposits_pricing_text_pro">$6/m. per property <br> Available add-on</p>
         </div>
         <a href="https://auth.airdna.co/oauth2/register?client_id=df16ce59-357b-4ddd-9ab0-de9b5174a7f9&amp;redirect_uri=https://app.uplisting.io/auth-callback&amp;response_type=token&amp;amp_device_id=9c1ccdf0-1556-481f-a45f-7dfb536b07f2R" class="button pricing--page is--bot w-button">Start your free trial</a>
      </div>
   </div>
   <div class="pricing--column green-outline w-col w-col-4">
      <div class="spz-pricing-bot pricing-bot-three">
         <div class="pricing-row bg-gray">
            <p class="pricing--text is--bold is--desktop-hidden">Additional Support Features</p>
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Live Chat Support</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text">Priority</p>
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">14-day free trial</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Free 1:1 Onboarding</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Guest Experience Features</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Unified Inbox</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Multi-Calendar</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Automated Guest Messages</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Mobile App</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Automated Reviews</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Enquiry Auto-responder</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center spz-sms">
            <div class="is--desktop-hidden">
               <p class="pricing--text"> SMS</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text ai-messaging-agent">AI Messaging Agent [coming soon]</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Revenue Growth Features</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Channel Manager</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Direct Booking Website</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Payment Links</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Payment Plans</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row bg-gray is--center spz-upsells">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Upsells</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row">
            <p class="pricing--text is--bold is--desktop-hidden">Operational Features</p>
         </div>
         <div class="pricing-row bg-gray is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Client (owner) Statements</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text client_statement_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Client (owner) Portal</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text client_portal_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Cleaning Scheduler</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Guest Identity Verification</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text guest_identity_verification_pricing_text_enterprise">$1.65 per verification <br> Available add-on</p>
         </div>
         <div class="pricing-row bg-gray is--center">
            <div class="is--desktop-hidden">
               <p class="pricing--text">eSignature Rental Agreement</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef7c9c1ad44e426c0216ee_Check%20icon%20green.svg" loading="lazy" alt="" class="pricing--check-icon">
         </div>
         <div class="pricing-row is--center mobile-flex">
            <div class="is--desktop-hidden">
               <p class="pricing--text">Security Deposits</p>
               <div class="container--more-info is--hidden">
                  <div style="display: none; opacity: 0;" class="more-info--pop-up">
                     <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63ef79c269d5509dc7b5a0c0_Help%20icon.svg" loading="lazy" alt="" class="pricing--help-icon">
               </div>
            </div>
            <p class="pricing--text security_deposits_pricing_text_enterprise">$6/m. per property <br> Available add-on</p>
         </div>
         <a href="/contact-sales" class="button pricing--page enterprise is--bot w-button">Get a quote</a>
      </div>
   </div>
</div>
`)

    }
  }

  // making changes in the Testimonial and FAQ section
  function testimonialChanges() {
    // Move slider above FAQ section
    const faqSection = document.querySelector('section.section.pricing--page-faqs');
    const testimonialSection = document.querySelector('.section.pricing--page-testimonials');
    if (faqSection && testimonialSection) {
      faqSection.insertAdjacentElement('beforebegin', testimonialSection);
    }

    addExtraSlides();

    // Second slide changes
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:nth-child(2) .testimonial--wrapper img.testimonial--logo').setAttribute('alt', 'Luke Capital Group Logo');
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:nth-child(2) .testimonial--wrapper img.testimonial--logo').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-luke-capital.webp');
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:nth-child(2) .testimonial--wrapper .testimonial--text').innerHTML = `“It’s been a game-changer because [Uplisting] really has<br> allowed us to just focus on other areas of the business.”`;
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:nth-child(2) .testimonial--wrapper p.testimonial--name').textContent = "300 properties ";

    //First slide changes
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:first-child .testimonial--wrapper img.testimonial--logo').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-pass-the-property.webp');
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:first-child .testimonial--wrapper .testimonial--text').innerHTML = "“Uplisting adds a fantastic amount of automation <br>into our business to allow us to grow.” ";
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:first-child .testimonial--wrapper p.testimonial--name').textContent = "Pass the Property (UK)";
    document.querySelector('.spz_10003 .section.pricing--page-testimonials .testimonials--slide.w-slide:first-child .testimonial--wrapper p.testimonial--company').textContent = "170 properties ";
  }


  // Inserting new slides
  function addExtraSlides() {
    const mask = document.querySelector('.testimonials--slider .w-slider-mask');
    if (!mask) return;

    // Example: add 2 new slides
    const newSlide1 = document.createElement('div');
    newSlide1.className = 'testimonials--slide w-slide';
    newSlide1.innerHTML = `<img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63efbb5a197cc4b3a9039f6e_Ellipse%203.svg" loading="lazy" alt="" class="testimonial--circle-left" aria-hidden="true"> <div class="testimonial--wrapper">
			  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-propke.webp" loading="lazy" alt="propke logo" class="testimonial--logo">
			  <p class="testimonial--text">“I have 100 apartments with Uplisting and pay less than what <br>I was paying with only 20 apartments at Guesty.” </p>
			  <div class="div-block-12">
			    <div>
			      <p class="testimonial--name">Propke</p>
			      <p class="testimonial--company">100 properties </p>
			    </div>
			  </div>
			</div>`;

    const newSlide2 = document.createElement('div');
    newSlide2.className = 'testimonials--slide w-slide';
    newSlide2.innerHTML = `<img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63efbb5a197cc4b3a9039f6e_Ellipse%203.svg" loading="lazy" alt="" class="testimonial--circle-left" aria-hidden="true"> <div class="testimonial--wrapper">
			  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-copper-house.webp" loading="lazy" alt="copper house logo" class="testimonial--logo">
			  <p class="testimonial--text">“From an automation and systemization point of view, we felt Uplisting could take care of the entire guest services operation, whereas other platforms certainly have limitations.”</p>
			  <div class="div-block-12">
			    <div>
			      <p class="testimonial--name">CopperHouse Property</p>
			      <p class="testimonial--company">40 properties </p>
			    </div>
			  </div>
			</div>`;

    const newSlide3 = document.createElement('div');
    newSlide3.className = 'testimonials--slide w-slide';
    newSlide3.innerHTML = `<img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63efbb5a197cc4b3a9039f6e_Ellipse%203.svg" loading="lazy" alt="" class="testimonial--circle-left" aria-hidden="true"> <div class="testimonial--wrapper">
			  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-the_wolf-rentals.webp" loading="lazy" alt="the wolf rental logo" class="testimonial--logo">
			  <p class="testimonial--text">“Uplisting is organized and the intelligence with which it is coded, <br>helps me be more productive because stuff actually works.”</p>
			  <div class="div-block-12">
			    <div>
			      <p class="testimonial--name">The Wolf Rentals</p>
			      <p class="testimonial--company">25 properties </p>
			    </div>
			  </div>
			</div>`;


    const newSlide4 = document.createElement('div');
    newSlide4.className = 'testimonials--slide w-slide';
    newSlide4.innerHTML = `<img src="https://cdn.prod.website-files.com/5fdbc6d50f9d578cd82afbbf/63efbb5a197cc4b3a9039f6e_Ellipse%203.svg" loading="lazy" alt="" class="testimonial--circle-left" aria-hidden="true"> <div class="testimonial--wrapper">
				  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/10003/logo-hostminded.webp" loading="lazy" alt="hostminded logo" class="testimonial--logo">
				  <p class="testimonial--text">“Price-performance-wise, Uplisting is probably one of the best <br>property management solutions on the market.” </p>
				  <div class="div-block-12">
				    <div>
				      <p class="testimonial--name">Hostminded</p>
				      <p class="testimonial--company">100 properties </p>
				    </div>
				  </div>
				</div>`;

    // Append them to the slider mask
    mask.appendChild(newSlide1);
    mask.appendChild(newSlide2);
    mask.appendChild(newSlide3);
    mask.appendChild(newSlide4);

    // VERY IMPORTANT: re-init Webflow slider
    if (window.Webflow && window.Webflow.require) {
      const slider = window.Webflow.require('slider');
      slider.redraw(); // forces Webflow to recognize new slides
    }
  }


  // Create new FAQ Accordion
  function faqSectionChanges() {
    const faqWrapper = document.querySelector('section.section.pricing--page-faqs .accordion-wrapper');
    if (faqWrapper) {
      faqWrapper.insertAdjacentHTML('afterend', `<div class="spz-accordion-wrapper">
      <div class="accordion-item">
        <div id="q1" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>Is there a free trial?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Yes! New customers get a 14-day free trial. </p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q2" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>How much does Uplisting cost?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Uplisting costs <span class="faq_currency_one">$20/m.</span> per listing. There is a <span class="faq_currency_two">$100/m.</span> minimum payment required, which covers up to 5 listings.</p> <p class="accordion-paragraph">We give a 10% discount for annual subscriptions, and provide custom pricing for professional property managers or individuals with 6 or more listings.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q3" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>Which Uplisting plan is right for me?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">The Pro package best serves customers with 0-5 properties listed as short-term rentals. </p><p class="accordion-paragraph">The Enterprise package best serves customers with 6+ properties listed as short-term rentals. </p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q4" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>How does billing work?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Our base subscription and all feature add-ons (except for the guest identity add-on) are charged per property per month. If you add a property in the middle of a billing cycle, that property will be charged on the next billing period based on the time it has been used. If you remove a property mid-billing cycle the unused time is credited from your next billing cycle. </p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q5" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>Can I cancel my subscription anytime?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Yes, you can cancel your monthly subscription at anytime. When you cancel, you will continue to have full access to your Uplisting subscription until the end of your current billing cycle. For example, if your subscription renews on the 15th of the month and you cancel on the 5th, you'll still enjoy access until the 15th.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q6" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>Does Uplisting take any fees on bookings?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Nope! Uplisting doesn’t take any commission on bookings. The only fees you may come across are a 3% service fee on Google Booking reservations, and Stripe payment processing fees. Rest assured that those fees are charged by Google and Stripe respectively, and don’t go into our pockets here at Uplisting.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q7" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>How secure is Uplisting?</strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Uplisting is one of the few property management systems offering official integrations with all major booking sites: Airbnb, VRBO, Booking.com, and Google Vacation Rentals. An official integration with a booking site ensures reliability, security, and access to all the latest features.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q8" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>How can Uplisting help me? </strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Uplisting combines essential tools like property management software, a multi-platform channel manager, automated guest messaging, and a customizable direct booking website. Together, they streamline operations, save time, and increase bookings—setting you up for long-term, scalable success.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div id="q9" class="accordion-item-trigger">
          <h4 class="accordion-heading">
            <strong>What does Uplisting Onboarding and Support look like? </strong>
          </h4>
          <div class="faq-icons--wrapper">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756319948/airdna/10003/icon-plus_1.svg" loading="lazy" alt="" class="faq-plus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1754496551/airdna/10003/icon-minus.svg" loading="lazy" alt="" class="faq-minus-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          </div>
        </div>
        <div class="accordion-item-content" style="width: 721px; height: 0px;">
          <p class="accordion-paragraph">Every new customer of Uplisting gets free 1:1 onboarding with a real human expert. Complete the onboarding checklist here before scheduling your first call: <a href="https://www.uplisting.io/onboarding">https://www.uplisting.io/onboarding</a> You can contact our Support team via the Live Chat on the website and in the app, or via email at <a href="mailto:Support@uplisting.io">Support@uplisting.io.</a></p>
        </div>
      </div>

    </div>`);
    }

    handleAccordion();
  }

  // Handling FAQ Accordion
  function handleAccordion() {
    jQuery('.accordion-item-content').each(function (index, ele) {
      $(ele).removeAttr('style');
      $(ele).slideUp();
    });

    jQuery('.accordion-item-trigger').on('click', function () {
      const $content = jQuery(this).next('.accordion-item-content');
      jQuery(this).toggleClass('active');

      if ($content.is(':visible')) {
        $content.slideUp(200);
      } else {
        $content.slideDown(200);
      }
    });
  }


  function splitPricingText() {
    const el = document.querySelector(
      ".spz_10003_pricing-table .pricing--column.column--starter .pricing--top .pricing--bot-description"
    );
    if (!el) return;

    // Find existing span (if any)
    let existingSpan = el.querySelector(".spz-after-slash");

    // Work only with the raw text (excluding existing span)
    let rawText = el.textContent.trim();
    if (existingSpan) {
      rawText = rawText.replace(existingSpan.textContent, "").trim();
    }

    let [before, after] = rawText.split("/");

    if (after) {
      const withSlash = "/" + after.trim();

      if (!existingSpan) {
        el.textContent = before.trim(); // keep text before "/"
        const span = document.createElement("span");
        span.className = "spz-after-slash";
        span.textContent = withSlash; // include "/"
        el.appendChild(span);
      } else if (existingSpan.textContent !== withSlash) {
        existingSpan.textContent = withSlash; // update only if different
      }
    }
  }

  const targetNode = document.querySelector(
    ".spz_10003_pricing-table .pricing--column.column--starter .pricing--top .pricing--bot-description"
  );

  if (targetNode) {
    const observer = new MutationObserver(() => {
      splitPricingText();
    });

    observer.observe(targetNode, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    // Run once initially
    splitPricingText();
  }


  // All click events are here
  function clickEvents() {
    document.querySelectorAll('.spz-feature-toggle-button').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const target =
          window.innerWidth >= 768
            ? e.currentTarget.closest('.pricing--columns.w-row')
            : e.currentTarget.closest('.pricing--column');

        target.classList.toggle('spz_show_table');

        if (document.querySelector('.pricing--columns.w-row.spz_show_table, .pricing--column.spz_show_table')) {
          document.querySelector('.section.bg-theme-white.pricing--page-features').classList.add('spz_table_visible');
        } else {
          document.querySelector('.section.bg-theme-white.pricing--page-features').classList.remove('spz_table_visible');
        }
      });
    });

    // Redirect Quote CTA
    const topQuoteCTAs = document.querySelectorAll('.spz_10003_pricing-table .pricing--column.green-outline .button.pricing--page, .spz_10003_pricing-table .pricing--columns.w-row .pricing--column .spz-pricing-bot > a.button.pricing--page[href*="/contact-sales"]');
    if (topQuoteCTAs) {
      topQuoteCTAs.forEach(function (quoteCTA) {
        quoteCTA.addEventListener('click', function () {
          window.location.href = 'https://www.uplisting.io/contact-sales';
        });
      });
    }
  }


  // Manage pricing elements in table
  function updatePricingText() {
    document.querySelectorAll(
      'p.pricing--text[class*="pricing_text_enterprise"], p.pricing--text[class*="pricing_text_pro"]'
    ).forEach(function (el) {
      let html = el.innerHTML;

      if (window.innerWidth < 768) {
        // Add period before <br> (if not already there)
        el.innerHTML = html.replace(/([^\.])<br\s*\/?>/, '$1.<br>');
      } else {
        // Remove period before <br>
        el.innerHTML = html.replace(/\.?<br\s*\/?>/, '<br>');
      }
    });
  }


  // Run on resize
  window.addEventListener('resize', updatePricingText);
