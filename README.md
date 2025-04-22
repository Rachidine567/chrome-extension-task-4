# chrome-extension-task-4

**COMPANY**: CODTECH IT SOLUTION

**NAME**: RACHIDINE ATHOUMANE MAHAMOUD

**INTERN ID**::CT4MIQW

**DOMAIN**: MERN STACK WEB DEVELOPMENT

**MENTOR NAME**: NEELA SANTHOSH

# OUTPUT OF THE TASK
![Image](https://github.com/user-attachments/assets/a0176144-b19c-4ed5-8e5f-798083c4a8cb)

# description

The Chrome extension files shown (image.png, background.js, content.js, manifest.json, popup.html, and popup.js) represent a complete browser extension built using core web technologies that interact with Chrome's extension APIs. The manifest.json serves as the configuration file that defines the extension's properties and permissions required to access browser features like tabs, storage, and web navigation. Background.js acts as the persistent service worker that handles long-running tasks and event listeners using Chrome's extension API to monitor tab changes, manage blocked sites, and track time spent on websites. Popup.html and popup.js create the visible UI interface when users click the extension icon, built with standard HTML/CSS for structure and styling, while vanilla JavaScript handles user interactions like blocking sites or viewing productivity stats. Content.js injects scripts into web pages to detect user activity or modify page content when needed, though in this case it's minimal. Together, these files leverage Chrome's extension system which provides APIs for browser integration, storage for saving user preferences, and messaging for communication between the popup, background scripts, and content scripts. The entire setup avoids frameworks for lightweight performance, instead relying on Chrome's runtime environment and basic web technologies (HTML, CSS, JavaScript) to build a functional productivity tracker that monitors browsing habits, blocks distractions, and shows usage data through a simple popup interface. The tools focus on Chrome-specific APIs like chrome.tabs, chrome.storage, and chrome.alarms rather than external libraries, keeping the extension efficient while maintaining access to browser-level functionality for tracking and blocking websites. This combination allows the extension to run persistently in the background, sync data across devices, and present a clean interface for users to manage their productivity settings without complex dependencies.

