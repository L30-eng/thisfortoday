const activities = {
     tryit: {
        tag: "ACTIVITY 01",
        title: "Try it Yourself",
        instructions: "Try what did you learn",
        hint: "code anything what did you learn about the lesson",
        code:`<!DOCTYPE html>
<html>
    <head>
        <title> Try It </title>
    </head> 
<body>
    <h1> try IT! </h1>
</body>
</html>
        `
     },


    colors: {
        tag: "ACTIVITY 02",
        title: "Task 1: Colors & Text Styling",
        instructions: "Palitan ang color, font-size, at text-align ng heading at paragraph upang makita kung paano nagbabago ang hitsura ng text.",
        hint: "Subukang gawing #dc2626 ang kulay ng heading o palitan ang font-size sa 28px.",
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f8fafc;
            padding: 24px;
        }
        .card {
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
        }
        h2 {
            color: #2563eb;
            text-align: center;
            margin-bottom: 10px;
        }
        p {
            color: #475569;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="card">
        <h2>My Styled Heading</h2>
        <p>Edit the CSS inside the &lt;style&gt; tag and click Run Code to see your changes.</p>
    </div>
</body>
</html>`
    },
    boxmodel: {
        tag: "ACTIVITY 03",
        title: "Task 2: Box Model (Margin, Padding & Border)",
        instructions: "Subukang baguhin ang padding (loob ng box), border, at margin (labas ng box) para makita ang pagkakaiba ng dalawa.",
        hint: "Ang padding ay nagbibigay ng space sa loob ng box; ang margin ay naglalayo sa box mula sa ibang elements.",
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f1f5f9;
            padding: 20px;
        }
        .box-one {
            background: #dbeafe;
            border: 2px solid #2563eb;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 20px;
        }
        .box-two {
            background: #fef3c7;
            border: 2px dashed #d97706;
            border-radius: 8px;
            padding: 16px;
        }
    </style>
</head>
<body>
    <div class="box-one">
        <strong>Box 1:</strong> May 20px bottom margin papunta sa Box 2.
    </div>
    <div class="box-two">
        <strong>Box 2:</strong> May dashed border at 16px padding sa loob.
    </div>
</body>
</html>`
    },
    flexbox: {
        tag: "ACTIVITY 04",
        title: "Task 3: Flexbox Row Layout",
        instructions: "Pag-aralan kung paano pinapahanay ng display: flex at gap ang tatlong cards nang magkatabi.",
        hint: "Subukang baguhin ang justify-content mula space-between patungong center.",
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f8fafc;
            padding: 20px;
        }
        .flex-container {
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .item-card {
            flex: 1;
            background: #0f172a;
            color: #ffffff;
            padding: 18px;
            border-radius: 10px;
            text-align: center;
        }
        .item-card span {
            color: #38bdf8;
            font-weight: bold;
            display: block;
            margin-bottom: 6px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="item-card"><span>01</span>HTML</div>
        <div class="item-card"><span>02</span>CSS</div>
        <div class="item-card"><span>03</span>JS</div>
    </div>
</body>
</html>`
    },
    login: {
        tag: "CHALLENGE 05",
        title: "Task 4: Login Card Styling",
        instructions: "Baguhin ang kulay ng button, border-radius, o background gradient ng login card.",
        hint: "Hanapin ang .login-btn at .login-card sa <style> para i-customize ang disenyo.",
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0f172a, #2563eb);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .login-card {
            background: #ffffff;
            padding: 28px;
            border-radius: 12px;
            width: 100%;
            max-width: 340px;
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }
        .login-card h2 {
            margin-bottom: 18px;
            color: #0f172a;
            text-align: center;
        }
        .field {
            margin-bottom: 14px;
        }
        .field label {
            display: block;
            font-size: 12px;
            font-weight: bold;
            color: #475569;
            margin-bottom: 5px;
        }
        .field input {
            width: 100%;
            padding: 10px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
        }
        .login-btn {
            width: 100%;
            padding: 11px;
            background: #2563eb;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
        }
        .login-btn:hover {
            background: #1d4ed8;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <h2>Student Login</h2>
        <div class="field">
            <label>Email</label>
            <input type="email" placeholder="student@example.com">
        </div>
        <div class="field">
            <label>Password</label>
            <input type="password" placeholder="Enter password">
        </div>
        <button type="button" class="login-btn">Log In</button>
    </div>
</body>
</html>`
    }
};

const editorElement = document.getElementById("htmlEditor");
const htmlPreview = document.getElementById("htmlPreview");
const errorCountEl = document.getElementById("cssErrorCount");
const errorListEl = document.getElementById("cssErrorList");

let errorMarkers = [];

function checkMissingSemicolons() {
    if (!editor) return;

    errorMarkers.forEach(marker => marker.clear());
    errorMarkers = [];

    const code = editor.getValue();
    const lines = code.split("\n");
    let insideStyle = false;
    const warnings = [];

    lines.forEach((lineText, lineIndex) => {
        const trimmed = lineText.trim();

        if (trimmed.toLowerCase().includes("<style")) {
            insideStyle = true;
            return;
        }
        if (trimmed.toLowerCase().includes("</style>")) {
            insideStyle = false;
            return;
        }

        if (insideStyle && trimmed.includes(":")) {
            const endsValidly =
                trimmed.endsWith(";") ||
                trimmed.endsWith("{") ||
                trimmed.endsWith("}") ||
                trimmed.startsWith("/*");

            if (!endsValidly) {
                const startChar = lineText.indexOf(trimmed);
                const endChar = lineText.length;
                const marker = editor.markText(
                    { line: lineIndex, ch: startChar },
                    { line: lineIndex, ch: endChar },
                    { className: "cm-css-error-highlight" }
                );
                errorMarkers.push(marker);
                warnings.push(`Line ${lineIndex + 1}: Kulang ng semicolon (;) sa <code>${trimmed}</code>`);
            }
        }
    });

    if (errorCountEl) {
        errorCountEl.textContent = `${warnings.length} ${warnings.length === 1 ? "warning" : "warnings"}`;
    }

    if (errorListEl) {
        if (warnings.length === 0) {
            errorListEl.innerHTML = `<div class="no-errors"><i class="fa-solid fa-check-circle"></i> No Missing Semicolon.</div>`;
        } else {
            errorListEl.innerHTML = warnings
                .map(msg => `<div class="error-item"><strong>Warning:</strong> ${msg}</div>`)
                .join("");
        }
    }
}

const editor = CodeMirror.fromTextArea(editorElement, {
    mode: "htmlmixed",
    theme: "default",
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 4
});

function runPracticeCode() {
    if (editor && htmlPreview) {
        htmlPreview.srcdoc = editor.getValue();
    }
}

function loadActivity(key) {
    const act = activities[key];
    if (!act) return;

    document.getElementById("taskTag").textContent = act.tag;
    document.getElementById("taskTitle").textContent = act.title;
    document.getElementById("taskInstructions").textContent = act.instructions;
    document.getElementById("taskHint").innerHTML = `<strong>Tip:</strong> ${act.hint}`;

    editor.setValue(act.code);
    runPracticeCode();
    checkMissingSemicolons();
}

editor.on("change", checkMissingSemicolons);

document.getElementById("runCode").addEventListener("click", () => {
    runPracticeCode();
    checkMissingSemicolons();
});

document.getElementById("resetCode").addEventListener("click", () => {
    const activeBtn = document.querySelector(".preset-btn.active");
    const key = activeBtn ? activeBtn.getAttribute("data-preset") : "colors";
    loadActivity(key);
});

document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        loadActivity(btn.getAttribute("data-preset"));
    });
});

loadActivity("colors");