const htmlTopicQuizzes = [
    {
        topicLabel: "TOPIC 1 QUIZ",
        topicTitle: "First Introduction to HTML",
        questions: [
            { q: "What does HTML stand for?", options: { A: "Hyper Text Markup Language", B: "High Text Machine Language", C: "Hyper Transfer Markup Language", D: "Home Tool Markup Language" }, answer: "A" },
            { q: "What is the main purpose of HTML?", options: { A: "To edit videos", B: "To structure content on web pages", C: "To create computer hardware", D: "To manage databases" }, answer: "B" },
            { q: "Who is known as the inventor of HTML?", options: { A: "Bill Gates", B: "Steve Jobs", C: "Tim Berners-Lee", D: "Mark Zuckerberg" }, answer: "C" },
            { q: "Which file extension is commonly used for HTML files?", options: { A: ".css", B: ".html", C: ".jpg", D: ".exe" }, answer: "B" },
            { q: "Which declaration tells the browser that the document uses HTML5?", options: { A: "<html>", B: "<doctype>", C: "<!DOCTYPE html>", D: "<document>" }, answer: "C" },
            { q: "Which tag represents the root element of an HTML document?", options: { A: "<body>", B: "<head>", C: "<html>", D: "<title>" }, answer: "C" },
            { q: "Which section contains information about the HTML document?", options: { A: "<head>", B: "<body>", C: "<footer>", D: "<main>" }, answer: "A" },
            { q: "Which tag contains the visible content of a web page?", options: { A: "<head>", B: "<body>", C: "<title>", D: "<meta>" }, answer: "B" },
            { q: "Which tag defines the title displayed on the browser tab?", options: { A: "<heading>", B: "<h1>", C: "<title>", D: "<caption>" }, answer: "C" },
            { q: "Which application can be used to write HTML code?", options: { A: "Notepad", B: "Calculator", C: "Paint", D: "Media Player" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 2 QUIZ",
        topicTitle: "HTML Elements",
        questions: [
            { q: "What is an HTML element?", options: { A: "A complete structure consisting of a tag and its content", B: "A computer program", C: "A type of image", D: "A web browser" }, answer: "A" },
            { q: "Which tag is used to create the largest heading by default?", options: { A: "<h6>", B: "<h1>", C: "<head>", D: "<header>" }, answer: "B" },
            { q: "Which tag is used to create a paragraph?", options: { A: "<para>", B: "<text>", C: "<p>", D: "<pg>" }, answer: "C" },
            { q: "Which tag creates a line break?", options: { A: "<break>", B: "<br>", C: "<lb>", D: "<line>" }, answer: "B" },
            { q: "Which tag creates a horizontal line?", options: { A: "<hr>", B: "<line>", C: "<horizontal>", D: "<hl>" }, answer: "A" },
            { q: "Which tag is used to make text bold with strong importance?", options: { A: "<i>", B: "<strong>", C: "<small>", D: "<sub>" }, answer: "B" },
            { q: "Which tag is used to emphasize text?", options: { A: "<em>", B: "<bold>", C: "<mark>", D: "<del>" }, answer: "A" },
            { q: "Which of the following is an empty HTML element?", options: { A: "<p>", B: "<div>", C: "<br>", D: "<h1>" }, answer: "C" },
            { q: "What is the purpose of a closing tag?", options: { A: "To start a new document", B: "To end an HTML element", C: "To add an image", D: "To change the browser" }, answer: "B" },
            { q: "Which symbol is used in a closing HTML tag?", options: { A: "#", B: "@", C: "/", D: "&" }, answer: "C" }
        ]
    },
    {
        topicLabel: "TOPIC 3 QUIZ",
        topicTitle: "HTML Attributes",
        questions: [
            { q: "What are HTML attributes used for?", options: { A: "To provide additional information about elements", B: "To delete HTML files", C: "To open applications", D: "To create computer networks" }, answer: "A" },
            { q: "Where are HTML attributes placed?", options: { A: "Inside the closing tag", B: "Inside the opening tag", C: "Outside the HTML document", D: "Inside the browser address bar" }, answer: "B" },
            { q: "Which attribute specifies the destination of a link?", options: { A: "src", B: "alt", C: "href", D: "width" }, answer: "C" },
            { q: "Which attribute specifies the source of an image?", options: { A: "href", B: "src", C: "title", D: "class" }, answer: "B" },
            { q: "Which attribute provides alternative text for an image?", options: { A: "alt", B: "name", C: "style", D: "target" }, answer: "A" },
            { q: "Which attribute is used to apply inline CSS to an element?", options: { A: "class", B: "id", C: "style", D: "href" }, answer: "C" },
            { q: "Which attribute gives an element a unique identifier?", options: { A: "id", B: "src", C: "alt", D: "width" }, answer: "A" },
            { q: "Which attribute can assign the same category or styling group to multiple elements?", options: { A: "href", B: "class", C: "src", D: "alt" }, answer: "B" },
            { q: "What does the \"width\" attribute commonly specify?", options: { A: "The color of an element", B: "The height of an element", C: "The width of an element", D: "The text style" }, answer: "C" },
            { q: "Which is the correct way to write an attribute?", options: { A: "<p color=\"red\">", B: "<p = color \"red\">", C: "<p \"color\" red>", D: "<p: color red>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 4 QUIZ",
        topicTitle: "HTML Form",
        questions: [
            { q: "Which HTML tag is used to create a form?", options: { A: "<input>", B: "<form>", C: "<fieldset>", D: "<button>" }, answer: "B" },
            { q: "Which input type is used to enter a password?", options: { A: "text", B: "email", C: "password", D: "number" }, answer: "C" },
            { q: "Which input type allows users to select one option from a group?", options: { A: "checkbox", B: "radio", C: "text", D: "submit" }, answer: "B" },
            { q: "Which input type allows users to select multiple options?", options: { A: "radio", B: "password", C: "checkbox", D: "date" }, answer: "C" },
            { q: "Which input type is used to submit form data?", options: { A: "submit", B: "text", C: "hidden", D: "email" }, answer: "A" },
            { q: "Which HTML element creates a multi-line text input?", options: { A: "<input>", B: "<textarea>", C: "<select>", D: "<option>" }, answer: "B" },
            { q: "Which HTML element creates a drop-down list?", options: { A: "<list>", B: "<dropdown>", C: "<select>", D: "<choice>" }, answer: "C" },
            { q: "Which attribute makes a form field mandatory?", options: { A: "checked", B: "required", C: "selected", D: "disabled" }, answer: "B" },
            { q: "Which input type is designed for entering an email address?", options: { A: "email", B: "mailbox", C: "textmail", D: "address" }, answer: "A" },
            { q: "Which attribute specifies where form data should be sent?", options: { A: "action", B: "method", C: "name", D: "placeholder" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 5 QUIZ",
        topicTitle: "HTML Style",
        questions: [
            { q: "What is the purpose of the HTML \"style\" attribute?", options: { A: "To insert videos", B: "To apply CSS directly to an element", C: "To create a table", D: "To create a hyperlink" }, answer: "B" },
            { q: "Which CSS property changes the text color?", options: { A: "font-size", B: "background-color", C: "color", D: "text-align" }, answer: "C" },
            { q: "Which CSS property changes the background color?", options: { A: "background-color", B: "font-family", C: "border", D: "height" }, answer: "A" },
            { q: "Which CSS property changes the size of text?", options: { A: "font-weight", B: "font-size", C: "text-decoration", D: "color" }, answer: "B" },
            { q: "Which CSS property aligns text to the center?", options: { A: "font-style", B: "text-align", C: "background", D: "padding" }, answer: "B" },
            { q: "Which value makes text bold using the \"font-weight\" property?", options: { A: "italic", B: "center", C: "bold", D: "underline" }, answer: "C" },
            { q: "Which CSS property changes the font type?", options: { A: "font-family", B: "font-size", C: "font-weight", D: "text-align" }, answer: "A" },
            { q: "Which CSS property adds space inside an element's border?", options: { A: "margin", B: "padding", C: "outline", D: "border" }, answer: "B" },
            { q: "Which CSS property adds space outside an element's border?", options: { A: "padding", B: "margin", C: "color", D: "font-size" }, answer: "B" },
            { q: "Which is the correct way to change a paragraph's text color to red using inline CSS?", options: { A: "<p style=\"color:red;\">Hello</p>", B: "<p color=\"red\">Hello</p>", C: "<p style=\"text:red;\">Hello</p>", D: "<p font=\"red\">Hello</p>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 6 QUIZ",
        topicTitle: "HTML Links",
        questions: [
            { q: "Which HTML tag is used to create a hyperlink?", options: { A: "<link>", B: "<a>", C: "<href>", D: "<url>" }, answer: "B" },
            { q: "Which attribute specifies the destination of a hyperlink?", options: { A: "src", B: "target", C: "href", D: "alt" }, answer: "C" },
            { q: "Which value opens a link in a new browser tab or window?", options: { A: "_self", B: "_blank", C: "_parent", D: "_top" }, answer: "B" },
            { q: "Which is the correct HTML code for linking to Google?", options: { A: "<a src=\"https://www.google.com\">Google</a>", B: "<a href=\"https://www.google.com\">Google</a>", C: "<link>Google</link>", D: "<a>href=\"Google\"</a>" }, answer: "B" },
            { q: "What is the purpose of the \"target\" attribute?", options: { A: "To change the link color", B: "To specify where the linked document opens", C: "To create an image", D: "To change the font" }, answer: "B" },
            { q: "Which type of link directs users to another section of the same page?", options: { A: "External link", B: "Email link", C: "Internal anchor link", D: "Image link" }, answer: "C" },
            { q: "Which value refers to an element with the ID \"about\"?", options: { A: "about", B: "#about", C: "/about", D: "@about" }, answer: "B" },
            { q: "Which link format opens the user's email application?", options: { A: "email:info@example.com", B: "mailto:info@example.com", C: "https:info@example.com", D: "message:info@example.com" }, answer: "B" },
            { q: "What is an external link?", options: { A: "A link to another website", B: "A link to a heading on the same page", C: "A link to a paragraph", D: "A link to a local section only" }, answer: "A" },
            { q: "Which tag can create a link that downloads a file when clicked?", options: { A: "<download>", B: "<file>", C: "<a> with the \"download\" attribute", D: "<src>" }, answer: "C" }
        ]
    },
    {
        topicLabel: "TOPIC 7 QUIZ",
        topicTitle: "HTML Video",
        questions: [
            { q: "Which HTML tag is used to embed a video?", options: { A: "<media>", B: "<movie>", C: "<video>", D: "<film>" }, answer: "C" },
            { q: "Which attribute displays video playback controls?", options: { A: "controls", B: "autoplay", C: "loop", D: "muted" }, answer: "A" },
            { q: "Which attribute allows a video to start playing automatically when permitted by the browser?", options: { A: "controls", B: "autoplay", C: "poster", D: "width" }, answer: "B" },
            { q: "Which attribute makes a video play repeatedly?", options: { A: "repeat", B: "again", C: "loop", D: "replay" }, answer: "C" },
            { q: "Which attribute mutes the video's sound?", options: { A: "silent", B: "muted", C: "volume", D: "nosound" }, answer: "B" },
            { q: "Which HTML tag specifies a media file or alternative media source?", options: { A: "<source>", B: "<src>", C: "<media>", D: "<file>" }, answer: "A" },
            { q: "Which attribute specifies the video file's location?", options: { A: "href", B: "alt", C: "src", D: "target" }, answer: "C" },
            { q: "Which attribute defines the width of a video player?", options: { A: "size", B: "width", C: "length", D: "scale" }, answer: "B" },
            { q: "Which attribute displays an image before the video starts playing?", options: { A: "thumbnail", B: "preview", C: "poster", D: "cover" }, answer: "C" },
            { q: "Which is the correct HTML code for embedding a video?", options: { A: "<video src=\"movie.mp4\" controls></video>", B: "<movie src=\"movie.mp4\"></movie>", C: "<video href=\"movie.mp4\"></video>", D: "<media file=\"movie.mp4\"></media>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 8 QUIZ",
        topicTitle: "HTML Image",
        questions: [
            { q: "Which HTML tag is used to display an image?", options: { A: "<picture>", B: "<image>", C: "<img>", D: "<photo>" }, answer: "C" },
            { q: "Which attribute specifies the image file location?", options: { A: "href", B: "src", C: "alt", D: "target" }, answer: "B" },
            { q: "What is the purpose of the \"alt\" attribute?", options: { A: "To change image size", B: "To provide alternative text for an image", C: "To add a border", D: "To change the background" }, answer: "B" },
            { q: "Which attribute sets the image width?", options: { A: "height", B: "size", C: "width", D: "length" }, answer: "C" },
            { q: "Which attribute sets the image height?", options: { A: "height", B: "width", C: "alt", D: "src" }, answer: "A" },
            { q: "Which of the following is a common image file format?", options: { A: "MP3", B: "JPG", C: "DOCX", D: "EXE" }, answer: "B" },
            { q: "Which HTML element can be used to provide a caption for an image?", options: { A: "<figcaption>", B: "<caption>", C: "<label>", D: "<summary>" }, answer: "A" },
            { q: "Which element groups an image with its caption?", options: { A: "<section>", B: "<figure>", C: "<div>", D: "<article>" }, answer: "B" },
            { q: "Which is the correct HTML code to display an image named \"flower.jpg\"?", options: { A: "<img href=\"flower.jpg\">", B: "<image src=\"flower.jpg\">", C: "<img src=\"flower.jpg\" alt=\"Flower\">", D: "<photo file=\"flower.jpg\">" }, answer: "C" },
            { q: "Which CSS property can make an image fit within its container while maintaining its proportions?", options: { A: "object-fit", B: "font-size", C: "text-align", D: "background-color" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 9 QUIZ",
        topicTitle: "HTML Audio",
        questions: [
            { q: "Which HTML tag is used to embed audio?", options: { A: "<sound>", B: "<audio>", C: "<music>", D: "<mp3>" }, answer: "B" },
            { q: "Which attribute displays audio playback controls?", options: { A: "controls", B: "autoplay", C: "loop", D: "muted" }, answer: "A" },
            { q: "Which attribute allows audio to play repeatedly?", options: { A: "repeat", B: "loop", C: "again", D: "restart" }, answer: "B" },
            { q: "Which attribute mutes the audio?", options: { A: "silent", B: "volume", C: "muted", D: "off" }, answer: "C" },
            { q: "Which attribute identifies the location of an audio file?", options: { A: "href", B: "src", C: "alt", D: "target" }, answer: "B" },
            { q: "Which tag specifies an audio file or alternative audio source?", options: { A: "<source>", B: "<sound>", C: "<track>", D: "<file>" }, answer: "A" },
            { q: "Which of the following is a common audio file format?", options: { A: "PNG", B: "JPG", C: "MP3", D: "GIF" }, answer: "C" },
            { q: "What is the purpose of the \"autoplay\" attribute?", options: { A: "To stop the audio", B: "To play audio automatically when permitted by the browser", C: "To download audio", D: "To hide the audio player" }, answer: "B" },
            { q: "Which tag is used to define captions or text tracks for media?", options: { A: "<caption>", B: "<text>", C: "<track>", D: "<subtitle>" }, answer: "C" },
            { q: "Which is the correct HTML code for embedding an audio file?", options: { A: "<audio src=\"song.mp3\" controls></audio>", B: "<sound href=\"song.mp3\"></sound>", C: "<music src=\"song.mp3\"></music>", D: "<audio href=\"song.mp3\"></audio>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 10 QUIZ",
        topicTitle: "HTML Tables",
        questions: [
            { q: "Which HTML tag is used to create a table?", options: { A: "<tab>", B: "<table>", C: "<td>", D: "<tr>" }, answer: "B" },
            { q: "Which tag defines a table row?", options: { A: "<td>", B: "<th>", C: "<tr>", D: "<row>" }, answer: "C" },
            { q: "Which tag defines a regular table cell?", options: { A: "<td>", B: "<tr>", C: "<th>", D: "<tc>" }, answer: "A" },
            { q: "Which tag defines a header cell in a table?", options: { A: "<head>", B: "<th>", C: "<td>", D: "<header>" }, answer: "B" },
            { q: "Which tag adds a title or caption to a table?", options: { A: "<title>", B: "<label>", C: "<caption>", D: "<summary>" }, answer: "C" },
            { q: "Which attribute allows a cell to span multiple columns?", options: { A: "rowspan", B: "colspan", C: "width", D: "cellpadding" }, answer: "B" },
            { q: "Which attribute allows a cell to span multiple rows?", options: { A: "colspan", B: "rowspan", C: "height", D: "border" }, answer: "B" },
            { q: "Which tag groups the main body content of a table?", options: { A: "<thead>", B: "<tfoot>", C: "<tbody>", D: "<body>" }, answer: "C" },
            { q: "Which tag groups the header content of a table?", options: { A: "<thead>", B: "<tbody>", C: "<tfoot>", D: "<header>" }, answer: "A" },
            { q: "Which is the correct order for a basic HTML table structure?", options: { A: "<td>, <table>, <tr>", B: "<table>, <tr>, <td>", C: "<tr>, <td>, <table>", D: "<table>, <td>, <tr>" }, answer: "B" }
        ]
    },
    {
        topicLabel: "TOPIC 11 QUIZ",
        topicTitle: "HTML Style (CSS Basics)",
        questions: [
            { q: "What does CSS stand for?", options: { A: "Computer Style System", B: "Cascading Style Sheets", C: "Creative Styling Source", D: "Colorful Style Syntax" }, answer: "B" },
            { q: "What is the main purpose of CSS?", options: { A: "To structure web page content", B: "To style and design web pages", C: "To store information", D: "To create databases" }, answer: "B" },
            { q: "Which HTML tag is used to connect an external CSS file?", options: { A: "<style>", B: "<css>", C: "<link>", D: "<script>" }, answer: "C" },
            { q: "Which attribute specifies the location of an external CSS file?", options: { A: "src", B: "href", C: "alt", D: "target" }, answer: "B" },
            { q: "Which CSS selector targets all paragraph elements?", options: { A: "#p", B: ".p", C: "p", D: "*p" }, answer: "C" },
            { q: "Which symbol is used to select an element by its ID in CSS?", options: { A: ".", B: "#", C: "@", D: "&" }, answer: "B" },
            { q: "Which symbol is used to select elements by class in CSS?", options: { A: "#", B: "@", C: ".", D: "/" }, answer: "C" },
            { q: "Which CSS property adds a border around an element?", options: { A: "outline-color", B: "border", C: "padding", D: "margin" }, answer: "B" },
            { q: "Which CSS property controls the space between an element's content and its border?", options: { A: "margin", B: "padding", C: "display", D: "position" }, answer: "B" },
            { q: "Which is the correct way to link an external stylesheet named \"style.css\"?", options: { A: "<link rel=\"stylesheet\" href=\"style.css\">", B: "<style src=\"style.css\">", C: "<css href=\"style.css\">", D: "<script src=\"style.css\"></script>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 12 QUIZ",
        topicTitle: "HTML List",
        questions: [
            { q: "Which HTML tag creates an unordered list?", options: { A: "<ol>", B: "<ul>", C: "<li>", D: "<list>" }, answer: "B" },
            { q: "Which HTML tag creates an ordered list?", options: { A: "<ul>", B: "<li>", C: "<ol>", D: "<dl>" }, answer: "C" },
            { q: "Which tag defines an item inside an ordered or unordered list?", options: { A: "<item>", B: "<li>", C: "<list>", D: "<dt>" }, answer: "B" },
            { q: "What symbol is commonly displayed before items in an unordered list?", options: { A: "Numbers", B: "Letters", C: "Bullets", D: "Roman numerals" }, answer: "C" },
            { q: "What is commonly displayed before items in an ordered list?", options: { A: "Bullets only", B: "Numbers or other sequence markers", C: "Images only", D: "No markers" }, answer: "B" },
            { q: "Which tag creates a description list?", options: { A: "<dl>", B: "<ol>", C: "<ul>", D: "<li>" }, answer: "A" },
            { q: "Which tag defines a term in a description list?", options: { A: "<dd>", B: "<dt>", C: "<li>", D: "<term>" }, answer: "B" },
            { q: "Which tag provides the description or explanation of a term?", options: { A: "<dt>", B: "<li>", C: "<dd>", D: "<dl>" }, answer: "C" },
            { q: "Which list type is best for displaying step-by-step instructions?", options: { A: "Unordered list", B: "Ordered list", C: "Description list", D: "Navigation list only" }, answer: "B" },
            { q: "Which is the correct HTML code for an unordered list?", options: { A: "<ul><li>Apple</li></ul>", B: "<ol><item>Apple</item></ol>", C: "<list><li>Apple</li></list>", D: "<ul><item>Apple</item></ul>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 13 QUIZ",
        topicTitle: "HTML Buttons",
        questions: [
            { q: "Which HTML tag is used to create a button?", options: { A: "<input>", B: "<button>", C: "<click>", D: "<press>" }, answer: "B" },
            { q: "Which button type is used to submit a form?", options: { A: "button", B: "reset", C: "submit", D: "click" }, answer: "C" },
            { q: "Which button type resets form fields to their initial values?", options: { A: "submit", B: "reset", C: "button", D: "clear" }, answer: "B" },
            { q: "What is the purpose of the \"disabled\" attribute on a button?", options: { A: "To change its color", B: "To prevent the button from being used", C: "To make it larger", D: "To add a hyperlink" }, answer: "B" },
            { q: "Which attribute provides the text displayed on a button created using an input element?", options: { A: "value", B: "href", C: "src", D: "alt" }, answer: "A" },
            { q: "Which HTML element can be used to create a clickable button?", options: { A: "<button>", B: "<click>", C: "<press>", D: "<link>" }, answer: "A" },
            { q: "Which attribute specifies the type of button?", options: { A: "name", B: "type", C: "value", D: "class" }, answer: "B" },
            { q: "Which button type is commonly used for actions that do not submit a form?", options: { A: "submit", B: "reset", C: "button", D: "form" }, answer: "C" },
            { q: "Which CSS property changes the background color of a button?", options: { A: "font-family", B: "background-color", C: "text-align", D: "margin" }, answer: "B" },
            { q: "Which HTML code correctly creates a button labeled \"Click Me\"?", options: { A: "<button>Click Me</button>", B: "<click>Click Me</click>", C: "<input>Click Me</input>", D: "<press>Click Me</press>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 14 QUIZ",
        topicTitle: "HTML href",
        questions: [
            { q: "What is the main purpose of the href attribute?", options: { A: "To set the link destination or URL", B: "To change text color", C: "To play an audio file", D: "To create a table" }, answer: "A" },
            { q: "Which HTML tag commonly uses the href attribute?", options: { A: "<img>", B: "<a>", C: "<p>", D: "<br>" }, answer: "B" },
            { q: "Which code correctly creates a link to Google?", options: { A: "<a src=\"https://google.com\">Google</a>", B: "<a href=\"https://google.com\">Google</a>", C: "<link href=\"https://google.com\">", D: "<p href=\"https://google.com\">Google</p>" }, answer: "B" },
            { q: "What happens if an <a> tag has no href attribute?", options: { A: "The text turns bold", B: "It does not act as a clickable link", C: "It opens a new tab automatically", D: "It deletes the page" }, answer: "B" },
            { q: "How do you link to an element with id=\"contact\" on the same page?", options: { A: "href=\"contact\"", B: "href=\"#contact\"", C: "href=\".contact\"", D: "href=\"@contact\"" }, answer: "B" }
        ]
    },
    {
        topicLabel: "TOPIC 15 QUIZ",
        topicTitle: "HTML src",
        questions: [
            { q: "What does src stand for in HTML?", options: { A: "Source", B: "Screen", C: "Style", D: "Script" }, answer: "A" },
            { q: "What does the src attribute specify on an <img> tag?", options: { A: "The image width", B: "The file path or URL of the image", C: "The border color", D: "The page title" }, answer: "B" },
            { q: "Which code is a correct example of using src?", options: { A: "<img href=\"pic.jpg\">", B: "<img src=\"pic.jpg\" alt=\"Pic\">", C: "<p src=\"pic.jpg\">", D: "<a src=\"pic.jpg\">" }, answer: "B" },
            { q: "Besides <img>, which tags also use the src attribute?", options: { A: "<audio> and <video>", B: "<h1> and <h2>", C: "<ul> and <ol>", D: "<table> and <tr>" }, answer: "A" },
            { q: "What is a common reason an image fails to show even with a src attribute?", options: { A: "A typo in the file name or folder path", B: "Having an <h1> on the page", C: "Making the text bold", D: "Having a <title> in <head>" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 16 QUIZ",
        topicTitle: "HTML class",
        questions: [
            { q: "What is the class attribute used for in HTML?", options: { A: "Grouping elements for styling or scripting", B: "Saving a file", C: "Changing the browser URL", D: "Closing the browser" }, answer: "A" },
            { q: "Can multiple HTML elements share the same class name?", options: { A: "Yes", B: "No", C: "Only inside <head>", D: "Only on <br> tags" }, answer: "A" },
            { q: "Which symbol is used in CSS to select a class?", options: { A: "#", B: ".", C: "/", D: "?" }, answer: "B" },
            { q: "Which example uses the class attribute properly?", options: { A: "<div class=\"card\">Box</div>", B: "<div class=card>Box</div>", C: "<div class=\"\">Box</div>", D: "<card class=\"div\">Box</card>" }, answer: "A" },
            { q: "Can one HTML element have more than one class name?", options: { A: "Yes, separated by spaces", B: "Never", C: "Only for images", D: "Only for tables" }, answer: "A" }
        ]
    },
    {
        topicLabel: "TOPIC 17 QUIZ",
        topicTitle: "HTML Id",
        questions: [
            { q: "What is the key rule for an id attribute?", options: { A: "It should be unique within a page", B: "It is only for videos", C: "It cannot have a value", D: "It changes the browser color" }, answer: "A" },
            { q: "Which symbol is used in CSS to select an element by its id?", options: { A: ".", B: "#", C: "*", D: "&" }, answer: "B" },
            { q: "Which code correctly uses the id attribute?", options: { A: "<h1 id=\"header-title\">Welcome</h1>", B: "<h1 id=header title=\"Welcome\">", C: "<id=\"header\">Welcome</id>", D: "<p id>Welcome</p>" }, answer: "A" },
            { q: "Should you reuse the same id on multiple elements in one page?", options: { A: "No, each id should be unique", B: "Yes, always", C: "Only on <p> tags", D: "Only on <li> tags" }, answer: "A" },
            { q: "What is the main difference between id and class?", options: { A: "id identifies one unique element; class can group many elements", B: "There is no difference", C: "id only works on links", D: "class does not work in CSS" }, answer: "A" }
        ]
    }
];

const MAX_QUIZ_HEARTS = 3;

let activeQuizIndex = 0;
let currentQuestionIndex = 0;
let remainingHearts = MAX_QUIZ_HEARTS;
let quizScore = 0;
let answeredMap = {}; // { [qIdx]: { selected: "A", isCorrect: true } }

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function updateHeartsDisplay(hearts = remainingHearts) {
    const heartsEl = document.getElementById("quizHeartsDisplay");
    if (!heartsEl) return;
    const active = Math.max(0, Math.min(MAX_QUIZ_HEARTS, hearts));

    heartsEl.setAttribute("aria-label", `${active} of ${MAX_QUIZ_HEARTS} hearts remaining`);
    heartsEl.innerHTML = Array.from({ length: MAX_QUIZ_HEARTS }, (_, i) => {
        const lostClass = i >= active ? " lost" : "";
        return `<i class="fa-solid fa-heart heart-icon${lostClass}"></i>`;
    }).join("");
}

function updateQuizScoreDisplay() {
    const topicData = htmlTopicQuizzes[activeQuizIndex];
    const scoreEl = document.getElementById("quizScoreDisplay");
    const badgeEl = document.getElementById("quizProgressBadge");
    if (!topicData) return;

    if (remainingHearts <= 0) {
        if (scoreEl) {
            scoreEl.textContent = `Score: ${quizScore} / ${topicData.questions.length}`;
        }
        if (badgeEl) {
            badgeEl.textContent = "Out of Hearts";
        }
        return;
    }

    if (scoreEl) {
        scoreEl.textContent = `Score: ${quizScore} / ${topicData.questions.length}`;
    }
    if (badgeEl) {
        badgeEl.textContent = `Question ${Math.min(currentQuestionIndex + 1, topicData.questions.length)} of ${topicData.questions.length}`;
    }
}

function renderOutOfHeartsCard() {
    const topicData = htmlTopicQuizzes[activeQuizIndex];
    const container = document.getElementById("quizQuestionsContainer");
    const submitBtn = document.getElementById("submitQuizBtn");
    const retryBtn = document.getElementById("retryQuizBtn");
    const quizBox = document.getElementById("lessonQuizBox");

    if (!container || !topicData) return;

    const total = topicData.questions.length;
    updateQuizScoreDisplay();

    if (quizBox) {
        quizBox.classList.remove("is-correct");
        quizBox.classList.add("is-wrong");
    }

    container.innerHTML = `
        <div class="question-card wrong">
            <h3 class="question-text">Out of Hearts!</h3>
            <p style="font-size: 13px; color: #475569; margin-bottom: 14px;">
                You lost all 3 hearts on this topic quiz (Score: ${quizScore} / ${total}). Review the lesson above and try again!
            </p>
            <button type="button" class="btn-retry-quiz" id="innerRetryQuizBtn">
                <i class="fa-solid fa-rotate-right"></i> Try Again (3 Hearts)
            </button>
        </div>
    `;

    document.getElementById("innerRetryQuizBtn")?.addEventListener("click", () => {
        renderTopicQuiz(activeQuizIndex);
    });

    if (submitBtn) {
        submitBtn.disabled = true;
    }

    if (retryBtn) {
        retryBtn.style.display = "inline-block";
    }
}

function renderSingleQuestion() {
    const topicData = htmlTopicQuizzes[activeQuizIndex];
    const container = document.getElementById("quizQuestionsContainer");
    const submitBtn = document.getElementById("submitQuizBtn");
    const retryBtn = document.getElementById("retryQuizBtn");
    const summaryEl = document.getElementById("quizResultSummary");
    const quizBox = document.getElementById("lessonQuizBox");

    if (!container || !topicData) return;

    if (remainingHearts <= 0) {
        renderOutOfHeartsCard();
        return;
    }

    const total = topicData.questions.length;
    const item = topicData.questions[currentQuestionIndex];
    const existing = answeredMap[currentQuestionIndex];

    updateQuizScoreDisplay();

    if (quizBox) {
        quizBox.classList.remove("is-correct", "is-wrong");
        if (existing) {
            quizBox.classList.add(existing.isCorrect ? "is-correct" : "is-wrong");
        }
    }

    const optionsHTML = Object.entries(item.options).map(([letter, text]) => {
        const checkedAttr = existing && existing.selected === letter ? "checked" : "";
        const disabledAttr = existing ? "disabled" : "";
        let extraClass = "";

        if (existing) {
            if (letter === item.answer) extraClass = " correct-option";
            else if (letter === existing.selected && !existing.isCorrect) extraClass = " wrong-option";
        }

        return `
            <label class="option-label${extraClass}">
                <input type="radio" name="activeQuestion" value="${letter}" ${checkedAttr} ${disabledAttr}>
                <span><strong>${letter}.</strong> ${escapeHTML(text)}</span>
            </label>
        `;
    }).join("");

    let cardStatusClass = "";
    let feedbackHTML = "";

    if (existing) {
        if (existing.isCorrect) {
            cardStatusClass = " correct";
            feedbackHTML = `<div class="answer-feedback correct-text">Correct! (${item.answer}. ${escapeHTML(item.options[item.answer])})</div>`;
        } else {
            cardStatusClass = " wrong";
            feedbackHTML = `<div class="answer-feedback wrong-text">Incorrect (-1 heart). Correct answer: ${item.answer}. ${escapeHTML(item.options[item.answer])}</div>`;
        }
    }

    container.innerHTML = `
        <div class="question-progress-label">Question ${currentQuestionIndex + 1} of ${total}</div>
        <div class="question-card${cardStatusClass}" id="qCard-${currentQuestionIndex}">
            <p class="question-text">${currentQuestionIndex + 1}. ${escapeHTML(item.q)}</p>
            <div class="options-group">${optionsHTML}</div>
            ${feedbackHTML}
        </div>
    `;

    container.querySelectorAll('input[name="activeQuestion"]').forEach(input => {
        input.addEventListener("change", () => handleInstantAnswer(input.value));
    });

    if (submitBtn) {
        const isLastQuestion = currentQuestionIndex >= total - 1;
        submitBtn.textContent = isLastQuestion ? "Finish Quiz" : "Next Question →";
        submitBtn.style.display = "inline-block";
        submitBtn.disabled = !existing || (isLastQuestion && summaryEl?.style.display === "block");
    }

    if (retryBtn) {
        retryBtn.style.display = "inline-block";
    }
}

function handleInstantAnswer(selectedLetter) {
    if (answeredMap[currentQuestionIndex] || remainingHearts <= 0) return;

    const topicData = htmlTopicQuizzes[activeQuizIndex];
    const item = topicData.questions[currentQuestionIndex];
    const isCorrect = selectedLetter === item.answer;

    answeredMap[currentQuestionIndex] = {
        selected: selectedLetter,
        isCorrect
    };

    if (isCorrect) {
        quizScore++;
    } else {
        remainingHearts = Math.max(0, remainingHearts - 1);
    }

    updateHeartsDisplay(remainingHearts);
    updateQuizScoreDisplay();
    renderSingleQuestion();

    if (remainingHearts <= 0) {
        showQuizSummary(true);
    }
}

function showQuizSummary(outOfHearts = false) {
    const topicData = htmlTopicQuizzes[activeQuizIndex];
    const summaryEl = document.getElementById("quizResultSummary");
    if (!summaryEl || !topicData) return;

    const total = topicData.questions.length;
    summaryEl.style.display = "block";

    if (outOfHearts) {
        summaryEl.textContent = `Game Over — you ran out of all 3 hearts (Score: ${quizScore} / ${total}). Click Try Again to try again.`;
        return;
    }

    summaryEl.textContent = `You finished the ${topicData.topicTitle} Quiz! Your score: ${quizScore} out of ${total} (${remainingHearts} ♥ left). ${quizScore >= 7 ? "Great job! You're ready for the next topic." : "Review the lesson or click Try Again to practice more."}`;
}

function handleNextOrFinish() {
    const topicData = htmlTopicQuizzes[activeQuizIndex];
    if (!topicData) return;

    if (!answeredMap[currentQuestionIndex]) return;

    if (currentQuestionIndex < topicData.questions.length - 1) {
        currentQuestionIndex++;
        renderSingleQuestion();
    } else {
        showQuizSummary(false);
        const submitBtn = document.getElementById("submitQuizBtn");
        if (submitBtn) submitBtn.disabled = true;
    }
}

function renderTopicQuiz(index = 0) {
    if (!Array.isArray(htmlTopicQuizzes) || htmlTopicQuizzes.length === 0) return;
    const safeIndex = Math.max(0, Math.min(index, htmlTopicQuizzes.length - 1));

    activeQuizIndex = safeIndex;
    currentQuestionIndex = 0;
    remainingHearts = MAX_QUIZ_HEARTS;
    quizScore = 0;
    answeredMap = {};

    const topicData = htmlTopicQuizzes[safeIndex];
    const labelEl = document.getElementById("quizTopicLabel");
    const titleEl = document.getElementById("quizTitle");
    const subtitleEl = document.getElementById("quizSubtitle");
    const summaryEl = document.getElementById("quizResultSummary");
    const quizBox = document.getElementById("lessonQuizBox");

    if (quizBox) {
        quizBox.classList.remove("is-correct", "is-wrong");
    }
    if (labelEl) labelEl.textContent = topicData.topicLabel;
    if (titleEl) titleEl.textContent = `${topicData.topicTitle} Quiz`;
    if (subtitleEl) {
        subtitleEl.textContent = "Select an answer for instant feedback. You only have 3 hearts—click Next to move to the next question";
    }
    if (summaryEl) {
        summaryEl.style.display = "none";
        summaryEl.textContent = "";
    }

    updateHeartsDisplay(remainingHearts);
    updateQuizScoreDisplay();
    renderSingleQuestion();
}

document.getElementById("submitQuizBtn")?.addEventListener("click", handleNextOrFinish);
document.getElementById("retryQuizBtn")?.addEventListener("click", () => renderTopicQuiz(activeQuizIndex));

renderTopicQuiz(0);