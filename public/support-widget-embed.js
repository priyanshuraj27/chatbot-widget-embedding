/**
 * Support Widget Embed Script
 * 
 * This script provides an easy way to embed the support widget on any website.
 * 
 * Usage:
 * <script src="https://your-domain.com/support-widget-embed.js"></script>
 * <script>
 *   SupportWidget.init({
 *     containerId: 'support-widget-container',
 *     width: '400px',
 *     height: '600px',
 *     widgetUrl: 'https://your-domain.com/support-widget.html'
 *   });
 * </script>
 */

(function(window) {
  'use strict';

  const SupportWidget = {
    /**
     * Initialize the support widget
     * @param {Object} config - Configuration options
     * @param {string} config.containerId - ID of the container element
     * @param {string} config.width - Width of the widget (default: '400px')
     * @param {string} config.height - Height of the widget (default: '600px')
     * @param {string} config.widgetUrl - URL to the support-widget.html file
     * @param {boolean} config.responsive - Make widget responsive (default: false)
     * @param {string} config.position - Position: 'inline', 'fixed-bottom-right', 'fixed-bottom-left' (default: 'inline')
     */
    init: function(config) {
      const defaults = {
        containerId: 'support-widget-container',
        width: '400px',
        height: '600px',
        widgetUrl: '',
        responsive: false,
        position: 'inline',
        showButton: false,
        buttonText: '💬 Support'
      };

      this.config = Object.assign({}, defaults, config);
      
      if (!this.config.widgetUrl) {
        console.error('SupportWidget: widgetUrl is required');
        return;
      }

      this.container = document.getElementById(this.config.containerId);
      
      if (!this.container) {
        console.error(`SupportWidget: Container with id "${this.config.containerId}" not found`);
        return;
      }

      if (this.config.showButton) {
        this.createButton();
      } else {
        this.createWidget();
      }
    },

    /**
     * Create the iframe widget
     */
    createWidget: function() {
      const iframe = document.createElement('iframe');
      const widgetUrl = new URL(this.config.widgetUrl);
      
      // Add URL parameters
      widgetUrl.searchParams.set('width', this.config.width);
      widgetUrl.searchParams.set('height', this.config.height);
      
      iframe.src = widgetUrl.toString();
      iframe.id = 'support-widget-iframe';
      iframe.frameBorder = '0';
      iframe.style.border = 'none';
      iframe.style.display = 'block';
      
      if (this.config.responsive) {
        iframe.style.width = '100%';
        iframe.style.height = this.config.height;
      } else {
        iframe.style.width = this.config.width;
        iframe.style.height = this.config.height;
      }

      // Apply positioning
      this.applyPositioning(iframe);
      
      this.container.appendChild(iframe);
      this.iframe = iframe;

      // Listen for iframe ready message
      window.addEventListener('message', this.handleMessage.bind(this));
    },

    /**
     * Create a floating button that opens the widget
     */
    createButton: function() {
      const button = document.createElement('button');
      button.id = 'support-widget-button';
      button.textContent = this.config.buttonText;
      button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 15px 25px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transition: transform 0.3s, box-shadow 0.3s;
      `;

      button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
      });

      button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
      });

      button.addEventListener('click', this.toggleWidget.bind(this));
      
      this.container.appendChild(button);
      this.button = button;
      
      // Create hidden widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'support-widget-popup';
      widgetContainer.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 20px;
        z-index: 9998;
        display: none;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        border-radius: 16px;
        overflow: hidden;
      `;
      
      this.container.appendChild(widgetContainer);
      this.widgetContainer = widgetContainer;
    },

    /**
     * Toggle widget visibility
     */
    toggleWidget: function() {
      if (!this.iframe) {
        // Create widget on first click
        const tempContainer = this.container;
        this.container = this.widgetContainer;
        this.createWidget();
        this.container = tempContainer;
        this.widgetContainer.style.display = 'block';
        this.button.textContent = '✕ Close';
      } else {
        // Toggle visibility
        if (this.widgetContainer.style.display === 'none') {
          this.widgetContainer.style.display = 'block';
          this.button.textContent = '✕ Close';
        } else {
          this.widgetContainer.style.display = 'none';
          this.button.textContent = this.config.buttonText;
        }
      }
    },

    /**
     * Apply positioning styles
     */
    applyPositioning: function(iframe) {
      if (this.config.position === 'fixed-bottom-right') {
        iframe.style.position = 'fixed';
        iframe.style.bottom = '20px';
        iframe.style.right = '20px';
        iframe.style.zIndex = '9999';
        iframe.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
        iframe.style.borderRadius = '16px';
      } else if (this.config.position === 'fixed-bottom-left') {
        iframe.style.position = 'fixed';
        iframe.style.bottom = '20px';
        iframe.style.left = '20px';
        iframe.style.zIndex = '9999';
        iframe.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
        iframe.style.borderRadius = '16px';
      }
    },

    /**
     * Handle messages from iframe
     */
    handleMessage: function(event) {
      if (event.data.type === 'IFRAME_READY') {
        console.log('Support widget loaded successfully');
        
        // Send initial configuration
        if (this.iframe) {
          this.iframe.contentWindow.postMessage({
            type: 'RESIZE',
            width: this.config.width,
            height: this.config.height
          }, '*');
        }
      }
    },

    /**
     * Resize the widget
     */
    resize: function(width, height) {
      if (!this.iframe) {
        console.error('SupportWidget: Widget not initialized');
        return;
      }

      this.config.width = width;
      this.config.height = height;

      this.iframe.style.width = width;
      this.iframe.style.height = height;

      this.iframe.contentWindow.postMessage({
        type: 'RESIZE',
        width: width,
        height: height
      }, '*');
    },

    /**
     * Destroy the widget
     */
    destroy: function() {
      if (this.iframe) {
        this.iframe.remove();
        this.iframe = null;
      }
      if (this.button) {
        this.button.remove();
        this.button = null;
      }
      if (this.widgetContainer) {
        this.widgetContainer.remove();
        this.widgetContainer = null;
      }
    }
  };

  // Expose to global scope
  window.SupportWidget = SupportWidget;

})(window);
