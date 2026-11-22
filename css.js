// Sidebar navigation toggle
const menuToggle = document.getElementById("menuToggle");
const closeDrawer = document.getElementById("closeDrawer");
const lessonDrawer = document.getElementById("lessonDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openDrawer() {
    if (lessonDrawer) lessonDrawer.classList.add("active");
    if (drawerOverlay) drawerOverlay.classList.add("active");
}

function hideDrawer() {
    if (lessonDrawer) lessonDrawer.classList.remove("active");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
}

if (menuToggle) menuToggle.addEventListener("click", openDrawer);
if (closeDrawer) closeDrawer.addEventListener("click", hideDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", hideDrawer);

// CSS Lessons data array (Lessons 01-19 have 5 quiz questions each; Lesson 20 is the Playground)
const lessons = [
    {
        title: "Introduction to CSS",
        description: "Discover how CSS styles, colors, and designs the layout of modern web pages.",
        category: "GETTING STARTED",
        content: `
            <div class="intro-banner">
                <div>
                    <span>Welcome to CSS Styling</span>
                    <h2>Cascading Style Sheets</h2>
                    <p>While HTML provides the core structure of a webpage, CSS handles the visual presentation, color schemes, and structural layout.</p>
                </div>
                <div class="banner-icon">
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
            </div>

            <div class="creator-card">
                <div class="creator-avatar-wrap">
                    <img src="css.jpg"
                         alt="Håkon Wium Lie, creator of CSS"
                         class="creator-avatar"
                         onerror="this.style.display='none'; this.nextElementSibling.classList.add('show-fallback');">
                    <span class="creator-fallback-icon"><i class="fa-solid fa-user-pen"></i></span>
                </div>
                <div class="creator-info">
                    <span class="creator-role">Creator of CSS</span>
                    <h3>H&aring;kon Wium Lie</h3>
                    <p>Norwegian computer scientist who first proposed Cascading Style Sheets (CSS) in 1994 while working at CERN, later co-developing the specification with Bert Bos.</p>
                </div>
            </div>

            <h2>What is CSS?</h2>
            <p>CSS stands for <b>Cascading Style Sheets</b>. It controls how HTML elements are displayed on screen, paper, or other media.</p>

            <div class="info-box">
                <i class="fa-solid fa-lightbulb"></i>
                <div><strong>Key Concept:</strong> HTML builds the structure, while CSS styles the appearance and layout.</div>
            </div>

            ${codeExample(`<style>\n    h1 {\n        color: #2563eb;\n        font-size: 24px;\n    }\n</style>\n<h1>Hello, CSS!</h1>\n<p>Styled with Cascading Style Sheets.</p>`)}
        `,
        takeaways: [
            "CSS stands for Cascading Style Sheets.",
            "H&aring;kon Wium Lie proposed CSS in 1994.",
            "CSS controls layout, colors, fonts, and spacing."
        ],
        mistakes: [
            "Forgetting a semicolon (;) at the end of a declaration.",
            "Misspelling CSS property names."
        ],
        quiz: [
            {
                q: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Creative Style System", "Computer Styling Syntax", "Cascading Script Sheets"],
                answer: 0,
                explain: "CSS stands for Cascading Style Sheets."
            },
            {
                q: "Who first proposed CSS in 1994?",
                options: ["Tim Berners-Lee", "Håkon Wium Lie", "Brendan Eich", "Linus Torvalds"],
                answer: 1,
                explain: "Håkon Wium Lie first proposed CSS in 1994 while working at CERN."
            },
            {
                q: "What is the main role of CSS compared to HTML?",
                options: ["CSS stores database records", "CSS styles visual appearance and layout", "CSS replaces HTML tags", "CSS runs server scripts"],
                answer: 1,
                explain: "HTML provides structure, while CSS controls visual presentation and layout."
            },
            {
                q: "What symbol usually ends a CSS property-value declaration?",
                options: ["Colon (:)", "Semicolon (;)", "Comma (,)", "Period (.)"],
                answer: 1,
                explain: "A semicolon (;) ends a declaration inside a CSS rule block."
            },
            {
                q: "Which of these is a common beginner mistake in CSS?",
                options: ["Misspelling CSS property names", "Using headings inside a page", "Linking a stylesheet", "Setting font-size"],
                answer: 0,
                explain: "Misspelling CSS property names or forgetting semicolons can prevent styles from applying."
            }
        ]
    },
    {
        title: "The 3 Ways to Add CSS",
        description: "Explore Inline, Internal, and External CSS implementations.",
        category: "GETTING STARTED",
        isPractice: false,
        content: `
            <h2>Three Methods of Implementing CSS</h2>
            <p>There are three primary methods used to incorporate style sheets into web documents:</p>
            <h3>1. Inline CSS</h3>
            <p>Applied directly to a single HTML element using the <code>style</code> attribute.</p>
            ${codeExample(`<p style="color: #dc2626; font-weight: bold;">This is red text styled using Inline CSS.</p>`)}
            <h3>2. Internal CSS</h3>
            <p>Defined within a <code>&lt;style&gt;</code> element located inside the <code>&lt;head&gt;</code> section.</p>
            ${codeExample(`<style>\n    .internal-demo { color: #16a34a; font-weight: bold; }\n</style>\n<p class="internal-demo">Styled via Internal CSS.</p>`)}
            <h3>3. External CSS</h3>
            <p>The industry-standard approach utilizing a separate <b><code>.css</code> file linked via <code>&lt;link rel="stylesheet" href="css.css"&gt;</code> in the <code>&lt;head&gt;</code></b>.</p>
        `,
        takeaways: [
            "Inline CSS uses the style attribute directly on elements.",
            "Internal CSS uses the style tag inside the document head.",
            "External CSS links a separate .css file for multi-page consistency."
        ],
        mistakes: [
            "Using incorrect file paths in the href attribute of the link tag.",
            "Overusing inline styles, making code hard to maintain."
        ],
        quiz: [
            {
                q: "Where is Inline CSS written?",
                options: ["Inside an external .css file", "Directly on an HTML element using the style attribute", "Inside <script> tags", "In the browser console"],
                answer: 1,
                explain: "Inline CSS is added directly to a single element via the style attribute."
            },
            {
                q: "Where is Internal CSS placed in an HTML document?",
                options: ["Inside a <style> tag in the <head> section", "Inside <footer>", "At the very top before <!DOCTYPE html>", "Inside an <img> tag"],
                answer: 0,
                explain: "Internal CSS uses a <style> element inside the <head> section."
            },
            {
                q: "Which tag links an External CSS file to an HTML page?",
                options: ["<css>", "<link rel=\"stylesheet\" href=\"...\">", "<import>", "<style-link>"],
                answer: 1,
                explain: "External stylesheets are linked using <link rel=\"stylesheet\" href=\"...\"> in the <head>."
            },
            {
                q: "Which method is best for styling multiple pages consistently?",
                options: ["External CSS", "Inline CSS on every tag", "Duplicate <style> tags only", "Removing CSS"],
                answer: 0,
                explain: "External CSS allows multiple HTML pages to share one stylesheet."
            },
            {
                q: "What mistake happens when linking an external CSS file?",
                options: ["Using an incorrect file path in href", "Adding comments in CSS", "Using class selectors", "Formatting indentation"],
                answer: 0,
                explain: "A wrong file path in href prevents the browser from loading the .css file."
            }
        ]
    },
    {
        title: "CSS Selectors",
        description: "Learn how to target specific HTML elements using Element, Class, and ID selectors.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors find and select the HTML elements you want to style.</p>
            <ul>
                <li><strong>Element Selector:</strong> Targets tags directly (e.g., <u><code><b>p</b></code>, <code><b>h1</b></code>, <code><b>span</b></code></u>).</li>
                <li><strong>Class Selector (.):</strong> Targets elements with a specific <code><b>class</b></code> attribute. Reusable across multiple elements.</li>
                <li><strong>ID Selector (#):</strong> Targets a single unique element with a specific <code><b>id</b></code> attribute.</li>
            </ul>
            ${codeExample(`<style>\n    p { color: #475569; }\n    .highlight { background: #fef08a; padding: 4px 8px; }\n    #special-title { color: #2563eb; }\n</style>\n<h3 id="special-title">ID Selector Title</h3>\n<p>Standard paragraph element.</p>\n<p class="highlight">Paragraph with a class selector.</p>`)}
        `,
        takeaways: [
            "Use a period (.) before a class name.",
            "Use a hash (#) before an ID name.",
            "Classes can be reused; IDs must be unique per page."
        ],
        mistakes: [
            "Forgetting the dot (.) or hash (#) prefix in CSS.",
            "Starting class or ID names with a number."
        ],
        quiz: [
            {
                q: "Which prefix is used for a CSS class selector?",
                options: ["# (hash)", ". (period)", "@ (at)", "$ (dollar)"],
                answer: 1,
                explain: "Class selectors start with a period (.), such as .highlight."
            },
            {
                q: "Which prefix is used for a CSS ID selector?",
                options: [". (period)", "# (hash)", "* (asterisk)", "& (ampersand)"],
                answer: 1,
                explain: "ID selectors start with a hash (#), such as #special-title."
            },
            {
                q: "Which statement about classes and IDs is true?",
                options: ["IDs can be reused on many elements; classes cannot", "Classes can be reused; IDs should be unique per page", "Neither can be styled in CSS", "Both require #"],
                answer: 1,
                explain: "A class can be applied to multiple elements, while an ID identifies one unique element."
            },
            {
                q: "What does `p { color: #475569; }` target?",
                options: ["Only elements with id=\"p\"", "All <p> elements", "Only elements with class=\"p\"", "The body tag"],
                answer: 1,
                explain: "An element selector like `p` targets all <p> tags directly."
            },
            {
                q: "What is a common mistake when writing class or ID selectors?",
                options: ["Forgetting the . or # prefix", "Using lowercase letters", "Grouping selectors", "Using descriptive names"],
                answer: 0,
                explain: "Without . or #, CSS treats the name as an HTML tag name."
            }
        ]
    },
    {
        title: "CSS Colors",
        description: "Apply colors using Color Names, HEX codes, RGB, and RGBA values.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>Color Formats in CSS</h2>
            <p>Colors can be defined using predefined names, Hexadecimal values (<code>#RRGGBB</code>), or RGB/RGBA values.</p>
            ${codeExample(
                `<style>\n    .c-name { color: tomato; }\n    .c-hex { color: #2563eb; }\n    .c-rgba { background: rgba(37, 99, 235, 0.15); padding: 8px; border-radius: 6px; }\n</style>\n<p class="c-name">Color Name: Tomato</p>\n<p class="c-hex">HEX Color: #2563eb</p>\n<p class="c-rgba">RGBA with 15% opacity background</p>`
            )}
        `,
        takeaways: [
            "HEX codes start with # followed by 6 characters.",
            "RGBA adds an alpha channel (0.0 to 1.0) for transparency.",
            "example: <b> #2563eb (blue), rgba(255, 255, 255, 0.1)(white) </b>"
        ],
        mistakes: [
            "Forgetting the <b>#</b> symbol on HEX color codes.",
            "Using opacity values outside the 0 to 1 range in RGBA."
        ],
        quiz: [
            {
                q: "What symbol starts a HEX color code in CSS?",
                options: ["#", "%", "&", "!"],
                answer: 0,
                explain: "HEX color codes start with # followed by hexadecimal digits."
            },
            {
                q: "What does the 'A' in RGBA stand for?",
                options: ["Accent", "Alpha (opacity/transparency)", "Alignment", "Angle"],
                answer: 1,
                explain: "The alpha channel in RGBA controls transparency from 0.0 to 1.0."
            },
            {
                q: "What is the valid range for the alpha value in RGBA?",
                options: ["0 to 100", "0.0 to 1.0", "-1 to 1", "1 to 10"],
                answer: 1,
                explain: "Alpha opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque)."
            },
            {
                q: "Which of the following is a named CSS color?",
                options: ["tomato", "#2563eb", "rgba(0,0,0,0.2)", "12px"],
                answer: 0,
                explain: "Predefined color names like `tomato` can be used directly in CSS."
            },
            {
                q: "What happens if you forget `#` on a HEX color like `2563eb`?",
                options: ["It becomes transparent", "The browser treats it as an invalid color value", "It turns automatically white", "It applies bold text"],
                answer: 1,
                explain: "HEX color values require a leading # symbol to be valid."
            }
        ]
    },
    {
        title: "CSS Backgrounds",
        description: "Customize element backgrounds using colors, gradients, and images.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>Background Properties</h2>
            <p>The <code>background</code> properties control the background color, image, repeat behavior, and positioning of an element.</p>
            ${codeExample(`<style>\n    .banner-box {\n        background: linear-gradient(135deg, #1e3a8a, #2563eb);\n        color: white;\n        padding: 20px;\n        border-radius: 10px;\n    }\n</style>\n<div class="banner-box">\n    <h3>Gradient Background</h3>\n    <p>Smooth color transitions using linear-gradient.</p>\n</div>`)}
        `,
        takeaways: [
            "background-color sets a solid background fill.",
            "background-size: cover scales background images proportionally."
        ],
        mistakes: [
            "Using low-contrast text colors against busy backgrounds."
        ],
        quiz: [
            {
                q: "Which CSS function creates a smooth transition between two or more colors?",
                options: ["linear-gradient()", "color-mix()", "fade-bg()", "blend-color()"],
                answer: 0,
                explain: "linear-gradient() creates smooth color gradients."
            },
            {
                q: "Which value of `background-size` scales a background image to cover the container proportionally?",
                options: ["cover", "none", "stretch-only", "flat"],
                answer: 0,
                explain: "background-size: cover scales the background image to cover the element."
            },
            {
                q: "What property sets a single solid background color?",
                options: ["background-color", "border-color", "text-fill", "bg-tint"],
                answer: 0,
                explain: "background-color defines a solid background color."
            },
            {
                q: "What mistake should you avoid when styling backgrounds?",
                options: ["Low-contrast text over a busy background", "Using rounded corners", "Adding padding", "Using gradients"],
                answer: 0,
                explain: "Poor contrast makes text hard to read against background colors or images."
            },
            {
                q: "Can the `background` shorthand set a gradient?",
                options: ["Yes", "No, only solid colors", "Only in HTML", "Only on body"],
                answer: 0,
                explain: "The `background` property accepts linear-gradient() values."
            }
        ]
    },
    {
        title: "CSS Borders",
        description: "Style element outlines with border width, style, color, and rounded corners.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Creating Borders</h2>
            <p>The <code>border</code> shorthand property sets width, style (<code>solid</code>, <code>dashed</code>, <code>dotted</code>), and color. Use <code>border-radius</code> to round corners.</p>
            ${codeExample(`<style>\n    .card-solid { border: 2px solid #2563eb; padding: 10px; border-radius: 8px; margin-bottom: 10px; }\n    .card-dashed { border: 2px dashed #f59e0b; padding: 10px; }\n</style>\n<div class="card-solid">Solid Rounded Border</div>\n<div class="card-dashed">Dashed Border</div>`)}
        `,
        takeaways: [
            "A border will not appear unless border-style is specified.",
            "border-radius: 50% turns a square element into a circle."
        ],
        mistakes: [
            "Setting border-width and border-color without border-style."
        ],
        quiz: [
            {
                q: "Which property rounds the corners of an element?",
                options: ["border-radius", "corner-curve", "outline-round", "border-curve"],
                answer: 0,
                explain: "border-radius controls how rounded an element's corners are."
            },
            {
                q: "What happens if you set border width and color without a border-style?",
                options: ["The border will not appear", "It defaults to dotted", "It becomes a shadow", "It turns red"],
                answer: 0,
                explain: "A border style (like solid, dashed, or dotted) is required for a border to show."
            },
            {
                q: "Which `border-radius` value turns a square element into a circle?",
                options: ["50%", "5px", "10%", "0"],
                answer: 0,
                explain: "border-radius: 50% makes a square element circular."
            },
            {
                q: "Which of these is a valid border style?",
                options: ["dashed", "bold", "italic", "center"],
                answer: 0,
                explain: "solid, dashed, and dotted are common CSS border styles."
            },
            {
                q: "In `border: 2px solid #2563eb;`, what does `2px` represent?",
                options: ["Border width", "Border radius", "Font size", "Margin"],
                answer: 0,
                explain: "2px sets the thickness (width) of the border."
            }
        ]
    },
    {
        title: "CSS Margins",
        description: "Control outer spacing between elements using the margin property.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Outer Spacing with Margin</h2>
            <p>Margins create space <strong>outside</strong> an element's border, pushing neighboring elements away. Setting <code>margin: 0 auto;</code> horizontally centers block elements with a set width.</p>
            ${codeExample(`<style>\n    .box-a { background: #dbeafe; padding: 10px; margin-bottom: 25px; }\n    .box-b { background: #fef3c7; padding: 10px; width: 60%; margin: 0 auto; text-align: center; }\n</style>\n<div class="box-a">Box with 25px bottom margin</div>\n<div class="box-b">Centered Box (margin: 0 auto)</div>`)}
        `,
        takeaways: [
            "Margin controls space outside the element border.",
            "margin: 0 auto horizontally centers fixed-width block elements."
        ],
        mistakes: [
            "Expecting margin: 0 auto to center an element without a defined width."
        ],
        quiz: [
            {
                q: "Where does `margin` create space?",
                options: ["Outside an element's border", "Inside an element's border", "Only between letters", "Inside the font"],
                answer: 0,
                explain: "Margin adds space outside the border to separate neighboring elements."
            },
            {
                q: "What does `margin: 0 auto;` commonly achieve on a block element with a width?",
                options: ["Horizontal centering", "Vertical scrolling", "Text bolding", "Hiding the element"],
                answer: 0,
                explain: "Setting left and right margin to auto centers a block element horizontally."
            },
            {
                q: "What mistake happens when using `margin: 0 auto;` without a width?",
                options: ["The block already spans full width so centering isn't visible", "It deletes the element", "It makes text italic", "It adds a border"],
                answer: 0,
                explain: "A block element without a defined width takes full available width."
            },
            {
                q: "Which property adds space specifically below an element?",
                options: ["margin-bottom", "padding-top", "border-left", "line-height"],
                answer: 0,
                explain: "margin-bottom controls outer space below an element."
            },
            {
                q: "Does margin push neighboring elements away?",
                options: ["Yes", "No, only padding does", "Only for images", "Only for links"],
                answer: 0,
                explain: "Margins push surrounding elements away from the element's border."
            }
        ]
    },
    {
        title: "CSS Padding",
        description: "Create breathing room inside elements between content and borders.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Inner Spacing with Padding</h2>
            <p>Padding creates space <strong>inside</strong> an element, between its content and its border. In <code>padding: 12px 24px;</code>, the first value (<code>12px</code>) sets top and bottom padding, while the second value (<code>24px</code>) sets left and right padding.</p>
            ${codeExample(`<style>\n    .btn-padded {\n        background: #2563eb;\n        color: white;\n        border: none;\n        padding: 12px 24px;\n        border-radius: 6px;\n    }\n</style>\n<button type="button" class="btn-padded">Button with Padding</button>`)}
        `,
        takeaways: [
            "Padding adds space inside the border.",
            "Padding inherits the element's background color.",
            "Two-value padding (e.g., 12px 24px) sets top/bottom first (12px) and left/right second (24px)."
        ],
        mistakes: [
            "Confusing margin (outside space) with padding (inside space).",
            "Forgetting the order of two-value shorthand (top/bottom vs. left/right)."
        ],
        quiz: [
            {
                q: "Where does `padding` add space?",
                options: ["Inside the border, around the content", "Outside the border", "Between separate browser tabs", "Outside the page"],
                answer: 0,
                explain: "Padding creates inner space between the content and the element's border."
            },
            {
                q: "In `padding: 12px 24px;`, what does `12px` control?",
                options: ["Top and bottom padding", "Left and right padding", "Font size", "Border thickness"],
                answer: 0,
                explain: "In two-value padding shorthand, the first value sets top and bottom."
            },
            {
                q: "In `padding: 12px 24px;`, what does `24px` control?",
                options: ["Left and right padding", "Top and bottom padding", "Margin", "Line height"],
                answer: 0,
                explain: "In two-value padding shorthand, the second value sets left and right."
            },
            {
                q: "Does padding show the element's background color?",
                options: ["Yes", "No, it is always transparent outside the box", "Only on headings", "Only on tables"],
                answer: 0,
                explain: "Padding is inside the element, so it shows the element's background."
            },
            {
                q: "What is a common mistake with two-value padding?",
                options: ["Swapping top/bottom and left/right order", "Using pixels", "Styling buttons", "Adding border-radius"],
                answer: 0,
                explain: "The first value is top/bottom and the second value is left/right."
            }
        ]
    },
    {
        title: "CSS Height & Width",
        description: "Control element dimensions using fixed pixels, percentages, and viewport units.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Setting Dimensions</h2>
            <p>The <code>width</code> and <code>height</code> properties define the size of an element's content area. Using <code>max-width</code> prevents horizontal scrolling on small screens, while <code>min-height</code> sets a minimum vertical space (so content can still grow taller if needed) and <code>max-height</code> caps how tall an element can become.</p>
            ${codeExample(`<style>\n    .responsive-box {\n        width: 100%;\n        max-width: 320px;\n        min-height: 80px;\n        max-height: 160px;\n        background: #e0f2fe;\n        border: 1px solid #0284c7;\n        padding: 12px;\n    }\n</style>\n<div class="responsive-box">Max-width 320px container with min-height and max-height</div>`)}
        `,
        takeaways: [
            "<b>Percentages (%)</b> scale relative to the parent container.",
            "<b>max-width</b> improves mobile responsiveness.",
            "<b>min-height</b> ensures a minimum box height while still allowing growth if content expands.",
            "<b>max-height</b> limits the maximum height of an element."
        ],
        mistakes: [
            "Using fixed pixel widths on large containers, breaking mobile layouts.",
            "Setting a strict height instead of min-height when text or content might grow longer."
        ],
        quiz: [
            {
                q: "How does `max-width: 320px;` help on small screens?",
                options: ["It prevents an element from exceeding 320px and avoids horizontal overflow", "It locks the screen orientation", "It hides all text", "It removes margins"],
                answer: 0,
                explain: "max-width caps width so it can shrink on smaller screens without overflowing."
            },
            {
                q: "What does `min-height: 80px;` do?",
                options: ["Sets at least 80px height while allowing growth if content expands", "Forces height to stay 80px even if clipped", "Sets width to 80px", "Disables scrolling"],
                answer: 0,
                explain: "min-height guarantees a minimum height while letting taller content expand."
            },
            {
                q: "What does `max-height` do?",
                options: ["Caps the maximum height an element can reach", "Sets minimum text size", "Adds horizontal padding", "Changes background color"],
                answer: 0,
                explain: "max-height sets an upper limit on an element's height."
            },
            {
                q: "Relative to what do percentage (`%`) dimensions usually scale?",
                options: ["The parent container", "The user's font family", "The operating system", "The CSS file name"],
                answer: 0,
                explain: "Percentage widths and heights are calculated relative to the parent container."
            },
            {
                q: "When is `min-height` safer than a fixed `height`?",
                options: ["When text or inner content might grow taller", "When hiding an image", "When writing comments", "When setting link colors"],
                answer: 0,
                explain: "min-height prevents content from overflowing a fixed height when it grows."
            }
        ]
    },
    {
        title: "CSS Box Model",
        description: "Understand how Content, Padding, Border, and Margin combine to form every element.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>The CSS Box Model</h2>
            <p>Every HTML element is like a box made of four layers from inside out: <strong>Content</strong> (your text or image), <strong>Padding</strong> (inner space around the content), <strong>Border</strong> (the outline around the padding), and <strong>Margin</strong> (outer space pushing other elements away).</p>
            <div class="info-box">
                <i class="fa-solid fa-lightbulb"></i>
                <div><strong>Best Practice:</strong> Add <code>* { box-sizing: border-box; }</code> so padding and borders stay inside the set width and height instead of making the box bigger.</div>
            </div>
            ${codeExample(`<style>\n    .box-model-demo {\n        box-sizing: border-box;\n        width: 240px;\n        padding: 16px;\n        border: 4px solid #2563eb;\n        margin: 10px;\n        background: #eff6ff;\n    }\n</style>\n<div class="box-model-demo">Total width stays exactly 240px!</div>`)}
        `,
        takeaways: [
            "The four layers from inside out are Content, Padding, Border, and Margin.",
            "<b>Padding</b> is <u>inside</u> space, while <b>Margin</b> is <u>outside</u> space.",
            "box-sizing: border-box keeps total element width predictable—for example, width: 240px with padding: 16px and border: 4px stays 240px wide instead of growing wider."
        ],
        mistakes: [
            "Forgetting that default content-box adds padding and border onto width.",
            "Confusing <b>margin (space outside the border)</b> with <b>padding (space inside the border)</b>."
        ],
        quiz: [
            {
                q: "What are the four layers of the CSS Box Model from inside out?",
                options: ["Content, Padding, Border, Margin", "Margin, Border, Padding, Content", "Border, Content, Padding, Margin", "Padding, Content, Margin, Border"],
                answer: 0,
                explain: "From inside out, the layers are Content, Padding, Border, and Margin."
            },
            {
                q: "What does `box-sizing: border-box;` do?",
                options: ["Includes padding and border inside the element's width and height", "Removes borders completely", "Centers all text", "Adds margin automatically"],
                answer: 0,
                explain: "border-box keeps total width/height predictable by including padding and border."
            },
            {
                q: "With `box-sizing: border-box;` and `width: 240px; padding: 16px; border: 4px solid #2563eb;`, what is the total box width?",
                options: ["240px", "280px", "256px", "200px"],
                answer: 0,
                explain: "With border-box, the total width stays 240px."
            },
            {
                q: "Which layer sits directly around the content?",
                options: ["Padding", "Margin", "Outline", "Viewport"],
                answer: 0,
                explain: "Padding wraps directly around the content inside the border."
            },
            {
                q: "Which layer is outside the border?",
                options: ["Margin", "Padding", "Content", "Inner text"],
                answer: 0,
                explain: "Margin is the outer spacing outside the border."
            }
        ]
    },
    {
        title: "CSS Text & Fonts",
        description: "Format typography using font-family, font-size, font-weight, and text alignment.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Typography Styling</h2>
            <p>CSS controls text readability through <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, and <code>text-align</code>.</p>
            ${codeExample(`<style>\n    .title-text { font-family: Georgia, serif; font-size: 20px; text-align: center; letter-spacing: 1px; }\n    .body-text { font-family: Arial, sans-serif; font-size: 13px; line-height: 1.6; color: #334155; }\n</style>\n<h3 class="title-text">Elegant Heading</h3>\n<p class="body-text">Readable body paragraph with 1.6 line-height spacing.</p>`)}
        `,
        takeaways: [
            "Always include a fallback font (e.g., sans-serif).",
            "line-height: 1.5 to 1.8 improves paragraph readability."
        ],
        mistakes: [
            "Using tiny font sizes or tight line spacing for body paragraphs."
        ],
        quiz: [
            {
                q: "Why should you include a fallback font like `sans-serif` in `font-family`?",
                options: ["In case the first font is unavailable on the user's device", "To make text blink", "To disable font sizing", "To convert text to images"],
                answer: 0,
                explain: "Fallback fonts ensure readable text if the preferred font isn't available."
            },
            {
                q: "Which property controls vertical spacing between lines of text?",
                options: ["line-height", "text-align", "font-weight", "letter-spacing"],
                answer: 0,
                explain: "line-height sets the height of text lines for better readability."
            },
            {
                q: "Which property aligns text horizontally?",
                options: ["text-align", "font-style", "line-height", "font-family"],
                answer: 0,
                explain: "text-align aligns text (such as left, center, or right)."
            },
            {
                q: "Which property controls spacing between individual characters?",
                options: ["letter-spacing", "word-wrap", "line-height", "text-decoration"],
                answer: 0,
                explain: "letter-spacing adjusts space between letters."
            },
            {
                q: "What is a recommended `line-height` range for body paragraphs?",
                options: ["1.5 to 1.8", "0.2 to 0.4", "10 to 15", "0"],
                answer: 0,
                explain: "A line-height around 1.5 to 1.8 makes paragraphs comfortable to read."
            }
        ]
    },
    {
        title: "CSS Links & Hover States",
        description: "Style hyperlinks and add interactive hover effects using pseudo-classes.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Interactive Link States</h2>
            <p>Links can be styled differently depending on user interaction using pseudo-classes like <code>:hover</code> and <code>:active</code>. Use <code>text-decoration: none;</code> to remove the default underline.</p>
            ${codeExample(`<style>\n    .custom-link {\n        color: #2563eb;\n        text-decoration: none;\n        font-weight: bold;\n        transition: 0.2s;\n    }\n    .custom-link:hover {\n        color: #1d4ed8;\n        text-decoration: underline;\n    }\n</style>\n<a href="#" class="custom-link">Hover over this link</a>`)}
            ${codeExample(`<style>\n    .custom-link1 {\n        color: #00F0FF;\n        text-decoration: none;\n        font-weight: bold;\n        transition: 0.3s;\n    }\n    .custom-link1:hover {\n        color: #0037ff;\n        background: #0000001A;\n    }\n</style>\n<a href="#" class="custom-link1">Hover over this link</a>`)}
        `,
        takeaways: [
            "text-decoration: none removes default underlines.",
            ":hover triggers styles when the mouse cursor points at an element.",
            "Always close every CSS rule with a curly brace (}) and avoid double dots (..) on class selectors."
        ],
        mistakes: [
            "Putting spaces around the colon in :hover (e.g., a :hover).",
            "Forgetting the closing curly brace (}) or typing two dots (..) before a class name."
        ],

        quiz: [
            {
                q: "How do you remove the default underline on a link?",
                options: ["text-decoration: none;", "font-weight: none;", "display: none;", "list-style: none;"],
                answer: 0,
                explain: "text-decoration: none removes default underlines from <a> links."
            },
            {
                q: "When does the `:hover` pseudo-class apply?",
                options: ["When the pointer hovers over the element", "Only when printing", "Only on page load", "When the browser is closed"],
                answer: 0,
                explain: ":hover applies styles when a user moves their cursor over an element."
            },
            {
                q: "What mistake happens when typing `..custom-link`?",
                options: ["Double dot (..) is invalid class syntax", "It makes text larger", "It adds an underline", "It centers the link"],
                answer: 0,
                explain: "Class selectors use a single period (.), not two dots (..)."
            },
            {
                q: "What happens if you forget a closing `}` on a rule?",
                options: ["It breaks following CSS rules", "It speeds up the page", "It validates HTML", "It hides the cursor"],
                answer: 0,
                explain: "Missing a closing curly brace } causes CSS parsing issues for later rules."
            },
            {
                q: "Which property smooths the color change on hover?",
                options: ["transition", "z-index", "box-sizing", "list-style"],
                answer: 0,
                explain: "transition animates property changes smoothly over a duration."
            }
        ]
    },
    {
        title: "CSS Lists",
        description: "Customize bullet styles, numbers, and navigation list layouts.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Styling HTML Lists</h2>
            <p>The <code>list-style-type</code> property controls the marker style of a list. Common values include <code>disc</code> (default filled circle), <code>circle</code> (hollow circle), <code>square</code>, <code>decimal</code> (numbers 1, 2, 3), and <code>none</code> (removes markers completely, often used for navigation bars).</p>
            ${codeExample(`<style>\n    .styled-list {\n        list-style-type: square;\n        padding-left: 20px;\n        color: #1e293b;\n    }\n    .styled-list li { margin-bottom: 6px; }\n\n    .nav-list {\n        list-style-type: none;\n        padding: 0;\n        margin: 12px 0 0;\n        display: flex;\n        gap: 12px;\n    }\n    .nav-list li {\n        background: #dbeafe;\n        color: #1e40af;\n        padding: 4px 10px;\n        border-radius: 6px;\n        font-size: 12px;\n    }\n</style>\n<ul class="styled-list">\n    <li>HTML Structure</li>\n    <li>CSS Styling</li>\n    <li>JavaScript Logic</li>\n</ul>\n<ul class="nav-list">\n    <li>Home</li>\n    <li>Courses</li>\n    <li>Practice</li>\n</ul>`)}
        `,
        takeaways: [
            "list-style-type changes bullet or number markers (e.g., square, circle, decimal, or none).",
            "list-style-type: none removes bullets, which is ideal for horizontal or vertical navigation menus.",
            "Reset default padding: 0 and margin: 0 when turning a list into a custom navbar."
        ],
        mistakes: [
            "Forgetting default left padding on ul and ol elements, causing misaligned navigation links.",
            "Applying list-style-type to <li> instead of the parent <ul> or <ol> element."
        ],
        quiz: [
            {
                q: "Which value removes bullet points or numbers from a list?",
                options: ["none", "square", "decimal", "circle"],
                answer: 0,
                explain: "list-style-type: none removes list markers."
            },
            {
                q: "Which `list-style-type` value produces numbered items (1, 2, 3)?",
                options: ["decimal", "square", "none", "disc"],
                answer: 0,
                explain: "decimal uses standard numbers for list markers."
            },
            {
                q: "Why do developers often set `padding: 0; margin: 0;` on a navigation `<ul>`?",
                options: ["To remove default browser list spacing/indentation", "To delete list items", "To make text italic", "To add a border"],
                answer: 0,
                explain: "Resetting default padding and margin gives cleaner control over navbar alignment."
            },
            {
                q: "Which property changes bullets to square markers?",
                options: ["list-style-type: square;", "text-align: square;", "border-style: square;", "font-style: square;"],
                answer: 0,
                explain: "list-style-type: square sets square markers."
            },
            {
                q: "Where is `list-style-type` normally applied?",
                options: ["On the list element (ul or ol)", "On the <head> tag", "On <br> tags", "On <input> tags"],
                answer: 0,
                explain: "list-style-type is typically set on ul or ol elements."
            }
        ]
    },
    {
        title: "CSS Tables",
        description: "Design clean, readable data tables with borders, padding, and striped rows.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Styling Data Tables</h2>
            <p>Use <strong><code>border-collapse: collapse;</code></strong> to merge double table borders into a single clean line, and style <strong><code>th</code></strong> (header cells) and <strong><code>td</code></strong> (data cells) with <strong>borders</strong>, <strong>padding</strong>, and <strong>alignment</strong> so the table is easy to read.</p>
            ${codeExample(`<style>\n    table { width: 100%; border-collapse: collapse; font-size: 12px; }\n    th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f8fafc; }\n</style>\n<table>\n    <tr><th>Topic</th><th>Status</th></tr>\n    <tr><td>Selectors</td><td>Done</td></tr>\n    <tr><td>Box Model</td><td>In Progress</td></tr>\n</table>`)}
        `,
        takeaways: [
            "<strong>border-collapse: collapse</strong> joins double borders between cells into <strong>one clean, single line</strong> instead of separate boxes.",
            "<strong>th</strong> styles the <strong>table header cells</strong> (often given a distinct background color and bold/white text), while <strong>td</strong> styles <strong>regular data cells</strong>.",
            "Adding <strong>padding</strong> inside <strong>th</strong> and <strong>td</strong> gives text <strong>breathing room</strong> so words do not touch the cell borders.",
            "<strong>text-align</strong> aligns text (such as <strong>left</strong>, <strong>center</strong>, or <strong>right</strong>) to make columns neat and easy to scan.",
            "<strong>tr:nth-child(even)</strong> highlights <strong>every second row</strong> (like row 2, 4, 6) with a subtle background color to create <strong>alternating zebra stripes</strong>."
        ],
        mistakes: [
            "Forgetting to add <strong>padding</strong> inside <strong>th</strong> and <strong>td</strong> cells, making text look cramped.",
            "Leaving out <strong>border-collapse: collapse</strong>, resulting in <strong>double lines</strong> between table cells."
        ],
        quiz: [
            {
                q: "What does `border-collapse: collapse;` do on a table?",
                options: ["Merges double cell borders into a single clean line", "Hides the entire table", "Sorts rows alphabetically", "Adds bold text"],
                answer: 0,
                explain: "border-collapse: collapse combines adjacent borders into a single line."
            },
            {
                q: "What does `tr:nth-child(even)` target?",
                options: ["Every second (even-numbered) table row", "Only the first column", "Only table headers", "All borders"],
                answer: 0,
                explain: ":nth-child(even) matches even-numbered rows (2nd, 4th, 6th, etc.)."
            },
            {
                q: "Which elements represent table header cells and regular data cells?",
                options: ["th and td", "ul and ol", "h1 and p", "span and div"],
                answer: 0,
                explain: "th is for header cells and td is for standard data cells."
            },
            {
                q: "Why is `padding` important inside `th` and `td`?",
                options: ["It gives cell text breathing room from borders", "It deletes empty rows", "It changes page title", "It adds links"],
                answer: 0,
                explain: "Padding prevents text from touching cell borders."
            },
            {
                q: "What happens if `border-collapse: collapse` is omitted?",
                options: ["Double borders appear between table cells", "Text turns invisible", "Rows stack vertically", "Tables cannot have colors"],
                answer: 0,
                explain: "Without border-collapse: collapse, cells show separate double borders."
            }
        ]
    },
    {
        title: "CSS Display Property",
        description: "Control how elements flow on a page using block, inline, inline-block, and none.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Understanding Display Values</h2>
            <ul>
                <li><b>block:</b> Starts on a <b>new line</b> and takes the <b>full available width</b> (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</li>
                <li><b>inline:</b> Stays on the <b>same line</b> and ignores <b><code>width</code></b>, <b><code>height</code></b>, and top/bottom margins (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</li>
                <li><b>inline-block:</b> Stays on the <b>same line</b> like inline, while still respecting <b>width</b>, <b>height</b>, and <b>custom spacing</b> like <u>block</u>.</li>
                <li><b>none:</b> Completely <b>hides</b> the element and removes it from the <b>layout flow</b>.</li>
            </ul>

            <h3>1. <b><code>block</code></b> vs. <b><code>inline</code></b></h3>
            <p><b><code>block</code></b> elements stack vertically and stretch across the row, while <b><code>inline</code></b> elements flow beside each other on the same line.</p>
            ${codeExample(`<style>\n    .block-box {\n        display: block;\n        background: #e2e8f0;\n        padding: 8px 12px;\n        border-radius: 6px;\n        margin-bottom: 10px;\n        font-size: 12px;\n    }\n    .inline-text {\n        display: inline;\n        background: #fef08a;\n        padding: 2px 6px;\n        font-size: 12px;\n    }\n</style>\n<div class="block-box"><b><code>block</code>:</b> Starts on a new line and takes full width.</div>\n<span class="inline-text">inline word 1</span>\n<span class="inline-text">inline word 2</span>`)}

            <h3>2. <b><code>inline-block</code></b></h3>
            <p><b><code>inline-block</code></b> keeps elements side by side on one line while allowing <b><code>padding</code></b>, <b><code>margin</code></b>, <b><code>width</code></b>, and <b><code>height</code></b>.</p>
            ${codeExample(`<style>\n    .pill {\n        display: inline-block;\n        padding: 6px 14px;\n        background: #dbeafe;\n        color: #1e40af;\n        border-radius: 20px;\n        margin-right: 6px;\n        font-size: 12px;\n        font-weight: 600;\n    }\n</style>\n<span class="pill">HTML</span>\n<span class="pill">CSS</span>\n<span class="pill">JS</span>`)}

            <h3>3. <b><code>none</code></b></h3>
            <p><b><code>display: none</code></b> completely removes an element from the page layout so it takes up zero space.</p>
            ${codeExample(`<style>\n    .visible-note {\n        background: #dcfce7;\n        color: #166534;\n        padding: 8px 12px;\n        border-radius: 6px;\n        font-size: 12px;\n    }\n    .hidden-note {\n        display: none;\n    }\n</style>\n<div class="visible-note">Visible element on the page.</div>\n<div class="hidden-note">Hidden element (display: none).</div>`)}
        `,
        takeaways: [
            "<b>display: block</b> starts on a <b>new line</b> and stretches across the <b>full available width</b>.",
            "<b>display: inline</b> stays on the <b>same line</b>, and ignores <b>width</b>, <b>height</b>, and top/bottom margins.",
            "<b>display: inline-block</b> stays on the <b>same line</b> while allowing <b>custom width, height, padding, and margins</b>.",
            "<b>display: none</b> completely <b>hides</b> the element and removes it from the <b>layout flow</b>."
        ],
        mistakes: [
            "Trying to set <b>width</b> or <b>height</b> on a pure <b>inline</b> element.",
            "Confusing <b>display: none</b> (removes from layout flow) with hiding an element while keeping its space."
        ],
        quiz: [
            {
                q: "Which display value starts on a new line and takes full available width?",
                options: ["block", "inline", "none", "inline-only"],
                answer: 0,
                explain: "block elements start on a new line and span full available width."
            },
            {
                q: "Which display value stays on the same line and ignores width/height?",
                options: ["inline", "block", "grid", "table"],
                answer: 0,
                explain: "inline elements flow on the same line and ignore width and height."
            },
            {
                q: "Which display value allows side-by-side layout while respecting width, height, and padding?",
                options: ["inline-block", "inline", "none", "text"],
                answer: 0,
                explain: "inline-block stays inline while honoring width, height, and spacing."
            },
            {
                q: "What does `display: none;` do?",
                options: ["Hides the element and removes it from layout flow", "Makes text bold", "Adds a red border", "Centers the page"],
                answer: 0,
                explain: "display: none completely hides the element and leaves no space in the layout."
            },
            {
                q: "Which mistake is common with `inline` elements?",
                options: ["Expecting width or height to apply on a pure inline element", "Using class names", "Adding text inside", "Using colors"],
                answer: 0,
                explain: "Pure inline elements ignore width and height properties."
            }
        ]
    },
    {
        title: "CSS Position",
        description: "Position elements precisely using relative, absolute, fixed, and sticky.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Positioning Elements</h2>
            <p>The <b><code>position</code></b> property controls how an element is placed on the page and works together with <b><code>top</code></b>, <b><code>right</code></b>, <b><code>bottom</code></b>, and <b><code>left</code></b> offsets:</p>
            <ul>
                <li><b><code>relative</code>:</b> Positioned relative to its <b>normal spot</b> while keeping its original space in the layout.</li>
                <li><b><code>absolute</code>:</b> Positioned relative to its <b>nearest positioned ancestor</b> (an element with <code>relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>).</li>
                <li><b><code>fixed</code>:</b> Stays locked relative to the <b>browser viewport</b> even when the page scrolls.</li>
                <li><b><code>sticky</code>:</b> Acts like <b><code>relative</code></b> until scrolling reaches a set offset (like <code>top: 0</code>), then sticks in place.</li>
            </ul>

            <h3>1. <b><code>relative</code></b></h3>
            <p><b><code>position: relative</code></b> shifts an element slightly from its normal position without pushing other elements around.</p>
            ${codeExample(`<style>\n    .rel-box {\n        position: relative;\n        top: 8px;\n        left: 16px;\n        background: #dbeafe;\n        color: #1e40af;\n        padding: 10px 14px;\n        border-radius: 6px;\n        font-size: 12px;\n    }\n</style>\n<div class="rel-box">Shifted 8px down and 16px right from normal position.</div>`)}

            <h3>2. <b><code>absolute</code></b></h3>
            <p><b><code>position: absolute</code></b> places an element (like a badge) inside a parent container that has <b><code>position: relative</code></b>.</p>
            ${codeExample(`<style>\n    .parent-card {\n        position: relative;\n        background: #f1f5f9;\n        padding: 20px;\n        border-radius: 8px;\n        border: 1px solid #cbd5e1;\n    }\n    .badge {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        background: #ef4444;\n        color: white;\n        padding: 3px 8px;\n        font-size: 10px;\n        font-weight: 600;\n        border-radius: 4px;\n    }\n</style>\n<div class="parent-card">\n    <span class="badge">NEW</span>\n    <h4>Product Card</h4>\n    <p style="font-size: 12px; margin: 4px 0 0;">Badge is anchored to the top-right of the card.</p>\n</div>`)}

            <h3>3. <b><code>fixed</code></b></h3>
            <p><b><code>position: fixed</code></b> stays pinned to the <b>screen/viewport</b>—commonly used for floating chat buttons or help widgets.</p>
            ${codeExample(`<style>\n    .fixed-demo-area {\n        position: relative;\n        height: 90px;\n        background: #f8fafc;\n        border: 1px dashed #94a3b8;\n        border-radius: 8px;\n        padding: 12px;\n        font-size: 12px;\n    }\n    .fixed-btn {\n        position: fixed;\n        bottom: 14px;\n        right: 14px;\n        background: #2563eb;\n        color: white;\n        padding: 8px 12px;\n        border-radius: 20px;\n        font-size: 11px;\n        font-weight: 600;\n    }\n</style>\n<div class="fixed-demo-area">\n    Fixed elements stay anchored to the viewport even while scrolling.\n    <div class="fixed-btn">Help</div>\n</div>`)}

            <h3>4. <b><code>sticky</code></b></h3>
            <p><b><code>position: sticky</code></b> stays in normal flow first, then sticks at <b><code>top: 0</code></b> when you scroll down past it.</p>
            ${codeExample(`<style>\n    .scroll-container {\n        height: 120px;\n        overflow-y: auto;\n        border: 1px solid #cbd5e1;\n        border-radius: 8px;\n        padding: 0 12px 12px;\n        font-size: 12px;\n    }\n    .sticky-header {\n        position: sticky;\n        top: 0;\n        background: #0f172a;\n        color: #38bdf8;\n        padding: 8px 10px;\n        font-weight: 600;\n        margin: 0 -12px 10px;\n    }\n</style>\n<div class="scroll-container">\n    <div class="sticky-header">Sticky Section Header (Scroll down)</div>\n    <p>Line 1: Scroll inside this box to test sticky behavior.</p>\n    <p>Line 2: The header sticks to the top of the scroll box.</p>\n    <p>Line 3: Keep scrolling to see it stay visible.</p>\n    <p>Line 4: Great for section titles and tables.</p>\n</div>`)}
        `,
        takeaways: [
            "Set <b>position: relative</b> on a parent container before using <b>position: absolute</b> on a child element.",
            "<b>position: fixed</b> positions relative to the <b>browser viewport</b> and stays put during scrolling.",
            "<b>position: sticky</b> combines <b>relative</b> and <b>fixed</b> based on scroll position and requires an offset like <b>top: 0</b>."
        ],
        mistakes: [
            "Using <b>position: absolute</b> without a positioned parent container, causing it to align relative to the whole page instead of the card.",
            "Forgetting a <b>top</b>, <b>bottom</b>, <b>left</b>, or <b>right</b> value on <b>position: sticky</b>."
        ],
        quiz: [
            {
                q: "Which position value stays fixed relative to the browser viewport even while scrolling?",
                options: ["fixed", "relative", "static", "normal"],
                answer: 0,
                explain: "position: fixed anchors an element relative to the viewport."
            },
            {
                q: "What position is commonly set on a parent container for an `absolute` child badge?",
                options: ["relative", "static", "none", "hidden"],
                answer: 0,
                explain: "A parent with position: relative acts as the reference container for an absolute child."
            },
            {
                q: "Which position value switches between relative and fixed based on scroll offset?",
                options: ["sticky", "static", "inline", "block"],
                answer: 0,
                explain: "position: sticky sticks once scrolling reaches its offset (like top: 0)."
            },
            {
                q: "Which offset properties are used with `position`?",
                options: ["top, right, bottom, left", "font, color, border", "src, alt, href", "row, col, span"],
                answer: 0,
                explain: "top, right, bottom, and left control position offsets."
            },
            {
                q: "What happens if you use `position: absolute` without a positioned ancestor?",
                options: ["It positions relative to the document/initial containing block instead of a local card", "It turns into a table", "It deletes the element", "It ignores top and left"],
                answer: 0,
                explain: "Without a positioned ancestor, absolute elements fall back to the document/initial containing block."
            }
        ]
    },
    {
        title: "CSS Overflow & Z-Index",
        description: "Manage content clipping and control overlapping element stack order.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Overflow and Layering</h2>
            <p><code>overflow</code> controls what happens when content exceeds its container's size (<code>visible</code>, <code>hidden</code>, <code>scroll</code>, <code>auto</code>). <code>z-index</code> controls which positioned element appears on top.</p>
            ${codeExample(`<style>\n    .scroll-box {\n        width: 100%;\n        height: 75px;\n        overflow-y: auto;\n        border: 1px solid #cbd5e1;\n        padding: 10px;\n        background: #f8fafc;\n    }\n</style>\n<div class="scroll-box">\n    <p>Line 1: Scrollable container content.</p>\n    <p>Line 2: Overflow-y: auto adds a scrollbar only when needed.</p>\n    <p>Line 3: Extra text inside the fixed-height box.</p>\n</div>`)}
        `,
        takeaways: [
            "overflow: auto adds scrollbars only when content overflows.",
            "z-index only works on elements with position set (relative, absolute, fixed, sticky)."
        ],
        mistakes: [
            "Applying z-index to a static element and wondering why it has no effect."
        ],
        quiz: [
            {
                q: "Which `overflow` value adds scrollbars only when content overflows?",
                options: ["auto", "visible", "none", "bold"],
                answer: 0,
                explain: "overflow: auto shows scrollbars only when needed."
            },
            {
                q: "When does `z-index` take effect?",
                options: ["On positioned elements (such as relative, absolute, fixed, or sticky)", "On every static element automatically", "Only on <br> tags", "Only on comments"],
                answer: 0,
                explain: "z-index controls stacking order on positioned elements."
            },
            {
                q: "What does `overflow-y: auto;` control?",
                options: ["Vertical overflow scrolling", "Horizontal font size", "Border radius", "List markers"],
                answer: 0,
                explain: "overflow-y handles vertical overflow along the y-axis."
            },
            {
                q: "What does `overflow: hidden;` do?",
                options: ["Clips content that overflows the container box", "Expands the browser window", "Changes text color", "Adds underlines"],
                answer: 0,
                explain: "overflow: hidden clips overflowing content."
            },
            {
                q: "What mistake happens when using `z-index` on a static element?",
                options: ["z-index has no effect without positioning", "It crashes CSS", "It turns text blue", "It removes padding"],
                answer: 0,
                explain: "Static elements ignore z-index unless positioned (or in a flex/grid context)."
            }
        ]
    },
    {
        title: "CSS Flexbox Basics",
        description: "Build flexible, one-dimensional row or column layouts with ease.",
        category: "MODERN LAYOUTS",
        isPractice: false,
        content: `
            <h2>Flexible Box Layout</h2>
            <p>Applying <code>display: flex;</code> on a parent container aligns child items automatically. Use <code>justify-content</code> for horizontal alignment and <code>align-items</code> for vertical alignment.</p>
            ${codeExample(`<style>\n    .flex-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 10px;\n        background: #e2e8f0;\n        padding: 12px;\n        border-radius: 8px;\n    }\n    .flex-item {\n        background: #2563eb;\n        color: white;\n        padding: 10px 16px;\n        border-radius: 6px;\n    }\n</style>\n<div class="flex-row">\n    <div class="flex-item">Item 1</div>\n    <div class="flex-item">Item 2</div>\n    <div class="flex-item">Item 3</div>\n</div>`)}
        `,
        takeaways: [
            "display: flex activates Flexbox on the parent container.",
            "gap adds clean spacing between flex items without extra margins."
        ],
        mistakes: [
            "Putting justify-content on the child items instead of the flex parent."
        ],
        quiz: [
            {
                q: "Which declaration turns a container into a flex container?",
                options: ["display: flex;", "display: block-flex;", "flex-mode: on;", "layout: flex;"],
                answer: 0,
                explain: "display: flex enables Flexbox on the parent container."
            },
            {
                q: "In a default row flex container, which property controls horizontal alignment?",
                options: ["justify-content", "align-items", "font-size", "border-style"],
                answer: 0,
                explain: "justify-content aligns items along the main axis (horizontally in a row)."
            },
            {
                q: "In a default row flex container, which property controls vertical alignment?",
                options: ["align-items", "justify-content", "text-transform", "list-style"],
                answer: 0,
                explain: "align-items aligns items along the cross axis (vertically in a row)."
            },
            {
                q: "What property creates clean spacing between flex items?",
                options: ["gap", "alt", "type", "rel"],
                answer: 0,
                explain: "gap adds spacing between flex items."
            },
            {
                q: "Where should `justify-content` be placed?",
                options: ["On the flex parent container", "Only inside <title>", "On plain text", "Inside a comment"],
                answer: 0,
                explain: "justify-content is set on the parent container with display: flex."
            }
        ]
    },
    {
        title: "CSS Grid & Media Queries",
        description: "Create two-dimensional grid layouts and adapt designs for mobile screens.",
        category: "MODERN LAYOUTS",
        isPractice: false,
        content: `
            <h2>CSS Grid & Responsive Design</h2>
            <p><code>display: grid;</code> arranges items into rows and columns using <code>grid-template-columns</code>. Combine it with <code>@media</code> queries to adjust layouts on smaller viewports.</p>
            ${codeExample(`<style>\n    .grid-cards {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 10px;\n    }\n    .g-card {\n        background: #0f172a;\n        color: #38bdf8;\n        padding: 15px;\n        text-align: center;\n        border-radius: 8px;\n    }\n</style>\n<div class="grid-cards">\n    <div class="g-card">Col 1</div>\n    <div class="g-card">Col 2</div>\n    <div class="g-card">Col 3</div>\n</div>`)}
        `,
        takeaways: [
            "1fr divides available grid space into equal fractions.",
            "@media (max-width: 768px) applies styles specifically for tablets and phones."
        ],
        mistakes: [
            "Forgetting the viewport meta tag in HTML when testing media queries."
        ],
        quiz: [
            {
                q: "What does `grid-template-columns: repeat(3, 1fr);` create?",
                options: ["Three equal-width columns", "Three hidden rows", "Three borders", "Three fonts"],
                answer: 0,
                explain: "repeat(3, 1fr) creates 3 columns of equal fractional width."
            },
            {
                q: "What does `1fr` represent in CSS Grid?",
                options: ["One fraction of available track space", "One font size", "One frame per second", "One fixed pixel"],
                answer: 0,
                explain: "fr stands for fraction of available grid space."
            },
            {
                q: "What are `@media` queries used for?",
                options: ["Applying styles conditionally based on screen/viewport size", "Playing audio files", "Creating databases", "Compiling JavaScript"],
                answer: 0,
                explain: "Media queries adapt CSS rules for different viewport sizes."
            },
            {
                q: "Which HTML tag is essential so mobile browsers scale media queries properly?",
                options: ["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "<marquee>", "<bgsound>", "<frame>"],
                answer: 0,
                explain: "The viewport meta tag ensures proper responsive scaling on mobile devices."
            },
            {
                q: "Which property activates CSS Grid layout?",
                options: ["display: grid;", "display: table-grid;", "grid: true;", "layout: grid;"],
                answer: 0,
                explain: "display: grid turns an element into a grid container."
            }
        ]
    },
    {
        title: "CSS Practice Playground",
        description: "Test and experiment with Inline, Internal, and External CSS concepts inside the interactive playground.",
        category: "PRACTICE",
        isPractice: true,
        takeaways: [
            "Experiment with Inline, Internal, and External stylesheet configurations.",
            "Test out the built-in Login Page project challenge."
        ],
        mistakes: [
            "Syntax inconsistencies such as missed curly braces or semicolons."
        ]
    }
];

function escapeAttr(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Helper Function for Code Examples
function codeExample(code) {
    const safeCode = escapeAttr(code);
    const fullDocument = `<!DOCTYPE html><html><head><style>body { font-family: sans-serif; padding: 10px; color: #1e293b; font-size: 13px; }</style></head><body>${code}</body></html>`;
    const iframeContent = escapeAttr(fullDocument);

    return `
        <div class="code-example-container">
            <div class="code-example">
                <div class="code-header">
                    <span><i class="fa-solid fa-code"></i> CSS Code</span>
                    <span>example.css</span>
                </div>
                <pre><code>${safeCode}</code></pre>
            </div>
            <div class="code-preview">
                <div class="code-header preview-header-title">
                    <span><i class="fa-solid fa-eye"></i> Output Preview</span>
                    <span>Browser</span>
                </div>
                <iframe class="example-preview-frame" srcdoc="${iframeContent}" sandbox="allow-scripts"></iframe>
            </div>
        </div>
    `;
}

// Quiz State (5 questions per lesson, 3 hearts)
const MAX_HEARTS = 3;
let quizIndex = 0;
let quizHearts = MAX_HEARTS;
let quizScore = 0;
let quizAnswered = false;

function renderHearts() {
    const heartsContainer = document.getElementById("heartsContainer");
    if (!heartsContainer) return;

    const icons = heartsContainer.querySelectorAll(".heart-icon");
    icons.forEach((icon, i) => {
        icon.classList.toggle("lost", i >= quizHearts);
    });
}

function resetQuizForLesson(lessonIndex) {
    const lesson = lessons[lessonIndex];
    const quizSection = document.getElementById("quizSection");
    if (!quizSection) return;

    if (!lesson || !Array.isArray(lesson.quiz) || lesson.quiz.length === 0) {
        quizSection.style.display = "none";
        return;
    }

    quizSection.style.display = "block";
    quizIndex = 0;
    quizHearts = MAX_HEARTS;
    quizScore = 0;
    quizAnswered = false;
    renderHearts();
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const lesson = lessons[currentLesson];
    const quizBody = document.getElementById("quizBody");
    const progressText = document.getElementById("quizProgressText");
    if (!lesson || !Array.isArray(lesson.quiz) || !quizBody) return;

    const totalQuestions = lesson.quiz.length;

    if (quizHearts <= 0) {
        if (progressText) progressText.textContent = "Out of Hearts";
        quizBody.innerHTML = `
            <div class="quiz-summary">
                <h3>Out of Hearts!</h3>
                <p>You lost all 3 hearts on this lesson quiz. Review the lesson above and try again!</p>
                <button type="button" class="quiz-btn retry-btn" id="retryQuizBtn">
                    <i class="fa-solid fa-rotate-right"></i> Try Again (3 Hearts)
                </button>
            </div>
        `;
        document.getElementById("retryQuizBtn")?.addEventListener("click", () => {
            resetQuizForLesson(currentLesson);
        });
        return;
    }

    if (quizIndex >= totalQuestions) {
        if (progressText) progressText.textContent = `Completed (${quizScore}/${totalQuestions})`;
        completedLessons.add(currentLesson);
        updateProgress();
        quizBody.innerHTML = `
            <div class="quiz-summary">
                <h3>Quiz Complete!</h3>
                <p>You scored <strong>${quizScore} out of ${totalQuestions}</strong> with <strong>${quizHearts}</strong> heart(s) remaining.</p>
                <button type="button" class="quiz-btn retry-btn" id="retryQuizBtn">
                    <i class="fa-solid fa-rotate-right"></i> Play Again
                </button>
            </div>
        `;
        document.getElementById("retryQuizBtn")?.addEventListener("click", () => {
            resetQuizForLesson(currentLesson);
        });
        return;
    }

    quizAnswered = false;
    const item = lesson.quiz[quizIndex];
    if (progressText) progressText.textContent = `Question ${quizIndex + 1} of ${totalQuestions}`;

    const choiceLetters = ["A", "B", "C", "D"];

    quizBody.innerHTML = `
        <p class="quiz-question-text">${quizIndex + 1}. ${escapeHTML(item.q)}</p>
        <div class="quiz-options" id="quizOptions">
            ${item.options.map((opt, idx) => {
                const letter = choiceLetters[idx] || String.fromCharCode(65 + idx);
                return `
                    <button type="button" class="quiz-option" data-opt="${idx}">
                        <strong>${letter}.</strong> ${escapeHTML(opt)}
                    </button>
                `;
            }).join("")}
        </div>
        <div id="quizFeedbackArea"></div>
        <div id="quizNextArea"></div>
    `;

    quizBody.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
            if (quizAnswered) return;
            quizAnswered = true;

            const chosen = Number(btn.getAttribute("data-opt"));
            const isCorrect = chosen === item.answer;
            const allOptionBtns = quizBody.querySelectorAll(".quiz-option");

            allOptionBtns.forEach((b, idx) => {
                b.disabled = true;
                if (idx === item.answer) b.classList.add("correct");
                if (idx === chosen && !isCorrect) b.classList.add("wrong");
            });

            if (isCorrect) {
                quizScore += 1;
            } else {
                quizHearts = Math.max(0, quizHearts - 1);
                renderHearts();
            }

            const feedbackArea = document.getElementById("quizFeedbackArea");
            if (feedbackArea) {
                feedbackArea.innerHTML = `
                    <div class="quiz-feedback ${isCorrect ? "correct" : "wrong"}">
                        <strong>${isCorrect ? "Correct!" : "Incorrect (-1 Heart):"}</strong> ${escapeHTML(item.explain)}
                    </div>
                `;
            }

            const nextArea = document.getElementById("quizNextArea");
            if (nextArea) {
                const isLastQuestion = quizIndex === totalQuestions - 1;
                const buttonLabel = quizHearts <= 0
                    ? "See Result"
                    : (isLastQuestion ? "Finish Quiz" : "Next Question");

                nextArea.innerHTML = `
                    <div class="quiz-footer-actions">
                        <button type="button" class="quiz-btn" id="nextQuizBtn">
                            ${buttonLabel} <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                `;

                document.getElementById("nextQuizBtn")?.addEventListener("click", () => {
                    quizIndex += 1;
                    renderQuizQuestion();
                });
            }
        });
    });
}

// Navigation & State Logic
let currentLesson = 0;
const completedLessons = new Set();

const lessonLinks = document.querySelectorAll(".lesson-link");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonBody = document.getElementById("lessonBody");
const lessonCounter = document.getElementById("lessonCounter");
const lessonCategory = document.getElementById("lessonCategory");
const practiceSection = document.getElementById("practiceSection");

function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    currentLesson = index;
    const lesson = lessons[index];

    if (lessonTitle) lessonTitle.textContent = lesson.title;
    if (lessonDescription) lessonDescription.textContent = lesson.description;
    if (lessonCategory) lessonCategory.textContent = lesson.category;
    if (lessonCounter) lessonCounter.textContent = `Lesson ${String(index + 1).padStart(2, "0")} of ${lessons.length}`;

    if (lesson.isPractice) {
        if (lessonBody) lessonBody.style.display = "none";
        if (practiceSection) {
            practiceSection.style.display = "block";
            if (typeof editor !== "undefined" && editor) {
                setTimeout(() => editor.refresh(), 10);
            }
        }
        runHTML();
    } else {
        if (lessonBody) {
            lessonBody.style.display = "block";
            lessonBody.innerHTML = lesson.content;
        }
        if (practiceSection) practiceSection.style.display = "none";
    }

    const takeawayList = document.getElementById("takeawayList");
    if (takeawayList && lesson.takeaways) {
        takeawayList.innerHTML = lesson.takeaways.map(item => `<li>${item}</li>`).join("");
    }

    const mistakeList = document.getElementById("mistakeList");
    if (mistakeList && lesson.mistakes) {
        mistakeList.innerHTML = lesson.mistakes.map(item => `<li>${item}</li>`).join("");
    }

    resetQuizForLesson(index);

    lessonLinks.forEach((link, i) => {
        link.classList.toggle("active", i === index);
    });

    const prevBtn = document.getElementById("previousLesson");
    const nextBtn = document.getElementById("nextLesson");
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === lessons.length - 1;

    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
    hideDrawer();
}

lessonLinks.forEach((link, index) => {
    link.addEventListener("click", () => loadLesson(index));
});

function updateProgress() {
    lessonLinks.forEach((link, index) => {
        const number = link.querySelector(".lesson-number");
        if (!number) return;
        if (completedLessons.has(index)) {
            number.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            number.textContent = index === lessons.length - 1 ? "*" : String(index + 1).padStart(2, "0");
        }
    });
}

const completeBtn = document.getElementById("completeLesson");
if (completeBtn) {
    completeBtn.addEventListener("click", () => {
        completedLessons.add(currentLesson);
        updateProgress();
        completeBtn.innerHTML = 'Completed <i class="fa-solid fa-check"></i>';
        setTimeout(() => {
            completeBtn.innerHTML = 'Mark as Complete <i class="fa-solid fa-check"></i>';
        }, 1500);
    });
}

const prevBtn = document.getElementById("previousLesson");
const nextBtn = document.getElementById("nextLesson");
if (prevBtn) prevBtn.addEventListener("click", () => loadLesson(currentLesson - 1));
if (nextBtn) nextBtn.addEventListener("click", () => loadLesson(currentLesson + 1));

// CodeMirror & Practice Presets setup
const editorElement = document.getElementById("htmlEditor");
const htmlPreview = document.getElementById("htmlPreview");

const presets = {
    inline: `<!DOCTYPE html>\n<html>\n<body>\n    <h2 style="color: #2563eb; text-align: center;">Inline CSS Example</h2>\n    <p style="background-color: #fef08a; padding: 12px; border-radius: 6px;">\n        This paragraph demonstrates direct inline styling using the style attribute.\n    </p>\n</body>\n</html>`,
    internal: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body { font-family: sans-serif; background: #f8fafc; }\n        h2 { color: #16a34a; text-align: center; }\n        .box { background: #dcfce7; padding: 15px; border-radius: 8px; }\n    </style>\n</head>\n<body>\n    <h2>Internal CSS Example</h2>\n    <div class="box">\n        <p>This design is defined inside the &lt;style&gt; tag within the head section.</p>\n    </div>\n</body>\n</html>`,
    external: `<!DOCTYPE html>\n<html>\n<head>\n    <link rel="stylesheet" href="css.css">\n    <style>\n        .ext-text { color: #2563eb; font-weight: 600; }\n    </style>\n</head>\n<body>\n    <h2>External CSS Example</h2>\n    <p class="ext-text">This text is styled using an external css.css stylesheet file.</p>\n</body>\n</html>`,
    login: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 330px;
        }
        .login-card h2 {
            margin-bottom: 20px;
            color: #0f172a;
            text-align: center;
            font-size: 22px;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            font-size: 12px;
            color: #475569;
            margin-bottom: 5px;
            font-weight: 600;
        }
        .input-group input {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            font-size: 13px;
            box-sizing: border-box;
            outline: none;
        }
        .login-btn {
            width: 100%;
            padding: 11px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
        }
        .login-btn:hover {
            background: #1d4ed8;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <h2>Welcome Back</h2>
        <form>
            <div class="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="student@example.com">
            </div>
            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="Password">
            </div>
            <button type="submit" class="login-btn">Log In</button>
        </form>
    </div>
</body>
</html>`
};

// Simple CSS Error Highlighter
let errorMarkers = [];

function checkSimpleCSSErrors() {
    if (!editor) return;

    errorMarkers.forEach(marker => marker.clear());
    errorMarkers = [];

    const code = editor.getValue();
    const lines = code.split("\n");
    let insideStyleTag = false;

    lines.forEach((lineText, lineIndex) => {
        const trimmed = lineText.trim();

        if (trimmed.toLowerCase().includes("<style>")) {
            insideStyleTag = true;
            return;
        }
        if (trimmed.toLowerCase().includes("</style>")) {
            insideStyleTag = false;
            return;
        }

        const isCSSLine = insideStyleTag || (!trimmed.includes("<") && !trimmed.includes(">") && !trimmed.startsWith("<!") && !trimmed.startsWith("/"));

        if (isCSSLine) {
            if (trimmed.includes(":") && !trimmed.endsWith(";") && !trimmed.endsWith("{") && !trimmed.endsWith("}") && !trimmed.startsWith("/*")) {
                const startChar = lineText.indexOf(trimmed);
                const endChar = lineText.length;

                const marker = editor.markText(
                    { line: lineIndex, ch: startChar },
                    { line: lineIndex, ch: endChar },
                    { className: "cm-css-error-highlight" }
                );
                errorMarkers.push(marker);
            }
        }
    });
}

let editor = null;
if (editorElement && typeof CodeMirror !== "undefined") {
    editorElement.value = presets.inline;
    editor = CodeMirror.fromTextArea(editorElement, {
        mode: "htmlmixed",
        theme: "default",
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4
    });

    editor.on("change", checkSimpleCSSErrors);
    checkSimpleCSSErrors();
}

function runHTML() {
    if (editor && htmlPreview) {
        htmlPreview.srcdoc = editor.getValue();
    }
}

const runCodeBtn = document.getElementById("runCode");
const resetCodeBtn = document.getElementById("resetCode");

if (runCodeBtn) runCodeBtn.addEventListener("click", runHTML);
if (resetCodeBtn) {
    resetCodeBtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".preset-btn.active");
        const key = activeBtn ? activeBtn.getAttribute("data-preset") : "inline";
        if (editor && presets[key]) {
            editor.setValue(presets[key]);
            runHTML();
        }
    });
}

document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const presetKey = btn.getAttribute("data-preset");
        if (editor && presets[presetKey]) {
            editor.setValue(presets[presetKey]);
            runHTML();
            document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        }
    });
});

loadLesson(0);