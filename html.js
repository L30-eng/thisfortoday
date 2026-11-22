
// Sidebar navigation toggle
const menuToggle = document.getElementById("menuToggle");
const closeDrawer = document.getElementById("closeDrawer");
const lessonDrawer = document.getElementById("lessonDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openDrawer() {
    lessonDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
}

function hideDrawer() {
    lessonDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
}

if (menuToggle) menuToggle.addEventListener("click", openDrawer);
if (closeDrawer) closeDrawer.addEventListener("click", hideDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", hideDrawer);

// Lessons data array (18 Lessons including Try It Yourself)
const lessons = [
    {
        title: "Introduction to HTML",
        description: "Discover what HTML is and how it builds the structure of every website.",
        category: "GETTING STARTED",
        isPractice: false,
        content: `
            <div class="intro-banner">
                <div>
                    <span>Welcome to Web Development</span>
                    <h2>Learn the Basics of HTML</h2>
                    <p>In this lesson, you'll get a comprehensive introduction to HTML, the standard markup language for creating web pages.</p>
                </div>
                <div class="banner-icon">
                    <i class="fa-brands fa-html5"></i>
                </div>
            </div>
            <div class="author-card">
                <div class="author-avatar-wrap">
                    <img src="British-scientist-Tim-Berners-Lee.webp" alt="Tim Berners-Lee, creator of HTML" class="author-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                    <span class="author-fallback-icon" style="display: none;"><i class="fa-solid fa-user-tie"></i></span>
                </div>
                <div class="author-info">
                    <span class="author-role">Creator of HTML</span>
                    <h3>Tim Berners-Lee</h3>
                    <p>British computer scientist who created HTML and the World Wide Web in 1989–1990 to share documents across browsers.</p>
                </div>
            </div>
            <h2>What is HTML?</h2>
            <p>HTML stands for <b>HyperText Markup Language</b>. It is the standard markup language used to create the structure of a webpage.</p>
            <p>HTML tells the browser what content to display, such as headings, paragraphs, images, links, and lists.</p>
            <div class="info-box">
                <i class="fa-solid fa-lightbulb"></i>
                <div><strong>Remember:</strong> HTML provides structure, CSS handles appearance, and JavaScript adds interactivity.</div>
            </div>
            <h2>Basic HTML Structure</h2>
            <p>Every basic HTML document follows a structure like this:</p>
            ${codeExample(`<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`)}
        `,
        takeaways: [
            "HTML stands for <b>HyperText Markup Language</b>.",
            "HTML creates the structure of a webpage.",
            "HTML uses elements to organize content.",
            "A browser displays the HTML webpage."
        ],
        mistakes: [
            "Forgetting to close HTML tags.",
            "Saving the file with the wrong extension.",
            "Placing content outside the body element."
        ]
    },
    {
        title: "HTML Elements",
        description: "Understand HTML elements and how opening and closing tags work.",
        category: "HTML BASICS",
        isPractice: false,
        content: `
            <h2>What are HTML Elements?</h2>
            <p>An HTML element is usually made up of an opening tag, content, and a closing tag.</p>
            ${codeExample(`<h1>My First Heading</h1>\n<p>This is a paragraph.</p>`)}
            <h2>Parts of an Element</h2>
            <p><strong>Opening tag:</strong> Starts the element, such as &lt;p&gt;.</p>
            <p><strong>Content:</strong> The text or other content inside the element.</p>
            <p><strong>Closing tag:</strong> Ends the element, such as &lt;/p&gt;.</p>
        `,
        takeaways: ["Elements define content structure.", "Most elements have opening and closing tags."],
        mistakes: ["Forgetting the closing tag.", "Incorrectly nesting elements."]
    },
    {
        title: "HTML Attributes",
        description: "Learn how attributes provide additional information about HTML elements.",
        category: "HTML BASICS",
        isPractice: false,
        content: `
            <h2>What are HTML Attributes?</h2>
            <p>Attributes provide additional information about an HTML element. They are written inside the opening tag.</p>
            ${codeExample(`<a href="https://example.com">Visit Website</a>\n<img src="photo.jpg" alt="A sample photo">`)}
            <h2>Correct vs. Wrong Practices in Attributes & Values</h2>
<p>Here are examples of how to correctly write an attribute and its value, along with common mistakes to avoid:</p>

<div class="code-example">
    <div class="code-header">
        <span><i class="fa-solid fa-check" style="color: #22c55e;"></i> Correct Code</span>
        <span>correct.html</span>
    </div>
    <pre><code>&lt;a href="https://example.com"&gt;Visit Website&lt;/a&gt;</code></pre>
</div>
<p style="color: #166534; font-size: 12px; margin-bottom: 20px;"><strong>Why is this correct?</strong> It includes the attribute name (<code>href</code>), followed by an equal sign (<code>=</code>), and the value is properly enclosed in double quotation marks (<code>"https://example.com"</code>).</p>

<div class="code-example">
    <div class="code-header">
        <span><i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i> Wrong Code 1 (Missing Quotation Marks)</span>
        <span>wrong-1.html</span>
    </div>
    <pre><code>&lt;a href=https://example.com&gt;Visit Website&lt;/a&gt;</code></pre>
</div>
<p style="color: #991b1b; font-size: 12px; margin-bottom: 20px;"><strong>Why is this wrong?</strong> It misses the quotation marks (<code>" "</code>). If the URL contains spaces or special characters, the browser will fail to read it properly.</p>

<div class="code-example">
    <div class="code-header">
        <span><i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i> Wrong Code 2 (Space Inside Attribute Name)</span>
        <span>wrong-2.html</span>
    </div>
    <pre><code>&lt;a hr ef="https://example.com"&gt;Visit Website&lt;/a&gt;</code></pre>
</div>
<p style="color: #991b1b; font-size: 12px; margin-bottom: 20px;"><strong>Why is this wrong?</strong> There is a space in the middle of the attribute name (<code>hr ef</code> instead of <code>href</code>). The browser will not recognize this as a valid command.</p>
        `,
        takeaways: ["Attributes provide extra information.", "Attributes are written inside opening tags.", "Example: <b> src, href, alt, id, class, type, placeholder, style. </b> "],
        mistakes: ["Forgetting quotation marks around values.", "Misspelling attribute names."]
    },
    {
        title: "HTML Values",
        description: "Understand the values assigned to HTML attributes.",
        category: "HTML BASICS",
        isPractice: false,
        content: `
            <h2>Attribute Values</h2>
            <p>An attribute value is the information assigned to an attribute following an equal sign, enclosed in quotation marks.</p>
            ${codeExample(`<a href="https://example.com">Visit Example</a>`)}
        `,
        takeaways: [
            "Values provide the specific information assigned to attributes.",
            "Attribute values are always enclosed in quotation marks (\" \").",
            "The equal sign separates an attribute name from its value."
        ],
        mistakes: [
            "Forgetting to use quotation marks around the value.",
            "Forgetting the equal sign (=) between attribute and value.",
            "Putting a space inside the attribute name instead of using it properly."
        ]
    },
    {
        title: "HTML Button",
        description: "Learn how to create interactive buttons using the button element.",
        category: "HTML BASICS",
        isPractice: false,
        content: `
            <h2>The Button Element</h2>
            <p>The &lt;button&gt; element creates a clickable button used to submit forms or trigger actions.</p>
            ${codeExample(`<button type="submit">Click Me</button>`)}
        `,
        takeaways: ["Buttons create interactive triggers.", "Can be styled using CSS."],
        mistakes: ["Not specifying the button type attribute."]
    },
    {
        title: "HTML Links",
        description: "Learn how to connect webpages using hyperlinks.",
        category: "HTML CONTENT",
        isPractice: false,
        content: `
            <h2>What are HTML Links?</h2>
            <p>HTML links allow users to move from one webpage to another using the anchor element &lt;a&gt;.</p>
            ${codeExample(`<a href="https://www.example.com">Visit Website</a>`)}
        `,
        takeaways: ["Anchor elements create hyperlinks.", "href sets the destination."],
        mistakes: ["Forgetting the href attribute.", "Entering broken URLs."]
    },
    {
        title: "HTML Lists",
        description: "Organize information using ordered and unordered lists.",
        category: "HTML CONTENT",
        isPractice: false,
        content: `
            <h2>Lists in HTML</h2>
            <p>Use &lt;ul&gt; for bulleted lists and &lt;ol&gt; for numbered sequences, containing &lt;li&gt; items.</p>
            ${codeExample(`<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>`)}
        `,
        takeaways: ["ul creates bulleted lists.", "ol creates numbered lists."],
        mistakes: ["Omitting list item (li) tags."]
    },
    {
        title: "HTML Tables",
        description: "Learn how to organize information into rows and columns.",
        category: "HTML CONTENT",
        isPractice: false,
        content: `
            <h2>HTML Tables</h2>
            <p>Tables organize data into rows (&lt;tr&gt;), headers (&lt;th&gt;), and cells (&lt;td&gt;).</p>
            ${codeExample(`<table>\n    <tr><th>Header</th></tr>\n    <tr><td>Data</td></tr>\n</table>`)}
        `,
        takeaways: ["Tables display tabular data clearly."],
        mistakes: ["Placing cells outside rows."]
    },
    {
        title: "HTML Forms",
        description: "Discover how forms collect information from website visitors.",
        category: "HTML CONTENT",
        isPractice: false,
        content: `
            <h2>HTML Forms</h2>
            <p>Forms gather user inputs using &lt;input&gt;, &lt;label&gt;, and &lt;button&gt; elements.</p>
            ${codeExample(`<form>\n    <label>Name:</label>\n    <input type="text">\n</form>`)}
        `,
        takeaways: ["Forms interact with users to collect data."],
        mistakes: ["Not connecting labels to inputs properly."]
    },
    {
        title: "HTML Styles",
        description: "Learn how to add styling directly to HTML elements.",
        category: "HTML CONTENT",
        isPractice: false,
        content: `
            <h2>Inline Styles</h2>
            <p>The style attribute allows you to add CSS properties directly onto elements.</p>
            ${codeExample(`<p style="color: blue;">This is a blue paragraph.</p>`)}
        `,
        takeaways: ["Style attributes apply custom visual rules."],
        mistakes: ["Syntax errors in style property values."]
    },
    {
        title: "HTML Images",
        description: "Discover how to display images on a webpage.",
        category: "HTML MEDIA",
        isPractice: false,
        content: `
            <h2>Adding Images</h2>
            <p>The &lt;img&gt; element displays pictures using the src and alt attributes.</p>
            ${codeExample(`<img src="image.jpg" alt="Description">`)}
        `,
        takeaways: ["src specifies file path.", "alt provides descriptions."],
        mistakes: ["Incorrect image paths."]
    },
    {
        title: "HTML Audio",
        description: "Learn how to embed sound clips and music on your webpage.",
        category: "HTML MEDIA",
        isPractice: false,
        content: `
            <h2>Embedding Audio</h2>
            <p>The &lt;audio&gt; element adds sound controls to web pages.</p>
            ${codeExample(`<audio controls>\n    <source src="audio.mp3" type="audio/mpeg">\n</audio>`)}
        `,
        takeaways: ["Use the controls attribute for play/pause buttons."],
        mistakes: ["Unsupported audio file formats."]
    },
    {
        title: "HTML Video",
        description: "Learn how to embed videos into your web pages.",
        category: "HTML MEDIA",
        isPractice: false,
        content: `
            <h2>Embedding Video</h2>
            <p>The &lt;video&gt; element embeds movie clips or video streams.</p>
            ${codeExample(`<video controls width="300">\n    <source src="movie.mp4" type="video/mp4">\n</video>`)}
        `,
        takeaways: ["Video elements support width, height, and controls."],
        mistakes: ["Forgetting the controls attribute."]
    },
    {
        title: "HTML href",
        description: "Master the href attribute for defining hyperlinks.",
        category: "HTML ATTRIBUTES",
        isPractice: false,
        content: `
            <h2>The href Attribute</h2>
            <p>Defines the web address linked to by an anchor tag.</p>
            ${codeExample(`<a href="https://google.com">Google</a>`)}
        `,
        takeaways: ["href is essential for navigation links."],
        mistakes: ["Omitting https:// in external links."]
    },
    {
        title: "HTML src",
        description: "Understand the source attribute for media and script embedding.",
        category: "HTML ATTRIBUTES",
        isPractice: false,
        content: `
            <h2>The src Attribute</h2>
            <p>Points to external asset files like images, scripts, or frames.</p>
            ${codeExample(`<img src="pic.jpg">`)}
        `,
        takeaways: ["src locates external files."],
        mistakes: ["Typo in file directory paths."]
    },
    {
        title: "HTML class",
        description: "Group elements together for styling and scripting using class.",
        category: "HTML ATTRIBUTES",
        isPractice: false,
        content: `
            <h2>The class Attribute</h2>
            <p>Assigns one or more class names to an element for CSS styling.</p>
            ${codeExample(`<div class="box-card">Content</div>`)}
        `,
        takeaways: ["Multiple elements can share the same class name."],
        mistakes: ["Using classes instead of IDs for unique elements."]
    },
    {
        title: "HTML Id",
        description: "Assign unique identifiers to single elements using id.",
        category: "HTML ATTRIBUTES",
        isPractice: false,
        content: `
            <h2>The id Attribute</h2>
            <p>Provides a unique identifier for a single HTML element on a page.</p>
            ${codeExample(`<h1 id="main-title">Welcome</h1>`)}
        `,
        takeaways: ["IDs must be completely unique per document."],
        mistakes: ["Reusing the same id value on multiple elements."]
    },
    {
        title: "Try It Yourself",
        description: "Apply what you have learned by writing and running your own HTML code.",
        category: "PRACTICE",
        isPractice: true,
        takeaways: [
            "Practice helps you understand HTML elements.",
            "Experiment with different tags and attributes.",
            "Use the preview to check your output."
        ],
        mistakes: [
            "Forgetting to save or run your changes.",
            "Using incorrect tag names.",
            "Not checking the browser output."
        ]
    }
];

function buildPreviewDocument(code) {
    return `<!DOCTYPE html><html><head><style>
        body { font-family: sans-serif; padding: 10px; color: #1e293b; font-size: 13px; }
        table { border-collapse: collapse; width: 100%; margin-top: 5px; }
        th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
        th { background-color: #f1f5f9; }
    </style></head><body>${code}</body></html>`;
}

function hydrateExamplePreviews(container) {
    if (!container) return;
    container.querySelectorAll(".example-preview-frame[data-preview-code]").forEach(frame => {
        const encoded = frame.getAttribute("data-preview-code") || "";
        try {
            const rawCode = decodeURIComponent(encoded);
            frame.srcdoc = buildPreviewDocument(rawCode);
        } catch {
            frame.srcdoc = buildPreviewDocument("");
        }
    });
}

// Helper Function for Code Examples with Table & Element Styling
function codeExample(code) {
    const safeCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const encodedSnippet = encodeURIComponent(code);

    return `
        <div class="code-example-container">
            <div class="code-example">
                <div class="code-header">
                    <span><i class="fa-solid fa-code"></i> HTML Code</span>
                    <span>example.html</span>
                </div>
                <pre><code>${safeCode}</code></pre>
            </div>
            <div class="code-preview">
                <div class="code-header preview-header-title">
                    <span><i class="fa-solid fa-eye"></i> Output Preview</span>
                    <span>Browser</span>
                </div>
                <iframe class="example-preview-frame" data-preview-code="${encodedSnippet}" sandbox="allow-scripts"></iframe>
            </div>
        </div>
    `;
}

// Lesson Navigation & State Logic
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
                editor.refresh();
                checkHTMLErrors();
            }
        }
        runHTML();
    } else {
        if (lessonBody) {
            lessonBody.style.display = "block";
            lessonBody.innerHTML = lesson.content;
            hydrateExamplePreviews(lessonBody);
        }
        if (practiceSection) practiceSection.style.display = "none";
    }

    if (typeof renderTopicQuiz === "function" && Array.isArray(htmlTopicQuizzes) && htmlTopicQuizzes.length > 0) {
        renderTopicQuiz(Math.min(index, htmlTopicQuizzes.length - 1));
    }

    const takeawayList = document.getElementById("takeawayList");
    if (takeawayList && lesson.takeaways) {
        takeawayList.innerHTML = lesson.takeaways.map(item => `<li>${item}</li>`).join("");
    }

    const mistakeList = document.getElementById("mistakeList");
    if (mistakeList && lesson.mistakes) {
        mistakeList.innerHTML = lesson.mistakes.map(item => `<li>${item}</li>`).join("");
    }

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
    link.addEventListener("click", () => {
        loadLesson(index);
    });
});

