# Golaha Guurtida JSL WordPress Theme

Official WordPress theme for the House of Elders (Golaha Guurtida) of the Republic of Somaliland.

## Features

- **Trilingual Support**: Somali, English, and Arabic with RTL support
- **WCAG 2.1 Level AA Compliant**: Accessible to all users
- **Custom Post Types**: Members, Committees, Legislation, Documents, News, Events
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Structured data and semantic HTML
- **Translation Ready**: Compatible with Polylang and WPML

## Installation

1. **Upload the theme**:
   - Download the theme ZIP file
   - Go to WordPress Admin → Appearance → Themes → Add New
   - Click "Upload Theme" and select the ZIP file
   - Click "Install Now"

2. **Activate the theme**:
   - After installation, click "Activate"

3. **Install recommended plugins**:
   - **Polylang** or **WPML** for multilingual support
   - **Advanced Custom Fields (ACF)** for enhanced custom fields
   - **Yoast SEO** for search engine optimization

## Configuration

### 1. Menus

Go to **Appearance → Menus** and create menus for:
- Primary Menu
- Footer Menu
- Quick Links

### 2. Widgets

Configure widgets in **Appearance → Widgets**:
- Sidebar
- Footer 1-4 columns

### 3. Custom Logo

Upload your logo in **Appearance → Customize → Site Identity**

### 4. Languages

Install **Polylang** or **WPML** and configure:
- Somali (so)
- English (en)
- Arabic (ar)

### 5. Homepage Setup

1. Create a new page called "Home"
2. Go to **Settings → Reading**
3. Select "A static page" and choose "Home"

## Custom Post Types

### Members
- Navigate to **Members → Add New**
- Fill in member details:
  - Name (Title)
  - Biography (Content)
  - Region
  - Term Start Date
  - Committee Assignments
  - Profile Photo (Featured Image)

### Committees
- Navigate to **Committees → Add New**
- Add committee information:
  - Committee Name
  - Mandate and responsibilities
  - Members

### Legislation
- Navigate to **Legislation → Add New**
- Add bill information:
  - Bill Number
  - Title
  - Description
  - Date Introduced
  - Status (Draft, Under Review, Passed, Enacted)

### Documents
- Navigate to **Documents → Add New**
- Upload official documents with:
  - Document Title
  - Description
  - Category
  - File attachment

### News
- Navigate to **News → Add New**
- Publish news articles with featured images

### Events
- Navigate to **Events → Add New**
- Add event details including date and description

## Page Templates

The theme includes templates for:
- Homepage (front-page.php)
- General pages (page.php)
- Single posts (single.php)
- Archive pages (archive.php)

## Customization

### Colors

Edit colors in `style.css` CSS variables:

\`\`\`css
:root {
  --color-primary: #006838;
  --color-secondary: #c8102e;
  --color-accent: #ffd700;
}
\`\`\`

### Typography

Default fonts use system fonts for performance. To add custom fonts, edit the `--font-primary` variable.

## Accessibility Features

The theme includes:
- Skip links for keyboard navigation
- ARIA labels and landmarks
- High contrast mode toggle
- Font size adjustment controls
- Screen reader optimized content

## Translation

The theme is translation-ready. To translate:

1. Install **Loco Translate** plugin
2. Go to **Loco Translate → Themes → Guurti**
3. Add new language and translate strings

## Support

For support and documentation:
- Website: https://guurtigovsomaliland.org
- Email: info@guurtida.govsomaliland.org

## Credits

- Developed for: Somaliland National Publishing Agency
- Based on: WordPress Best Practices
- Icons: Dashicons

## License

This theme is licensed under the GPL v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- Trilingual support (Somali, English, Arabic)
- Custom post types for parliamentary content
- Accessibility features
- Responsive design
\`\`\`

```text file="wordpress-theme/INSTALLATION.txt"
GOLAHA GUURTIDA JSL - WORDPRESS THEME
Installation Instructions

================================================================================
REQUIREMENTS
================================================================================

- WordPress 5.8 or higher
- PHP 7.4 or higher
- MySQL 5.7 or higher / MariaDB 10.2 or higher

================================================================================
INSTALLATION STEPS
================================================================================

STEP 1: UPLOAD THEME
--------------------
a. Download the theme ZIP file (guurti-theme.zip)
b. Log in to your WordPress admin panel
c. Navigate to: Appearance → Themes
d. Click the "Add New" button
e. Click "Upload Theme"
f. Choose the ZIP file and click "Install Now"
g. After installation completes, click "Activate"

STEP 2: INSTALL REQUIRED PLUGINS
---------------------------------
Install these recommended plugins from Plugins → Add New:

REQUIRED:
- Polylang (for multilingual support)
  OR
- WPML (alternative multilingual plugin)

RECOMMENDED:
- Advanced Custom Fields (ACF) - Enhanced custom fields
- Yoast SEO - Search engine optimization
- Contact Form 7 - Contact forms
- WP Accessibility - Additional accessibility features

STEP 3: CONFIGURE LANGUAGES
---------------------------
a. Install and activate Polylang plugin
b. Go to: Languages → Settings
c. Add these languages:
   - Somali (Af-Soomaali) - Language code: so
   - English - Language code: en
   - Arabic (العربية) - Language code: ar
d. Set Somali as the default language
e. Enable "The language is set from content"

STEP 4: CREATE MENUS
--------------------
a. Go to: Appearance → Menus
b. Create these three menus:

   PRIMARY MENU:
   - Home
   - About
     - History
     - Mandate
     - Leadership
   - Members
   - Committees
   - Legislation
   - Documents
   - News
   - Contact

   FOOTER MENU:
   - Privacy Policy
   - Accessibility Statement
   - Terms of Use
   - Sitemap

   QUICK LINKS:
   - Committees
   - Legislation
   - Documents
   - Calendar

c. Assign each menu to its location in "Menu Settings"

STEP 5: CONFIGURE HOMEPAGE
--------------------------
a. Create a new page titled "Home"
b. Add your homepage content
c. Go to: Settings → Reading
d. Under "Your homepage displays", select "A static page"
e. Choose "Home" for Homepage
f. Save changes

STEP 6: SET UP WIDGETS
----------------------
a. Go to: Appearance → Widgets
b. Configure these widget areas:

   FOOTER 1: About Guurti
   - Add Text widget with brief description

   FOOTER 2: Quick Links
   - Add Navigation Menu widget (Quick Links menu)

   FOOTER 3: Contact Information
   - Add Text widget with address, phone, email

   FOOTER 4: Follow Us
   - Add social media links

STEP 7: UPLOAD LOGO
-------------------
a. Go to: Appearance → Customize → Site Identity
b. Click "Select Logo"
c. Upload the official Somaliland emblem (PNG format, 200x200px minimum)
d. Click "Publish"

STEP 8: CREATE INITIAL CONTENT
------------------------------
Create these essential pages:

REQUIRED PAGES:
- About (with slug: /about)
- Members (with slug: /members)
- Committees (with slug: /committees)
- Legislation (with slug: /legislation)
- Documents (with slug: /documents)
- News (with slug: /news)
- Events (with slug: /events)
- Calendar (with slug: /calendar)
- Contact (with slug: /contact)

LEGAL PAGES:
- Privacy Policy
- Accessibility Statement
- Terms of Use

STEP 9: CONFIGURE PERMALINKS
----------------------------
a. Go to: Settings → Permalinks
b. Select "Post name" structure
c. Save changes

STEP 10: ADD CONTENT
--------------------
Begin adding your content:

1. MEMBERS:
   - Go to: Members → Add New
   - Add member information
   - Upload profile photo as Featured Image

2. COMMITTEES:
   - Go to: Committees → Add New
   - Add committee details

3. LEGISLATION:
   - Go to: Legislation → Add New
   - Add bills and laws

4. DOCUMENTS:
   - Go to: Documents → Add New
   - Upload and categorize documents

================================================================================
MULTILINGUAL CONTENT
================================================================================

To add translations:

1. Edit any post/page
2. Look for the "Languages" box in the right sidebar
3. Click the "+" icon next to each language
4. Add translated content
5. Save/Publish

================================================================================
CUSTOMIZATION
================================================================================

COLORS:
Edit wp-content/themes/guurti/style.css
Look for the :root section and modify CSS variables

FONTS:
Modify the --font-primary variable in style.css

ADDITIONAL STYLING:
Add custom CSS in: Appearance → Customize → Additional CSS

================================================================================
TROUBLESHOOTING
================================================================================

PROBLEM: Menu not displaying
SOLUTION: Ensure menu is assigned to the correct location

PROBLEM: Language switcher not working
SOLUTION: Verify Polylang is installed and languages are configured

PROBLEM: Images not displaying
SOLUTION: Check file permissions on wp-content/uploads folder

PROBLEM: Theme looks broken
SOLUTION: Clear browser cache and WordPress cache

================================================================================
SUPPORT
================================================================================

For technical support:
Email: info@guurtida.govsomaliland.org
Website: https://guurtigovsomaliland.org

================================================================================
NEXT STEPS
================================================================================

After installation:

1. Review and test all pages
2. Add member profiles
3. Upload historical documents
4. Configure email notifications
5. Set up backups (recommended: UpdraftPlus plugin)
6. Configure security (recommended: Wordfence plugin)
7. Test accessibility features
8. Test on mobile devices
9. Submit sitemap to search engines

================================================================================