function updateProgress() {
    lessonLinks.forEach((link, index) => {
        const number = link.querySelector(".lesson-number");
        if (!number) return;
        if (completedLessons.has(index)) {
            number.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            number.textContent = String(index + 1).padStart(2, "0");
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

// Codemirror setup
const editorElement = document.getElementById("htmlEditor");
const htmlPreview = document.getElementById("htmlPreview");
const starterCode = editorElement ? editorElement.value : "";

let editor = null;
if (editorElement && typeof CodeMirror !== "undefined") {
    editor = CodeMirror.fromTextArea(editorElement, {
        mode: "htmlmixed",
        theme: "default",
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4,
        gutters: ["CodeMirror-lint-markers"],
        lint: true
    });
}

/* ==========================================
   HTML ERROR CHECKER
========================================== */

let htmlErrorMarkers = [];

function checkHTMLErrors() {
    if (!editor) return;

    const errorCount = document.getElementById("htmlErrorCount");
    const errorList = document.getElementById("htmlErrorList");
    const topBadge = document.getElementById("topErrorBadge");

    if (!errorCount || !errorList) return;

    if (typeof HTMLHint === "undefined") {
        errorCount.textContent = "Unavailable";
        errorList.textContent = "HTMLHint could not be loaded.";
        return;
    }

    htmlErrorMarkers.forEach(marker => marker.clear());
    htmlErrorMarkers = [];

    const htmlCode = editor.getValue();

    const result = HTMLHint.verify(htmlCode, {
        "tag-pair": true,
        "tagname-lowercase": true,
        "attr-value-double-quotes": true,
        "attr-no-duplication": true,
        "id-unique": true,
        "doctype-first": true,
        "spec-char-escape": true
    });

    const allMessages = result || [];

    allMessages.forEach(message => {
        const line = Math.max(0, message.line - 1);
        const col = Math.max(0, message.col - 1);
        const position = { line: line, ch: col };
        const lineText = editor.getLine(position.line);

        if (lineText && position.ch < lineText.length) {
            const marker = editor.markText(
                position,
                { line: position.line, ch: position.ch + 1 },
                { className: "cm-css-error-highlight" }
            );
            htmlErrorMarkers.push(marker);
        }
    });

    const errors = allMessages.filter(item => item.type === "error");
    const warnings = allMessages.filter(item => item.type === "warning");
    const totalIssues = allMessages.length;

    if (totalIssues === 0) {
        errorCount.textContent = "0 errors found";
        errorCount.style.color = "#4ade80";
        if (topBadge) topBadge.style.display = "none";
    } else {
        const textParts = [];
        if (errors.length > 0) textParts.push(`${errors.length} ${errors.length === 1 ? "error" : "errors"}`);
        if (warnings.length > 0) textParts.push(`${warnings.length} ${warnings.length === 1 ? "warning" : "warnings"}`);

        errorCount.textContent = textParts.join(", ") + " detected";
        errorCount.style.color = "#f87171";

        if (topBadge) {
            topBadge.style.display = "inline-block";
            topBadge.textContent = textParts.join(", ");
        }
    }

    errorList.innerHTML = "";

    if (totalIssues === 0) {
        const success = document.createElement("p");
        success.className = "no-errors";
        success.innerHTML = '<i class="fa-solid fa-circle-check"></i> No errors detected. Your HTML looks good!';
        errorList.appendChild(success);
        return;
    }

    allMessages.forEach(item => {
        const errorItem = document.createElement("div");
        errorItem.className = "error-item";

        const heading = document.createElement("strong");
        heading.textContent = `${item.type.toUpperCase()} - Line ${item.line}`;

        const description = document.createElement("p");
        description.textContent = item.message;

        errorItem.appendChild(heading);
        errorItem.appendChild(description);
        errorList.appendChild(errorItem);
    });
}

if (editor) {
    editor.on("change", checkHTMLErrors);
    checkHTMLErrors();
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
        if (editor) {
            editor.setValue(starterCode);
            runHTML();
        }
    });
}

// Initial Run
loadLesson(0);